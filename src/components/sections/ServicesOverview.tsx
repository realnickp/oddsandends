import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { services } from '@/data/services'

const desktopSlugs = [
  'tv-mounting', 'drywall-repair', 'door-installation', 'deck-repair',
  'painting', 'light-fixture-installation', 'bathroom-renovation',
  'custom-accent-walls', 'built-ins',
]

const mobileSlugs = [...desktopSlugs, 'furniture-assembly']

const desktopServices = desktopSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter(Boolean) as typeof services

const mobileServices = mobileSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter(Boolean) as typeof services

function ServiceCard({ service, delay }: { service: (typeof services)[number]; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <Link
        href={`/services/${service.slug}`}
        className="group relative rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-500 hover:-translate-y-1 block h-full min-h-[240px]"
      >
        {service.image ? (
          <>
            <Image
              src={service.image}
              alt={service.altText || service.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-bold text-white text-lg mb-1">
                {service.name}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-3 line-clamp-2">
                {service.shortDescription}
              </p>
              <span className="inline-flex items-center gap-1.5 text-blue-300 font-semibold text-sm group-hover:gap-2.5 transition-all">
                Learn More <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </>
        ) : (
          <div className="bg-white p-5 h-full flex flex-col">
            <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">
              {service.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
              {service.shortDescription}
            </p>
            <span className="inline-flex items-center gap-1.5 text-blue-700 font-semibold text-sm group-hover:gap-2.5 transition-all">
              Learn More <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        )}
      </Link>
    </ScrollReveal>
  )
}

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              One Call Handles Your Entire To-Do List
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              From small repairs to complete renovations, Dan handles a wide range of home
              improvement work. No job too small, because we know how much the little things matter.
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile: 2-column vertical grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {mobileServices.map((service, i) => (
            <ScrollReveal key={service.slug} delay={(i % 4) * 60}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative rounded-xl overflow-hidden block h-[160px]"
              >
                {service.image ? (
                  <>
                    <Image
                      src={service.image}
                      alt={service.altText || service.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gray-900" />
                )}
                <div className="absolute bottom-0 inset-x-0 p-3.5">
                  <h3 className="font-bold text-white text-sm leading-tight mb-1">
                    {service.name}
                  </h3>
                  <span className="text-blue-300 text-xs font-semibold flex items-center gap-1">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {desktopServices.map((service, i) => (
            <ServiceCard key={service.slug} service={service} delay={(i % 3) * 100} />
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg"
            >
              View All 25+ Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
