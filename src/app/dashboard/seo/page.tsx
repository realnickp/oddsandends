'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { useDashboard } from '../_DashboardClient'
import {
  Search,
  ChevronDown,
  ChevronUp,
  Globe,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Save,
  RotateCcw,
  Loader2,
  Filter,
  Image as ImageIcon,
  Tag,
  Link as LinkIcon,
  FileText,
} from 'lucide-react'

// ── Types ─────────────────────────────────────────────────────
interface SEOPage {
  path: string
  pageType: 'service' | 'area' | 'blog' | 'static'
  title: string
  metaTitle: string
  metaDescription: string
  ogImage: string
  keywords: string[]
  hasAltText: boolean
  canonical: string
  healthScore: number
  issues: string[]
  hasOverride: boolean
}

interface SEOSummary {
  totalPages: number
  averageScore: number
  perfectPages: number
  issueCount: number
}

interface SEOData {
  pages: SEOPage[]
  summary: SEOSummary
}

// ── Helpers ───────────────────────────────────────────────────
const scoreColor = (score: number) => {
  if (score >= 80) return { bg: 'bg-green-50', text: 'text-green-700', ring: 'ring-green-200' }
  if (score >= 60) return { bg: 'bg-yellow-50', text: 'text-yellow-700', ring: 'ring-yellow-200' }
  return { bg: 'bg-red-50', text: 'text-red-700', ring: 'ring-red-200' }
}

const pageTypeBadge: Record<string, { className: string; label: string }> = {
  static: { className: 'bg-gray-100 text-gray-700', label: 'Static' },
  service: { className: 'bg-blue-50 text-blue-700', label: 'Service' },
  area: { className: 'bg-emerald-50 text-emerald-700', label: 'Area' },
  blog: { className: 'bg-purple-50 text-purple-700', label: 'Blog' },
}

function charCountColor(count: number, min: number, max: number) {
  if (count >= min && count <= max) return 'text-green-600'
  if (count >= min - 10 && count <= max + 10) return 'text-yellow-600'
  return 'text-red-600'
}

function truncate(str: string, max: number) {
  if (str.length <= max) return str
  return str.slice(0, max) + '...'
}

