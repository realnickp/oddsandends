import { NextRequest, NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'
import {
  verifyDashboardAuth,
  unauthorizedResponse,
} from '@/lib/dashboard-auth'

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; noteId: string }> }
) {
  if (!verifyDashboardAuth(request)) return unauthorizedResponse()

  try {
    const { id, noteId } = await params
    const supabase = getServiceSupabase()

    const { data: note, error: fetchError } = await supabase
      .from('voice_notes')
      .select('storage_path')
      .eq('id', noteId)
      .eq('lead_id', id)
      .single()

    if (fetchError || !note) {
      return NextResponse.json(
        { error: 'Voice note not found' },
        { status: 404 }
      )
    }

    if (note.storage_path) {
      const { error: storageError } = await supabase.storage
        .from('lead-uploads')
        .remove([note.storage_path])

      if (storageError) {
        console.error('Voice note storage delete error:', storageError)
      }
    }

    const { error: deleteError } = await supabase
      .from('voice_notes')
      .delete()
      .eq('id', noteId)
      .eq('lead_id', id)

    if (deleteError) {
      console.error('Voice note delete error:', deleteError)
      return NextResponse.json(
        { error: 'Failed to delete voice note' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Delete voice note error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
