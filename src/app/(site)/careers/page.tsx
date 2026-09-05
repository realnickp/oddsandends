import { generatePageMetadata } from '@/lib/metadata'
import CareersContent from './CareersContent'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Careers | Join the Odds & Ends Team in Tuxedo, NY',
    description:
      'Odds & Ends Handyman Service is hiring in Tuxedo & Rockland County, NY. Painters, carpenters, drywall, flooring, and all-around handyman talent. Apply online in about 2 minutes.',
    path: '/careers',
    keywords: [
      'handyman jobs Tuxedo NY',
      'carpenter jobs Rockland County',
      'painter jobs Rockland County NY',
      'construction jobs Tuxedo NY',
      'handyman careers',
      'skilled trades jobs Orange County NY',
    ],
  })
}

export default function CareersPage() {
  return <CareersContent />
}
