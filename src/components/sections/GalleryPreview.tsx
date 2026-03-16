import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const galleryImages = [
  { src: '/images/site/firepit-deck.jpg', alt: 'Custom fire pit and deck area', category: 'Outdoor', aspect: 'aspect-[3/4] md:row-span-2' },
  { src: '/images/before-after/5-after.jpg', alt: 'Complete kitchen renovation', category: 'Kitchen', aspect: 'aspect-[4/3]' },
  { src: '/images/site/outdoor-stairs.jpg', alt: 'LED lit outdoor stairway', category: 'Outdoor Lighting', aspect: 'aspect-[3/4] md:row-span-2' },
  { src: '/images/before-after/4-after.jpg', alt: 'Modern bathroom renovation', category: 'Bathroom', aspect: 'aspect-[3/4]' },
  { src: '/images/site/pergola.jpg', alt: 'Custom pergola build', category: 'Custom Build', aspect: 'aspect-[4/3]' },
  { src: '/images/before-after/3-after.jpg', alt: 'Custom wine cellar with stone wall', category: 'Custom Work', aspect: 'aspect-[4/3]' },
]

export function GalleryPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              See the Quality for Yourself
            </h2>
            <p className="text-lg text-gray-500 font-light">
              Real projects completed for real homeowners across Rockland County.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-fr">
          {galleryImages.map((image, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div
                className={`group relative ${image.aspect} rounded-2xl overflow-hidden cursor-pointer`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {image.category}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
            >
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
