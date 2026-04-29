import { siteConfig } from '@/data/site-config'
import { reviews } from '@/data/reviews'
import { cities } from '@/data/cities'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.businessName,
    legalName: siteConfig.license.businessEntity,
    alternateName: siteConfig.license.dba,
    image: [
      `${siteConfig.url}${siteConfig.logo}`,
      `${siteConfig.url}/images/og-image.png`,
    ],
    logo: `${siteConfig.url}${siteConfig.logo}`,
    telephone: `+1${siteConfig.phone}`,
    email: siteConfig.email,
    url: siteConfig.url,
    foundingDate: `${siteConfig.established}-01-01`,
    founder: { '@id': `${siteConfig.url}/#owner` },
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.latitude,
      longitude: siteConfig.longitude,
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.latitude,
        longitude: siteConfig.longitude,
      },
      geoRadius: '40000', // 40km / ~25mi covers Rockland + reachable Westchester
    },
    sameAs: siteConfig.socialProfiles,
    knowsAbout: siteConfig.knowsAbout,
    slogan: siteConfig.tagline,
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card, Venmo, Zelle',
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Home Improvement Contractor License',
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Rockland County Office of Consumer Protection',
      },
      identifier: siteConfig.license.number,
    },
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
    legalName: siteConfig.license.businessEntity,
    alternateName: siteConfig.license.dba,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    telephone: `+1${siteConfig.phone}`,
    email: siteConfig.email,
    foundingDate: `${siteConfig.established}-01-01`,
    founder: { '@id': `${siteConfig.url}/#owner` },
    sameAs: siteConfig.socialProfiles,
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.businessName,
    description: `Professional handyman services in ${siteConfig.county}, ${siteConfig.state}. ${siteConfig.yearsExperience}+ years of experience.`,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    inLanguage: 'en-US',
  }
}

export function serviceSchema(service: {
  name: string
  shortDescription: string
  description: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/services/${service.slug}/#service`,
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: `${siteConfig.url}/services/${service.slug}`,
    provider: { '@id': `${siteConfig.url}/#business` },
    areaServed: [
      { '@type': 'County', name: siteConfig.county, containedInPlace: { '@type': 'State', name: siteConfig.state } },
      ...cities.map(city => ({ '@type': 'City', name: city.name, containedInPlace: { '@type': 'County', name: siteConfig.county } })),
    ],
    audience: {
      '@type': 'PeopleAudience',
      geographicArea: { '@type': 'County', name: siteConfig.county },
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
      },
      eligibleRegion: { '@type': 'County', name: siteConfig.county },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: service.name, description: service.shortDescription } },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: String(reviews.length),
      bestRating: '5',
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

export function ownerSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/#owner`,
    name: siteConfig.owner,
    jobTitle: 'Owner & Lead Handyman',
    description: `${siteConfig.owner} founded ${siteConfig.businessName} in ${siteConfig.established} and has personally led every job for ${siteConfig.yearsExperience}+ years. Licensed Home Improvement Contractor (License #${siteConfig.license.number}, ${siteConfig.license.issuedBy}).`,
    worksFor: { '@id': `${siteConfig.url}/#business` },
    knowsAbout: siteConfig.knowsAbout,
    address: {
      '@type': 'PostalAddress',
      addressRegion: siteConfig.stateAbbr,
      addressLocality: siteConfig.county,
    },
    sameAs: siteConfig.socialProfiles,
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: siteConfig.license.type,
      identifier: siteConfig.license.number,
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: siteConfig.license.issuedBy,
      },
    },
  }
}

export function howToSchema(service: { name: string; processSteps: { title: string; description: string }[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How ${siteConfig.businessName} Handles ${service.name}`,
    step: service.processSteps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.title,
      text: step.description,
    })),
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
