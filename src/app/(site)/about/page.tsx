import { generatePageMetadata } from '@/lib/metadata'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { ownerSchema } from '@/lib/schema'
import AboutContent from './AboutContent'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'About Odds & Ends Handyman | Rockland County, NY Pro',
    description:
      'Meet Dan Kiely and the Odds & Ends team. Over 25 years of trusted handyman craftsmanship in Rockland County, NY. Honest pricing and quality work.',
    path: '/about',
    keywords: ['about', 'handyman', 'Dan Kiely', 'Rockland County', 'craftsmanship'],
  })
}

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup schema={ownerSchema()} />
      <AboutContent />
    </>
  )
}
