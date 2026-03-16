import { NextRequest, NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'
import {
  verifyDashboardAuth,
  unauthorizedResponse,
} from '@/lib/dashboard-auth'

interface UnifiedLead {
  id: string
  type: 'quiz' | 'lead' | 'chat'
  name: string
  phone: string
  email: string
  source: string
  status: string
  notes: string
  created_at: string
  service_name?: string
  service_needed?: string
  service_interest?: string
  description?: string
  answers?: object
  photo_urls?: string[]
  contact_method?: string
  timeline?: string
  city?: string
  messages?: object[]
}

export async function GET(request: NextRequest) {
  if (!verifyDashboardAuth(request)) return unauthorizedResponse()

  try {
    const supabase = getServiceSupabase()
    const { searchParams } = new URL(request.url)
    const sourceFilter = searchParams.get('source')
    const statusFilter = searchParams.get('status')
    const searchTerm = searchParams.get('search')

    const allLeads: UnifiedLead[] = []

    // Fetch quiz submissions
    if (!sourceFilter || sourceFilter === 'project-builder') {
      const { data: quizLeads, error: quizError } = await supabase
        .from('quiz_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (quizError) {
        console.error('Error fetching quiz submissions:', quizError)
      } else if (quizLeads) {
        for (const q of quizLeads) {
          allLeads.push({
            id: q.id,
            type: 'quiz',
            name: q.name || '',
            phone: q.phone || '',
            email: q.email || '',
            source: 'project-builder',
            status: q.status || 'new',
            notes: q.notes || '',
            created_at: q.created_at,
            service_name: q.service_name,
            description: q.description,
            answers: q.answers,
            photo_urls: q.photo_urls,
            contact_method: q.contact_method,
          })
        }
      }
    }

    // Fetch estimate leads
    if (!sourceFilter || sourceFilter === 'estimate-form') {
      const { data: estimateLeads, error: leadError } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

      if (leadError) {
        console.error('Error fetching leads:', leadError)
      } else if (estimateLeads) {
        for (const l of estimateLeads) {
          allLeads.push({
            id: l.id,
            type: 'lead',
            name: l.name || '',
            phone: l.phone || '',
            email: l.email || '',
            source: 'estimate-form',
            status: l.status || 'new',
            notes: l.notes || '',
            created_at: l.created_at,
            service_needed: l.service_needed,
            description: l.description,
            photo_urls: l.photo_urls,
            contact_method: l.contact_method,
            timeline: l.timeline,
            city: l.city,
          })
        }
      }
    }

    // Fetch chat transcripts
    if (!sourceFilter || sourceFilter === 'chatbot') {
      const { data: chatLeads, error: chatError } = await supabase
        .from('chat_transcripts')
        .select('*')
        .order('created_at', { ascending: false })

      if (chatError) {
        console.error('Error fetching chat transcripts:', chatError)
      } else if (chatLeads) {
        for (const c of chatLeads) {
          allLeads.push({
            id: c.id,
            type: 'chat',
            name: c.name || '',
            phone: c.phone || '',
            email: c.email || '',
            source: 'chatbot',
            status: c.lead_captured ? 'new' : 'no-capture',
            notes: '',
            created_at: c.created_at,
            service_interest: c.service_interest,
            messages: c.messages,
          })
        }
      }
    }

    // Apply status filter
    let filtered = allLeads
    if (statusFilter) {
      filtered = filtered.filter((lead) => lead.status === statusFilter)
    }

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (lead) =>
          lead.name.toLowerCase().includes(term) ||
          lead.phone.toLowerCase().includes(term) ||
          lead.email.toLowerCase().includes(term) ||
          (lead.description && lead.description.toLowerCase().includes(term)) ||
          (lead.service_name &&
            lead.service_name.toLowerCase().includes(term)) ||
          (lead.service_needed &&
            lead.service_needed.toLowerCase().includes(term)) ||
          (lead.service_interest &&
            lead.service_interest.toLowerCase().includes(term))
      )
    }

    // Sort by created_at DESC
    filtered.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )

    return NextResponse.json({ leads: filtered, total: filtered.length })
  } catch (err) {
    console.error('Dashboard leads error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
