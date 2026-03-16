import { NextRequest, NextResponse } from 'next/server'
import { verifyDashboardAuth, unauthorizedResponse } from '@/lib/dashboard-auth'
import { getServiceSupabase } from '@/lib/supabase'
import { services } from '@/data/services'
import { cities } from '@/data/cities'
import { blogPosts } from '@/data/blog-posts'

const BASE_URL = 'https://oddsandendshandymanservice.com'

interface SeoOverride {
  page_path: string
  meta_title: string | null
  meta_description: string | null
  og_image: string | null
  keywords: string[] | null
}

interface PageSeoData {
  path: string
  pageType: 'static' | 'service' | 'area' | 'blog'
  title: string
  metaTitle: string
  metaDescription: string
  ogImage: string | null
  keywords: string[]
  hasAltText: boolean
  canonical: string
  healthScore: number
  issues: string[]
  hasOverride: boolean
}

const staticPages = [
  { path: '/', pageType: 'static' as const, title: 'Home', metaTitle: 'Odds & Ends Handyman Service | Professional Handyman in Rockland County, NY', metaDescription: 'Professional handyman services in Rockland County, New York. 20+ years of experience. TV mounting, drywall repair, painting, deck repair, and 30+ services. Free estimates. Call (908) 461-2688.', ogImage: '/images/og-default.jpg', keywords: [] as string[] },
  { path: '/about', pageType: 'static' as const, title: 'About', metaTitle: 'About Odds & Ends Handyman Service', metaDescription: 'Learn about Dan Kiely and Odds & Ends Handyman Service — serving Rockland County, NY since 2001 with 20+ years of professional craftsmanship, honest pricing, and meticulous attention to detail.', ogImage: '/images/og-default.jpg', keywords: ['about', 'Dan Kiely', 'handyman Rockland County', 'home repair professional'] },
  { path: '/contact', pageType: 'static' as const, title: 'Contact', metaTitle: 'Contact Us', metaDescription: 'Contact Odds & Ends Handyman Service in Rockland County, NY. Call, text, or email for a free estimate. Dan responds quickly and personally to every inquiry.', ogImage: '/images/og-default.jpg', keywords: ['contact handyman', 'Rockland County handyman phone', 'free estimate'] },
  { path: '/estimate', pageType: 'static' as const, title: 'Free Estimate', metaTitle: 'Request a Free Estimate', metaDescription: 'Request a free, no-obligation estimate from Odds & Ends Handyman Service. Describe your project and Dan will get back to you with a fair, honest quote.', ogImage: '/images/og-default.jpg', keywords: ['free estimate', 'handyman quote', 'home repair estimate'] },
  { path: '/services', pageType: 'static' as const, title: 'All Services', metaTitle: 'Handyman Services in Rockland County, NY', metaDescription: 'Over 30 professional handyman services in Rockland County, NY. From TV mounting to deck building, Odds & Ends handles it all.', ogImage: '/images/og-default.jpg', keywords: ['handyman services', 'Rockland County', 'home repair services'] },
  { path: '/areas', pageType: 'static' as const, title: 'Service Areas', metaTitle: 'Service Areas in Rockland County, NY', metaDescription: 'Odds & Ends Handyman Service proudly serves all of Rockland County, NY including Nyack, New City, Nanuet, Pearl River, and more.', ogImage: '/images/og-default.jpg', keywords: ['Rockland County handyman', 'service areas'] },
  { path: '/blog', pageType: 'static' as const, title: 'Blog', metaTitle: 'Home Improvement Blog | Tips & Guides', metaDescription: 'Helpful home improvement tips, repair guides, and maintenance advice from a 20+ year Rockland County handyman.', ogImage: '/images/og-default.jpg', keywords: ['home improvement blog', 'handyman tips', 'repair guides'] },
  { path: '/faq', pageType: 'static' as const, title: 'FAQ', metaTitle: 'Frequently Asked Questions', metaDescription: 'Get answers to common questions about Odds & Ends Handyman Service.', ogImage: '/images/og-default.jpg', keywords: ['handyman FAQ', 'home repair questions'] },
  { path: '/reviews', pageType: 'static' as const, title: 'Reviews', metaTitle: 'Customer Reviews', metaDescription: 'Read five-star Google reviews for Odds & Ends Handyman Service in Rockland County, NY.', ogImage: '/images/og-default.jpg', keywords: ['handyman reviews', 'customer testimonials'] },
]

