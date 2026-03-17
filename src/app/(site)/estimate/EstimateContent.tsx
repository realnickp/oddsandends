'use client'

import { useState, useEffect } from 'react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { EstimateForm } from '@/components/forms/EstimateForm'
import { ServiceProjectBuilder } from '@/components/forms/ServiceProjectBuilder'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { siteConfig } from '@/data/site-config'
import {
  Phone,
  MessageSquare,
  CheckCircle2,
  Shield,
  Star,
  Clock,
  ClipboardList,
  FileText,
  ArrowRight,
  X,
} from 'lucide-react'
import { phoneHref, smsHref } from '@/lib/utils'
import Image from 'next/image'
import { quizConfigs } from '@/data/quiz-configs'

const serviceCategories = Object.values(quizConfigs).map((c) => ({
  slug: c.serviceSlug,
  name: c.serviceName,
}))

const processSteps = [
  {
    step: '1',
    title: 'Describe Your Project',
    description:
      'Fill out the form with details about what you need. Photos are welcome and help us give a more accurate quote.',
  },
  {
    step: '2',
    title: 'Dan Reviews Your Request',
    description:
      'Dan personally reviews every estimate request. He may reach out with a question or two to make sure he understands your needs.',
  },
  {
    step: '3',
    title: 'Receive Your Honest Quote',
    description:
      "You'll get a clear, straightforward quote with no hidden fees. Dan typically responds within hours.",
  },
  {
    step: '4',
    title: 'Schedule at Your Convenience',
    description:
      'Approve the estimate and schedule the work at a time that fits your life. Dan can often start within days.',
  },
]

const trustSignals = [
  { icon: Shield, text: 'Established since 2001' },
  { icon: Star, text: 'Perfect 5-star Google rating' },
  { icon: Clock, text: 'Usually responds within hours' },
  { icon: CheckCircle2, text: 'No obligation — ever' },
]

