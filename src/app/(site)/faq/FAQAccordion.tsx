'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <ScrollReveal direction="up" delay={index * 50}>
      <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white hover:shadow-lg hover:shadow-blue-50/50 hover:border-blue-200 transition-all duration-300">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <div className="flex items-center gap-4">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0">
              <HelpCircle className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-gray-900">{faq.question}</span>
          </div>
          <ChevronDown
            className={`h-5 w-5 text-gray-400 shrink-0 transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>
        <div className={`accordion-content ${open ? 'open' : ''}`}>
          <div className="px-6 pb-5 pl-[4.25rem]">
            <p className="text-gray-500 font-light leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export function FAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <FAQItem key={i} faq={faq} index={i} />
      ))}
    </div>
  )
}
