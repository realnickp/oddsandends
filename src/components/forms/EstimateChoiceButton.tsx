'use client'

import { useState, useEffect } from 'react'
import {
  ArrowRight,
  ClipboardList,
  FileText,
  X,
} from 'lucide-react'
import { ServiceProjectBuilder } from '@/components/forms/ServiceProjectBuilder'
import { EstimateForm } from '@/components/forms/EstimateForm'

interface EstimateChoiceButtonProps {
  serviceSlug: string
  serviceName: string
  className?: string
  children?: React.ReactNode
}

export function EstimateChoiceButton({
  serviceSlug,
  serviceName,
  className,
  children,
}: EstimateChoiceButtonProps) {
  const [overlay, setOverlay] = useState<'closed' | 'choice' | 'builder' | 'form'>('closed')

  useEffect(() => {
    if (overlay !== 'closed') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [overlay])

  function closeAll() {
    setOverlay('closed')
  }

  return (
    <>
      <button onClick={() => setOverlay('choice')} className={className}>
        {children ?? (
          <>
            Request Estimate Online
            <ArrowRight className="h-5 w-5" />
          </>
        )}
      </button>

      {/* Choice sheet */}
      {overlay === 'choice' && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={closeAll}
        >
          <div
            className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl p-6 pb-10 sm:pb-6 animate-slide-up sm:animate-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Get Your Estimate</h3>
              <button
                onClick={closeAll}
                className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <button
              onClick={() => setOverlay('builder')}
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
                  Guided steps to scope your {serviceName.toLowerCase()} project &middot; 2 min
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </button>

            <button
              onClick={() => setOverlay('form')}
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

      {/* Full-screen Project Builder */}
      {overlay === 'builder' && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-gray-950">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
            <span className="text-white font-bold text-lg">{serviceName}</span>
            <button
              onClick={closeAll}
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

      {/* Full-screen Estimate Form */}
      {overlay === 'form' && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-gray-950">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
            <span className="text-white font-bold text-lg">Request Estimate</span>
            <button
              onClick={closeAll}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="mx-auto max-w-lg">
              <div className="rounded-2xl bg-white p-6 shadow-xl">
                <EstimateForm preselectedService={serviceName} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
