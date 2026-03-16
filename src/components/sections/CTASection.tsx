import Link from 'next/link'
import { Phone, ArrowRight, MessageSquare } from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { phoneHref, smsHref } from '@/lib/utils'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function CTASection({
  headline = "Ready to Cross Those Projects Off Your List?",
  subheadline = "Whether it's one small fix or a whole list of things that need attention, Dan is ready to help. Call, text, or request your free estimate today.",
  dark = true,
}: {
  headline?: string
  subheadline?: string
  dark?: boolean
}) {
  if (!dark) {
    return (
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-20 md:py-24 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{headline}</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed text-gray-600">{subheadline}</p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={phoneHref(siteConfig.phone)}
                className="inline-flex items-center gap-2.5 bg-blue-700 text-white hover:bg-blue-800 px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                <Phone className="h-5 w-5" />
                Call {siteConfig.phoneFormatted}
              </a>
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2.5 bg-white text-gray-900 hover:bg-gray-100 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                Free Estimate
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 animate-bg-drift" />

      {/* Decorative circles */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/[0.04]" />
      <div className="absolute -right-20 top-1/3 -translate-y-1/2 w-72 h-72 rounded-full bg-white/[0.03]" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 py-20 md:py-28 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-lg md:text-xl text-blue-100/80 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={phoneHref(siteConfig.phone)}
              className="inline-flex items-center gap-2.5 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all animate-pulse-glow"
            >
              <Phone className="h-5 w-5" />
              Call {siteConfig.phoneFormatted}
            </a>
            <a
              href={smsHref(siteConfig.phone)}
              className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm text-white hover:bg-white/15 border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              <MessageSquare className="h-5 w-5" />
              Text Us
            </a>
            <Link
              href="/estimate"
              className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm text-white hover:bg-white/15 border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Free Estimate
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
