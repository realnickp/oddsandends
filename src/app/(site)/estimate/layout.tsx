import { generatePageMetadata } from '@/lib/metadata'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Request a Free Estimate',
    description: `Request a free, no-obligation estimate from Odds & Ends Handyman Service. Serving Rockland County, NY. Describe your project and Dan will respond with an honest quote — usually within hours.`,
    path: '/estimate',
    keywords: ['free estimate', 'handyman quote', 'Rockland County estimate', 'home repair quote'],
  })
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children
}
