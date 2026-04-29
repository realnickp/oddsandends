import { generatePageMetadata } from '@/lib/metadata'
import { Hero } from '@/components/sections/Hero'
import { siteConfig } from '@/data/site-config'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Odds & Ends Handyman | Rockland County, NY Services',
    description: `Professional handyman services in Rockland County, NY. ${siteConfig.yearsExperience}+ years experience. TV mounting, drywall, painting, deck repair, and more. Free estimates.`,
    path: '/',
    keywords: ['handyman', 'Rockland County', 'home repair', 'TV mounting', 'drywall', 'painting', 'deck repair'],
  })
}
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { AreasSection } from '@/components/sections/AreasSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { CommonJobs } from '@/components/sections/CommonJobs'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { HomepageEstimateSection } from '@/components/sections/HomepageEstimateSection'
import { ScrollVideoAnimation } from '@/components/sections/ScrollVideoAnimation'
import { BeforeAfterShowcase } from '@/components/sections/BeforeAfterShowcase'
import { SectionDivider } from '@/components/ui/SectionDivider'

const homeFAQs = [
  {
    question: 'What areas do you serve?',
    answer: `Odds & Ends Handyman Service covers all of Rockland County, New York, plus select communities in northern Westchester County, providing licensed handyman work across a roughly 200-square-mile service radius. In Rockland we work daily in Nyack, New City, Nanuet, Pearl River, Spring Valley, Haverstraw, Stony Point, Suffern, Piermont, Tappan, Pomona, Sparkill, Grandview-on-Hudson, Airmont, Chestnut Ridge, Montebello, New Hempstead, Sloatsburg, Upper Nyack, Congers, Blauvelt, Valley Cottage, Thiells, and Garnerville, plus the broader Clarkstown, Orangetown, and Ramapo townships. Across the Hudson and Tappan Zee Bridge, we serve Sleepy Hollow, Tarrytown, Irvington, and Dobbs Ferry. Owner Daniel Kiely founded the business in 2001 and has personally completed jobs on streets in every one of these communities, from a fence repair in Sloatsburg to cabinet refinishing in Tarrytown the same week. If your address falls inside this footprint, call (908) 461-2688 for a same-day callback.`,
  },
  {
    question: 'Do you offer free estimates?',
    answer: `Yes, every estimate from Odds & Ends Handyman Service is completely free with no obligation, no trip charge, and no pressure to book. You can request a quote three ways: call or text (908) 461-2688, fill out the online estimate form on this site, or email Dan directly at Dkiely@oddsandendshandymanservice.com. Most estimates are returned within a few hours during business hours, which run Monday through Friday 7am to 6pm and Saturday 8am to 4pm. Sending photos along with your request speeds the process dramatically; for jobs like a TV mount in Pearl River or a deck stain in Stony Point we can often quote without an in-person visit. For larger projects like a bathroom renovation or a custom built-in, owner Daniel Kiely will schedule a free walkthrough at your home so the estimate reflects exact measurements and materials. Quotes stay valid for 30 days.`,
  },
  {
    question: 'What kind of work do you handle?',
    answer: `Odds & Ends Handyman Service handles small to medium home improvement and repair work across Rockland County, NY, with a portfolio that spans interior carpentry, light plumbing, finish painting, and exterior repairs. Day-to-day projects include TV mounting, drywall repair, interior and exterior painting, door installation, deck and fence repair, furniture assembly, light fixture and ceiling fan installation, toilet and faucet replacement, tile repair, shelving and closet systems, cabinet refinishing, picture hanging, smart home device setup, and bathroom or kitchen renovations. Custom work is a specialty, including wainscoting, custom accent walls, and built-in shelving for awkward Rockland County floor plans. We do not take on roofing, major electrical work, or full-house remodels, so those projects get referred to trusted specialists. With $1,000,000 in general liability coverage and a 5.0-star Google rating across 23 reviews, every project gets handled to the same standard.`,
  },
  {
    question: 'How quickly can you start?',
    answer: `Most projects from Odds & Ends Handyman Service can be scheduled within 3 to 7 days of a confirmed estimate, with smaller repairs often booked the same week and urgent calls handled inside 48 hours when possible. Phone and text messages to (908) 461-2688 are answered the same business day, typically within a couple of hours during operating hours of Monday through Friday 7am to 6pm and Saturday 8am to 4pm. For a single TV mount, light fixture swap, or doorknob replacement in towns like Nanuet, New City, or Suffern, we can frequently squeeze in a half-day appointment alongside larger projects already on the calendar. Multi-day work like a bathroom renovation or a deck rebuild books out further; in spring and fall the lead time can stretch to two or three weeks. For a true emergency, text owner Daniel Kiely directly with photos.`,
  },
  {
    question: 'Are you licensed and insured?',
    answer: `Yes. Odds & Ends Handyman Service is a Licensed Home Improvement Contractor in Rockland County, New York, holding License #H-25-600 issued by the Rockland County Office of Consumer Protection, with the current term effective March 4, 2026 through January 31, 2027. The business carries a $1,000,000 general liability insurance policy and operates legally as a DBA of Top Line Property Solutions LLC. Owner Daniel Kiely founded the business in 2001 and has personally led every job for 25 years, working in homes from Piermont and Sparkill on the Hudson up through Stony Point and Haverstraw. Proof of license and insurance is provided in writing with every estimate, and homeowners can verify the license through the Rockland County government license lookup. This protection matters: an unlicensed contractor performing $1,500 or more of home improvement work in Rockland County is committing a violation, and the homeowner has no recourse if anything goes wrong.`,
  },
  {
    question: 'Can I send photos of my project?',
    answer: `Absolutely, photos are the fastest path to an accurate estimate from Odds & Ends Handyman Service and we encourage every customer to send a few before the conversation begins. The simplest method is texting them to (908) 461-2688; you can also attach images directly to the online estimate form on the contact page or email them to Dkiely@oddsandendshandymanservice.com. For a TV mounting job in Pearl River, a wide shot of the wall and a close-up of the studs near where the bracket will land usually gets us to a quote without any site visit. For drywall repair, painting, or tile work, photos help confirm the area in square feet and reveal whether prep work like priming or moisture remediation is needed. For larger jobs we still walk the property in person, but photos cut the back-and-forth from days to minutes.`,
  },
  {
    question: 'Do you handle small jobs?',
    answer: `Yes, small jobs are welcome and account for a meaningful share of the work Odds & Ends Handyman Service does each week, from single picture hangings and doorknob swaps to a quick TV mount or a couple of light fixtures. Many local handymen turn down anything under a few hundred dollars or charge a stiff trip fee that makes a small repair impractical; our approach is to bundle multiple small items into one efficient visit. A typical small-job visit might pair a curtain rod installation in Nyack with a leaky faucet swap and a pair of smoke detector replacements, all completed in a single morning at one combined rate. There is no minimum hour requirement and no padded trip charge inside the core Rockland County service area. With 25 years on Rockland County walls, even a 30-minute repair gets the same care as a full renovation.`,
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollVideoAnimation />
      <SectionDivider variant="wave" fromColor="#030712" toColor="#ffffff" />
      <TrustBar />

      {/* Get Started — Two options: Project Builder or Estimate Form */}
      <HomepageEstimateSection />

      <ServicesOverview />
      <WhyChooseUs />
      <SectionDivider variant="curve" fromColor="#ffffff" toColor="#030712" flip />
      <BeforeAfterShowcase />
      <SectionDivider variant="wave" fromColor="#030712" toColor="#f9fafb" />
      <ReviewsSection />
      <ProcessSteps />
      <SectionDivider variant="curve" fromColor="#ffffff" toColor="#030712" flip />
      <AreasSection />
      <SectionDivider variant="wave" fromColor="#030712" toColor="#f9fafb" />
      <CommonJobs />
      <FAQSection
        faqs={homeFAQs}
        title="Common Questions"
        subtitle="Everything you need to know about working with Odds & Ends"
      />
      <CTASection />
    </>
  )
}
