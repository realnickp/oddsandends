'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useDashboard } from '../_DashboardClient'
import {
  Plus,
  Edit3,
  Trash2,
  Eye,
  EyeOff,
  Loader2,
  Database,
} from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  category?: string
  published: boolean
  published_at?: string
  created_at: string
}

export default function BlogListPage() {
  const { dashboardFetch } = useDashboard()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [seeding, setSeeding] = useState(false)

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const res = await dashboardFetch('/api/dashboard/blog')
      if (res.ok) {
        const data = await res.json()
        setPosts(Array.isArray(data) ? data : data.posts || [])
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return
    setDeleting(id)
    try {
      const res = await dashboardFetch(`/api/dashboard/blog/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== id))
      }
    } catch (err) {
      console.error(err)
    } finally {
      setDeleting(null)
    }
  }

  const togglePublish = async (post: BlogPost) => {
    try {
      const res = await dashboardFetch(`/api/dashboard/blog/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify({ published: !post.published }),
      })
      if (res.ok) {
        setPosts((prev) =>
          prev.map((p) => (p.id === post.id ? { ...p, published: !p.published } : p))
        )
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleSeed = async () => {
    if (!confirm('This will seed blog posts from existing content. Continue?')) return
    setSeeding(true)
    try {
      const res = await dashboardFetch('/api/dashboard/blog/seed', { method: 'POST' })
      if (res.ok) {
        await fetchPosts()
      }
    } catch (err) {
      console.error(err)
    } finally {
      setSeeding(false)
    }
  }

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
        <div className="flex gap-2">
          {posts.length === 0 && (
            <button
              onClick={handleSeed}
              disabled={seeding}
              className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              {seeding ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Database className="h-4 w-4" />
              )}
              Seed Existing Posts
            </button>
          )}
          <Link
            href="/dashboard/blog/new"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            New Post
          </Link>
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-2xl border border-gray-100 bg-white py-16 text-center shadow-sm">
          <p className="text-sm text-gray-400">No blog posts yet.</p>
          <p className="mt-1 text-xs text-gray-400">
            Create your first post or seed from existing content.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-sm font-bold text-gray-900 truncate">{post.title}</h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      post.published
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                  {post.category && (
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      {post.category}
                    </span>
                  )}
                </div>
                {post.excerpt && (
                  <p className="text-xs text-gray-500 line-clamp-1">{post.excerpt}</p>
                )}
                <p className="mt-1 text-xs text-gray-400">
                  {post.published_at
                    ? new Date(post.published_at).toLocaleDateString()
                    : new Date(post.created_at).toLocaleDateString()}
                </p>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => togglePublish(post)}
                  title={post.published ? 'Unpublish' : 'Publish'}
                  className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                >
                  {post.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                <Link
                  href={`/dashboard/blog/${post.id}`}
                  className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                  title="Edit"
                >
                  <Edit3 className="h-4 w-4" />
                </Link>
                <button
                  onClick={() => handleDelete(post.id)}
                  disabled={deleting === post.id}
                  className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
                  title="Delete"
                >
                  {deleting === post.id ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
