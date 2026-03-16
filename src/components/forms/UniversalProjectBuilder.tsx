'use client'

import { useState, useEffect } from 'react'
import { ClipboardList, ArrowRight, X, Sparkles } from 'lucide-react'
import { quizConfigs } from '@/data/quiz-configs'
import { ServiceProjectBuilder } from '@/components/forms/ServiceProjectBuilder'

const serviceCategories = Object.values(quizConfigs).map((c) => ({
  slug: c.serviceSlug,
  name: c.serviceName,
}))

export function UniversalProjectBuilder() {
  const [open, setOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<{
    slug: string
    name: string
  } | null>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function handleClose() {
    setOpen(false)
    setSelectedService(null)
  }

  function handleSelectService(slug: string, name: string) {
    setSelectedService({ slug, name })
  }

  return (
    <>
      {/* CTA Section on the page */}
      <section className="relative py-20 md:py-28 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">
              Interactive Project Builder
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Tell us what you need in a few guided steps. Dan will review your
            project and get back to you with an honest, no-obligation estimate.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-blue-600/25 group"
          >
            <ClipboardList className="h-5 w-5" />
            Start Your Project
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="mt-4 text-sm text-gray-500">
            Takes about 2 minutes · No obligation
          </p>
        </div>
      </section>

      {/* Full-screen overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-gray-950">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2">
              {selectedService && (
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white text-sm font-medium mr-2 transition-colors"
                >
                  &larr; Back
                </button>
              )}
              <span className="text-white font-bold text-lg">
                {selectedService
                  ? selectedService.name
                  : 'Start Your Project'}
              </span>
            </div>
            <button
              onClick={handleClose}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {!selectedService ? (
              /* Service selection screen */
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
                      onClick={() =>
                        handleSelectService(svc.slug, svc.name)
                      }
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
            ) : (
              /* Service-specific quiz */
              <ServiceProjectBuilder
                serviceSlug={selectedService.slug}
                serviceName={selectedService.name}
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}
