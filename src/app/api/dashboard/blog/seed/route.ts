import { NextRequest, NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'
import {
  verifyDashboardAuth,
  unauthorizedResponse,
} from '@/lib/dashboard-auth'
import { blogPosts } from '@/data/blog-posts'

export async function POST(request: NextRequest) {
  if (!verifyDashboardAuth(request)) return unauthorizedResponse()

  try {
    const supabase = getServiceSupabase()

    // Check which posts already exist by slug
    const { data: existing } = await supabase
      .from('blog_posts')
      .select('slug')

    const existingSlugs = new Set((existing || []).map((p) => p.slug))

    const postsToInsert = blogPosts
      .filter((post) => !existingSlugs.has(post.slug))
      .map((post) => ({
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        related_services: post.relatedServices,
        related_cities: post.relatedCities,
        meta_title: post.metaTitle,
        meta_description: post.metaDescription,
        published_date: post.publishedDate,
        author: post.author,
        image: post.image,
        is_published: true,
      }))

    if (postsToInsert.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'All blog posts already exist',
        inserted: 0,
      })
    }

    const { error } = await supabase.from('blog_posts').insert(postsToInsert)

    if (error) {
      console.error('Seed blog posts error:', error)
      return NextResponse.json(
        { error: 'Failed to seed blog posts' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: `Inserted ${postsToInsert.length} blog posts`,
      inserted: postsToInsert.length,
      skipped: blogPosts.length - postsToInsert.length,
    })
  } catch (err) {
    console.error('Blog seed error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
