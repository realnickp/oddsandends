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

    return NextResponse.json({ success: true, post: data })
  } catch (err) {
    console.error('Blog POST error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
