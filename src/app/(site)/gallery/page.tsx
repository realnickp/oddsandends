import { generatePageMetadata } from '@/lib/metadata'
import { GalleryClient } from './GalleryClient'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Project Gallery',
    description: `Browse photos of completed handyman projects by Odds & Ends Handyman Service in Rockland County, NY. From kitchen facelifts and custom shelving to deck repairs and pergola builds.`,
    path: '/gallery',
    keywords: ['handyman gallery', 'project photos', 'before and after', 'Rockland County home repair'],
  })
}

export default function GalleryPage() {
  return <GalleryClient />
}
