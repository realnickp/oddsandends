import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, Wrench, Paintbrush, Hammer, Tv, Droplets, Home, Lightbulb, Grid3X3 } from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'
import { services } from '@/data/services'
import { siteConfig } from '@/data/site-config'
import { phoneHref } from '@/lib/utils'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { CTASection } from '@/components/sections/CTASection'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Handyman Services in Rockland County, NY',
    description:
      'Over 30 professional handyman services in Rockland County, NY. TV mounting, drywall repair, painting, deck repair, plumbing, and more. Free estimates from Odds & Ends.',
    path: '/services',
    keywords: ['handyman services', 'home repair services', 'Rockland County handyman services'],
  })
}

/* Get image from service data */
function getServiceImage(slug: string) {
  const service = services.find((s) => s.slug === slug)
  if (service?.image) return { src: service.image, alt: service.altText || service.name }
  return null
}

/* Category icons for the visual treatment */
const categoryIcons: Record<string, React.ReactNode> = {
  'tv-mounting': <Tv className="h-5 w-5" />,
  'drywall-repair': <Hammer className="h-5 w-5" />,
  'painting': <Paintbrush className="h-5 w-5" />,
  'deck-repair': <Home className="h-5 w-5" />,
  'bathroom-renovation': <Droplets className="h-5 w-5" />,
  'kitchen-renovation': <Home className="h-5 w-5" />,
  'light-fixture-installation': <Lightbulb className="h-5 w-5" />,
  'ceiling-fan-installation-and-replacement': <Lightbulb className="h-5 w-5" />,
}

/* Featured services (will get larger cards) */
const featuredSlugs = ['tv-mounting', 'painting', 'deck-repair', 'bathroom-renovation', 'kitchen-renovation', 'flooring']

export default function ServicesPage() {
  const featuredServices = services.filter((s) => featuredSlugs.includes(s.slug))
  const otherServices = services.filter((s) => !featuredSlugs.includes(s.slug))

  return (
    <>
      {/* Breadcrumbs on dark */}
      <section className="bg-gray-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="text-xs text-gray-500">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Services</span>
          </nav>
        </div>
      </section>

      {/* Dark Hero */}
      <section className="bg-gray-950 relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_60%)]" />
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
              What We Do
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
              Professional Handyman Services in Rockland County
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
              Over {services.length} home repair and improvement services, all handled by one
              trusted professional with 20+ years of experience. No job is too
              small.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex gap-8 mt-10">
              <div>
                <p className="text-3xl font-bold text-white">{services.length}+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Services</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white">20+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Years Experience</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Five-Star Rated</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="curve" fromColor="#030712" toColor="#ffffff" />

      {/* Featured Services — Bento Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="mb-14">
              <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Most Popular
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured Services
              </h2>
              <p className="text-lg text-gray-500 font-light max-w-2xl">
                Our most-requested services, backed by real project experience and five-star reviews.
              </p>
            </div>
          </ScrollReveal>

          {/* Uniform grid — all cards same size */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featuredServices.map((service, i) => {
              const image = getServiceImage(service.slug)

              return (
                <ScrollReveal
                  key={service.slug}
                  delay={i * 80}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative block rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-500 h-[320px] md:h-[360px]"
                  >
                    {image ? (
                      <>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-bold text-white text-xl mb-2">
                            {service.name}
                          </h3>
                          <p className="text-white/70 text-sm font-light line-clamp-2 mb-3">
                            {service.shortDescription}
                          </p>
                          <span className="inline-flex items-center gap-1.5 text-blue-300 font-semibold text-sm group-hover:gap-2.5 transition-all">
                            Learn More <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="h-full bg-gradient-to-br from-gray-50 to-white p-6 flex flex-col justify-end">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white mb-4">
                          {categoryIcons[service.slug] || <Wrench className="h-5 w-5" />}
                        </div>
                        <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-blue-700 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-500 text-sm font-light line-clamp-2 mb-3">
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
            })}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/[0.04]" />

        <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-lg text-blue-100/80 font-light mb-8 max-w-xl mx-auto">
              No worries. Call or text Dan and describe what&apos;s going on — he&apos;ll help
              figure out the right solution and give you an honest quote.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={phoneHref(siteConfig.phone)}
                className="inline-flex items-center gap-2.5 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all animate-pulse-glow"
              >
                <Phone className="h-5 w-5" />
                Call {siteConfig.phoneFormatted}
              </a>
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm text-white hover:bg-white/15 border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                Request Free Estimate
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* All Other Services */}
      <section className="py-20 md:py-28 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.06),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="mb-14">
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Full Service List
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                All Services
              </h2>
              <p className="text-lg text-gray-400 font-light max-w-2xl">
                From quick fixes to custom builds — if it&apos;s on your to-do list, Dan can handle it.
              </p>
            </div>
          </ScrollReveal>

          {/* Mobile: horizontal scroll carousel */}
          <div className="md:hidden overflow-x-auto scroll-snap-x -mx-4 px-4 pb-4">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {otherServices.map((service, i) => {
                const image = getServiceImage(service.slug)
                return (
                  <ScrollReveal key={service.slug} delay={i * 40}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group block w-[280px] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-blue-500/30 transition-all duration-500 snap-start"
                    >
                      {image ? (
                        <div className="relative h-[180px]">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="280px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="font-bold text-white text-lg mb-1 group-hover:text-blue-300 transition-colors">
                              {service.name}
                            </h3>
                            <span className="inline-flex items-center gap-1.5 text-blue-400 font-semibold text-sm group-hover:gap-2.5 transition-all">
                              Learn More <ArrowRight className="h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white/[0.03] p-6">
                          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white mb-4">
                            {categoryIcons[service.slug] || <Wrench className="h-5 w-5" />}
                          </div>
                          <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-300 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-500 text-sm font-light leading-relaxed mb-4 line-clamp-2">
                            {service.shortDescription}
                          </p>
                          <span className="inline-flex items-center gap-1.5 text-blue-400 font-semibold text-sm group-hover:gap-2.5 transition-all">
                            Learn More <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      )}
                    </Link>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>

          {/* Desktop: grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {otherServices.map((service, i) => {
              const image = getServiceImage(service.slug)
              return (
                <ScrollReveal key={service.slug} delay={(i % 8) * 60}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block h-full rounded-2xl overflow-hidden border border-white/[0.06] hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-950/20 transition-all duration-500"
                  >
                    {image ? (
                      <div className="relative h-full min-h-[240px]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <h3 className="font-bold text-white text-lg mb-1 group-hover:text-blue-300 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-400 text-sm font-light leading-relaxed mb-3 line-clamp-2">
                            {service.shortDescription}
                          </p>
                          <span className="inline-flex items-center gap-1.5 text-blue-400 font-semibold text-sm group-hover:gap-2.5 transition-all">
                            Learn More <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white/[0.03] p-6 h-full">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white mb-4">
                          {categoryIcons[service.slug] || <Wrench className="h-5 w-5" />}
                        </div>
                        <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-300 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-500 text-sm font-light leading-relaxed mb-4 line-clamp-2">
                          {service.shortDescription}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-blue-400 font-semibold text-sm group-hover:gap-2.5 transition-all">
                          Learn More <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    )}
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromColor="#030712" toColor="#ffffff" />

      {/* Bottom icon grid — quick visual reference */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 mb-5">
                <Grid3X3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                One Call Handles It All
              </h3>
              <p className="text-gray-500 font-light max-w-lg mx-auto">
                Why juggle multiple contractors? Dan handles everything from quick fixes to
                custom builds — all with the same care and five-star quality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
