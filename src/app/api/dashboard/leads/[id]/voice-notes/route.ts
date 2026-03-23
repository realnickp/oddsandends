import { NextRequest, NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'
import {
  verifyDashboardAuth,
  unauthorizedResponse,
} from '@/lib/dashboard-auth'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!verifyDashboardAuth(request)) return unauthorizedResponse()

  try {
    const { id } = await params
    const supabase = getServiceSupabase()

    const { data, error } = await supabase
      .from('voice_notes')
      .select('*')
      .eq('lead_id', id)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Get voice notes error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch voice notes' },
        { status: 500 }
      )
    }

    return NextResponse.json({ voiceNotes: data })
  } catch (err) {
    console.error('Get voice notes error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

const MAX_FILE_SIZE = 25 * 1024 * 1024 // 25 MB
const ALLOWED_TYPES = [
  'audio/webm',
  'audio/mp4',
  'audio/mpeg',
  'audio/ogg',
  'audio/wav',
  'audio/x-m4a',
  'audio/mp4',
]

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!verifyDashboardAuth(request)) return unauthorizedResponse()

  try {
    const { id } = await params
    const formData = await request.formData()
    const audio = formData.get('audio')
    const durationStr = formData.get('duration')

    if (!(audio instanceof File) || audio.size === 0) {
      return NextResponse.json(
        { error: 'Audio file is required' },
        { status: 400 }
      )
    }

    if (audio.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File too large. Max 25 MB.' },
        { status: 400 }
      )
    }

    const baseType = audio.type.split(';')[0].trim()
    if (!ALLOWED_TYPES.includes(baseType)) {
      return NextResponse.json(
        { error: `Unsupported audio type: ${audio.type}` },
        { status: 400 }
      )
    }

    const supabase = getServiceSupabase()

    const ext = audio.name?.split('.').pop() || 'webm'
    const fileName = `voice-notes/${id}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`

    const arrayBuffer = await audio.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const { error: uploadError } = await supabase.storage
      .from('lead-uploads')
      .upload(fileName, buffer, {
        contentType: baseType,
        upsert: false,
      })

    if (uploadError) {
      console.error('Voice note upload error:', uploadError)
      return NextResponse.json(
        { error: `Failed to upload audio: ${uploadError.message}` },
        { status: 500 }
      )
    }

    const { data: urlData } = supabase.storage
      .from('lead-uploads')
      .getPublicUrl(fileName)

    const duration = durationStr ? parseFloat(String(durationStr)) : null

    const { data, error: insertError } = await supabase
      .from('voice_notes')
      .insert({
        lead_id: id,
        audio_url: urlData.publicUrl,
        storage_path: fileName,
        duration_seconds: duration,
        file_size: audio.size,
        mime_type: baseType,
      })
      .select()
      .single()

    if (insertError) {
      console.error('Voice note insert error:', insertError)
      await supabase.storage.from('lead-uploads').remove([fileName])
      return NextResponse.json(
        { error: 'Failed to save voice note' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error('Post voice note error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
