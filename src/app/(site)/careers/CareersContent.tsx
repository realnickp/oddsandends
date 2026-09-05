import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  GraduationCap,
  HeartHandshake,
  MapPin,
  MessageSquare,
  Phone,
  Shield,
  Wrench,
} from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { JobApplicationBuilder } from '@/components/forms/JobApplicationBuilder'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { siteConfig } from '@/data/site-config'
import { phoneHref, smsHref } from '@/lib/utils'

const trustSignals = [
  { icon: Shield, text: `Established since ${siteConfig.established}` },
  { icon: MapPin, text: 'Local jobs, short drives' },
  { icon: Clock, text: 'Apply in about 2 minutes' },
  { icon: CheckCircle2, text: 'No resume required' },
]

const reasons = [
  {
    icon: Wrench,
    title: 'Varied, Hands-On Work',
    description:
      "Kitchens, baths, basements, built-ins, decks, and everyday repairs. No two weeks look the same, and you won't be stuck doing one thing.",
  },
  {
    icon: MapPin,
    title: 'Close to Home',
    description:
      'Our jobs are in Tuxedo, Tuxedo Park, and Rockland County. Short drives, full days, and home at a reasonable hour.',
  },
  {
    icon: GraduationCap,
    title: 'Learn on Real Jobs',
    description:
      'A small crew means you work alongside experienced hands and pick up new trades on the job, not in a classroom.',
  },
  {
    icon: HeartHandshake,
    title: 'Straight Talk, Real Respect',
    description:
      "Show up, take pride in your work, and you'll be treated right. We've built our reputation on that since 2001.",
  },
]

const lookingFor = [
  'Experience in one or more trades: painting, drywall, flooring, tile, carpentry, or general repairs',
  "Reliable, on time, and comfortable working in customers' homes",
  "A valid driver's license and dependable transportation",
  'An eye for clean, careful finish work',
  'Willing to learn and pitch in wherever the job needs it',
]

export default function CareersContent() {
  return (
    <>
      {/* Hero - Dark */}
      <section className="relative bg-gray-950 overflow-hidden pb-20 pt-8 md:pb-28 md:pt-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[8rem] md:text-[14rem] font-black text-white/[0.02] leading-none select-none pointer-events-none">
          HIRING
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="mb-8 [&_nav]:py-2 [&_ol]:text-gray-500 [&_span]:text-gray-300 [&_a]:text-gray-500 [&_a:hover]:text-blue-400 [&_svg]:text-gray-600">
            <Breadcrumbs items={[{ name: 'Careers', url: '/careers' }]} />
          </div>

          <div className="max-w-3xl">
            <ScrollReveal direction="up" delay={0}>
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Now Hiring · Tuxedo &amp; Rockland County, NY
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join the Odds &amp; Ends Team
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
                We&apos;re a busy local crew doing kitchens, baths, basements,
                built-ins, and the everyday repairs homeowners count on. If you
                take pride in clean, careful work, we&apos;d like to meet you.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-blue-600/25 group"
                >
                  <Briefcase className="h-5 w-5" />
                  Apply Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={smsHref(siteConfig.phone)}
                  className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  <MessageSquare className="h-5 w-5" />
                  Text Us a Question
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={400}>
              <div className="flex flex-wrap items-center gap-6">
                {trustSignals.map((signal) => (
                  <div key={signal.text} className="flex items-center gap-2">
                    <signal.icon className="h-4 w-4 text-blue-400 shrink-0" />
                    <span className="text-gray-400 text-sm">{signal.text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromColor="#030712" toColor="#ffffff" />

      {/* Why work here + what we look for */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gray-50"
          style={{ clipPath: 'polygon(0 35%, 100% 20%, 100% 100%, 0 100%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Reasons */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="up">
                <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                  Why Odds &amp; Ends
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Good Work, Close to Home
                </h2>
                <p className="text-gray-500 font-light leading-relaxed mb-10 max-w-xl">
                  Since {siteConfig.established}, homeowners across{' '}
                  {siteConfig.serviceAreaLabel} have trusted us with their
                  homes. That reputation is built by the people on the crew,
                  and we&apos;re looking for more of them.
                </p>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 gap-5">
                {reasons.map((reason, i) => (
                  <ScrollReveal key={reason.title} direction="up" delay={i * 100}>
                    <div className="group h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-gray-100/50 hover:border-blue-200 hover:shadow-blue-50/50 transition-all duration-300">
                      <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <reason.icon className="h-5 w-5 text-white" />
                      </div>
                      <p className="font-bold text-gray-900 mb-1.5">{reason.title}</p>
                      <p className="text-gray-500 font-light text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* What we look for - Dark card */}
            <ScrollReveal direction="right" delay={150} className="lg:col-span-2">
              <div className="bg-gray-950 rounded-2xl p-7 md:p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_60%)]" />
                <div className="relative">
                  <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                    What We Look For
                  </p>
                  <h3 className="text-2xl font-bold mb-6">
                    You don&apos;t need to check every box
                  </h3>
                  <ul className="space-y-4">
                    {lookingFor.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-400 mb-4">
                      Applied through Indeed? We already have your resume. Just
                      fill out the quick application below so we have your
                      experience and availability in one place.
                    </p>
                    <a
                      href="#apply"
                      className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Start the application
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Application wizard */}
      <JobApplicationBuilder />

      {/* Questions */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-20 md:py-24 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions About Working With Us?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed text-gray-600">
              Not sure if your experience fits, or want to know more about the
              work before you apply? Call or text and we&apos;ll give you a
              straight answer.
            </p>
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
              <a
                href={smsHref(siteConfig.phone)}
                className="inline-flex items-center gap-2.5 bg-white text-gray-900 hover:bg-gray-100 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                <MessageSquare className="h-5 w-5" />
                Text Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
