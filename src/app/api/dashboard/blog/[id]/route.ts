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

    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single()

    if (error || !data) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ post: data })
  } catch (err) {
    console.error('Blog GET by ID error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!verifyDashboardAuth(request)) return unauthorizedResponse()

  try {
    const { id } = await params
    const supabase = getServiceSupabase()
    const body = await request.json()

    const updateData: Record<string, unknown> = {}
    const allowedFields = [
      'slug',
      'title',
      'excerpt',
      'content',
      'category',
      'related_services',
      'related_cities',
      'meta_title',
      'meta_description',
      'published_date',
      'author',
      'image',
      'is_published',
    ]

    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updateData[field] = body[field]
      }
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Update blog post error:', error)
      return NextResponse.json(
        { error: 'Failed to update blog post' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, post: data })
  } catch (err) {
    console.error('Blog PUT error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!verifyDashboardAuth(request)) return unauthorizedResponse()

  try {
    const { id } = await params
    const supabase = getServiceSupabase()

    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Delete blog post error:', error)
      return NextResponse.json(
        { error: 'Failed to delete blog post' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Blog DELETE error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
