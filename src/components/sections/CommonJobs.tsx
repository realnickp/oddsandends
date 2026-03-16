'use client'

import { CheckCircle2 } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useCountUp } from '@/hooks/useCountUp'

const jobs = [
  'Mounting TVs and shelves',
  'Patching and repairing drywall',
  'Installing or replacing doors',
  'Fixing fences and decks',
  'Assembling furniture',
  'Replacing light fixtures and ceiling fans',
  'Installing faucets and toilets',
  'Painting rooms and touch-ups',
  'Hanging curtains and blinds',
  'Replacing cabinet hardware',
  'Building custom accent walls',
  'Setting up home offices',
  'Installing closet systems',
  'Replacing smoke detectors',
  'Smart home device setup',
  'General home repairs and honey-do lists',
]

export function CommonJobs() {
  const { ref, isVisible } = useScrollReveal()
  const count = useCountUp(30, isVisible, 2000)

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Left: header + stat */}
          <div ref={ref}>
            <ScrollReveal direction="left">
              <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                What We Handle
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Jobs Homeowners Hire Dan For
              </h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                No more keeping a running list of things that need fixing. One call and Dan
                can knock out multiple projects in a single visit.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl md:text-7xl font-bold text-blue-700">{count}+</span>
                <span className="text-gray-500 text-lg font-light">types of<br />home improvement</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: checklist */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {jobs.map((job, i) => (
              <ScrollReveal key={job} delay={i * 50}>
                <div className={`flex items-start gap-3 py-2.5 px-3 rounded-lg ${i % 2 === 0 ? '' : 'bg-white/60'}`}>
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{job}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
