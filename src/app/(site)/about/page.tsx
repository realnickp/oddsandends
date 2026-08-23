import { generatePageMetadata } from '@/lib/metadata'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { siteConfig } from '@/data/site-config'
import AboutContent from './AboutContent'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'About Odds & Ends Home Services | Tuxedo, NY',
    description: `Meet the Odds & Ends Home Services team. Over ${siteConfig.yearsExperience} years of trusted craftsmanship, now focused on Tuxedo, Tuxedo Park & Rockland County, NY.`,
    path: '/about',
    keywords: ['about', 'Odds & Ends Home Services', 'Tuxedo NY', 'Rockland County', 'craftsmanship'],
  })
}

export default function AboutPage() {
  return (
    <>
      <AboutContent />
    </>
  )
}
