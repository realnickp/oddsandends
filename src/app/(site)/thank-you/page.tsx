import Link from 'next/link'
import { CheckCircle2, Phone, ArrowRight, MessageSquare } from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { phoneHref, smsHref } from '@/lib/utils'
import { generatePageMetadata } from '@/lib/metadata'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'

export async function generateMetadata() {
  const base = await generatePageMetadata({
    title: 'Thank You',
    description: 'Thank you for contacting Odds & Ends Handyman Service. We will be in touch shortly.',
    path: '/thank-you',
  })
  return {
    ...base,
    robots: { index: false, follow: true },
  }
}

const nextSteps = [
  {
    step: '1',
    title: 'We Review Your Request',
    description: 'Odds & Ends personally reads every estimate request and reviews any photos you included.',
  },
  {
    step: '2',
    title: 'You\'ll Hear Back Soon',
    description: 'We typically respond within a few hours via your preferred contact method.',
  },
  {
    step: '3',
    title: 'Get Your Honest Quote',
    description: 'You\'ll receive a clear, no-obligation estimate with transparent pricing.',
  },
]

export default function ThankYouPage() {
  return (
    <>
      {/* Dark Hero - Success */}
      <section className="relative bg-gray-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Green-tinted glow for success feel */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-24 md:pt-28 md:pb-32">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 animate-pulse-glow">
                <CheckCircle2 className="h-12 w-12 text-emerald-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
                Thank You!
              </h1>
              <p className="text-lg md:text-xl text-gray-400 font-light mb-3 leading-relaxed">
                Your estimate request has been received. We'll review your project details
                and get back to you shortly — usually within a few hours.
              </p>
              <p className="text-gray-500 font-light mb-10">
                For a faster response, feel free to call or text directly.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={phoneHref(siteConfig.phone)}
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-blue-600/25"
                >
                  <Phone className="h-5 w-5" />
                  Call {siteConfig.phoneFormatted}
                </a>
                <a
                  href={smsHref(siteConfig.phone)}
                  className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  <MessageSquare className="h-5 w-5" />
                  Text Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="wave" fromColor="#030712" toColor="#ffffff" />

      {/* What to Expect */}
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Next Steps
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What to Expect
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {nextSteps.map((item, i) => (
              <ScrollReveal key={item.step} direction="up" delay={i * 120}>
                <div className="group flex gap-5 bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50/50 transition-all duration-300">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-gray-500 font-light">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={400}>
            <div className="border-t border-gray-200 pt-10 mt-14 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">While you wait, check out</p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {[
                  { label: 'Our Services', href: '/services' },
                  { label: 'Customer Reviews', href: '/reviews' },
                  { label: 'Back Home', href: '/' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-blue-700 font-semibold text-sm hover:gap-2.5 transition-all"
                  >
                    {link.label} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
