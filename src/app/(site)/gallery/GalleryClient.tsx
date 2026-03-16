'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, ZoomIn, ArrowRight, Camera } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { CTASection } from '@/components/sections/CTASection'

/* ------------------------------------------------------------------ */
/*  Gallery data                                                       */
/* ------------------------------------------------------------------ */

interface GalleryItem {
  src: string
  alt: string
  title: string
  category: string
  description: string
  span?: string
  beforeSrc?: string
}

const galleryItems: GalleryItem[] = [
  {
    src: '/images/site/pergola.jpg',
    alt: 'Custom lean-to pergola over a deck hot tub',
    title: 'Hot Tub Pergola',
    category: 'Outdoor',
    description: 'Light, modern lean-to pergola designed and built over a deck hot tub in Rockland County.',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/site/firepit-deck.jpg',
    alt: 'Custom fire pit and deck area',
    title: 'Fire Pit & Deck',
    category: 'Outdoor',
    description: 'Custom fire pit with surrounding deck work for outdoor entertaining.',
  },
  {
    src: '/images/site/outdoor-stairs.jpg',
    alt: 'LED-lit outdoor stairway',
    title: 'Outdoor LED Stairway',
    category: 'Outdoor',
    description: 'Beautifully lit outdoor stairs with integrated LED lighting.',
  },
  {
    src: '/images/site/outdoor-living.jpg',
    alt: 'Outdoor living space',
    title: 'Outdoor Living Space',
    category: 'Outdoor',
    description: 'Complete outdoor living area setup for year-round enjoyment.',
  },
  {
    src: '/images/site/tv-mount.jpg',
    alt: 'Professional outdoor TV mount',
    title: 'Outdoor TV Mount',
    category: 'Mounting',
    description: 'Weatherproof TV mounting for outdoor entertainment area.',
  },
  {
    src: '/images/site/kitchen-progress.jpg',
    alt: 'Kitchen renovation in progress',
    title: 'Kitchen Renovation',
    category: 'Kitchen',
    description: 'Mid-project kitchen transformation showing meticulous craftsmanship.',
    span: 'md:col-span-2',
  },
  {
    src: '/images/site/flooring-progress.jpg',
    alt: 'Flooring installation in progress',
    title: 'Flooring Installation',
    category: 'Renovation',
    description: 'New vinyl plank flooring being expertly installed.',
  },
  {
    src: '/images/site/flooring-done.jpg',
    alt: 'Completed flooring project',
    title: 'Flooring Complete',
    category: 'Renovation',
    description: 'Finished flooring transformation — seamless results throughout.',
  },
  {
    src: '/images/site/kitchen-before.jpg',
    alt: 'Kitchen before renovation',
    title: 'Kitchen Starting Point',
    category: 'Kitchen',
    description: 'The starting point for a dramatic kitchen transformation.',
  },
  {
    src: '/images/before-after/1-after.jpg',
    beforeSrc: '/images/before-after/1-before.jpg',
    alt: 'Complete flooring transformation',
    title: 'Flooring Transformation',
    category: 'Before & After',
    description: 'Ripped out old flooring and installed brand new vinyl plank throughout.',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/before-after/2-after.jpg',
    beforeSrc: '/images/before-after/2-before.jpg',
    alt: 'Custom poolside cabana build',
    title: 'Poolside Cabana Build',
    category: 'Before & After',
    description: 'From bare concrete to a custom shaded poolside retreat.',
  },
  {
    src: '/images/before-after/3-after.jpg',
    beforeSrc: '/images/before-after/3-before.jpg',
    alt: 'Custom wine cellar with stone wall',
    title: 'Wine Cellar & Stone Wall',
    category: 'Before & After',
    description: 'Transformed raw drywall into a glass-enclosed wine cellar with stone accent wall.',
  },
  {
    src: '/images/before-after/4-after.jpg',
    beforeSrc: '/images/before-after/4-before.jpg',
    alt: 'Full bathroom renovation',
    title: 'Bathroom Renovation',
    category: 'Before & After',
    description: 'Gutted an outdated bathroom and rebuilt with subway tile, glass shower, and modern fixtures.',
  },
  {
    src: '/images/before-after/5-after.jpg',
    beforeSrc: '/images/before-after/5-before.jpg',
    alt: 'Complete kitchen overhaul',
    title: 'Kitchen Overhaul',
    category: 'Before & After',
    description: 'From dated oak cabinets to a stunning modern kitchen with quartz island.',
    span: 'md:col-span-2',
  },
]

