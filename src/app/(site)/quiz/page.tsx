import { generatePageMetadata } from '@/lib/metadata'
import QuizContent from './QuizContent'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Build Your Project | Odds & Ends Handyman Rockland',
    description:
      'Use our project builder to describe your home improvement project. Get a personalized estimate from Odds & Ends Handyman Service in Rockland County.',
    path: '/quiz',
    keywords: ['project builder', 'handyman', 'Rockland County', 'estimate', 'home improvement'],
  })
}

export default function QuizPage() {
  return <QuizContent />
}
