import { generatePageMetadata } from '@/lib/metadata'
import EstimateContent from './EstimateContent'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Free Estimate | Odds & Ends Home Services, Tuxedo NY',
    description:
      'Request a free, no-obligation estimate from Odds & Ends Home Services. Describe your project and we\'ll get back to you with an honest quote.',
    path: '/estimate',
    keywords: ['free estimate', 'home services', 'Tuxedo NY', 'Rockland County', 'quote', 'home repair'],
  })
}

export default function EstimatePage() {
  return <EstimateContent />
}
