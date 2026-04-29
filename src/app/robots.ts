import { MetadataRoute } from 'next'
import { siteConfig } from '@/data/site-config'

export default function robots(): MetadataRoute.Robots {
  const aiSearchCrawlers = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-Web',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot-Extended',
    'Bingbot',
    'CCBot',
  ]

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/'],
      },
      ...aiSearchCrawlers.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/'],
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
