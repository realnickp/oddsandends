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
    description: `Get answers to common questions about Odds & Ends Home Services in Tuxedo & Rockland County, NY. Learn about services, pricing, scheduling, service areas, and more.`,
    path: '/faq',
    keywords: ['handyman FAQ', 'handyman questions', 'Tuxedo NY home services info', 'home repair questions'],
  })
}

const faqs = [
  {
    question: 'What services does Odds & Ends Home Services offer?',
    answer:
      'Odds & Ends Home Services handles the full spectrum of home improvement work in Tuxedo, Tuxedo Park, and Rockland County, from one-hour handyman visits to multi-day renovations. Signature projects include kitchen and bathroom updates, basement finishing, custom accent walls, wainscoting, custom built-ins, deck repair and refinishing, flooring, and home office builds. On the handyman side, we cover TV mounting, drywall and plaster repair, interior painting, door installation and repair, light fixtures and ceiling fans, furniture assembly, picture hanging, smart home setup, and minor plumbing fixes. Owner Daniel Kiely founded the business in 2001, so there are very few household repairs he has not seen in 25+ years. The only categories we refer out are roofing, major electrical work, and full-house gut remodels. If your project is not listed here, call or text (908) 461-2688 — the odds are good we do it.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'Our primary service area is the Town of Tuxedo, New York — including the Village of Tuxedo Park and the hamlets of Eagle Valley, Southfields, Sterling Forest, and Arden — plus all of Rockland County. That Rockland coverage includes Sloatsburg, Suffern, Nyack, New City, Nanuet, Pearl River, Spring Valley, Haverstraw, Stony Point, Piermont, Tappan, Pomona, and the surrounding towns of Clarkstown, Orangetown, and Ramapo. Owner Daniel Kiely has worked in Rockland homes since founding Odds & Ends Home Services in 2001, and Tuxedo sits just up Route 17 from that base, so drive times stay short and there is never a trip charge. For Tuxedo Park specifically, we follow the village\'s contractor registration and gate access procedures, so working inside the gate is routine rather than a complication. Not sure whether your address qualifies? Text (908) 461-2688 and we\'ll confirm quickly.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes — every estimate from Odds & Ends Home Services is completely free, with no obligation, no trip charge, and no pressure to book. Call or text (908) 461-2688, fill out the online estimate form, or email Dkiely@oddsandendshandymanservice.com, and owner Daniel Kiely will respond with an honest, itemized quote. For small jobs like TV mounting, drywall patches, or a light fixture swap, a few photos are usually enough for a quote without a site visit. Larger projects — a bathroom refresh, basement finishing, custom built-ins — get a free in-person walkthrough anywhere in Tuxedo, Tuxedo Park, or Rockland County so the numbers reflect real measurements and materials. Every quote stays valid for 30 days, so you have time to plan without the price shifting underneath you. Transparent pricing is a big part of how the business earned its 5.0-star Google rating.',
  },
  {
    question: 'How do I request an estimate?',
    answer:
      'There are three easy ways to request a free estimate from Odds & Ends Home Services: text or call (908) 461-2688 (texting is usually the fastest way to reach owner Daniel Kiely), fill out the online estimate form on this site, or email Dkiely@oddsandendshandymanservice.com. Whichever route you choose, include a short description of the project, your location in Tuxedo, Tuxedo Park, or Rockland County, and a few photos if you can — for small jobs, photos alone often let us send a firm quote the same day without scheduling a visit. Messages are answered during business hours, Monday through Friday 7am to 6pm and Saturday 8am to 4pm, though the online form accepts requests around the clock. Every estimate is free, carries no trip charge, and stays valid for 30 days once delivered.',
  },
  {
    question: 'How quickly can you start my project?',
    answer:
      'Most projects with Odds & Ends Home Services start within 3 to 7 days of a confirmed estimate, and small repairs — a TV mount, a sticking door, a light fixture — can often be scheduled the same week. Multi-day renovations such as bathroom updates, basement finishing, or deck rebuilds book further out, typically 2 to 3 weeks during the busy spring and fall seasons. Calls and texts to (908) 461-2688 are answered the same business day, and texting is the quickest way to get on the calendar; owner Daniel Kiely handles scheduling personally, so you are never routed through a call center. Because Tuxedo, Tuxedo Park, and Rockland County sit within one compact service area along Route 17, small jobs can frequently be slotted alongside larger projects already underway nearby, which keeps wait times shorter than you might expect.',
  },
  {
    question: 'What are your hours of operation?',
    answer:
      `Odds & Ends Home Services is open Monday through Friday from ${siteConfig.hours.weekdays} and Saturday from ${siteConfig.hours.saturday}, and we are closed on Sundays. Within those hours, texting (908) 461-2688 is the fastest way to reach owner Daniel Kiely — messages are typically answered within a couple of hours, often while he is between jobs in Tuxedo or Rockland County. The online estimate form works around the clock, so you can submit a project description and photos at midnight and hear back the next business morning. Early weekday start times are a real advantage for working homeowners in Tuxedo Park and across Rockland County: a 7am arrival means a small repair can be finished before your workday begins. Saturday appointments are popular and book quickly, so if a weekend slot is the only one that fits your schedule, reach out a week or more ahead.`,
  },
  {
    question: 'How is pricing determined?',
    answer:
      'Pricing at Odds & Ends Home Services is based on the scope of the work, the materials involved, and the time the job realistically takes — never on inflated minimums or hidden fees. After reviewing your project details or photos, owner Daniel Kiely provides a clear, upfront quote in writing, and that number is the number: quotes stay valid for 30 days and there is no trip charge anywhere in Tuxedo, Tuxedo Park, or Rockland County. Small handyman tasks are often bundled so several items — say, a faucet swap, two light fixtures, and a door adjustment — are handled in one visit at one combined rate, which costs far less than booking each separately. Larger renovations get a detailed estimate after a free in-person walkthrough. With 25+ years in business since 2001 and a 5.0-star Google rating, fair pricing is a big part of how the reputation was built.',
  },
  {
    question: 'Do you charge for a consultation?',
    answer:
      'No — consultations and estimates from Odds & Ends Home Services are always free, with no trip charge and no obligation to book. Owner Daniel Kiely will look at your project in Tuxedo, Tuxedo Park, or anywhere in Rockland County, talk through the options, and give you straight advice, including telling you when a fix is simple enough to handle yourself. He has even been known to knock out small issues on the spot during a consultation at no extra charge. For many small jobs a consultation never needs to happen in person at all: text photos to (908) 461-2688 and you will usually get a firm quote back the same business day. In-person walkthroughs are reserved for larger work — kitchens, bathrooms, basements, built-ins — where accurate measurements matter. Either way, the quote you receive is free and stays valid for 30 days.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. Odds & Ends Home Services is a Licensed Home Improvement Contractor holding License #H-25-600, issued by the Rockland County Office of Consumer Protection with a current term running March 4, 2026 through January 31, 2027, and operates as a DBA of Top Line Property Solutions LLC. The business also carries a $1,000,000 general liability insurance policy that covers every job, including all work in Tuxedo, Tuxedo Park, and elsewhere in Orange County. Owner Daniel Kiely founded the company in 2001 and brings 25+ years of hands-on experience to every project. Proof of license and insurance is provided in writing with any estimate on request, and the license itself can be verified through Rockland County\'s public license lookup. For Tuxedo Park homeowners, we also follow the village\'s contractor registration and gate access procedures, so the paperwork side is handled before work begins.',
  },
  {
    question: 'Can I send photos of my project?',
    answer:
      'Absolutely — photos are the single fastest way to get an accurate quote from Odds & Ends Home Services. Text them to (908) 461-2688 (texting is the preferred method), attach them to the online estimate form, or email them to Dkiely@oddsandendshandymanservice.com. For small jobs like TV mounting, drywall repair, or a light fixture swap, a wide shot of the area plus one close-up is usually all owner Daniel Kiely needs to send a firm photo quote the same business day, no site visit required — a real convenience if you are inside the gate at Tuxedo Park or juggling a commute from Rockland County. For bigger projects such as kitchens, bathrooms, or basement finishing, photos start the conversation and a free in-person walkthrough follows, but sending pictures up front still cuts the back-and-forth from days down to minutes.',
  },
  {
    question: 'Do you handle small jobs?',
    answer:
      'Yes — no job is too small for Odds & Ends Home Services, because small jobs are exactly where the business started in 2001. A single doorknob replacement, one picture hung level, a wobbly ceiling fan, furniture assembly, a smart doorbell setup: all of it is welcome on the calendar every week in Tuxedo, Tuxedo Park, and across Rockland County. Where many contractors refuse anything small or tack on a stiff trip fee, we charge no trip fee at all and happily bundle several small tasks into one efficient visit at a combined rate. Plenty of customers keep a running punch list and book a half-day to clear the whole thing at once, and every item gets the same care and attention to detail as a full renovation. For the quickest turnaround, text a photo of the job to (908) 461-2688 — small repairs can often be scheduled within the same week.',
  },
  {
    question: 'What about larger projects?',
    answer:
      'Larger projects are the signature work of Odds & Ends Home Services: kitchen updates, bathroom renovations, basement finishing, custom accent walls, wainscoting, custom built-ins, deck repair and refinishing, flooring, and home office builds. Owner Daniel Kiely has led this kind of small-to-medium renovation work personally since 2001, and multi-day projects across Tuxedo, Tuxedo Park, and Rockland County are planned with a clear written estimate, a realistic timeline, and honest guidance about what is worth doing. Most projects begin 3 to 7 days after a confirmed estimate, though multi-day renovations book 2 to 3 weeks out during the busy spring and fall seasons. One honest caveat: we do not take on roofing, major electrical work, or full-house gut remodels — if your project crosses into that territory, we will say so plainly and refer you to trusted specialists rather than stretch beyond our lane.',
  },
  {
    question: 'What services do you NOT offer?',
    answer:
      'Odds & Ends Home Services does not take on roofing, major electrical work, or full-house gut remodels — those three categories are outside our lane, and we would rather say so upfront than stretch into work that belongs with a dedicated specialist. When a project in Tuxedo, Tuxedo Park, or Rockland County calls for one of those trades, owner Daniel Kiely will refer you to trusted professionals he knows from 25+ years in the business. Everything short of that line is fair game: kitchens, bathrooms, basement finishing, custom built-ins, wainscoting, accent walls, deck repair and refinishing, flooring, plus the whole catalog of handyman work from TV mounting and drywall repair to painting, doors, light fixtures, and minor plumbing. If you are unsure which side of the line your project falls on, text a description and photos to (908) 461-2688 and you will get an honest answer, not a sales pitch.',
  },
  {
    question: 'Do you clean up after the job?',
    answer:
      'Absolutely — Odds & Ends Home Services is known for leaving workspaces cleaner than we found them, and customers mention it in reviews regularly; one even noted that the floors were mopped before we left. Cleanup is treated as part of the job, not an add-on: drop cloths and surface protection go down before work starts, debris is bagged and hauled away, and tools never sit in your hallway overnight during multi-day projects. That respect matters everywhere we work, and it matters especially in the finished, well-kept homes of Tuxedo Park and across Tuxedo and Rockland County, where a renovation should never leave a trace beyond the improvement itself. Owner Daniel Kiely has run the business this way since founding it in 2001, and it is a big part of why the company holds a 5.0-star Google rating. You should only notice what was fixed — never what it took to fix it.',
  },
  {
    question: 'What if I\'m not happy with the work?',
    answer:
      'Your satisfaction is the standard at Odds & Ends Home Services, and if something is not right, we make it right — plainly and without argument. Tell owner Daniel Kiely directly by call or text at (908) 461-2688 and he will come back to address the issue; because this is an owner-operated business rather than a rotating crew of subcontractors, the person accountable for the work is the same person who performed it. That accountability is reflected in a perfect 5.0-star Google rating built across Tuxedo, Tuxedo Park, and Rockland County. The written estimate you approve describes exactly what will be done, so expectations are aligned before work begins, and the $1,000,000 general liability policy backs every job for added peace of mind. After 25+ years in business since 2001, reputation is the whole business model — one unhappy customer costs more than any repair.',
  },
  {
    question: 'Can you help me figure out what I need?',
    answer:
      'Yes — helping homeowners figure out what a project actually requires is a normal part of what Odds & Ends Home Services does, and the consultation is free. Owner Daniel Kiely will walk through your home in Tuxedo, Tuxedo Park, or anywhere in Rockland County, assess the situation, and give honest advice: what needs professional attention, what can wait, and what you can reasonably handle yourself. With 25+ years of experience since founding the business in 2001, he can usually spot the real cause behind a symptom — a sticking door that traces back to seasonal humidity, or a wall crack that is cosmetic rather than structural. If you are not ready for a visit, text photos and a description to (908) 461-2688 and you will get a straightforward read the same business day. There is no charge and no obligation for any of this advice; it is simply how good long-term customers start.',
  },
  {
    question: 'How long has Odds & Ends been in business?',
    answer:
      'Odds & Ends Home Services was founded in 2001 by owner Daniel Kiely, which means the business brings 25+ years of continuous, hands-on experience to every project. Dan has personally led the work that entire time — this is an owner-operated company, not a franchise or a dispatch service — so the experience on your job is never diluted across rotating crews. Those decades were spent largely in Rockland County homes, from Sloatsburg and Suffern to Nyack and New City, with the focus now extended up Route 17 to Tuxedo and the Village of Tuxedo Park. That long history shows up in practical ways: familiarity with the plaster walls and original trim common in older area homes, a network of trusted specialists for the work we refer out, and a 5.0-star Google rating earned over years rather than months. Longevity like that is rare in the handyman trade.',
  },
  {
    question: 'What is the best way to contact you?',
    answer:
      'Texting (908) 461-2688 is the best and fastest way to reach Odds & Ends Home Services — owner Daniel Kiely answers texts personally, usually within a couple of hours during business hours, which run Monday through Friday 7am to 6pm and Saturday 8am to 4pm (closed Sunday). Calling that same number works too, and email reaches him at Dkiely@oddsandendshandymanservice.com. For detailed project requests, the online estimate form is the most thorough option because you can attach photos and describe the work step by step; it accepts submissions around the clock, and requests sent overnight are answered the next business morning. Whichever channel you choose, include your location — Tuxedo, Tuxedo Park, or a Rockland County town — and photos if possible, since photo quotes for small jobs often come back the same day. Every estimate is free and stays valid for 30 days.',
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
                Everything you need to know about working with Odds & Ends Home Services. Can&apos;t find your answer? Call or text us at{' '}
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
        subheadline="Don't hesitate to reach out. Odds & Ends is happy to answer any questions about your project, pricing, or the process. Call, text, or request your free estimate."
      />
    </>
  )
}
