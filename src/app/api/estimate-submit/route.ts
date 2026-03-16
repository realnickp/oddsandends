import { NextRequest, NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'

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
        const fileName = `estimates/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`

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

    const { error: insertError } = await supabase.from('leads').insert({
      name: data.name,
      phone: data.phone,
      email: data.email || '',
      city: data.city || '',
      service_needed: data.serviceNeeded || '',
      description: data.description || '',
      photo_urls: photoUrls,
      contact_method: data.contactMethod || 'Text',
      timeline: data.timeline || '',
      source: 'estimate-form',
      status: 'new',
    })

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Estimate submit error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
