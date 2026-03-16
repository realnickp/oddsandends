'use client'

import { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { useDashboard } from '../layout'
import {
  Phone,
  MessageSquare,
  Mail,
  Search,
  ChevronDown,
  ChevronUp,
  Loader2,
  X,
  Send,
  Image as ImageIcon,
  CheckSquare,
  Square,
  Trash2,
  RefreshCw,
  Flame,
  Zap,
  Snowflake,
  Camera,
} from 'lucide-react'

// ── Urgency detection ─────────────────────────────────────────
const URGENCY_HIGH = /\b(asap|right away|immediately|emergency|urgent|today|tomorrow|this week|ready to (hire|book|start|go|schedule)|need(ed)? (it |this )?(done |fixed )?(asap|now|fast|quick|soon|today|yesterday|immediately)|as soon as possible|can you come|when can you (start|come)|time[- ]?sensitive|water (leak|damage|flooding)|pipe burst|no hot water|power out|dangerous|safety (concern|hazard|issue))\b/i
const URGENCY_MED = /\b(soon|next week|this month|couple (of )?weeks|few days|ready|looking to (get|have|hire|start)|want(ing)? to (get|have|start)|need (a |some )?(help|someone|handyman|estimate|quote)|before (summer|winter|spring|fall|the holidays|christmas|thanksgiving)|planning to sell|selling (my|the|our) (home|house)|move[- ]?in|move[- ]?out|closing (date|soon)|inspection)\b/i

function getTextBlob(lead: Lead): string {
  let text = ''
  if (lead.description) text += ' ' + lead.description
  if (lead.timeline) text += ' ' + lead.timeline
  if (lead.messages) {
    for (const m of lead.messages) {
      if (m.role === 'user') text += ' ' + m.content
    }
  }
  if (lead.answers) {
    for (const v of Object.values(lead.answers)) {
      text += ' ' + (Array.isArray(v) ? v.join(' ') : String(v))
    }
  }
  return text
}

// ── Lead scoring ──────────────────────────────────────────────
function scoreLead(lead: Lead): { score: number; label: string; color: string; icon: typeof Flame; reason: string } {
  let score = 0
  const reasons: string[] = []

  // ── Urgency & readiness (max 30) — biggest weight ──────────
  const text = getTextBlob(lead)
  if (URGENCY_HIGH.test(text)) {
    score += 30
    reasons.push('High urgency')
  } else if (URGENCY_MED.test(text)) {
    score += 15
    reasons.push('Moderate urgency')
  }

  // Timeline field specifically (max 10)
  if (lead.timeline) {
    const tl = lead.timeline.toLowerCase()
    if (/asap|immediate|today|tomorrow|this week|emergency|urgent/.test(tl)) {
      score += 10
      if (!reasons.includes('High urgency')) reasons.push('ASAP timeline')
    } else if (/next week|this month|soon|couple|few/.test(tl)) {
      score += 5
      reasons.push('Near-term timeline')
    }
  }

  // ── Source intent (max 20) ─────────────────────────────────
  if (lead.source === 'project-builder') {
    score += 20
    reasons.push('Used Project Builder')
  } else if (lead.source === 'estimate-form') {
    score += 18
    reasons.push('Requested estimate')
  } else if (lead.source === 'chatbot') {
    score += 8
    reasons.push('Chatbot inquiry')
  }

  // ── Contact info (max 15) ─────────────────────────────────
  if (lead.phone) score += 10
  if (lead.email) score += 5

  // ── Project detail (max 15) ────────────────────────────────
  if (lead.description && lead.description.length > 30) {
    score += 5
    reasons.push('Detailed description')
  }
  if (lead.photo_urls && lead.photo_urls.length > 0) {
    score += 5
    reasons.push('Uploaded photos')
  }
  if (lead.answers && Object.keys(lead.answers).length >= 3) {
    score += 5
    reasons.push('Filled out builder')
  }

  // ── Engagement (max 10) ────────────────────────────────────
  if (lead.city) score += 3
  if (lead.contact_method) score += 2
  if (lead.messages && lead.messages.length >= 4) {
    score += 5
    reasons.push('Engaged in chat')
  }

  // Clamp
  score = Math.min(score, 100)

  const reason = reasons.slice(0, 3).join(' · ') || 'Low info'

  if (score >= 65) return { score, label: 'Hot', color: 'text-red-600 bg-red-50 border-red-200', icon: Flame, reason }
  if (score >= 35) return { score, label: 'Warm', color: 'text-amber-600 bg-amber-50 border-amber-200', icon: Zap, reason }
  return { score, label: 'Cold', color: 'text-blue-500 bg-blue-50 border-blue-200', icon: Snowflake, reason }
}

// ── Helpers ───────────────────────────────────────────────────
function timeAgo(date: string): string {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000)
  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days}d ago`
  return new Date(date).toLocaleDateString()
}

function getService(lead: Lead): string {
  return lead.service_name || lead.service_needed || lead.service_interest || 'General inquiry'
}

const sourceBadge: Record<string, { bg: string; dot: string }> = {
  'project-builder': { bg: 'bg-blue-100 text-blue-800', dot: 'bg-blue-500' },
  'estimate-form': { bg: 'bg-green-100 text-green-800', dot: 'bg-green-500' },
  chatbot: { bg: 'bg-purple-100 text-purple-800', dot: 'bg-purple-500' },
}
const sourceLabel: Record<string, string> = {
  'project-builder': 'Project Builder',
  'estimate-form': 'Estimate Form',
  chatbot: 'Chatbot',
}

const statusBadge: Record<string, string> = {
  new: 'bg-blue-100 text-blue-800 border-blue-200',
  contacted: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'in-progress': 'bg-orange-100 text-orange-800 border-orange-200',
  completed: 'bg-green-100 text-green-800 border-green-200',
  archived: 'bg-gray-100 text-gray-600 border-gray-200',
}
const statusLabel: Record<string, string> = {
  new: 'New',
  contacted: 'Contacted',
  'in-progress': 'In Progress',
  completed: 'Completed',
  archived: 'Archived',
}

const statusOptions = ['new', 'contacted', 'in-progress', 'completed', 'archived']

interface Lead {
  id: string
  type?: string
  name: string
  phone?: string
  email?: string
  source: string
  status: string
  service_name?: string
  service_needed?: string
  service_interest?: string
  city?: string
  timeline?: string
  description?: string
  photo_urls?: string[]
  answers?: Record<string, string>
  messages?: Array<{ role: string; content: string }>
  contact_method?: string
  notes?: string
  created_at: string
}

export default function LeadsPage() {
  const { dashboardFetch } = useDashboard()
  const searchParams = useSearchParams()
  const highlightId = searchParams.get('id')

  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedId, setExpandedId] = useState<string | null>(highlightId)
  const [sourceFilter, setSourceFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [newNote, setNewNote] = useState('')
  const [savingNote, setSavingNote] = useState(false)
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)

  // Bulk selection state
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [bulkAction, setBulkAction] = useState(false)
  const [bulkProcessing, setBulkProcessing] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const fetchLeads = useCallback(
    async (pageNum = 1) => {
      setLoading(true)
      try {
        const params = new URLSearchParams()
        if (sourceFilter !== 'all') params.set('source', sourceFilter)
        if (statusFilter !== 'all') params.set('status', statusFilter)
        if (searchQuery) params.set('search', searchQuery)

        const res = await dashboardFetch(`/api/dashboard/leads?${params}`)
        if (res.ok) {
          const data = await res.json()
          const list = Array.isArray(data) ? data : data.leads || []
          setLeads(pageNum === 1 ? list : (prev) => [...prev, ...list])
          setHasMore(list.length >= 50)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    },
    [dashboardFetch, sourceFilter, statusFilter, searchQuery]
  )

  useEffect(() => {
    setPage(1)
    setSelectedIds(new Set())
    fetchLeads(1)
  }, [fetchLeads])

  const handleStatusChange = async (leadId: string, newStatus: string) => {
    try {
      const lead = leads.find((l) => l.id === leadId)
      const res = await dashboardFetch(`/api/dashboard/leads/${leadId}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus, type: lead?.type }),
      })
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
        )
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleAddNote = async (leadId: string) => {
    if (!newNote.trim()) return
    setSavingNote(true)
    try {
      const lead = leads.find((l) => l.id === leadId)
      const currentNotes = lead?.notes || ''
      const timestamp = new Date().toLocaleString()
      const updatedNotes = currentNotes
        ? `${currentNotes}\n\n[${timestamp}] ${newNote.trim()}`
        : `[${timestamp}] ${newNote.trim()}`

      const res = await dashboardFetch(`/api/dashboard/leads/${leadId}`, {
        method: 'PATCH',
        body: JSON.stringify({ notes: updatedNotes, type: lead?.type }),
      })
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, notes: updatedNotes } : l))
        )
        setNewNote('')
      }
    } catch (err) {
      console.error(err)
    } finally {
      setSavingNote(false)
    }
  }

  // ── Bulk actions ──────────────────────────────────────────
  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleSelectAll = () => {
    if (selectedIds.size === leads.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(leads.map((l) => l.id)))
    }
  }

  const handleBulkStatusChange = async (newStatus: string) => {
    if (selectedIds.size === 0) return
    setBulkProcessing(true)
    try {
      const res = await dashboardFetch('/api/dashboard/leads/bulk', {
        method: 'PATCH',
        body: JSON.stringify({ ids: Array.from(selectedIds), status: newStatus }),
      })
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) =>
            selectedIds.has(l.id) ? { ...l, status: newStatus } : l
          )
        )
        setSelectedIds(new Set())
        setBulkAction(false)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setBulkProcessing(false)
    }
  }

  const handleBulkDelete = async () => {
    if (selectedIds.size === 0) return
    setBulkProcessing(true)
    try {
      const res = await dashboardFetch('/api/dashboard/leads/bulk', {
        method: 'DELETE',
        body: JSON.stringify({ ids: Array.from(selectedIds) }),
      })
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => !selectedIds.has(l.id)))
        setSelectedIds(new Set())
        setConfirmDelete(false)
        setBulkAction(false)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setBulkProcessing(false)
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
        <button
          onClick={() => {
            setBulkAction(!bulkAction)
            if (bulkAction) {
              setSelectedIds(new Set())
              setConfirmDelete(false)
            }
          }}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
            bulkAction
              ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          {bulkAction ? 'Cancel' : 'Bulk Edit'}
        </button>
      </div>

      {/* Bulk action bar */}
      {bulkAction && (
        <div className="mb-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={toggleSelectAll}
                className="flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800"
              >
                {selectedIds.size === leads.length && leads.length > 0 ? (
                  <CheckSquare className="h-4 w-4" />
                ) : (
                  <Square className="h-4 w-4" />
                )}
                {selectedIds.size === leads.length && leads.length > 0
                  ? 'Deselect All'
                  : 'Select All'}
              </button>
              <span className="text-sm text-blue-600">
                {selectedIds.size} selected
              </span>
            </div>

            {selectedIds.size > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <select
                  onChange={(e) => {
                    if (e.target.value) handleBulkStatusChange(e.target.value)
                    e.target.value = ''
                  }}
                  disabled={bulkProcessing}
                  className="rounded-xl border border-blue-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Change status to...
                  </option>
                  {statusOptions.map((s) => (
                    <option key={s} value={s}>
                      {statusLabel[s]}
                    </option>
                  ))}
                </select>

                {confirmDelete ? (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-red-600 font-medium">
                      Delete {selectedIds.size}?
                    </span>
                    <button
                      onClick={handleBulkDelete}
                      disabled={bulkProcessing}
                      className="rounded-xl bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
                    >
                      {bulkProcessing ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        'Confirm'
                      )}
                    </button>
                    <button
                      onClick={() => setConfirmDelete(false)}
                      className="rounded-xl bg-white border border-gray-200 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmDelete(true)}
                    disabled={bulkProcessing}
                    className="flex items-center gap-1.5 rounded-xl bg-red-50 border border-red-200 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100 disabled:opacity-50"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Delete
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, email, phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <select
          value={sourceFilter}
          onChange={(e) => setSourceFilter(e.target.value)}
          className="rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="all">All Sources</option>
          <option value="project-builder">Project Builder</option>
          <option value="estimate-form">Estimate Form</option>
          <option value="chatbot">Chatbot</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="all">All Statuses</option>
          {statusOptions.map((s) => (
            <option key={s} value={s}>
              {statusLabel[s]}
            </option>
          ))}
        </select>

        <button
          onClick={() => fetchLeads(1)}
          className="rounded-xl border border-gray-200 p-2.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          title="Refresh"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>

      {/* Leads list */}
      {loading && leads.length === 0 ? (
        <div className="flex justify-center py-16">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      ) : leads.length === 0 ? (
        <p className="py-16 text-center text-gray-400">No leads found.</p>
      ) : (
        <div className="space-y-4">
          {leads.map((lead) => {
            const expanded = expandedId === lead.id
            const selected = selectedIds.has(lead.id)
            const leadScore = scoreLead(lead)
            const ScoreIcon = leadScore.icon
            const src = sourceBadge[lead.source] || { bg: 'bg-gray-100 text-gray-700', dot: 'bg-gray-400' }
            const hasPhotos = lead.photo_urls && lead.photo_urls.length > 0

            return (
              <div
                key={lead.id}
                className={`rounded-2xl border bg-white shadow-sm overflow-hidden transition-all ${
                  selected
                    ? 'border-blue-400 ring-2 ring-blue-200'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Card summary */}
                <div className="flex items-start gap-3 p-5">
                  {/* Checkbox for bulk mode */}
                  {bulkAction && (
                    <button
                      onClick={() => toggleSelect(lead.id)}
                      className="shrink-0 mt-1.5 text-gray-400 hover:text-blue-600"
                    >
                      {selected ? (
                        <CheckSquare className="h-5 w-5 text-blue-600" />
                      ) : (
                        <Square className="h-5 w-5" />
                      )}
                    </button>
                  )}

                  {/* Score indicator */}
                  <div
                    className={`shrink-0 flex flex-col items-center gap-0.5 rounded-xl border px-3 py-2 min-w-[52px] ${leadScore.color}`}
                    title={`Lead Score: ${leadScore.score}/100 — ${leadScore.reason}`}
                  >
                    <ScoreIcon className="h-5 w-5" />
                    <span className="text-xs font-bold">{leadScore.score}</span>
                    <span className="text-[10px] font-semibold leading-tight">{leadScore.label}</span>
                  </div>

                  {/* Main info */}
                  <button
                    onClick={() => setExpandedId(expanded ? null : lead.id)}
                    className="flex-1 text-left min-w-0"
                  >
                    {/* Name row */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="text-lg font-bold text-gray-900">{lead.name}</h3>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${src.bg}`}
                      >
                        <span className={`h-2 w-2 rounded-full ${src.dot}`} />
                        {sourceLabel[lead.source] || lead.source}
                      </span>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                          statusBadge[lead.status] || 'bg-gray-100 text-gray-600 border-gray-200'
                        }`}
                      >
                        {statusLabel[lead.status] || lead.status}
                      </span>
                    </div>

                    {/* Service */}
                    <p className="text-base font-medium text-gray-700 mb-1">
                      {getService(lead)}
                    </p>

                    {/* Contact + meta row */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
                      {lead.phone && <span>{lead.phone}</span>}
                      {lead.email && <span>{lead.email}</span>}
                      {lead.city && <span>{lead.city}</span>}
                      <span>{timeAgo(lead.created_at)}</span>
                      {hasPhotos && (
                        <span className="inline-flex items-center gap-1 text-gray-400">
                          <Camera className="h-3.5 w-3.5" />
                          {lead.photo_urls!.length} photo{lead.photo_urls!.length > 1 ? 's' : ''}
                        </span>
                      )}
                    </div>
                  </button>

                  {/* Quick actions */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {lead.phone && (
                      <>
                        <a
                          href={`tel:${lead.phone}`}
                          className="rounded-xl p-2.5 text-blue-600 hover:bg-blue-50 transition-colors"
                          title="Call"
                        >
                          <Phone className="h-5 w-5" />
                        </a>
                        <a
                          href={`sms:${lead.phone}`}
                          className="rounded-xl p-2.5 text-green-600 hover:bg-green-50 transition-colors"
                          title="Text"
                        >
                          <MessageSquare className="h-5 w-5" />
                        </a>
                      </>
                    )}
                    {lead.email && (
                      <a
                        href={`mailto:${lead.email}`}
                        className="rounded-xl p-2.5 text-purple-600 hover:bg-purple-50 transition-colors"
                        title="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                    <button
                      onClick={() => setExpandedId(expanded ? null : lead.id)}
                      className="rounded-xl p-2.5 text-gray-400 hover:bg-gray-100 transition-colors"
                    >
                      {expanded ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Photo strip preview (visible on card) */}
                {hasPhotos && !expanded && (
                  <div className="border-t border-gray-100 px-5 py-3 bg-gray-50/50">
                    <div className="flex gap-2 overflow-x-auto">
                      {lead.photo_urls!.slice(0, 4).map((url, i) => (
                        <button
                          key={i}
                          onClick={() => setLightboxUrl(url)}
                          className="group relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200"
                        >
                          <img
                            src={url}
                            alt={`Photo ${i + 1}`}
                            className="h-full w-full object-cover group-hover:opacity-75 transition-opacity"
                          />
                        </button>
                      ))}
                      {lead.photo_urls!.length > 4 && (
                        <button
                          onClick={() => setExpandedId(lead.id)}
                          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-100 text-sm font-medium text-gray-500 hover:bg-gray-200"
                        >
                          +{lead.photo_urls!.length - 4}
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Expanded detail */}
                {expanded && (
                  <div className="border-t border-gray-200 px-5 py-5 space-y-6 bg-gray-50/30">
                    {/* Lead score breakdown */}
                    <div className="rounded-xl border border-gray-200 bg-white p-4 space-y-3">
                      <div className="flex items-center gap-4">
                        <div className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 ${leadScore.color}`}>
                          <ScoreIcon className="h-4 w-4" />
                          <span className="text-sm font-bold">{leadScore.label} Lead</span>
                        </div>
                        <div className="flex-1">
                          <div className="h-2.5 rounded-full bg-gray-200 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all ${
                                leadScore.score >= 65
                                  ? 'bg-red-500'
                                  : leadScore.score >= 35
                                    ? 'bg-amber-500'
                                    : 'bg-blue-400'
                              }`}
                              style={{ width: `${leadScore.score}%` }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-bold text-gray-600">{leadScore.score}/100</span>
                      </div>
                      <p className="text-xs text-gray-500 font-medium">{leadScore.reason}</p>
                    </div>

                    {/* Contact details */}
                    <div>
                      <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                        Contact Details
                      </h3>
                      <div className="space-y-2 text-sm">
                        {lead.phone && (
                          <p className="text-gray-700">
                            <span className="inline-block w-20 font-medium text-gray-500">Phone</span>
                            <a href={`tel:${lead.phone}`} className="text-blue-600 hover:underline font-medium">
                              {lead.phone}
                            </a>{' '}
                            &middot;{' '}
                            <a href={`sms:${lead.phone}`} className="text-blue-600 hover:underline">
                              Text
                            </a>
                          </p>
                        )}
                        {lead.email && (
                          <p className="text-gray-700">
                            <span className="inline-block w-20 font-medium text-gray-500">Email</span>
                            <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline font-medium">
                              {lead.email}
                            </a>
                          </p>
                        )}
                        {lead.city && (
                          <p className="text-gray-700">
                            <span className="inline-block w-20 font-medium text-gray-500">City</span>
                            {lead.city}
                          </p>
                        )}
                        {lead.contact_method && (
                          <p className="text-gray-700">
                            <span className="inline-block w-20 font-medium text-gray-500">Prefers</span>
                            {lead.contact_method}
                          </p>
                        )}
                        {lead.timeline && (
                          <p className="text-gray-700">
                            <span className="inline-block w-20 font-medium text-gray-500">Timeline</span>
                            {lead.timeline}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Quiz answers (project builder) */}
                    {lead.source === 'project-builder' && lead.answers && (
                      <div>
                        <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                          Project Builder Answers
                        </h3>
                        <div className="rounded-xl border border-gray-200 bg-white divide-y divide-gray-100">
                          {Object.entries(lead.answers).map(([question, answer]) => (
                            <div key={question} className="flex flex-col sm:flex-row px-4 py-3">
                              <span className="font-medium text-gray-600 sm:w-1/3 shrink-0 text-sm">
                                {question}
                              </span>
                              <span className="text-gray-900 text-sm font-medium">
                                {Array.isArray(answer) ? answer.join(', ') : String(answer)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    {lead.description && (
                      <div>
                        <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                          Description
                        </h3>
                        <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed bg-white rounded-xl border border-gray-200 p-4">
                          {lead.description}
                        </p>
                      </div>
                    )}

                    {/* Chatbot messages */}
                    {lead.source === 'chatbot' && lead.messages && lead.messages.length > 0 && (
                      <div>
                        <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                          Conversation History
                        </h3>
                        <div className="space-y-2 max-h-72 overflow-y-auto rounded-xl border border-gray-200 bg-white p-4">
                          {lead.messages.map((msg, i) => (
                            <div
                              key={i}
                              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                              <div
                                className={`max-w-[80%] rounded-xl px-3.5 py-2.5 text-sm ${
                                  msg.role === 'user'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-800'
                                }`}
                              >
                                {msg.content}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Photos */}
                    {hasPhotos && (
                      <div>
                        <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                          Photos ({lead.photo_urls!.length})
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {lead.photo_urls!.map((url, i) => (
                            <button
                              key={i}
                              onClick={() => setLightboxUrl(url)}
                              className="group relative aspect-square overflow-hidden rounded-xl border border-gray-200 bg-gray-100"
                            >
                              <img
                                src={url}
                                alt={`Photo ${i + 1}`}
                                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                                <ImageIcon className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Status change */}
                    <div>
                      <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                        Status
                      </h3>
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      >
                        {statusOptions.map((s) => (
                          <option key={s} value={s}>
                            {statusLabel[s]}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Notes */}
                    <div>
                      <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                        Notes
                      </h3>
                      {lead.notes && (
                        <div className="mb-3 rounded-xl bg-yellow-50 border border-yellow-200 px-4 py-3 text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                          {lead.notes}
                        </div>
                      )}
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Add a note..."
                          value={expandedId === lead.id ? newNote : ''}
                          onChange={(e) => setNewNote(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleAddNote(lead.id)}
                          className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <button
                          onClick={() => handleAddNote(lead.id)}
                          disabled={savingNote || !newNote.trim()}
                          className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                          {savingNote ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          {/* Load more */}
          {hasMore && (
            <div className="text-center pt-2">
              <button
                onClick={() => {
                  const next = page + 1
                  setPage(next)
                  fetchLeads(next)
                }}
                disabled={loading}
                className="rounded-xl bg-white border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Load more'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Lightbox */}
      {lightboxUrl && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightboxUrl(null)}
        >
          <button
            onClick={() => setLightboxUrl(null)}
            className="absolute top-4 right-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/30"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightboxUrl}
            alt="Full size"
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
