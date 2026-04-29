import { NextRequest, NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'
import { pingIndexNow } from '@/lib/indexnow'
import { siteConfig } from '@/data/site-config'
import {
  verifyDashboardAuth,
  unauthorizedResponse,
} from '@/lib/dashboard-auth'

export async function GET(request: NextRequest) {
  if (!verifyDashboardAuth(request)) return unauthorizedResponse()

  try {
    const supabase = getServiceSupabase()

    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Fetch blog posts error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch blog posts' },
        { status: 500 }
      )
    }

    return NextResponse.json({ posts: data })
  } catch (err) {
    console.error('Blog GET error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  if (!verifyDashboardAuth(request)) return unauthorizedResponse()

  try {
    const supabase = getServiceSupabase()
    const body = await request.json()

    const { data, error } = await supabase
      .from('blog_posts')
      .insert({
        slug: body.slug,
        title: body.title,
        excerpt: body.excerpt,
        content: body.content,
        category: body.category,
        related_services: body.related_services || [],
        related_cities: body.related_cities || [],
        meta_title: body.meta_title,
        meta_description: body.meta_description,
        published_date: body.published_date,
        author: body.author,
        image: body.image,
        is_published: body.is_published ?? true,
      })
      .select()
      .single()

    if (error) {
      console.error('Create blog post error:', error)
      return NextResponse.json(
        { error: 'Failed to create blog post' },
        { status: 500 }
      )
    }

    // Ping IndexNow so Bing/Copilot pick up the new post within minutes
    // instead of waiting for the next crawl. Fire-and-forget — failures are
    // logged but don't block the response.
    if (data?.is_published && data?.slug) {
      const postUrl = `${siteConfig.url}/blog/${data.slug}`
      pingIndexNow([postUrl, `${siteConfig.url}/blog`, `${siteConfig.url}/sitemap.xml`])
        .then((res) => {
          if (!res.ok) console.warn('IndexNow ping failed:', res.status, res.body)
        })
        .catch((e) => console.warn('IndexNow ping threw:', e))
    }

    return NextResponse.json({ success: true, post: data })
  } catch (err) {
    console.error('Blog POST error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
