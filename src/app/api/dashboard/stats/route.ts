import { NextRequest, NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'
import {
  verifyDashboardAuth,
  unauthorizedResponse,
} from '@/lib/dashboard-auth'

export async function GET(request: NextRequest) {
  if (!verifyDashboardAuth(request)) return unauthorizedResponse()

  try {
    const supabase = getServiceSupabase()

    const now = new Date()
    const startOfWeek = new Date(now)
    startOfWeek.setDate(now.getDate() - now.getDay())
    startOfWeek.setHours(0, 0, 0, 0)

    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

    // Fetch counts from all three tables in parallel
    const [quizResult, leadsResult, chatResult] = await Promise.all([
      supabase.from('quiz_submissions').select('id, status, created_at'),
      supabase.from('leads').select('id, status, created_at'),
      supabase.from('chat_transcripts').select('id, lead_captured, created_at'),
    ])

    const quizData = quizResult.data || []
    const leadsData = leadsResult.data || []
    const chatData = chatResult.data || []

    const totalLeads = quizData.length + leadsData.length + chatData.length

    // New leads count
    const newQuiz = quizData.filter((q) => q.status === 'new').length
    const newLeads = leadsData.filter((l) => l.status === 'new').length
    const newChat = chatData.filter((c) => c.lead_captured).length
    const newLeadsCount = newQuiz + newLeads + newChat

    // Leads by source
    const leadsBySource = {
      'project-builder': quizData.length,
      'estimate-form': leadsData.length,
      chatbot: chatData.length,
    }

    // Leads this week
    const weekStart = startOfWeek.toISOString()
    const leadsThisWeek =
      quizData.filter((q) => q.created_at >= weekStart).length +
      leadsData.filter((l) => l.created_at >= weekStart).length +
      chatData.filter((c) => c.created_at >= weekStart).length

    // Leads this month
    const monthStart = startOfMonth.toISOString()
    const leadsThisMonth =
      quizData.filter((q) => q.created_at >= monthStart).length +
      leadsData.filter((l) => l.created_at >= monthStart).length +
      chatData.filter((c) => c.created_at >= monthStart).length

    return NextResponse.json({
      totalLeads,
      newLeads: newLeadsCount,
      leadsBySource,
      leadsThisWeek,
      leadsThisMonth,
    })
  } catch (err) {
    console.error('Dashboard stats error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
