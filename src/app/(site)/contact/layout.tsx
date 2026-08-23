import { generatePageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/data/site-config'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Contact Us',
    description: `Contact Odds & Ends Home Services in Tuxedo & Rockland County, NY. Call or text us at ${siteConfig.phoneFormatted} for a free estimate. Available Monday-Saturday.`,
    path: '/contact',
    keywords: ['contact handyman', 'Tuxedo NY home services phone', 'free estimate'],
  })
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
