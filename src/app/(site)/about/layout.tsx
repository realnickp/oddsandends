import { generatePageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/data/site-config'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'About Odds & Ends Handyman Service',
    description: `Learn about Odds & Ends Handyman Service — serving Tuxedo, Tuxedo Park & Rockland County, NY since 2001 with ${siteConfig.yearsExperience}+ years of professional craftsmanship, honest pricing, and meticulous attention to detail.`,
    path: '/about',
    keywords: ['about', 'Odds & Ends Handyman Service', 'home services Tuxedo NY', 'home repair professional'],
  })
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