const categories = ['All', ...Array.from(new Set(galleryItems.map((item) => item.category)))]

/* ------------------------------------------------------------------ */
/*  Lightbox                                                           */
/* ------------------------------------------------------------------ */

function Lightbox({
  item,
  onClose,
  showBefore,
  onToggleBefore,
}: {
  item: GalleryItem
  onClose: () => void
  showBefore: boolean
  onToggleBefore: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
      >
        <X className="h-6 w-6 text-white" />
      </button>

      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900">
          <Image
            src={showBefore && item.beforeSrc ? item.beforeSrc : item.src}
            alt={item.alt}
            fill
            className="object-cover"
            sizes="90vw"
            priority
          />

          {item.beforeSrc && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex bg-black/60 backdrop-blur-md rounded-full p-1 gap-1">
              <button
                onClick={() => { if (!showBefore) onToggleBefore() }}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  showBefore ? 'bg-red-500 text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                Before
              </button>
              <button
                onClick={() => { if (showBefore) onToggleBefore() }}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  !showBefore ? 'bg-green-500 text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                After
              </button>
            </div>
          )}
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
          <p className="text-gray-400 text-sm">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Gallery Client Component                                           */
/* ------------------------------------------------------------------ */

export function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null)
  const [showBefore, setShowBefore] = useState(false)

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <>
      {/* Breadcrumbs on dark */}
      <section className="bg-gray-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="text-xs text-gray-500">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Gallery</span>
          </nav>
        </div>
      </section>

      {/* Dark Hero */}
      <section className="bg-gray-950 relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Our Work
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Project Gallery
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
              From custom pergolas to kitchen transformations, see the craftsmanship
              Dan brings to every project across Rockland County.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex gap-8 mt-10">
              <div>
                <p className="text-3xl font-bold text-white">{galleryItems.length}+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Projects</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white">5</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Before & Afters</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white">20+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Years Experience</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="curve" fromColor="#030712" toColor="#ffffff" />

      {/* Category Filter + Masonry Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    category === activeCategory
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  {category}
                  {category !== 'All' && (
                    <span className="ml-1.5 text-xs opacity-60">
                      ({galleryItems.filter(i => i.category === category).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
            {filtered.map((item, i) => (
              <ScrollReveal key={item.src} delay={i * 60} className={item.span || ''}>
                <button
                  onClick={() => {
                    setLightboxItem(item)
                    setShowBefore(false)
                  }}
                  className="group relative w-full h-full rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                    <ZoomIn className="h-4 w-4 text-white" />
                  </div>

                  {item.beforeSrc && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-green-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                      Before & After
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-sm">{item.title}</h3>
                    <p className="text-white/70 text-xs mt-0.5 line-clamp-2">{item.description}</p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Feature Section */}
      <section className="bg-gray-950 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.06),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Transformations
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Before & After
              </h2>
              <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
                See the dramatic transformations Dan delivers for homeowners across Rockland County.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems
              .filter((item) => item.beforeSrc)
              .map((item, i) => (
                <ScrollReveal key={item.src} delay={i * 100}>
                  <button
                    onClick={() => {
                      setLightboxItem(item)
                      setShowBefore(false)
                    }}
                    className="group w-full text-left bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={`${item.title} - After`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ clipPath: 'inset(0 50% 0 0)' }}>
                        <Image
                          src={item.beforeSrc!}
                          alt={`${item.title} - Before`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 17vw"
                        />
                      </div>
                      <div className="absolute top-3 left-3 bg-red-500/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        Before
                      </div>
                      <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        After
                      </div>
                      <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm font-light">{item.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-blue-400 text-sm font-semibold mt-3 group-hover:gap-2.5 transition-all">
                        View Transformation <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromColor="#030712" toColor="#ffffff" />

      {/* Bottom note */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 mb-5">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">More Projects Added Regularly</h3>
              <p className="text-gray-500 font-light max-w-lg mx-auto mb-6">
                We photograph every project. Check back often to see our latest work, or read what
                homeowners say about the results.
              </p>
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
              >
                Read Customer Reviews <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        headline="Ready to Start Your Project?"
        subheadline="Whether it's a quick repair or a custom build, Dan brings the same care and craftsmanship to every job. Get your free estimate today."
      />

      {/* Lightbox */}
      {lightboxItem && (
        <Lightbox
          item={lightboxItem}
          onClose={() => setLightboxItem(null)}
          showBefore={showBefore}
          onToggleBefore={() => setShowBefore(!showBefore)}
        />
      )}
    </>
  )
}
