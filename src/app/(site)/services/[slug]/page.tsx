import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { Phone, ArrowRight, MapPin, CheckCircle2, Wrench, Star, Shield, Clock } from 'lucide-react'
import { services } from '@/data/services'
import { blogPosts } from '@/data/blog-posts'
import { cities } from '@/data/cities'
import { siteConfig } from '@/data/site-config'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { ProjectBuilderCard } from '@/components/forms/ProjectBuilderCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { generateServiceMetadata } from '@/lib/metadata'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import { phoneHref } from '@/lib/utils'
import { EstimateChoiceButton } from '@/components/forms/EstimateChoiceButton'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return generateServiceMetadata(service)
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const relatedServices = services.filter((s) =>
    service.relatedServices.includes(s.slug)
  )

  const heroImage = service.image ? { src: service.image, alt: service.altText || service.name } : null

  const trustBadges = [
    { icon: Shield, label: 'Licensed & Insured' },
    { icon: Clock, label: 'Est. 2001' },
    { icon: Star, label: '5-Star Rated' },
    { icon: Phone, label: 'Fast Response' },
  ]

  return (
    <>
      <SchemaMarkup
        schema={[
          serviceSchema({
            name: service.name,
            description: service.shortDescription,
            slug: service.slug,
          }),
          faqSchema(service.faqs),
        ]}
      />

      <SchemaMarkup
        schema={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.name, url: `/services/${service.slug}` },
        ])}
      />

      {/* ── 1. Breadcrumbs ── */}
      <section className="bg-gray-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="text-xs text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-gray-300 transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">{service.name}</span>
          </nav>
        </div>
      </section>

      {/* ── 2. Dark Hero ── */}
      <section className="bg-gray-950 relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {heroImage && (
          <div className="absolute inset-0 opacity-[0.12]">
            <Image
              src={heroImage.src}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <ScrollReveal>
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                {service.name}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {service.heroHeadline}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-8">
                {service.heroSubheadline}
              </p>
            </ScrollReveal>

            {/* Trust badges */}
            <ScrollReveal delay={250}>
              <div className="flex flex-wrap gap-3 mb-10">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-2"
                  >
                    <badge.icon className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium text-gray-300">{badge.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={phoneHref(siteConfig.phone)}
                  className="inline-flex items-center justify-center gap-2.5 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all animate-pulse-glow"
                >
                  <Phone className="h-5 w-5" />
                  Call for Free Estimate
                </a>
                <EstimateChoiceButton
                  serviceSlug={service.slug}
                  serviceName={service.name}
                  className="inline-flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-sm text-white hover:bg-white/15 border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 3. Section Divider ── */}
      <SectionDivider variant="curve" fromColor="#030712" toColor="#ffffff" />

      {/* ── 4. Main Content — 2-column with sticky sidebar ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2 space-y-12">
              <ScrollReveal>
                <div className="prose prose-lg max-w-none">
                  {service.intro.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-500 font-light leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {heroImage && (
                <ScrollReveal>
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                    <Image
                      src={heroImage.src}
                      alt={heroImage.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </ScrollReveal>
              )}
            </div>

            <div className="hidden lg:block">
              <div className="sticky top-28">
                <ProjectBuilderCard serviceSlug={service.slug} serviceName={service.name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose Us Cards ── */}
      {service.whyChooseUsCards.length > 0 && (
        <section className="py-20 md:py-28 bg-gray-50/60">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                  The {siteConfig.shortName} Difference
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Why Choose Us
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.whyChooseUsCards.map((card, i) => (
                <ScrollReveal key={card.title} delay={i * 80}>
                  <div className="group relative bg-white rounded-2xl border border-gray-200/80 p-7 h-full hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/40 transition-all duration-500">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 font-light leading-relaxed text-sm">
                      {card.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. Our Process — Vertical Timeline ── */}
      {service.processSteps.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-14">
                <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                  How It Works
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Our Process
                </h2>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto">
              {service.processSteps.map((step, i) => {
                const isLast = i === service.processSteps.length - 1
                return (
                  <ScrollReveal key={step.title} delay={i * 100}>
                    <div className="relative flex gap-6 pb-12 last:pb-0">
                      {/* Timeline connector */}
                      {!isLast && (
                        <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-blue-200 to-gray-200" />
                      )}

                      {/* Numbered circle */}
                      <div className="relative z-10 shrink-0">
                        <div className="h-12 w-12 rounded-full bg-gray-950 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-gray-950/20">
                          {i + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-1 pb-2">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-500 font-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 7. Common Problems ── */}
      <section className="py-20 md:py-28 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Problems We Solve
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              Common Problems We Fix
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.commonProblems.map((problem, i) => (
              <ScrollReveal key={problem} delay={i * 60}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-200/80 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed pt-1">{problem}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Job Examples ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Real Examples
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              Jobs We Handle
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.jobExamples.map((example, i) => (
              <ScrollReveal key={example} delay={i * 60}>
                <div className="flex items-start gap-3 bg-green-50/50 rounded-xl p-5 border border-green-100/60 hover:border-green-200 hover:shadow-md transition-all duration-300">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed pt-1">{example}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Why Hire a Handyman ── */}
      <section className="py-20 md:py-28 bg-gray-50/60">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-white rounded-3xl border border-gray-200/80 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/60 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                    <Wrench className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em]">
                    Why a Pro
                  </p>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Why Hire a Pro?
                </h2>
                <p className="text-gray-500 font-light leading-relaxed text-lg">
                  {service.whyHireHandyman}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 10. Areas Served — Dark Section ── */}
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
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Service Areas
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Serving All of Rockland County
            </h2>
            <p className="text-gray-400 font-light mb-10 max-w-3xl text-lg">
              We provide this service to homeowners across every community in Rockland County, NY.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {cities.map((city, i) => (
              <ScrollReveal key={city.slug} delay={(i % 8) * 40}>
                <Link
                  href={`/areas/${city.slug}`}
                  className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 hover:bg-white/[0.06] hover:border-blue-500/30 transition-all text-sm font-medium text-gray-400 hover:text-blue-300"
                >
                  <MapPin className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                  {city.name}
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromColor="#030712" toColor="#ffffff" />

      {/* ── 11. Related Services ── */}
      {relatedServices.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal>
              <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                You Might Also Need
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                Related Services
              </h2>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {relatedServices.map((related, i) => {
                const relatedImage = related.image
                  ? { src: related.image, alt: related.altText || related.name }
                  : null
                return (
                  <ScrollReveal key={related.slug} delay={i * 80}>
                    <Link
                      href={`/services/${related.slug}`}
                      className="group block h-full rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-500"
                    >
                      {relatedImage ? (
                        <div className="relative h-full min-h-[260px]">
                          <Image
                            src={relatedImage.src}
                            alt={relatedImage.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="font-bold text-white group-hover:text-blue-200 transition-colors mb-1">
                              {related.name}
                            </h3>
                            <p className="text-white/70 text-sm font-light mb-3 line-clamp-2">
                              {related.shortDescription}
                            </p>
                            <span className="text-blue-300 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                              Learn More <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white p-6 h-full">
                          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white mb-4">
                            <Wrench className="h-5 w-5" />
                          </div>
                          <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                            {related.name}
                          </h3>
                          <p className="text-gray-500 text-sm font-light mb-3 line-clamp-2">
                            {related.shortDescription}
                          </p>
                          <span className="text-blue-700 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn More <ArrowRight className="h-3.5 w-3.5" />
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
      )}

      {/* ── 12. Related Blog Posts ── */}
      {(() => {
        const relatedPosts = blogPosts
          .filter((p) => p.relatedServices?.includes(service.slug) || p.category?.toLowerCase().includes(service.name.toLowerCase().split(' ')[0]))
          .slice(0, 3)

        if (relatedPosts.length === 0) {
          const fallbackPosts = blogPosts.slice(0, 3)
          return (
            <section className="py-16 md:py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4">
                <ScrollReveal>
                  <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                    Tips & Guides
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    Helpful Home Improvement Articles
                  </h2>
                </ScrollReveal>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fallbackPosts.map((post, i) => (
                    <ScrollReveal key={post.slug} delay={i * 80}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:border-blue-200 transition-all group"
                      >
                        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">{post.category}</p>
                        <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">{post.title}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
                <ScrollReveal delay={300}>
                  <div className="text-center mt-8">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-600 transition-colors">
                      View All Articles
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </section>
          )
        }

        return (
          <section className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <ScrollReveal>
                <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                  Tips & Guides
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Related Articles &amp; Tips
                </h2>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((post, i) => (
                  <ScrollReveal key={post.slug} delay={i * 80}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:border-blue-200 transition-all group"
                    >
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">{post.category}</p>
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">{post.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal delay={300}>
                <div className="text-center mt-8">
                  <Link href="/blog" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-600 transition-colors">
                    View All Articles
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </section>
        )
      })()}

      {/* ── 13. FAQs ── */}
      <FAQSection
        faqs={service.faqs}
        title="Frequently Asked Questions"
        subtitle={`Common questions about this service`}
      />

      {/* ── 14. CTA ── */}
      <CTASection
        headline="Ready to Get Started?"
        subheadline="Dan is ready to help. Call, text, or request your free estimate today. No obligation, no pressure — just honest, quality work."
      />
    </>
  )
}