function computeTitleScore(title: string): { score: number; issues: string[] } {
  const len = title.length
  const issues: string[] = []
  let score = 5

  if (len >= 50 && len <= 60) {
    score = 25
  } else if ((len >= 40 && len < 50) || (len > 60 && len <= 70)) {
    score = 15
  } else {
    score = 5
    if (len < 40) issues.push('Title too short')
    if (len > 70) issues.push('Title too long')
  }

  if (!title) {
    score = 0
    issues.push('Missing title')
  }

  return { score, issues }
}

function computeDescriptionScore(desc: string): { score: number; issues: string[] } {
  const len = desc.length
  const issues: string[] = []
  let score = 5

  if (len >= 140 && len <= 160) {
    score = 25
  } else if ((len >= 100 && len < 140) || (len > 160 && len <= 200)) {
    score = 15
  } else {
    score = 5
    if (len < 100) issues.push('Description too short')
    if (len > 200) issues.push('Description too long')
  }

  if (!desc) {
    score = 0
    issues.push('Missing description')
  }

  return { score, issues }
}

function computeHealthScore(page: {
  metaTitle: string
  metaDescription: string
  ogImage: string | null
  keywords: string[]
  hasAltText: boolean
}): { healthScore: number; issues: string[] } {
  const issues: string[] = []

  const titleResult = computeTitleScore(page.metaTitle)
  const descResult = computeDescriptionScore(page.metaDescription)

  issues.push(...titleResult.issues)
  issues.push(...descResult.issues)

  const ogScore = page.ogImage ? 15 : 0
  if (!page.ogImage) issues.push('No OG image')

  let keywordsScore = 0
  if (page.keywords.length >= 3) {
    keywordsScore = 15
  } else if (page.keywords.length >= 1) {
    keywordsScore = 10
  } else {
    issues.push('No keywords')
  }

  const altScore = page.hasAltText ? 10 : 0
  if (!page.hasAltText) issues.push('No image alt text')

  const canonicalScore = 10

  const healthScore = titleResult.score + descResult.score + ogScore + keywordsScore + altScore + canonicalScore

  return { healthScore, issues }
}

function applyOverride(
  page: { metaTitle: string; metaDescription: string; ogImage: string | null; keywords: string[] },
  override: SeoOverride
) {
  if (override.meta_title) page.metaTitle = override.meta_title
  if (override.meta_description) page.metaDescription = override.meta_description
  if (override.og_image) page.ogImage = override.og_image
  if (override.keywords && override.keywords.length > 0) page.keywords = override.keywords
}

