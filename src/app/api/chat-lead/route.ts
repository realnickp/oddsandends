import { NextRequest, NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'
import { sendLeadNotification, sendWelcomeEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { messages, name, phone, email } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      )
    }

    const supabase = getServiceSupabase()

    let serviceInterest = ''
    const userMessages = messages
      .filter((m: { role: string; content: string }) => m.role === 'user')
      .map((m: { role: string; content: string }) => m.content.toLowerCase())
      .join(' ')

    const serviceKeywords = [
      'tv mount',
      'drywall',
      'door',
      'fence',
      'deck',
      'painting',
      'paint',
      'plumbing',
      'electrical',
      'furniture',
      'shelving',
      'shelf',
      'cabinet',
      'smart home',
      'built-in',
      'pergola',
      'tile',
      'bathroom',
      'kitchen',
      'wainscoting',
    ]

    for (const keyword of serviceKeywords) {
      if (userMessages.includes(keyword)) {
        serviceInterest = keyword
        break
      }
    }

    const { error } = await supabase.from('chat_transcripts').insert({
      messages,
      lead_captured: true,
      name: name || '',
      phone: phone || '',
      email: email || '',
      service_interest: serviceInterest,
    })

    if (error) {
      console.error('Save chat lead error:', error)
      return NextResponse.json(
        { error: 'Failed to save chat lead' },
        { status: 500 }
      )
    }

    // Build a concise chat summary from the last few user messages
    const recentUserMessages = messages
      .filter((m: { role: string; content: string }) => m.role === 'user')
      .slice(-3)
      .map((m: { role: string; content: string }) => m.content)
      .join(' → ')

    const emailPromises: Promise<void>[] = [
      sendLeadNotification({
        source: 'Chat Lead',
        name: name || 'Chat Visitor',
        phone: phone || 'Not provided',
        email: email || undefined,
        service: serviceInterest || undefined,
        chatSummary: recentUserMessages || 'No messages captured',
      }),
    ]

    if (email) {
      emailPromises.push(sendWelcomeEmail(email, name || 'there'))
    }

    await Promise.allSettled(emailPromises)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Chat lead error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
