import { NextRequest, NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'
import { sendLeadNotification, sendWelcomeEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const rawData = formData.get('data')

    if (!rawData || typeof rawData !== 'string') {
      return NextResponse.json({ error: 'Missing data' }, { status: 400 })
    }

    const data = JSON.parse(rawData)
    const supabase = getServiceSupabase()

    const photoUrls: string[] = []
    const photoEntries = formData.getAll('photos')

    for (const entry of photoEntries) {
      if (entry instanceof File && entry.size > 0) {
        const ext = entry.name.split('.').pop() || 'jpg'
        const fileName = `quiz/${data.serviceSlug}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`

        const { error: uploadError } = await supabase.storage
          .from('lead-uploads')
          .upload(fileName, entry, {
            contentType: entry.type,
            upsert: false,
          })

        if (!uploadError) {
          const { data: urlData } = supabase.storage
            .from('lead-uploads')
            .getPublicUrl(fileName)
          photoUrls.push(urlData.publicUrl)
        }
      }
    }

    const { error: insertError } = await supabase
      .from('quiz_submissions')
      .insert({
        service_slug: data.serviceSlug,
        service_name: data.serviceName,
        answers: data.answers,
        description: data.description || '',
        photo_urls: photoUrls,
        name: data.name,
        phone: data.phone,
        email: data.email || '',
        contact_method: data.contactMethod || 'Text',
        source: 'project-builder',
        status: 'new',
      })

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      )
    }

    // Build a readable version of quiz answers for the notification
    const quizAnswers: Record<string, string> = {}
    if (data.answers && typeof data.answers === 'object') {
      for (const [key, val] of Object.entries(data.answers)) {
        quizAnswers[key] = String(val)
      }
    }

    await Promise.allSettled([
      sendLeadNotification({
        source: 'Project Builder',
        name: data.name,
        phone: data.phone,
        email: data.email,
        service: data.serviceName,
        description: data.description,
        contactMethod: data.contactMethod,
        quizAnswers,
        photoUrls,
      }),
      sendWelcomeEmail(data.email, data.name),
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Quiz submit error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