export async function GET(request: NextRequest) {
  if (!verifyDashboardAuth(request)) {
    return unauthorizedResponse()
  }

  try {
    const supabase = getServiceSupabase()
    const { data: overrides } = await supabase
      .from('seo_overrides')
      .select('page_path, meta_title, meta_description, og_image, keywords')

    const overrideMap = new Map<string, SeoOverride>()
    if (overrides) {
      for (const o of overrides) {
        overrideMap.set(o.page_path, o as SeoOverride)
      }
    }

    const pages: PageSeoData[] = []

    // Static pages
    for (const sp of staticPages) {
      const pageData = {
        metaTitle: sp.metaTitle,
        metaDescription: sp.metaDescription,
        ogImage: sp.ogImage as string | null,
        keywords: [...sp.keywords],
      }
      const override = overrideMap.get(sp.path)
      if (override) applyOverride(pageData, override)

      const { healthScore, issues } = computeHealthScore({
        ...pageData,
        hasAltText: false,
      })

      pages.push({
        path: sp.path,
        pageType: sp.pageType,
        title: sp.title,
        metaTitle: pageData.metaTitle,
        metaDescription: pageData.metaDescription,
        ogImage: pageData.ogImage,
        keywords: pageData.keywords,
        hasAltText: false,
        canonical: `${BASE_URL}${sp.path === '/' ? '' : sp.path}`,
        healthScore,
        issues,
        hasOverride: !!override,
      })
    }

    // Service pages
    for (const svc of services) {
      const path = `/services/${svc.slug}`
      const pageData = {
        metaTitle: svc.metaTitle,
        metaDescription: svc.metaDescription,
        ogImage: svc.image || null,
        keywords: [...svc.keywords],
      }
      const override = overrideMap.get(path)
      if (override) applyOverride(pageData, override)

      const hasAltText = !!svc.altText
      const { healthScore, issues } = computeHealthScore({
        ...pageData,
        hasAltText,
      })

      pages.push({
        path,
        pageType: 'service',
        title: svc.name,
        metaTitle: pageData.metaTitle,
        metaDescription: pageData.metaDescription,
        ogImage: pageData.ogImage,
        keywords: pageData.keywords,
        hasAltText,
        canonical: `${BASE_URL}${path}`,
        healthScore,
        issues,
        hasOverride: !!override,
      })
    }

    // Area pages
    for (const city of cities) {
      const path = `/areas/${city.slug}`
      const pageData = {
        metaTitle: city.metaTitle,
        metaDescription: city.metaDescription,
        ogImage: city.image || null,
        keywords: [...city.keywords],
      }
      const override = overrideMap.get(path)
      if (override) applyOverride(pageData, override)

      const { healthScore, issues } = computeHealthScore({
        ...pageData,
        hasAltText: !!city.image,
      })

      pages.push({
        path,
        pageType: 'area',
        title: city.name,
        metaTitle: pageData.metaTitle,
        metaDescription: pageData.metaDescription,
        ogImage: pageData.ogImage,
        keywords: pageData.keywords,
        hasAltText: !!city.image,
        canonical: `${BASE_URL}${path}`,
        healthScore,
        issues,
        hasOverride: !!override,
      })
    }

    // Blog pages
    for (const post of blogPosts) {
      const path = `/blog/${post.slug}`
      const pageData = {
        metaTitle: post.metaTitle,
        metaDescription: post.metaDescription,
        ogImage: post.image || null,
        keywords: [] as string[],
      }
      const override = overrideMap.get(path)
      if (override) applyOverride(pageData, override)

      const { healthScore, issues } = computeHealthScore({
        ...pageData,
        hasAltText: !!post.image,
      })

      pages.push({
        path,
        pageType: 'blog',
        title: post.title,
        metaTitle: pageData.metaTitle,
        metaDescription: pageData.metaDescription,
        ogImage: pageData.ogImage,
        keywords: pageData.keywords,
        hasAltText: !!post.image,
        canonical: `${BASE_URL}${path}`,
        healthScore,
        issues,
        hasOverride: !!override,
      })
    }

    const totalPages = pages.length
    const averageScore = totalPages > 0
      ? Math.round(pages.reduce((sum, p) => sum + p.healthScore, 0) / totalPages)
      : 0
    const perfectPages = pages.filter(p => p.healthScore === 100).length
    const issueCount = pages.reduce((sum, p) => sum + p.issues.length, 0)

    return NextResponse.json({
      pages,
      summary: {
        totalPages,
        averageScore,
        perfectPages,
        issueCount,
      },
    })
  } catch (error) {
    console.error('SEO dashboard error:', error)
    return NextResponse.json({ error: 'Failed to fetch SEO data' }, { status: 500 })
  }
}
