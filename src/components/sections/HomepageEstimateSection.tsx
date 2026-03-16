'use client'

import { useState, useEffect } from 'react'
import {
  ClipboardList,
  FileText,
  ArrowRight,
  X,
  Clock,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { quizConfigs } from '@/data/quiz-configs'
import { ServiceProjectBuilder } from '@/components/forms/ServiceProjectBuilder'
import { EstimateForm } from '@/components/forms/EstimateForm'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const serviceCategories = Object.values(quizConfigs).map((c) => ({
  slug: c.serviceSlug,
  name: c.serviceName,
}))

export function HomepageEstimateSection() {
  const [overlayMode, setOverlayMode] = useState<
    'closed' | 'pick-service' | 'quiz' | 'form'
  >('closed')
  const [selectedService, setSelectedService] = useState<{
    slug: string
    name: string
  } | null>(null)

  useEffect(() => {
    if (overlayMode !== 'closed') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [overlayMode])

  function closeAll() {
    setOverlayMode('closed')
    setSelectedService(null)
  }

  function openProjectBuilder() {
    setOverlayMode('pick-service')
  }

  function openForm() {
    setOverlayMode('form')
  }

  function selectService(slug: string, name: string) {
    setSelectedService({ slug, name })
    setOverlayMode('quiz')
  }

  const overlayTitle =
    overlayMode === 'pick-service'
      ? 'Start Your Project'
      : overlayMode === 'quiz' && selectedService
        ? selectedService.name
        : overlayMode === 'form'
          ? 'Request Estimate'
          : ''

  return (
    <>
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gray-50"
          style={{
            clipPath: 'polygon(0 40%, 100% 20%, 100% 100%, 0 100%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <ScrollReveal>
              <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Get Started Today
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Get Your Free Estimate
              </h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
                Choose how you&apos;d like to get started. Use the guided
                Project Builder or fill out a quick form — either way, Dan
                will get back to you fast.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Project Builder card */}
            <ScrollReveal delay={100} direction="left">
              <button
                onClick={openProjectBuilder}
                className="w-full text-left group rounded-2xl border-2 border-gray-200 bg-white p-6 md:p-8 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0">
                    <ClipboardList className="h-6 w-6 text-white" />
                  </div>
                  <Sparkles className="h-4 w-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                  Project Builder
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Answer a few guided questions about your project so Dan
                  can prepare an accurate, tailored estimate.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="h-3.5 w-3.5" /> 2 min
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <ShieldCheck className="h-3.5 w-3.5" /> No obligation
                    </span>
                  </div>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Start <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </button>
            </ScrollReveal>

            {/* Quick Estimate Form card */}
            <ScrollReveal delay={200} direction="right">
              <button
                onClick={openForm}
                className="w-full text-left group rounded-2xl border-2 border-gray-200 bg-white p-6 md:p-8 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center shrink-0">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                  Quick Estimate Form
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Prefer a simple form? Describe your project and Dan will
                  reach out with a quote — usually within hours.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="h-3.5 w-3.5" /> 1 min
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <ShieldCheck className="h-3.5 w-3.5" /> Free
                    </span>
                  </div>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Start <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Full-screen overlay */}
      {overlayMode !== 'closed' && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-gray-950">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2">
              {overlayMode === 'quiz' && (
                <button
                  onClick={() => {
                    setSelectedService(null)
                    setOverlayMode('pick-service')
                  }}
                  className="text-gray-400 hover:text-white text-sm font-medium mr-2 transition-colors"
                >
                  &larr; Back
                </button>
              )}
              <span className="text-white font-bold text-lg">
                {overlayTitle}
              </span>
            </div>
            <button
              onClick={closeAll}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {overlayMode === 'pick-service' && (
              <div className="max-w-2xl mx-auto px-4 py-10">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    What type of project?
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Select a service and we&apos;ll walk you through a few
                    quick questions
                  </p>
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
              <ServiceProjectBuilder
                serviceSlug={selectedService.slug}
                serviceName={selectedService.name}
              />
            )}

            {overlayMode === 'form' && (
              <div className="max-w-lg mx-auto px-4 py-10">
                <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl">
                  <EstimateForm />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
