'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Phone, ClipboardList, Calendar, CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Get in Touch',
    description: 'Call, text, or fill out our quick estimate form. Send photos of the job if you have them — it helps us give you a faster, more accurate quote.',
  },
  {
    icon: ClipboardList,
    number: '02',
    title: 'Free Estimate',
    description: "We'll review your project, ask any clarifying questions, and provide a clear, honest estimate with no hidden fees or surprises.",
  },
  {
    icon: Calendar,
    number: '03',
    title: 'Schedule the Work',
    description: 'Pick a time that works for you. Dan shows up on time, prepared, and ready to work. We respect your schedule and your home.',
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'Job Done Right',
    description: "The work gets done to the highest standard. We clean up after ourselves and don't leave until you're completely satisfied.",
  },
]

function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)
  const rafRef = useRef<number | null>(null)

  const handleScroll = useCallback(() => {
    if (rafRef.current) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const start = windowHeight * 0.7
      const end = windowHeight * 0.3
      const rawProgress = (start - rect.top) / (start - end + rect.height * 0.5)
      setProgress(Math.min(Math.max(rawProgress, 0), 1))
    })
  }, [ref])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [handleScroll])

  return progress
}

export function ProcessSteps() {
  const sectionRef = useRef<HTMLElement>(null)
  const progress = useScrollProgress(sectionRef)
  const { ref: revealRef, isVisible } = useScrollReveal()

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={revealRef}
          className="max-w-3xl mx-auto text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(30px)',
            transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Getting Started Is Simple
          </h2>
          <p className="text-lg text-gray-500 font-light">
            No runaround. No phone tag. Just straightforward service from start to finish.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Background line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200 rounded-full" />
            {/* Progress line */}
            <div
              className="absolute top-8 left-0 h-0.5 bg-blue-600 rounded-full transition-all duration-100"
              style={{ width: `${progress * 100}%` }}
            />

            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => {
                const stepProgress = (index + 1) / steps.length
                const isActive = progress >= stepProgress * 0.85

                return (
                  <div key={step.number} className="pt-16 relative">
                    {/* Circle on timeline */}
                    <div
                      className="absolute top-4 left-1/2 -translate-x-1/2 h-9 w-9 rounded-full border-4 transition-all duration-500 flex items-center justify-center"
                      style={{
                        borderColor: isActive ? '#2563eb' : '#e5e7eb',
                        backgroundColor: isActive ? '#2563eb' : '#fff',
                        transform: `translateX(-50%) scale(${isActive ? 1.1 : 1})`,
                      }}
                    >
                      <span className={`text-xs font-bold transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                        {step.number}
                      </span>
                    </div>

                    <div
                      className="transition-all duration-700"
                      style={{
                        opacity: isActive ? 1 : 0.4,
                        transform: isActive ? 'translateY(0)' : 'translateY(8px)',
                      }}
                    >
                      <div className="h-12 w-12 rounded-xl bg-blue-700 flex items-center justify-center mb-4">
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden">
          <div className="relative pl-12">
            {/* Background line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 rounded-full" />
            {/* Progress line */}
            <div
              className="absolute left-5 top-0 w-0.5 bg-blue-600 rounded-full transition-all duration-100"
              style={{ height: `${progress * 100}%` }}
            />

            <div className="space-y-12">
              {steps.map((step, index) => {
                const stepProgress = (index + 1) / steps.length
                const isActive = progress >= stepProgress * 0.7

                return (
                  <div key={step.number} className="relative">
                    {/* Circle on timeline */}
                    <div
                      className="absolute -left-7 top-0 h-9 w-9 rounded-full border-4 transition-all duration-500 flex items-center justify-center"
                      style={{
                        borderColor: isActive ? '#2563eb' : '#e5e7eb',
                        backgroundColor: isActive ? '#2563eb' : '#fff',
                        transform: `scale(${isActive ? 1.1 : 1})`,
                      }}
                    >
                      <span className={`text-xs font-bold transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                        {step.number}
                      </span>
                    </div>

                    <div
                      className="transition-all duration-700"
                      style={{
                        opacity: isActive ? 1 : 0.4,
                        transform: isActive ? 'translateY(0)' : 'translateY(8px)',
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-lg bg-blue-700 flex items-center justify-center">
                          <step.icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
