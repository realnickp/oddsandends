import { NextRequest, NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'
import { verifyDashboardAuth, unauthorizedResponse } from '@/lib/dashboard-auth'

export async function PATCH(request: NextRequest) {
  if (!verifyDashboardAuth(request)) return unauthorizedResponse()

  try {
    const { ids, status } = await request.json()

    if (!ids || !Array.isArray(ids) || ids.length === 0 || !status) {
      return NextResponse.json({ error: 'ids array and status required' }, { status: 400 })
    }

    const supabase = getServiceSupabase()

    // Update across all three tables (ids will only match in one)
    await Promise.all([
      supabase.from('quiz_submissions').update({ status, updated_at: new Date().toISOString() }).in('id', ids),
      supabase.from('leads').update({ status, updated_at: new Date().toISOString() }).in('id', ids),
    ])

    return NextResponse.json({ success: true, updated: ids.length })
  } catch (err) {
    console.error('Bulk update error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  if (!verifyDashboardAuth(request)) return unauthorizedResponse()

  try {
    const { ids } = await request.json()

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'ids array required' }, { status: 400 })
    }

    const supabase = getServiceSupabase()

    // Delete from all three tables (ids will only match in one)
    await Promise.all([
      supabase.from('quiz_submissions').delete().in('id', ids),
      supabase.from('leads').delete().in('id', ids),
      supabase.from('chat_transcripts').delete().in('id', ids),
    ])

    return NextResponse.json({ success: true, deleted: ids.length })
  } catch (err) {
    console.error('Bulk delete error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
