import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'
import { featuredReviews } from '@/data/reviews'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function ReviewsSection({ limit = 6 }: { limit?: number }) {
  const displayReviews = featuredReviews.slice(0, limit)
  const spotlight = displayReviews[0]
  const carouselReviews = displayReviews.slice(1)

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Customer Reviews
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Don&apos;t Take Our Word for It
            </h2>
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">5.0 out of 5 on Google</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Spotlight review */}
        {spotlight && (
          <ScrollReveal>
            <div className="relative max-w-4xl mx-auto mb-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm">
              {/* Decorative quote mark */}
              <div className="absolute -top-4 left-8 md:left-12 text-7xl md:text-8xl text-blue-200 font-serif leading-none select-none animate-float">
                &ldquo;
              </div>
              <div className="relative pt-8 md:pt-6">
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light mb-6">
                  {spotlight.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                    <span className="text-white font-bold">
                      {spotlight.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{spotlight.name}</p>
                    <div className="flex items-center gap-1.5">
                      <div className="flex">
                        {[...Array(spotlight.rating)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">Google Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Carousel reviews */}
        <ScrollReveal direction="right">
          <div className="scroll-snap-x flex gap-5 overflow-x-auto pb-4 -mx-4 px-4">
            {carouselReviews.map((review) => (
              <div
                key={review.name}
                className="min-w-[80vw] sm:min-w-[45vw] lg:min-w-[30%] shrink-0"
              >
                <div className="bg-gradient-to-br from-blue-100/50 to-blue-50/30 p-px rounded-2xl h-full">
                  <div className="bg-white rounded-[15px] p-6 h-full flex flex-col">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-5">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                        <p className="text-xs text-gray-500">Google Review</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="text-center mt-10">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
            >
              Read All Reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
