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

    // Try quiz_submissions first
    const { data: quiz } = await supabase
      .from('quiz_submissions')
      .select('*')
      .eq('id', id)
      .single()

    if (quiz) {
      return NextResponse.json({
        ...quiz,
        type: 'quiz',
        source: 'project-builder',
      })
    }

    // Try leads table
    const { data: lead } = await supabase
      .from('leads')
      .select('*')
      .eq('id', id)
      .single()

    if (lead) {
      return NextResponse.json({
        ...lead,
        type: 'lead',
        source: 'estimate-form',
      })
    }

    // Try chat_transcripts
    const { data: chat } = await supabase
      .from('chat_transcripts')
      .select('*')
      .eq('id', id)
      .single()

    if (chat) {
      return NextResponse.json({ ...chat, type: 'chat', source: 'chatbot' })
    }

    return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
  } catch (err) {
    console.error('Get lead error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!verifyDashboardAuth(request)) return unauthorizedResponse()

  try {
    const { id } = await params
    const body = await request.json()
    const { status, notes, type } = body
    const supabase = getServiceSupabase()

    const updateData: Record<string, string> = {}
    if (status !== undefined) updateData.status = status
    if (notes !== undefined) updateData.notes = notes

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { error: 'No fields to update' },
        { status: 400 }
      )
    }

    let table: string
    switch (type) {
      case 'quiz':
        table = 'quiz_submissions'
        break
      case 'lead':
        table = 'leads'
        break
      case 'chat':
        table = 'chat_transcripts'
        break
      default:
        return NextResponse.json(
          { error: 'Invalid type. Must be quiz, lead, or chat' },
          { status: 400 }
        )
    }

    const { data, error } = await supabase
      .from(table)
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Update lead error:', error)
      return NextResponse.json(
        { error: 'Failed to update lead' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error('Patch lead error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