// ── Component ─────────────────────────────────────────────────
export default function SEODashboardPage() {
  const { dashboardFetch } = useDashboard()

  const [data, setData] = useState<SEOData | null>(null)
  const [loading, setLoading] = useState(true)
  const [expandedPath, setExpandedPath] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [scoreFilter, setScoreFilter] = useState('all')
  const [sortBy, setSortBy] = useState('score-asc')

  // Edit state
  const [editTitle, setEditTitle] = useState('')
  const [editDescription, setEditDescription] = useState('')
  const [editKeywords, setEditKeywords] = useState('')
  const [editOgImage, setEditOgImage] = useState('')
  const [saving, setSaving] = useState(false)
  const [resetting, setResetting] = useState(false)

  // Toast
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }, [])

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchQuery), 300)
    return () => clearTimeout(timer)
  }, [searchQuery])

  // Fetch data
  const fetchData = useCallback(async () => {
    try {
      const res = await dashboardFetch('/api/dashboard/seo')
      if (res.ok) {
        const json = await res.json()
        setData(json)
      }
    } catch (err) {
      console.error('Failed to fetch SEO data:', err)
    } finally {
      setLoading(false)
    }
  }, [dashboardFetch])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  // Initialize edit fields when expanding a card
  const handleExpand = useCallback(
    (page: SEOPage) => {
      if (expandedPath === page.path) {
        setExpandedPath(null)
        return
      }
      setExpandedPath(page.path)
      setEditTitle(page.metaTitle)
      setEditDescription(page.metaDescription)
      setEditKeywords(page.keywords.join(', '))
      setEditOgImage(page.ogImage)
    },
    [expandedPath]
  )

  // Save override
  const handleSave = async (page: SEOPage) => {
    setSaving(true)
    try {
      const res = await dashboardFetch('/api/dashboard/seo/override', {
        method: 'POST',
        body: JSON.stringify({
          path: page.path,
          metaTitle: editTitle,
          metaDescription: editDescription,
          keywords: editKeywords
            .split(',')
            .map((k) => k.trim())
            .filter(Boolean),
          ogImage: editOgImage,
        }),
      })
      if (res.ok) {
        showToast('SEO changes saved! Updates will appear shortly.', 'success')
        await fetchData()
      } else {
        showToast('Failed to save changes. Please try again.', 'error')
      }
    } catch {
      showToast('Network error. Please try again.', 'error')
    } finally {
      setSaving(false)
    }
  }

  // Reset override
  const handleReset = async (page: SEOPage) => {
    setResetting(true)
    try {
      const res = await dashboardFetch('/api/dashboard/seo/override', {
        method: 'DELETE',
        body: JSON.stringify({ path: page.path }),
      })
      if (res.ok) {
        showToast('SEO override removed. Defaults restored.', 'success')
        setExpandedPath(null)
        await fetchData()
      } else {
        showToast('Failed to reset. Please try again.', 'error')
      }
    } catch {
      showToast('Network error. Please try again.', 'error')
    } finally {
      setResetting(false)
    }
  }

  // Filtered + sorted pages
  const filteredPages = useMemo(() => {
    if (!data) return []

    let pages = data.pages

    // Search
    if (debouncedSearch) {
      const q = debouncedSearch.toLowerCase()
      pages = pages.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.path.toLowerCase().includes(q) ||
          p.metaTitle.toLowerCase().includes(q)
      )
    }

    // Type filter
    if (typeFilter !== 'all') {
      pages = pages.filter((p) => p.pageType === typeFilter)
    }

    // Score filter
    if (scoreFilter !== 'all') {
      pages = pages.filter((p) => {
        switch (scoreFilter) {
          case 'perfect':
            return p.healthScore === 100
          case 'good':
            return p.healthScore >= 80 && p.healthScore < 100
          case 'needs-work':
            return p.healthScore >= 60 && p.healthScore < 80
          case 'poor':
            return p.healthScore < 60
          default:
            return true
        }
      })
    }

    // Sort
    pages = [...pages].sort((a, b) => {
      switch (sortBy) {
        case 'score-asc':
          return a.healthScore - b.healthScore
        case 'score-desc':
          return b.healthScore - a.healthScore
        case 'path-az':
          return a.path.localeCompare(b.path)
        default:
          return 0
      }
    })

    return pages
  }, [data, debouncedSearch, typeFilter, scoreFilter, sortBy])

  // The live preview values (use edited values for expanded card)
  const previewTitle = editTitle || ''
  const previewDescription = editDescription || ''

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-gray-400">
        <AlertTriangle className="mb-2 h-8 w-8" />
        <p className="text-sm">Failed to load SEO data.</p>
      </div>
    )
  }

  const { summary } = data
  const avgColor = scoreColor(summary.averageScore)

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8 pb-24 md:pb-6">
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-4 left-1/2 z-[100] -translate-x-1/2 rounded-xl px-5 py-3 text-sm font-medium text-white shadow-lg transition-all ${
            toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {toast.message}
        </div>
      )}

      <h1 className="mb-6 text-2xl font-bold text-gray-900">SEO Health</h1>

      {/* ── Summary Bar ──────────────────────────────────────────── */}
      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
            <Globe className="h-5 w-5 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{summary.totalPages}</p>
          <p className="text-xs text-gray-500">Total Pages</p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <div className={`mb-2 flex h-10 w-10 items-center justify-center rounded-xl ${avgColor.bg}`}>
            <FileText className={`h-5 w-5 ${avgColor.text}`} />
          </div>
          <p className={`text-2xl font-bold ${avgColor.text}`}>{summary.averageScore}</p>
          <p className="text-xs text-gray-500">Average Score</p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-green-50">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{summary.perfectPages}</p>
          <p className="text-xs text-gray-500">Perfect Pages</p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{summary.issueCount}</p>
          <p className="text-xs text-gray-500">Total Issues</p>
        </div>
      </div>

      {/* ── Filter / Search Bar ──────────────────────────────────── */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search pages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="all">All Types</option>
          <option value="static">Static Pages</option>
          <option value="service">Services</option>
          <option value="area">Areas</option>
          <option value="blog">Blog</option>
        </select>

        <select
          value={scoreFilter}
          onChange={(e) => setScoreFilter(e.target.value)}
          className="rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="all">All Scores</option>
          <option value="perfect">Perfect (100)</option>
          <option value="good">Good (80-99)</option>
          <option value="needs-work">Needs Work (60-79)</option>
          <option value="poor">Poor (&lt;60)</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="score-asc">Score: Low to High</option>
          <option value="score-desc">Score: High to Low</option>
          <option value="path-az">Path: A-Z</option>
        </select>
      </div>

      {/* ── Results count ────────────────────────────────────────── */}
      <p className="mb-3 text-xs text-gray-400">
        Showing {filteredPages.length} of {data.pages.length} pages
      </p>

      {/* ── Page List ────────────────────────────────────────────── */}
      {filteredPages.length === 0 ? (
        <p className="py-16 text-center text-sm text-gray-400">No pages match your filters.</p>
      ) : (
        <div className="space-y-3">
          {filteredPages.map((page) => {
            const expanded = expandedPath === page.path
            const sc = scoreColor(page.healthScore)
            const badge = pageTypeBadge[page.pageType] || pageTypeBadge.static

            return (
              <div
                key={page.path}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                {/* ── Collapsed card ─────────────────────────────── */}
                <button
                  onClick={() => handleExpand(page)}
                  className="flex w-full items-center gap-3 px-4 py-4 text-left hover:bg-gray-50 transition-colors sm:gap-4 sm:px-5"
                >
                  {/* Score badge */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold ${sc.bg} ${sc.text}`}
                  >
                    {page.healthScore}
                  </div>

                  {/* Title + path + badges */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <span className="text-sm font-bold text-gray-900 truncate">
                        {page.title}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                      {page.hasOverride && (
                        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">
                          Customized
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 truncate">{page.path}</p>
                  </div>

                  {/* Chevron */}
                  <div className="shrink-0">
                    {expanded ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* ── Expanded detail ────────────────────────────── */}
                {expanded && (
                  <div className="border-t border-gray-100 px-4 py-5 space-y-6 sm:px-5">
                    {/* Google Preview */}
                    <div>
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Google Preview
                      </h3>
                      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                        <p className="text-lg leading-snug text-[#1a0dab] hover:underline cursor-pointer">
                          {truncate(previewTitle, 60)}
                        </p>
                        <p className="mt-0.5 text-sm text-[#006621]">
                          {page.canonical}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-[#545454]">
                          {truncate(previewDescription, 160)}
                        </p>
                      </div>
                    </div>

                    {/* Metadata Details */}
                    <div>
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Metadata Details
                      </h3>
                      <div className="space-y-3">
                        {/* Meta Title */}
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm">
                          <span className="shrink-0 font-medium text-gray-500 sm:w-36">Meta Title</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-900 break-words">{page.metaTitle}</p>
                            <p className={`mt-0.5 text-xs ${charCountColor(page.metaTitle.length, 50, 60)}`}>
                              {page.metaTitle.length} characters
                              {page.metaTitle.length >= 50 && page.metaTitle.length <= 60
                                ? ' (ideal)'
                                : page.metaTitle.length < 50
                                  ? ' (could be longer)'
                                  : ' (may be truncated)'}
                            </p>
                          </div>
                        </div>

                        {/* Meta Description */}
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm">
                          <span className="shrink-0 font-medium text-gray-500 sm:w-36">Meta Description</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-900 break-words">{page.metaDescription}</p>
                            <p className={`mt-0.5 text-xs ${charCountColor(page.metaDescription.length, 140, 160)}`}>
                              {page.metaDescription.length} characters
                              {page.metaDescription.length >= 140 && page.metaDescription.length <= 160
                                ? ' (ideal)'
                                : page.metaDescription.length < 140
                                  ? ' (could be longer)'
                                  : ' (may be truncated)'}
                            </p>
                          </div>
                        </div>

                        {/* Keywords */}
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm">
                          <span className="shrink-0 font-medium text-gray-500 sm:w-36">Keywords</span>
                          <div className="flex flex-wrap gap-1.5">
                            {page.keywords.map((kw) => (
                              <span
                                key={kw}
                                className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700"
                              >
                                <Tag className="h-3 w-3" />
                                {kw}
                              </span>
                            ))}
                            {page.keywords.length === 0 && (
                              <span className="text-xs text-gray-400">None</span>
                            )}
                          </div>
                        </div>

                        {/* OG Image */}
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm">
                          <span className="shrink-0 font-medium text-gray-500 sm:w-36">OG Image</span>
                          <div className="flex items-center gap-2 min-w-0">
                            <ImageIcon className="h-4 w-4 shrink-0 text-gray-400" />
                            <span className="text-gray-900 break-all text-xs">{page.ogImage || 'Not set'}</span>
                          </div>
                        </div>

                        {/* Alt Text */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
                          <span className="shrink-0 font-medium text-gray-500 sm:w-36">Image Alt Text</span>
                          {page.hasAltText ? (
                            <span className="inline-flex items-center gap-1 text-green-600 text-xs font-medium">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              Present
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-red-600 text-xs font-medium">
                              <AlertTriangle className="h-3.5 w-3.5" />
                              Missing
                            </span>
                          )}
                        </div>

                        {/* Canonical */}
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 text-sm">
                          <span className="shrink-0 font-medium text-gray-500 sm:w-36">Canonical URL</span>
                          <a
                            href={page.canonical}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-600 hover:underline text-xs break-all"
                          >
                            <LinkIcon className="h-3 w-3 shrink-0" />
                            {page.canonical}
                            <ExternalLink className="h-3 w-3 shrink-0" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Issues */}
                    {page.issues.length > 0 && (
                      <div>
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Issues ({page.issues.length})
                        </h3>
                        <div className="space-y-2">
                          {page.issues.map((issue, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 rounded-xl bg-yellow-50 border border-yellow-100 px-4 py-2.5 text-sm text-gray-700"
                            >
                              <AlertTriangle className="h-4 w-4 shrink-0 text-yellow-500 mt-0.5" />
                              <span>{issue}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Edit Section */}
                    <div>
                      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Edit Metadata
                      </h3>
                      <div className="space-y-4">
                        {/* Meta Title input */}
                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700">Meta Title</label>
                            <span
                              className={`text-xs font-medium ${charCountColor(editTitle.length, 50, 60)}`}
                            >
                              {editTitle.length}/60
                            </span>
                          </div>
                          <input
                            type="text"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Page title for search results"
                          />
                        </div>

                        {/* Meta Description textarea */}
                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700">
                              Meta Description
                            </label>
                            <span
                              className={`text-xs font-medium ${charCountColor(editDescription.length, 140, 160)}`}
                            >
                              {editDescription.length}/160
                            </span>
                          </div>
                          <textarea
                            value={editDescription}
                            onChange={(e) => setEditDescription(e.target.value)}
                            rows={3}
                            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                            placeholder="Brief description for search results"
                          />
                        </div>

                        {/* Keywords input */}
                        <div>
                          <label className="mb-1 block text-sm font-medium text-gray-700">
                            Keywords
                          </label>
                          <input
                            type="text"
                            value={editKeywords}
                            onChange={(e) => setEditKeywords(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="keyword1, keyword2, keyword3"
                          />
                          <p className="mt-1 text-xs text-gray-400">Separate with commas</p>
                        </div>

                        {/* OG Image input */}
                        <div>
                          <label className="mb-1 block text-sm font-medium text-gray-700">
                            OG Image URL
                          </label>
                          <input
                            type="text"
                            value={editOgImage}
                            onChange={(e) => setEditOgImage(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="/images/og-custom.jpg"
                          />
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                          <button
                            onClick={() => handleSave(page)}
                            disabled={saving}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
                          >
                            {saving ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Save className="h-4 w-4" />
                            )}
                            {saving ? 'Saving...' : 'Save Changes'}
                          </button>

                          {page.hasOverride && (
                            <button
                              onClick={() => handleReset(page)}
                              disabled={resetting}
                              className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 px-5 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 disabled:opacity-50 transition-colors"
                            >
                              {resetting ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : (
                                <RotateCcw className="h-4 w-4" />
                              )}
                              {resetting ? 'Resetting...' : 'Reset to Default'}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
