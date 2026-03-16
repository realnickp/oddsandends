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

    // Search by both lead_id and quiz_submission_id
    const { data: notesByLeadId } = await supabase
      .from('lead_notes')
      .select('*')
      .eq('lead_id', id)
      .order('created_at', { ascending: false })

    const { data: notesByQuizId } = await supabase
      .from('lead_notes')
      .select('*')
      .eq('quiz_submission_id', id)
      .order('created_at', { ascending: false })

    const allNotes = [...(notesByLeadId || []), ...(notesByQuizId || [])]

    // Deduplicate by id and sort
    const seen = new Set<string>()
    const uniqueNotes = allNotes.filter((n) => {
      if (seen.has(n.id)) return false
      seen.add(n.id)
      return true
    })
    uniqueNotes.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )

    return NextResponse.json({ notes: uniqueNotes })
  } catch (err) {
    console.error('Get notes error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!verifyDashboardAuth(request)) return unauthorizedResponse()

  try {
    const { id } = await params
    const body = await request.json()
    const { note, type } = body

    if (!note) {
      return NextResponse.json(
        { error: 'Note content is required' },
        { status: 400 }
      )
    }

    const supabase = getServiceSupabase()

    const insertData: Record<string, string> = {
      note,
      created_by: 'dashboard',
    }

    if (type === 'quiz') {
      insertData.quiz_submission_id = id
    } else {
      insertData.lead_id = id
    }

    const { data, error } = await supabase
      .from('lead_notes')
      .insert(insertData)
      .select()
      .single()

    if (error) {
      console.error('Insert note error:', error)
      return NextResponse.json(
        { error: 'Failed to add note' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error('Post note error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
