import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const areas = [
  { name: 'Nyack', slug: 'nyack' },
  { name: 'New City', slug: 'new-city' },
  { name: 'Clarkstown', slug: 'clarkstown' },
  { name: 'Piermont', slug: 'piermont' },
  { name: 'Tappan', slug: 'tappan' },
  { name: 'Grandview on Hudson', slug: 'grandview-on-hudson' },
  { name: 'Sparkill', slug: 'sparkill' },
  { name: 'Pomona', slug: 'pomona' },
  { name: 'Nanuet', slug: 'nanuet' },
  { name: 'Pearl River', slug: 'pearl-river' },
  { name: 'Suffern', slug: 'suffern' },
  { name: 'Spring Valley', slug: 'spring-valley' },
  { name: 'Haverstraw', slug: 'haverstraw' },
  { name: 'Stony Point', slug: 'stony-point' },
  { name: 'Orangetown', slug: 'orangetown' },
  { name: 'Ramapo', slug: 'ramapo' },
]

export function AreasSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-white/30" />
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full border border-white/20" />
        <div className="absolute top-1/4 left-1/4 w-[38rem] h-[38rem] rounded-full border border-white/10" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full border border-white/20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-white/10" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Service Areas
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Serving All of Rockland County
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              From the Hudson River villages to the western hills, we proudly serve
              homeowners throughout Rockland County, New York.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {areas.map((area, i) => (
            <ScrollReveal key={area.slug} delay={(i % 8) * 50}>
              <Link
                href={`/areas/${area.slug}`}
                className="group flex items-center gap-3 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] hover:border-blue-400/30 rounded-xl px-5 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <MapPin className="h-4 w-4 text-blue-400 shrink-0" />
                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                  {area.name}
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-10">
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:gap-3 transition-all"
            >
              View All Service Areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
