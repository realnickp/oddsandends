'use client'

import { useState, useEffect } from 'react'
import { ClipboardList, ArrowRight, FileText, ChevronDown, Clock, ShieldCheck, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ServiceProjectBuilder } from '@/components/forms/ServiceProjectBuilder'
import { EstimateForm } from '@/components/forms/EstimateForm'

interface ProjectBuilderCardProps {
  serviceSlug: string
  serviceName: string
}

export function ProjectBuilderCard({ serviceSlug, serviceName }: ProjectBuilderCardProps) {
  const [formOpen, setFormOpen] = useState(false)
  const [overlayOpen, setOverlayOpen] = useState(false)

  useEffect(() => {
    if (overlayOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [overlayOpen])

  return (
    <>
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0">
              <ClipboardList className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Project Builder</h3>
          </div>

          <p className="text-sm text-gray-500 mb-5 leading-relaxed">
            Tell us about your {serviceName.toLowerCase()} project in a few guided steps. We&apos;ll prepare a personalized estimate tailored to your needs.
          </p>

          <button
            onClick={() => setOverlayOpen(true)}
            className="w-full flex items-center justify-center gap-2 bg-gray-950 hover:bg-gray-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors text-sm"
          >
            Start Project Builder
            <ArrowRight className="h-4 w-4" />
          </button>

          <div className="flex items-center justify-center gap-4 mt-3">
            <span className="flex items-center gap-1.5 text-xs text-gray-400">
              <Clock className="h-3.5 w-3.5" /> 2 min
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400">
              <ShieldCheck className="h-3.5 w-3.5" /> No obligation
            </span>
          </div>
        </div>

        <div className="border-t border-gray-100">
          <button
            onClick={() => setFormOpen((v) => !v)}
            className="w-full flex items-center gap-3 px-6 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
              <FileText className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-700">Prefer a form?</p>
              <p className="text-xs text-gray-400">Fill out the estimate request directly</p>
            </div>
            <ChevronDown className={cn('h-4 w-4 text-gray-400 transition-transform duration-200', formOpen && 'rotate-180')} />
          </button>

          <div className={cn(
            'overflow-hidden transition-all duration-300',
            formOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          )}>
            <div className="px-6 pb-6">
              <EstimateForm preselectedService={serviceName} />
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen Project Builder overlay */}
      {overlayOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-gray-950">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
            <span className="text-white font-bold text-lg">Build Your Project</span>
            <button
              onClick={() => setOverlayOpen(false)}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ServiceProjectBuilder serviceSlug={serviceSlug} serviceName={serviceName} />
          </div>
        </div>
      )}
    </>
  )
}
