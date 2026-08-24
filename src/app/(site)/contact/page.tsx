import { generatePageMetadata } from '@/lib/metadata'
import ContactContent from './ContactContent'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Contact Odds & Ends Handyman Service | Tuxedo, NY',
    description:
      'Contact Odds & Ends Handyman Service in Tuxedo & Rockland County, NY. Call, text, or email for a free estimate. We respond quickly to every inquiry.',
    path: '/contact',
    keywords: ['contact', 'home services', 'Tuxedo NY', 'Rockland County', 'free estimate', 'phone', 'email'],
  })
}

export default function ContactPage() {
  return <ContactContent />
}
