import { siteConfig } from '@/data/site-config'
import { reviews } from '@/data/reviews'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.businessName,
    image: `${siteConfig.url}${siteConfig.logo}`,
    telephone: `+1${siteConfig.phone}`,
    email: siteConfig.email,
    url: siteConfig.url,
    foundingDate: siteConfig.established.toString(),
    description: `Professional handyman services in ${siteConfig.county}, ${siteConfig.state}. ${siteConfig.yearsExperience}+ years of experience. Free estimates.`,
    areaServed: {
      '@type': 'County',
      name: siteConfig.county,
      containedInPlace: {
        '@type': 'State',
        name: siteConfig.state,
      },
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '16:00',
      },
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: String(reviews.length),
      bestRating: '5',
    },
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.businessName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    telephone: `+1${siteConfig.phone}`,
    email: siteConfig.email,
    foundingDate: siteConfig.established.toString(),
  }
}

export function serviceSchema(service: {
  name: string
  description: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `${siteConfig.url}/services/${service.slug}`,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${siteConfig.url}/#business`,
    },
    areaServed: {
      '@type': 'County',
      name: siteConfig.county,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
      },
    },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}

export function articleSchema(post: {
  title: string
  excerpt: string
  slug: string
  publishedDate: string
  author: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: post.publishedDate,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
    },
  }
}

export function reviewSchema(reviews: {
  name: string
  rating: number
  date: string
  text: string
}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${siteConfig.url}/#business`,
    review: reviews.map((review) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: review.name,
      },
      datePublished: review.date,
      reviewBody: review.text,
    })),
  }
}
