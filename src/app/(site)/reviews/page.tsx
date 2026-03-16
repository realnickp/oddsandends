import { generatePageMetadata } from '@/lib/metadata'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { CTASection } from '@/components/sections/CTASection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { reviews, featuredReviews } from '@/data/reviews'
import { siteConfig } from '@/data/site-config'
import { reviewSchema } from '@/lib/schema'
import { Star, Quote, ExternalLink, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Customer Reviews',
    description: `Read five-star Google reviews for Odds & Ends Handyman Service. See why Rockland County homeowners trust Dan Kiely for their home repairs and improvements.`,
    path: '/reviews',
  })
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

export default function ReviewsPage() {
  const avgRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1)

  // Pick the longest featured review as spotlight
  const spotlightReview = featuredReviews.reduce((longest, r) =>
    r.text.length > longest.text.length ? r : longest
  , featuredReviews[0])

  // Remaining reviews (all except the spotlight)
  const remainingReviews = reviews.filter((r) => r !== spotlightReview)

  return (
    <>
      <SchemaMarkup schema={reviewSchema(reviews)} />

      {/* Breadcrumbs on dark */}
      <section className="bg-gray-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="text-xs text-gray-500">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Reviews</span>
          </nav>
        </div>
      </section>

      {/* Dark Hero with prominent 5-star display */}
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
              Customer Reviews
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              What Our Customers Say
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mb-10">
              Don&apos;t just take our word for it. Read what Rockland County homeowners have to
              say about working with Dan.
            </p>
          </ScrollReveal>

          {/* Rating showcase */}
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              {/* Big rating number */}
              <div className="flex items-center gap-4">
                <span className="text-6xl md:text-7xl font-bold text-white">{avgRating}</span>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-6 w-6 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm">
                    Based on <span className="text-white font-semibold">{reviews.length} reviews</span>
                  </p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-16 bg-white/10" />

              {/* 100% badge */}
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">100% Five-Star</p>
                  <p className="text-gray-500 text-sm">Every single review</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-16 bg-white/10" />

              {/* Google badge */}
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <GoogleIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Verified</p>
                  <p className="text-gray-500 text-sm">Google Reviews</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="curve" fromColor="#030712" toColor="#ffffff" />

      {/* Spotlight / Featured Review */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

        <div className="relative max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 mb-6">
                <Quote className="h-7 w-7 text-white" />
              </div>

              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-8">
                &ldquo;{spotlightReview.text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {spotlightReview.name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">{spotlightReview.name}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs">via Google</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* All Reviews - Staggered Masonry */}
      <section className="bg-gray-950 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_60%)]" />
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
                All Reviews
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {reviews.length} Happy Homeowners
              </h2>
              <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
                Every review is a real, verified Google review from a Rockland County homeowner.
              </p>
            </div>
          </ScrollReveal>

          {/* Masonry-style 3-column grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {remainingReviews.map((review, index) => (
              <ScrollReveal key={index} delay={(index % 6) * 80}>
                <div className={`break-inside-avoid bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-500 ${
                  review.featured ? 'ring-1 ring-blue-500/20' : ''
                }`}>
                  {/* Stars + Featured badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    {review.featured && (
                      <span className="text-[10px] uppercase tracking-wider text-blue-400 font-semibold bg-blue-500/10 px-2 py-0.5 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Review text */}
                  <p className="text-gray-300 leading-relaxed text-sm font-light mb-5">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Author + Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <span className="font-semibold text-white text-sm">{review.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GoogleIcon className="h-3.5 w-3.5 text-gray-500" />
                      <span className="text-xs text-gray-500">{formatDate(review.date)}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromColor="#030712" toColor="#ffffff" />

      {/* Google Review CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="shrink-0">
                <div className="h-20 w-20 rounded-2xl bg-white shadow-lg shadow-gray-200/50 flex items-center justify-center">
                  <GoogleIcon className="h-10 w-10 text-gray-700" />
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  See Us on Google
                </h3>
                <p className="text-gray-500 font-light max-w-lg">
                  All our reviews come from verified Google accounts. See for yourself why {siteConfig.shortName} is
                  the most trusted handyman service in {siteConfig.county}.
                </p>
              </div>
              {siteConfig.social.google && (
                <a
                  href={siteConfig.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  View on Google <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        headline="Ready to Experience the Difference?"
        subheadline="Join the growing list of happy Rockland County homeowners. Get your free, no-obligation estimate today."
      />
    </>
  )
}
