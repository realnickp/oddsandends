import { generatePageMetadata } from '@/lib/metadata'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Request a Free Estimate',
    description: `Request a free, no-obligation estimate from Odds & Ends Home Services. Serving Tuxedo, Tuxedo Park & Rockland County, NY. Describe your project and we'll respond with an honest quote — usually within hours.`,
    path: '/estimate',
    keywords: ['free estimate', 'handyman quote', 'Tuxedo NY estimate', 'home repair quote'],
  })
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children
}
