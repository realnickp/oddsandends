import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Phone, ArrowRight, MapPin, CheckCircle2, Wrench, Star, Shield, Clock, Home } from 'lucide-react'
import { cities } from '@/data/cities'
import { services } from '@/data/services'
import { siteConfig } from '@/data/site-config'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { EstimateForm } from '@/components/forms/EstimateForm'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { generateCityMetadata } from '@/lib/metadata'
import { faqSchema } from '@/lib/schema'
import { phoneHref } from '@/lib/utils'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const city = cities.find((c) => c.slug === slug)
  if (!city) return {}
  return generateCityMetadata(city)
}

const howWeWorkSteps = [
  {
    icon: Phone,
    title: 'Get in Touch',
    description: 'Call, text, or fill out our estimate form to tell us about your project.',
  },
  {
    icon: Home,
    title: 'Free On-Site Estimate',
    description: 'Dan visits your property and provides a clear, written quote — no surprises.',
  },
  {
    icon: Clock,
    title: 'Schedule the Work',
    description: 'Pick a date that works for you. Most projects start within days.',
  },
  {
    icon: Shield,
    title: 'Quality Results',
    description: 'Professional workmanship with full cleanup and a walkthrough when done.',
  },
]

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params
  const city = cities.find((c) => c.slug === slug)
  if (!city) notFound()

  const nearbyCities = cities.filter((c) => city.nearbyAreas.includes(c.slug))
  const popularServices = city.popularServiceSlugs
    .map((s) => services.find((svc) => svc.slug === s))
    .filter(Boolean)

  return (
    <>
      <SchemaMarkup schema={faqSchema(city.faqs)} />

      {/* ─── 1. Dark Hero ─── */}
      <section className="relative bg-gray-950 overflow-hidden">
        {/* Drone aerial background */}
        <div className="absolute inset-0">
          <Image
            src={city.image}
            alt={`Aerial view of ${city.name}, ${city.state}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/80 to-gray-950/95" />
        </div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4">
          <Breadcrumbs
            items={[
              { name: 'Service Areas', url: '/areas' },
              { name: city.name, url: `/areas/${city.slug}` },
            ]}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-6 pb-20 md:pb-28">
          <ScrollReveal direction="up">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-blue-300">
                  {city.county}, {city.state}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
                {city.heroHeadline}
              </h1>
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-8">
                {city.heroSubheadline}
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span>5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span>Fast Response</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  <span>Est. {siteConfig.established}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={phoneHref(siteConfig.phone)}
                  className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-blue-600/25"
                >
                  <Phone className="h-5 w-5" />
                  Call for Free Estimate
                </a>
                <Link
                  href="/estimate"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-lg transition-all bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
                >
                  Request Estimate Online
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 2. Wave Divider ─── */}
      <SectionDivider variant="wave" fromColor="#030712" toColor="#ffffff" />

      {/* ─── 3. Two-Column: Main Content + Estimate Sidebar ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-14">
              {/* 3a. Intro */}
              <ScrollReveal direction="up">
                <p className="text-gray-500 font-light leading-relaxed text-lg">
                  {city.intro}
                </p>
              </ScrollReveal>

              {/* 3b. Why Homeowners Choose Us */}
              <ScrollReveal direction="up" delay={100}>
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Why Local Homeowners Choose {siteConfig.shortName}
                  </h2>
                  <p className="text-blue-100 font-light leading-relaxed mb-6">
                    {city.whyChooseUs}
                  </p>
                  <div className="border-t border-white/20 pt-5">
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-blue-200" />
                      The Local Advantage
                    </h3>
                    <p className="text-blue-100/80 font-light leading-relaxed">
                      {city.localAdvantage}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* 3c. Stats row */}
              {city.stats.length > 0 && (
                <ScrollReveal direction="up" delay={150}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {city.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center"
                      >
                        <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              )}

              {/* 3d. Housing + Neighborhoods */}
              <ScrollReveal direction="up" delay={100}>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                      <Home className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em]">
                      Local Knowledge
                    </p>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Local Housing &amp; Neighborhoods
                  </h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-6">
                    {city.housingStock}
                  </p>

                  {city.neighborhoods.length > 0 && (
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Neighborhoods We Serve
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {city.neighborhoods.map((n) => (
                          <span
                            key={n}
                            className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3.5 py-1.5 text-sm text-gray-700"
                          >
                            <MapPin className="h-3 w-3 text-blue-500" />
                            {n}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>

              {/* 3e. Local Tips / Permit Info */}
              {city.localTips && (
                <ScrollReveal direction="up" delay={100}>
                  <div className="border-l-4 border-blue-600 bg-blue-50/50 rounded-r-2xl p-6 md:p-8">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      Local Tips &amp; Permit Info
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {city.localTips}
                    </p>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* RIGHT COLUMN — Sticky Sidebar */}
            <div>
              <ScrollReveal direction="right" delay={200}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xl shadow-gray-200/50 sticky top-24">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    Get Your Free Estimate
                  </h3>
                  <p className="text-sm text-gray-500 font-light mb-5">
                    Tell us about your project
                  </p>
                  <EstimateForm compact />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Popular Services ─── */}
      {popularServices.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Most Requested
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                Popular Services in the Area
              </h2>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularServices.map((service, i) => (
                <ScrollReveal key={service!.slug} direction="up" delay={i * 80}>
                  <Link
                    href={`/services/${service!.slug}`}
                    className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    {service!.image && (
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={service!.image}
                          alt={service!.altText || service!.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                        {service!.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-light line-clamp-2">
                        {service!.shortDescription}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 mt-3 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={300}>
              <div className="text-center mt-10">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  View All Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ─── 5. Full Service List (Dark) ─── */}
      <SectionDivider variant="curve" fromColor={popularServices.length > 0 ? '#f9fafb' : '#ffffff'} toColor="#030712" flip />
      <section className="relative bg-gray-950 py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-blue-600/8 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em]">
                Our Services
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Full Service List
            </h2>
            <p className="text-gray-400 font-light mb-10 max-w-2xl">
              Every service we offer is available in {city.name} and throughout {siteConfig.county}. Click any to learn more.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} direction="up" delay={i * 30}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3.5 border border-white/10 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 text-sm font-medium text-gray-300 hover:text-white block"
                >
                  {service.name}
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider variant="wave" fromColor="#030712" toColor="#ffffff" />

      {/* ─── 6. How We Work ─── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Simple Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                How We Work
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWorkSteps.map((step, i) => (
              <ScrollReveal key={step.title} direction="up" delay={i * 100}>
                <div className="relative bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 h-full">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold rounded-full h-7 w-7 flex items-center justify-center shadow-lg shadow-blue-600/30">
                    {i + 1}
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mt-2 mb-4">
                    <step.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. Common Needs ─── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up">
            <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Common Projects
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Common Home Repairs We Handle
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {city.commonNeeds.map((need, i) => (
              <ScrollReveal key={need} direction="up" delay={i * 40}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:border-blue-200 hover:shadow-md hover:shadow-blue-50 transition-all duration-300">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-medium">{need}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. Nearby Areas ─── */}
      {nearbyCities.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal direction="up">
              <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Nearby Areas
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                Also Serving Nearby Areas
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {nearbyCities.map((nearby, i) => (
                <ScrollReveal key={nearby.slug} direction="up" delay={i * 80}>
                  <Link
                    href={`/areas/${nearby.slug}`}
                    className="group flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-blue-700 transition-colors">
                      {nearby.name}
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── 9. FAQs ─── */}
      <FAQSection
        faqs={city.faqs}
        title="Frequently Asked Questions"
        subtitle={`Common questions from homeowners in ${city.name}`}
      />

      {/* ─── 10. CTA ─── */}
      <CTASection
        headline="Ready to Get Started?"
        subheadline={`${siteConfig.ownerFirstName} has been serving ${city.name} and all of ${siteConfig.county} since ${siteConfig.established}. Call, text, or request your free estimate today.`}
      />
    </>
  )
}
