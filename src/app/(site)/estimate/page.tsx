import { generatePageMetadata } from '@/lib/metadata'
import EstimateContent from './EstimateContent'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Free Handyman Estimate | Odds & Ends Rockland County',
    description:
      'Request a free, no-obligation estimate from Odds & Ends Handyman Service. Describe your project and Dan will get back to you with an honest quote.',
    path: '/estimate',
    keywords: ['free estimate', 'handyman', 'Rockland County', 'quote', 'home repair'],
  })
}

export default function EstimatePage() {
  return <EstimateContent />
}
