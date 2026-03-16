'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {
  Phone,
  MessageSquare,
  FileText,
  ClipboardList,
  X,
  ArrowRight,
} from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { phoneHref, smsHref } from '@/lib/utils'
import { ServiceProjectBuilder } from '@/components/forms/ServiceProjectBuilder'
import { EstimateForm } from '@/components/forms/EstimateForm'
import { services } from '@/data/services'
import { quizConfigs } from '@/data/quiz-configs'

const serviceCategories = Object.values(quizConfigs).map((c) => ({
  slug: c.serviceSlug,
  name: c.serviceName,
}))

type OverlayMode = 'closed' | 'choice' | 'pick-service' | 'quiz' | 'form'

export function MobileStickyCTA() {
  const pathname = usePathname()
  const isServicePage = pathname.startsWith('/services/')

  const serviceSlug = isServicePage
    ? pathname.split('/services/')[1]?.replace(/\/$/, '')
    : ''
  const serviceName = isServicePage
    ? (services.find((s) => s.slug === serviceSlug)?.name ?? '')
    : ''

  const [overlay, setOverlay] = useState<OverlayMode>('closed')
  const [selectedService, setSelectedService] = useState<{
    slug: string
    name: string
  } | null>(null)

  useEffect(() => {
    if (overlay !== 'closed') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [overlay])

  function closeAll() {
    setOverlay('closed')
    setSelectedService(null)
  }

  function handleEstimateClick() {
    setOverlay('choice')
  }

  function chooseProjectBuilder() {
    if (isServicePage && serviceSlug) {
      setSelectedService({ slug: serviceSlug, name: serviceName })
      setOverlay('quiz')
    } else {
      setOverlay('pick-service')
    }
  }

  function chooseForm() {
    setOverlay('form')
  }

  function selectService(slug: string, name: string) {
    setSelectedService({ slug, name })
    setOverlay('quiz')
  }

  const overlayTitle =
    overlay === 'pick-service'
      ? 'Start Your Project'
      : overlay === 'quiz' && selectedService
        ? selectedService.name
        : overlay === 'form'
          ? 'Request Estimate'
          : ''

  return (
    <>
      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gray-950 border-t border-gray-800 shadow-2xl safe-area-bottom">
        <div className="grid grid-cols-3 divide-x divide-gray-800">
          <a
            href={phoneHref(siteConfig.phone)}
            className="flex flex-col items-center gap-1 py-3 text-white hover:bg-gray-900 transition-colors"
          >
            <Phone className="h-5 w-5 text-blue-400" />
            <span className="text-xs font-medium">Call</span>
          </a>
          <a
            href={smsHref(siteConfig.phone)}
            className="flex flex-col items-center gap-1 py-3 text-white hover:bg-gray-900 transition-colors"
          >
            <MessageSquare className="h-5 w-5 text-blue-400" />
            <span className="text-xs font-medium">Text</span>
          </a>
          <button
            onClick={handleEstimateClick}
            className="flex flex-col items-center gap-1 py-3 text-white hover:bg-gray-900 transition-colors"
          >
            <FileText className="h-5 w-5 text-blue-400" />
            <span className="text-xs font-medium">Estimate</span>
          </button>
        </div>
      </div>

      {/* Choice sheet */}
      {overlay === 'choice' && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 backdrop-blur-sm"
          onClick={closeAll}
        >
          <div
            className="w-full max-w-lg bg-white rounded-t-3xl p-6 pb-10 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Get Your Estimate
              </h3>
              <button
                onClick={closeAll}
                className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <button
              onClick={chooseProjectBuilder}
              className="w-full flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all mb-3 text-left group"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0">
                <ClipboardList className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  Project Builder
                </p>
                <p className="text-sm text-gray-500">
                  Guided steps to scope your project &middot; 2 min
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </button>

            <button
              onClick={chooseForm}
              className="w-full flex items-center gap-4 p-5 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all text-left group"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center shrink-0">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  Quick Estimate Form
                </p>
                <p className="text-sm text-gray-500">
                  Fill out a simple form &middot; 1 min
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </button>
          </div>
        </div>
      )}

      {/* Full-screen overlays (pick-service / quiz / form) */}
      {(overlay === 'pick-service' ||
        overlay === 'quiz' ||
        overlay === 'form') && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-gray-950">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2">
              {overlay === 'quiz' && !isServicePage && (
                <button
                  onClick={() => {
                    setSelectedService(null)
                    setOverlay('pick-service')
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
            {overlay === 'pick-service' && (
              <div className="max-w-2xl mx-auto px-4 py-10">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    What type of project?
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Select a service and we&apos;ll walk you through a few quick
                    questions
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

            {overlay === 'quiz' && selectedService && (
              <ServiceProjectBuilder
                serviceSlug={selectedService.slug}
                serviceName={selectedService.name}
              />
            )}

            {overlay === 'form' && (
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
