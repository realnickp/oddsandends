'use client'

import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { siteConfig } from '@/data/site-config'
import {
  Shield,
  Star,
  CheckCircle2,
  ArrowRight,
  Hammer,
  Heart,
  Eye,
  Sparkles,
  Lightbulb,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const values = [
  {
    icon: Heart,
    title: 'Honesty & Transparency',
    description:
      'Dan provides straightforward, fair pricing with no hidden fees. He\'ll even tell you what you can fix yourself — because doing right by the customer always comes first.',
  },
  {
    icon: Shield,
    title: 'Reliability You Can Count On',
    description:
      'When Dan says he\'ll be there, he\'s there — on time and prepared. He responds quickly, follows through, and finishes what he starts.',
  },
  {
    icon: Eye,
    title: 'Attention to Detail',
    description:
      'Every cut is precise, every edge is clean, and every finish is polished. Dan\'s meticulous approach means the final result always exceeds expectations.',
  },
  {
    icon: Sparkles,
    title: 'Cleanliness & Respect',
    description:
      'Dan treats your home like his own. He protects your floors, cleans up thoroughly — customers often say he leaves spaces cleaner than he found them.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Problem-Solving',
    description:
      'Got a tricky project? Dan thrives on finding smart, practical solutions. He\'ll envision possibilities you hadn\'t considered and bring them to life.',
  },
]

const differentiators = [
  {
    icon: Star,
    title: 'Meticulous Craftsmanship',
    quote: 'His work is beyond exceptional... meticulous in his work.',
    detail:
      'Dan is a self-described perfectionist, and it shows in every project. From custom built-ins to simple repairs, the quality speaks for itself.',
  },
  {
    icon: Shield,
    title: 'Leaves It Cleaner Than He Found It',
    quote: 'He even mopped the floors before leaving!',
    detail:
      'Multiple customers have been amazed at how clean Dan leaves their homes after a project. He treats your space with genuine respect.',
  },
  {
    icon: CheckCircle2,
    title: 'Creative Solutions, Not Cookie-Cutter Fixes',
    quote: 'He figured out how to remove it and replace it with a much better solution.',
    detail:
      'Dan doesn\'t just fix the problem — he finds the best solution. Whether it\'s using marine paint to prevent future water damage or designing a custom pergola, he thinks ahead.',
  },
  {
    icon: Star,
    title: 'Honest, Fair Pricing',
    quote: 'His prices are reasonable... transparent and the quality of work was outstanding.',
    detail:
      'No surprise bills, no upselling. Dan gives you a clear quote upfront and sticks to it. He\'ll even suggest DIY solutions when they make sense for you.',
  },
]

const stats = [
  { number: '20+', label: 'Years of Experience' },
  { number: '30+', label: 'Services Offered' },
  { number: '5.0', label: 'Google Star Rating' },
  { number: '2001', label: 'Established' },
]

export default function AboutContent() {
  return (
    <>
      {/* Hero - Dark */}
      <section className="relative bg-gray-950 overflow-hidden pb-20 pt-8 md:pb-28 md:pt-12">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-8 [&_nav]:py-2 [&_ol]:text-gray-500 [&_span]:text-gray-300 [&_a]:text-gray-500 [&_a:hover]:text-blue-400 [&_svg]:text-gray-600">
            <Breadcrumbs items={[{ name: 'About', url: '/about' }]} />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollReveal direction="up" delay={0}>
                <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                  About Us
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={100}>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  About Odds & Ends Handyman Service
                </h1>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={200}>
                <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
                  Trusted by homeowners across Rockland County since 2001. One man, one
                  mission: exceptional craftsmanship and honest service on every job.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={300}>
                <Link
                  href="/estimate"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition-colors"
                >
                  Get Your Free Estimate
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right" delay={200}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/40">
                <Image
                  src="/images/site/firepit-deck.jpg"
                  alt="Custom fire pit deck built by Odds & Ends Handyman Service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/80 text-sm font-medium">Custom Fire Pit Deck</p>
                  <p className="text-white/60 text-xs">Built by Dan Kiely</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-950 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} direction="up" delay={i * 100}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {stat.number}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromColor="#030712" toColor="#ffffff" />

      {/* Dan's Story - Asymmetric Layout */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
            <div>
              <ScrollReveal direction="left">
                <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                  Meet Dan
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  20+ Years of Passion for Craftsmanship
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={100}>
                <div className="space-y-4 text-gray-500 font-light leading-relaxed text-lg">
                  <p>
                    Dan Kiely founded Odds & Ends Handyman Service in 2001 with a simple
                    philosophy: treat every home with the same care and respect you&apos;d
                    give your own. Over two decades later, that philosophy hasn&apos;t
                    changed.
                  </p>
                  <p>
                    What started as a way to help neighbors with small repairs has grown
                    into one of Rockland County&apos;s most trusted handyman services. Dan
                    handles everything from quick fixes to full room transformations —
                    kitchen facelifts, custom built-in shelving, deck construction,
                    pergolas, and more.
                  </p>
                  <p>
                    But what really sets Dan apart isn&apos;t just his skill — it&apos;s
                    his character. He&apos;s the kind of handyman who will tell you what
                    you can fix yourself, who mops your floors before he leaves, and who
                    won&apos;t rest until the job is done exactly right. His customers
                    don&apos;t just hire him once — they call him back again and again.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right" delay={200}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 aspect-[3/4]">
                  <Image
                    src="/images/site/dan.png"
                    alt="Dan Kiely, owner of Odds & Ends Handyman Service"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                      <Hammer className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Dan Kiely</p>
                      <p className="text-gray-500 text-xs">Owner & Craftsman · Est. {siteConfig.established}</p>
                      <p className="text-green-600 text-xs font-medium flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        Licensed & Insured · Lic# {siteConfig.license.number}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Our Values
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What We Stand For
              </h2>
              <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
                These aren&apos;t just words on a page — they&apos;re the principles Dan
                brings to every single job.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} direction="up" delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-5">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="curve" fromColor="#f9fafb" toColor="#030712" flip />

      {/* What Makes Dan Different - Dark */}
      <section className="py-20 md:py-28 bg-gray-950 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.06),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Real Customer Feedback
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                What Makes Dan Different
              </h2>
              <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
                Don&apos;t just take our word for it. These themes come up again and again
                in our 5-star reviews.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={i * 100}>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors h-full">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-5">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <blockquote className="text-blue-400 italic text-sm mb-4 border-l-2 border-blue-600 pl-3">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <p className="text-gray-400 font-light leading-relaxed">{item.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={400}>
            <div className="text-center mt-12">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors"
              >
                Read our five-star reviews
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="wave" fromColor="#030712" toColor="#f9fafb" />

      {/* Service Area */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Service Area
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Proudly Serving All of Rockland County
              </h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                Dan serves homeowners throughout Rockland County, New York — including
                Nyack, New City, Nanuet, Pearl River, Spring Valley, Haverstraw, Stony
                Point, Suffern, Piermont, Tappan, Pomona, Sparkill,
                Grandview-on-Hudson, and the surrounding communities. Whether you&apos;re
                in a historic Victorian in Nyack or a family home in Clarkstown, Dan brings
                the same dedication and quality to every project.
              </p>
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition-colors"
              >
                Get Your Free Estimate
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
