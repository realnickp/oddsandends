import { Metadata } from 'next'
import { siteConfig } from '@/data/site-config'
import { getServiceSupabase } from '@/lib/supabase'

interface MetadataParams {
  title: string
  description: string
  path: string
  keywords?: string[]
}

async function getSeoOverride(path: string) {
  try {
    const supabase = getServiceSupabase()
    const { data } = await supabase
      .from('seo_overrides')
      .select('meta_title, meta_description, og_image, keywords')
      .eq('page_path', path)
      .single()
    return data
  } catch {
    return null
  }
}

export async function generatePageMetadata({
  title,
  description,
  path,
  keywords,
}: MetadataParams): Promise<Metadata> {
  const override = await getSeoOverride(path)

  const finalTitle = override?.meta_title || title
  const finalDescription = override?.meta_description || description
  const finalKeywords = (override?.keywords?.length ? override.keywords : keywords) || undefined

  const fullTitle = finalTitle.includes(siteConfig.shortName)
    ? finalTitle
    : `${finalTitle} | ${siteConfig.businessName}`
  const url = `${siteConfig.url}${path}`

  return {
    title: fullTitle,
    description: finalDescription,
    ...(finalKeywords && { keywords: finalKeywords }),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: finalDescription,
      url,
      siteName: siteConfig.businessName,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: finalDescription,
    },
  }
}

export async function generateServiceMetadata(service: {
  metaTitle: string
  metaDescription: string
  slug: string
  keywords?: string[]
}): Promise<Metadata> {
  return generatePageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  })
}

export async function generateCityMetadata(city: {
  metaTitle: string
  metaDescription: string
  slug: string
  keywords?: string[]
}): Promise<Metadata> {
  return generatePageMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/areas/${city.slug}`,
    keywords: city.keywords,
  })
}

export async function generateBlogMetadata(post: {
  metaTitle: string
  metaDescription: string
  slug: string
  publishedDate: string
  author: string
}): Promise<Metadata> {
  const base = await generatePageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  })

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
    },
  }
}
