import { generatePageMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { CTASection } from '@/components/sections/CTASection'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { faqSchema } from '@/lib/schema'
import { siteConfig } from '@/data/site-config'
import { phoneHref } from '@/lib/utils'
import { FAQAccordion } from './FAQAccordion'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Frequently Asked Questions',
    description: `Get answers to common questions about Odds & Ends Handyman Service in Rockland County, NY. Learn about services, pricing, scheduling, service areas, and more.`,
    path: '/faq',
    keywords: ['handyman FAQ', 'handyman questions', 'Rockland County handyman info', 'home repair questions'],
  })
}

const faqs = [
  {
    question: 'What services does Odds & Ends Handyman Service offer?',
    answer:
      'We handle a wide range of home improvement and repair tasks — over 30 types of work including TV mounting, drywall repair, painting, door installation, deck and fence repair, faucet and toilet installation, light fixture and ceiling fan installation, furniture assembly, custom accent walls, built-in shelving, kitchen facelifts, pergola construction, tile repair, and much more. If it\'s on your to-do list, chances are we can help.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve all of Rockland County, New York, including Nyack, New City, Nanuet, Pearl River, Spring Valley, Haverstraw, Stony Point, Clarkstown, Orangetown, Ramapo, Suffern, Piermont, Grandview-on-Hudson, Sparkill, Tappan, Pomona, and surrounding communities.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes! Every estimate is completely free with no obligation. Call, text, or fill out our online form and Dan will get back to you quickly with an honest quote. We believe in transparent pricing with no surprises.',
  },
  {
    question: 'How do I request an estimate?',
    answer:
      'You have three easy options: fill out our online estimate form at oddsandendshandymanservice.com/estimate, call Dan directly at (908) 461-2688, or text that same number (texting is often the fastest way to reach us). Include photos if you can — they help us give a more accurate quote.',
  },
  {
    question: 'How quickly can you start my project?',
    answer:
      'Dan typically responds to inquiries within hours and can often schedule work within a few days. For urgent needs, calling or texting directly is the fastest way to get on the schedule.',
  },
  {
    question: 'What are your hours of operation?',
    answer:
      `We're available Monday through Friday from ${siteConfig.hours.weekdays}, and Saturday from ${siteConfig.hours.saturday}. We are closed on Sundays. For estimate requests, you can submit through our online form anytime and Dan will respond during business hours.`,
  },
  {
    question: 'How is pricing determined?',
    answer:
      'Pricing is based on the scope and complexity of the work. Dan provides a clear, upfront quote after reviewing your project details. There are no hidden fees or surprise charges. Many customers comment on how fair and reasonable the pricing is.',
  },
  {
    question: 'Do you charge for a consultation?',
    answer:
      'No — consultations and estimates are always free. Dan has even been known to fix small issues on the spot during a consultation at no extra charge, and he\'ll tell you what you can fix yourself if it makes sense.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. Odds & Ends Handyman Service has been established since 2001 with over 20 years of professional experience serving Rockland County homeowners.',
  },
  {
    question: 'Can I send photos of my project?',
    answer:
      'Absolutely! Photos help us give you a faster, more accurate estimate. You can upload them through our online estimate form or text them directly to (908) 461-2688.',
  },
  {
    question: 'Do you handle small jobs?',
    answer:
      'Yes — no job is too small. Whether you need a single doorknob replaced, a picture hung, or a full day of repairs knocked off your list, we\'re happy to help. We treat every project with the same care and attention to detail.',
  },
  {
    question: 'What about larger projects?',
    answer:
      'Dan handles projects of all sizes, from quick fixes to multi-day renovations like kitchen facelifts, basement reconstructions, custom built-ins, and deck or pergola builds. He\'ll let you know upfront what\'s involved and give you an honest assessment.',
  },
  {
    question: 'What services do you NOT offer?',
    answer:
      'We do not handle roofing, major electrical work, or large-scale remodels (full kitchen gut renovations, room additions, etc.). However, we\'re happy to recommend trusted professionals for those needs.',
  },
  {
    question: 'Do you clean up after the job?',
    answer:
      'Absolutely. Dan is known for leaving workspaces cleaner than he found them. Multiple customers have specifically mentioned this in their reviews — one even noted that he mopped the floors before leaving. Cleanliness and respect for your home are non-negotiable.',
  },
  {
    question: 'What if I\'m not happy with the work?',
    answer:
      'Your satisfaction is Dan\'s top priority. He takes great care to ensure every project meets your expectations. If something isn\'t right, he\'ll make it right. His perfect five-star Google rating speaks to his commitment to quality.',
  },
  {
    question: 'Can you help me figure out what I need?',
    answer:
      'Yes! Dan is happy to consult on your project and offer recommendations. He\'ll walk through your home, assess the situation, and give you honest advice — including what you can handle yourself and what would benefit from professional help.',
  },
  {
    question: 'How long has Odds & Ends been in business?',
    answer:
      'Dan Kiely founded Odds & Ends Handyman Service in 2001. With over 20 years of experience, he brings deep knowledge and proven craftsmanship to every project.',
  },
  {
    question: 'What is the best way to contact you?',
    answer:
      'Texting (908) 461-2688 is often the fastest way to reach Dan. You can also call that number or email Dkiely@oddsandendshandymanservice.com. For detailed project requests, use our online estimate form where you can include photos and project specifics.',
  },
]

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup schema={faqSchema(faqs)} />

      {/* Dark Hero */}
      <section className="relative bg-gray-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ name: 'FAQ', url: '/faq' }]} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-20 md:pb-28">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                FAQ
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Frequently Asked{' '}
                <span className="text-gradient">Questions</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Everything you need to know about working with Odds & Ends Handyman Service. Can&apos;t find your answer? Call or text Dan at{' '}
                <a href={phoneHref(siteConfig.phone)} className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                  {siteConfig.phoneFormatted}
                </a>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="curve" fromColor="#030712" toColor="#ffffff" />

      {/* FAQ Accordion */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal direction="up">
            <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3 text-center">
              Your Questions, Answered
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Click any question to see the answer
            </h2>
          </ScrollReveal>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection
        headline="Still Have Questions?"
        subheadline="Don't hesitate to reach out. Dan is happy to answer any questions about your project, pricing, or the process. Call, text, or request your free estimate."
      />
    </>
  )
}
