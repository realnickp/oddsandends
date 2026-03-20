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
  { path: '/', pageType: 'static' as const, title: 'Home', metaTitle: 'Odds & Ends Handyman | Rockland County, NY Services', metaDescription: 'Professional handyman services in Rockland County, NY. 25+ years experience. TV mounting, drywall, painting, deck repair, and more. Free estimates.', ogImage: '/images/og-default.jpg', keywords: ['handyman Rockland County', 'home repair services NY', 'Odds & Ends Handyman Service'] },
  { path: '/about', pageType: 'static' as const, title: 'About', metaTitle: 'About Odds & Ends Handyman | Rockland County, NY Pro', metaDescription: 'Meet Dan Kiely and the Odds & Ends team. Over 25 years of trusted handyman craftsmanship in Rockland County, NY. Honest pricing and quality work.', ogImage: '/images/og-default.jpg', keywords: ['about Odds & Ends', 'Dan Kiely handyman', 'Rockland County handyman', 'home repair professional'] },
  { path: '/contact', pageType: 'static' as const, title: 'Contact', metaTitle: 'Contact Odds & Ends Handyman Service in Rockland, NY', metaDescription: 'Contact Odds & Ends Handyman Service in Rockland County, NY. Call, text, or email for a free estimate. Dan responds quickly to every inquiry.', ogImage: '/images/og-default.jpg', keywords: ['contact handyman', 'Rockland County handyman phone', 'free estimate handyman'] },
  { path: '/estimate', pageType: 'static' as const, title: 'Free Estimate', metaTitle: 'Free Handyman Estimate | Odds & Ends Rockland County', metaDescription: 'Request a free, no-obligation estimate from Odds & Ends Handyman Service. Describe your project and Dan will get back to you with an honest quote.', ogImage: '/images/og-default.jpg', keywords: ['free estimate', 'handyman quote Rockland County', 'home repair estimate NY'] },
  { path: '/services', pageType: 'static' as const, title: 'All Services', metaTitle: 'All Handyman Services in Rockland County, NY | O & E', metaDescription: 'Browse our professional handyman services in Rockland County, NY. From TV mounting and deck repair to kitchen renovation. Free estimates available.', ogImage: '/images/og-default.jpg', keywords: ['handyman services', 'Rockland County home repair', 'home improvement services NY'] },
  { path: '/areas', pageType: 'static' as const, title: 'Service Areas', metaTitle: 'Handyman Service Areas | Rockland & Westchester County, NY', metaDescription: 'Odds & Ends Handyman Service proudly serves Rockland County and select Westchester County communities including Nyack, New City, Suffern, Sleepy Hollow, Tarrytown, and more.', ogImage: '/images/og-default.jpg', keywords: ['Rockland County handyman', 'Westchester County handyman', 'handyman service areas', 'Nyack New City Nanuet handyman'] },
  { path: '/blog', pageType: 'static' as const, title: 'Blog', metaTitle: 'Home Improvement Blog | Odds & Ends Handyman Guide', metaDescription: 'Helpful home improvement tips, repair guides, and seasonal maintenance advice from a trusted Rockland County, NY handyman with over 25 years experience.', ogImage: '/images/og-default.jpg', keywords: ['home improvement blog', 'handyman tips Rockland County', 'home repair guides NY'] },
  { path: '/faq', pageType: 'static' as const, title: 'FAQ', metaTitle: 'Handyman FAQ | Odds & Ends Service Questions Answered', metaDescription: 'Get answers to common questions about Odds & Ends Handyman Service in Rockland County, NY. Pricing, scheduling, service areas, and what to expect.', ogImage: '/images/og-default.jpg', keywords: ['handyman FAQ', 'home repair questions', 'Odds & Ends Handyman FAQ'] },
  { path: '/reviews', pageType: 'static' as const, title: 'Reviews', metaTitle: 'Customer Reviews | Odds & Ends Handyman Rockland, NY', metaDescription: 'Read five-star reviews for Odds & Ends Handyman Service. Trusted by Rockland County, NY homeowners for over 25 years of quality home repair work.', ogImage: '/images/og-default.jpg', keywords: ['handyman reviews', 'customer testimonials', 'Odds & Ends reviews Rockland'] },
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

function generateBlogKeywords(post: { category: string; relatedServices: string[] }): string[] {
  const keywords: string[] = [post.category.toLowerCase()]
  for (const svcSlug of post.relatedServices.slice(0, 2)) {
    const svc = services.find(s => s.slug === svcSlug)
    if (svc) keywords.push(svc.name.toLowerCase() + ' Rockland County')
  }
  keywords.push('Rockland County handyman')
  if (keywords.length < 3) keywords.push('home improvement tips')
  return keywords
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
        hasAltText: true,
      })

      pages.push({
        path: sp.path,
        pageType: sp.pageType,
        title: sp.title,
        metaTitle: pageData.metaTitle,
        metaDescription: pageData.metaDescription,
        ogImage: pageData.ogImage,
        keywords: pageData.keywords,
        hasAltText: true,
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
        keywords: generateBlogKeywords(post),
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
