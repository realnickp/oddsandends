import { generatePageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/data/site-config'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Contact Us',
    description: `Contact Odds & Ends Handyman Service in Rockland County, NY. Call or text Dan at ${siteConfig.phoneFormatted} for a free estimate. Available Monday-Saturday.`,
    path: '/contact',
    keywords: ['contact handyman', 'Rockland County handyman phone', 'free estimate'],
  })
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
