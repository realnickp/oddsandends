import { generatePageMetadata } from '@/lib/metadata'
import QuizContent from './QuizContent'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Build Your Project | Odds & Ends Home Services',
    description:
      'Use our project builder to describe your home improvement project. Get a personalized estimate from Odds & Ends Home Services in Tuxedo & Rockland County.',
    path: '/quiz',
    keywords: ['project builder', 'home services', 'Tuxedo NY', 'Rockland County', 'estimate', 'home improvement'],
  })
}

export default function QuizPage() {
  return <QuizContent />
}
