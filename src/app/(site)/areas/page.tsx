import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { generatePageMetadata } from '@/lib/metadata'
import { cities } from '@/data/cities'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Service Areas | Tuxedo, Tuxedo Park & Rockland, NY',
    description:
      'Odds & Ends Handyman Service proudly serves Tuxedo, Tuxedo Park, and all of Rockland County, NY — Sloatsburg, Suffern, Nyack, New City, and more. Free estimates.',
    path: '/areas',
    keywords: ['home services Tuxedo NY', 'Tuxedo Park contractor', 'Rockland County handyman', 'handyman near me', 'local handyman NY'],
  })
}

const tuxedoCities = cities.filter((c) => c.county === 'Orange')
const rocklandCities = cities.filter((c) => c.county !== 'Orange')

export default function AreasPage() {
  return (
    <>
      {/* Dark Hero */}
      <section className="relative bg-gray-950 overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ name: 'Service Areas', url: '/areas' }]} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-20 md:pb-28">
          <ScrollReveal direction="up">
            <div className="max-w-3xl">
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                Service Areas
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Home Services in{' '}
                <span className="text-gradient">Tuxedo &amp; Rockland County</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Our home turf is the Town of Tuxedo — the Village of Tuxedo Park, Eagle
                Valley, Southfields, Sterling Forest, and Arden — where we intend to be
                every homeowner&apos;s go-to. And we still proudly serve all of Rockland
                County, where Odds &amp; Ends built its name over two decades.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="wave" fromColor="#030712" toColor="#ffffff" />

      {/* Tuxedo — our home turf */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-9 w-9 rounded-lg bg-emerald-600 flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <p className="text-emerald-700 font-semibold text-xs uppercase tracking-[0.2em]">
                Our Home Turf
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Tuxedo &amp; Tuxedo Park
            </h2>
            <p className="text-gray-600 font-light max-w-2xl mb-10">
              A small town deserves a go-to it can count on. From historic homes behind
              the Tuxedo Park gate to wooded lots in Eagle Valley and Southfields — this
              is where we&apos;re building our reputation, one neighbor at a time.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {tuxedoCities.map((city, i) => (
              <ScrollReveal key={city.slug} direction="up" delay={i * 80}>
                <Link
                  href={`/areas/${city.slug}`}
                  className="group relative block rounded-2xl overflow-hidden border border-gray-100 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/50 hover:-translate-y-1 transition-all duration-300 h-[260px] md:h-[300px]"
                >
                  <Image
                    src={city.image}
                    alt={`${city.name}, New York`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-bold text-white text-2xl mb-1 drop-shadow-sm">
                      {city.name}
                    </h3>
                    <p className="text-white/85 font-light text-sm mb-3 drop-shadow-sm">
                      {city.heroSubheadline}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-emerald-300 font-semibold text-sm group-hover:gap-2.5 transition-all">
                      View Services <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rockland County */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="border-t border-gray-200 pt-16 mb-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-lg bg-blue-600 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em]">
                  Where We Built Our Name
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Rockland County
              </h2>
              <p className="text-gray-600 font-light max-w-2xl">
                Odds &amp; Ends has served every corner of Rockland County since 2001 — from
                the Hudson River villages to the western hills — and we still do.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rocklandCities.map((city, i) => (
              <ScrollReveal key={city.slug} direction="up" delay={(i % 8) * 50}>
                <Link
                  href={`/areas/${city.slug}`}
                  className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-gray-600 font-light text-sm mb-4">
                    Rockland County, {city.state}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-blue-700 font-semibold text-sm group-hover:gap-2.5 transition-all">
                    View Services <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
