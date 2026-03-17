import { generatePageMetadata } from '@/lib/metadata'
import ContactContent from './ContactContent'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Contact Odds & Ends Handyman Service in Rockland, NY',
    description:
      'Contact Odds & Ends Handyman Service in Rockland County, NY. Call, text, or email for a free estimate. Dan responds quickly to every inquiry.',
    path: '/contact',
    keywords: ['contact', 'handyman', 'Rockland County', 'free estimate', 'phone', 'email'],
  })
}

export default function ContactPage() {
  return <ContactContent />
}
