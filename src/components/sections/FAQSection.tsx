import { ChevronDown } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface FAQ {
  question: string
  answer: string
}

export function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle,
}: {
  faqs: FAQ[]
  title?: string
  subtitle?: string
}) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative watermark */}
      <div className="absolute left-4 top-1/4 text-[10rem] md:text-[14rem] font-black text-gray-100/50 leading-none select-none pointer-events-none -rotate-12">
        ?
      </div>

      <div className="relative max-w-3xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-500 font-light">{subtitle}</p>
            )}
          </div>
        </ScrollReveal>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 60}>
              <details
                className="group border rounded-xl overflow-hidden transition-all duration-300 border-gray-200 open:border-blue-200 open:shadow-md open:shadow-blue-50 open:border-l-4 open:border-l-blue-600"
                {...(index === 0 ? { open: true } : {})}
              >
                <summary className="flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50/50 transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDown
                    className="h-5 w-5 text-gray-400 shrink-0 transition-transform duration-300 group-open:rotate-180 group-open:text-blue-600"
                  />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