export default function EstimateContent() {
  const [overlayMode, setOverlayMode] = useState<'closed' | 'pick-service' | 'quiz'>('closed')
  const [selectedService, setSelectedService] = useState<{ slug: string; name: string } | null>(null)

  useEffect(() => {
    if (overlayMode !== 'closed') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [overlayMode])

  function closeOverlay() {
    setOverlayMode('closed')
    setSelectedService(null)
  }

  function selectService(slug: string, name: string) {
    setSelectedService({ slug, name })
    setOverlayMode('quiz')
  }

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
        {/* Large watermark */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[8rem] md:text-[14rem] font-black text-white/[0.02] leading-none select-none pointer-events-none">
          FREE
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-8 [&_nav]:py-2 [&_ol]:text-gray-500 [&_span]:text-gray-300 [&_a]:text-gray-500 [&_a:hover]:text-blue-400 [&_svg]:text-gray-600">
            <Breadcrumbs items={[{ name: 'Free Estimate', url: '/estimate' }]} />
          </div>

          <div className="max-w-3xl">
            <ScrollReveal direction="up" delay={0}>
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Free & No Obligation
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Request Your Free Estimate
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
                Choose how you&apos;d like to get started — use our guided Project Builder
                or fill out a quick form. Either way, Dan will get back to you fast.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300}>
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

      {/* Choice + Form section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Diagonal bg split */}
        <div
          className="absolute inset-0 bg-gray-50"
          style={{ clipPath: 'polygon(0 30%, 100% 15%, 100% 100%, 0 100%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Project Builder CTA */}
          <ScrollReveal className="mb-12">
            <div className="max-w-3xl mx-auto">
              <button
                onClick={() => setOverlayMode('pick-service')}
                className="w-full flex items-center gap-5 bg-gradient-to-br from-gray-950 to-gray-900 text-white rounded-2xl p-6 md:p-8 hover:from-gray-900 hover:to-gray-800 transition-all group shadow-xl"
              >
                <div className="h-14 w-14 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <ClipboardList className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-lg md:text-xl font-bold mb-1">Project Builder</p>
                  <p className="text-sm text-gray-400">Answer a few guided questions so Dan can prepare an accurate, tailored estimate &middot; 2 min</p>
                </div>
                <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
              </button>
            </div>
          </ScrollReveal>

          {/* Divider */}
          <div className="flex items-center gap-4 max-w-3xl mx-auto mb-12">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form - Takes 2/3 */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl shadow-gray-200/50 border-t-4 border-blue-600">
                <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-2">
                  Quick Estimate Form
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Tell Us About Your Project
                </h2>
                <p className="text-gray-500 font-light mb-8">
                  The more detail you provide, the more accurate your estimate will be.
                  Fields marked with * are required.
                </p>
                <EstimateForm />
              </div>
            </ScrollReveal>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* How It Works */}
              <ScrollReveal direction="right" delay={100}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-gray-100/50">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">How It Works</h3>
                  <div className="relative pl-8 border-l-2 border-blue-200 space-y-6">
                    {processSteps.map((step) => (
                      <div key={step.step} className="relative">
                        <div className="absolute -left-[calc(1rem+9px)] top-0.5 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{step.step}</span>
                        </div>
                        <p className="font-semibold text-gray-900 text-sm">{step.title}</p>
                        <p className="text-gray-500 font-light text-sm mt-0.5 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Trust Signals - Dark Card */}
              <ScrollReveal direction="right" delay={200}>
                <div className="bg-gray-950 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_60%)]" />
                  <div className="relative">
                    <h3 className="text-lg font-bold mb-4">Why Choose Odds & Ends?</h3>
                    <div className="space-y-3">
                      {trustSignals.map((signal) => (
                        <div key={signal.text} className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0">
                            <signal.icon className="h-4 w-4 text-blue-400" />
                          </div>
                          <span className="text-gray-300 text-sm">{signal.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Before/After Social Proof */}
              <ScrollReveal direction="right" delay={300}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-100/50">
                  <div className="grid grid-cols-2">
                    <div className="relative aspect-square">
                      <Image
                        src="/images/before-after/1-before.jpg"
                        alt="Before renovation"
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                      <div className="absolute bottom-2 left-2 bg-gray-900/80 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                        Before
                      </div>
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src="/images/before-after/1-after.jpg"
                        alt="After renovation by Odds & Ends"
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                      <div className="absolute bottom-2 left-2 bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                        After
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 font-light">
                      Real results from real Rockland County homes
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Prefer to Call? */}
              <ScrollReveal direction="right" delay={400}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Prefer to Talk?</h3>
                  <p className="text-gray-500 font-light text-sm mb-4">
                    Call or text Dan directly for the fastest response.
                  </p>
                  <div className="space-y-3">
                    <a
                      href={phoneHref(siteConfig.phone)}
                      className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-500 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Call {siteConfig.phoneFormatted}
                    </a>
                    <a
                      href={smsHref(siteConfig.phone)}
                      className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Text Us
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Questions Before You Submit?"
        subheadline="No question is too small. Call or text Dan — he's happy to walk you through the process and help you figure out exactly what you need."
      />

      {/* Project Builder overlay */}
      {overlayMode !== 'closed' && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-gray-950">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2">
              {overlayMode === 'quiz' && (
                <button
                  onClick={() => { setSelectedService(null); setOverlayMode('pick-service') }}
                  className="text-gray-400 hover:text-white text-sm font-medium mr-2 transition-colors"
                >
                  &larr; Back
                </button>
              )}
              <span className="text-white font-bold text-lg">
                {overlayMode === 'pick-service' ? 'Start Your Project' : selectedService?.name ?? ''}
              </span>
            </div>
            <button
              onClick={closeOverlay}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {overlayMode === 'pick-service' && (
              <div className="max-w-2xl mx-auto px-4 py-10">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">What type of project?</h2>
                  <p className="text-gray-400 text-sm">Select a service and we&apos;ll walk you through a few quick questions</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {serviceCategories.map((svc) => (
                    <button
                      key={svc.slug}
                      onClick={() => selectService(svc.slug, svc.name)}
                      className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-4 text-left hover:bg-white/[0.08] hover:border-blue-500/30 transition-all group"
                    >
                      <div className="h-9 w-9 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0">
                        <ClipboardList className="h-4 w-4 text-blue-400" />
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors leading-tight">
                        {svc.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {overlayMode === 'quiz' && selectedService && (
              <ServiceProjectBuilder serviceSlug={selectedService.slug} serviceName={selectedService.name} />
            )}
          </div>
        </div>
      )}
    </>
  )
}
