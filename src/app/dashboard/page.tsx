'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useDashboard } from './layout'
import {
  Users,
  UserPlus,
  CalendarDays,
  CalendarRange,
  ArrowRight,
  Loader2,
} from 'lucide-react'

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

const sourceBadge: Record<string, string> = {
  'project-builder': 'bg-blue-50 text-blue-700',
  'estimate-form': 'bg-green-50 text-green-700',
  chatbot: 'bg-purple-50 text-purple-700',
}

const sourceLabel: Record<string, string> = {
  'project-builder': 'Project Builder',
  'estimate-form': 'Estimate Form',
  chatbot: 'Chatbot',
}

interface Stats {
  totalLeads: number
  newLeads: number
  leadsThisWeek: number
  leadsThisMonth: number
}

interface Lead {
  id: string
  name: string
  source: string
  service_name?: string
  service_needed?: string
  service_interest?: string
  created_at: string
}

export default function DashboardOverview() {
  const { dashboardFetch } = useDashboard()
  const [stats, setStats] = useState<Stats | null>(null)
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const [statsRes, leadsRes] = await Promise.all([
          dashboardFetch('/api/dashboard/stats'),
          dashboardFetch('/api/dashboard/leads?limit=5'),
        ])
        if (statsRes.ok) setStats(await statsRes.json())
        if (leadsRes.ok) {
          const data = await leadsRes.json()
          setLeads(Array.isArray(data) ? data : data.leads || [])
        }
      } catch (err) {
        console.error('Failed to load dashboard data', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [dashboardFetch])

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  const statCards = [
    { label: 'Total Leads', value: stats?.totalLeads ?? 0, icon: Users, color: 'text-blue-600 bg-blue-50' },
    { label: 'New Leads', value: stats?.newLeads ?? 0, icon: UserPlus, color: 'text-green-600 bg-green-50' },
    { label: 'This Week', value: stats?.leadsThisWeek ?? 0, icon: CalendarDays, color: 'text-orange-600 bg-orange-50' },
    { label: 'This Month', value: stats?.leadsThisMonth ?? 0, icon: CalendarRange, color: 'text-purple-600 bg-purple-50' },
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Dashboard</h1>

      {/* Stat cards */}
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {statCards.map((card) => {
          const Icon = card.icon
          return (
            <div
              key={card.label}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className={`mb-3 inline-flex rounded-xl p-2.5 ${card.color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              <p className="text-sm text-gray-500">{card.label}</p>
            </div>
          )
        })}
      </div>

      {/* Recent leads */}
      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <h2 className="text-lg font-bold text-gray-900">Recent Leads</h2>
          <Link
            href="/dashboard/leads"
            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {leads.length === 0 ? (
          <p className="px-5 py-8 text-center text-sm text-gray-400">No leads yet.</p>
        ) : (
          <ul className="divide-y divide-gray-50">
            {leads.map((lead) => (
              <li key={lead.id}>
                <Link
                  href={`/dashboard/leads?id=${lead.id}`}
                  className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-gray-900">{lead.name}</p>
                    <p className="text-xs text-gray-500">{lead.service_name || lead.service_needed || lead.service_interest || 'General inquiry'}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        sourceBadge[lead.source] || 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {sourceLabel[lead.source] || lead.source}
                    </span>
                    <span className="text-xs text-gray-400">{timeAgo(lead.created_at)}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
