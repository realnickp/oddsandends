'use client'

import { useState, useEffect } from 'react'
import { ClipboardList, Sparkles, X } from 'lucide-react'
import { ServiceProjectBuilder } from '@/components/forms/ServiceProjectBuilder'

interface MobileProjectCTAProps {
  serviceSlug: string
  serviceName: string
}

export function MobileProjectCTA({ serviceSlug, serviceName }: MobileProjectCTAProps) {
  const [open, setOpen] = useState(false)

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

  return (
    <>
      {/* Sticky bottom button - mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <button
          onClick={() => setOpen(true)}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 flex items-center justify-center gap-2.5 font-bold text-lg transition-all active:scale-[0.98] pb-[max(1rem,env(safe-area-inset-bottom))]"
        >
          <ClipboardList className="h-5 w-5" />
          Start Your Project
          <Sparkles className="h-4 w-4 opacity-80" />
        </button>
      </div>

      {/* Full-screen overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden flex flex-col bg-gray-950">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
            <span className="text-white font-bold text-lg">Build Your Project</span>
            <button
              onClick={() => setOpen(false)}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ServiceProjectBuilder
              serviceSlug={serviceSlug}
              serviceName={serviceName}
            />
          </div>
        </div>
      )}
    </>
  )
}
