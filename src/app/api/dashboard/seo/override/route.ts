import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { verifyDashboardAuth, unauthorizedResponse } from '@/lib/dashboard-auth'
import { getServiceSupabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  if (!verifyDashboardAuth(request)) {
    return unauthorizedResponse()
  }

  try {
    const body = await request.json()
    const { pagePath, metaTitle, metaDescription, ogImage, keywords } = body

    if (!pagePath || typeof pagePath !== 'string') {
      return NextResponse.json({ error: 'pagePath is required' }, { status: 400 })
    }

    const supabase = getServiceSupabase()

    const updateData: Record<string, unknown> = {
      page_path: pagePath,
      updated_at: new Date().toISOString(),
    }
    if (metaTitle !== undefined) updateData.meta_title = metaTitle
    if (metaDescription !== undefined) updateData.meta_description = metaDescription
    if (ogImage !== undefined) updateData.og_image = ogImage
    if (keywords !== undefined) updateData.keywords = keywords

    const { error } = await supabase
      .from('seo_overrides')
      .upsert(updateData, { onConflict: 'page_path' })

    if (error) {
      console.error('SEO override upsert error:', error)
      return NextResponse.json({ error: 'Failed to save override' }, { status: 500 })
    }

    revalidatePath(pagePath)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('SEO override POST error:', error)
    return NextResponse.json({ error: 'Failed to save override' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  if (!verifyDashboardAuth(request)) {
    return unauthorizedResponse()
  }

  try {
    const body = await request.json()
    const { pagePath } = body

    if (!pagePath || typeof pagePath !== 'string') {
      return NextResponse.json({ error: 'pagePath is required' }, { status: 400 })
    }

    const supabase = getServiceSupabase()

    const { error } = await supabase
      .from('seo_overrides')
      .delete()
      .eq('page_path', pagePath)

    if (error) {
      console.error('SEO override delete error:', error)
      return NextResponse.json({ error: 'Failed to delete override' }, { status: 500 })
    }

    revalidatePath(pagePath)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('SEO override DELETE error:', error)
    return NextResponse.json({ error: 'Failed to delete override' }, { status: 500 })
  }
}
