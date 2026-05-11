import { generatePageMetadata } from '@/lib/metadata'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'About Odds & Ends Handyman Service',
    description: `Learn about Odds & Ends Handyman Service — serving Rockland County, NY since 2001 with 20+ years of professional craftsmanship, honest pricing, and meticulous attention to detail.`,
    path: '/about',
    keywords: ['about', 'Odds & Ends Handyman', 'handyman Rockland County', 'home repair professional'],
  })
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
