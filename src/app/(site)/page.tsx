import { generatePageMetadata } from '@/lib/metadata'
import { Hero } from '@/components/sections/Hero'
import { siteConfig } from '@/data/site-config'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Odds & Ends Handyman Service | Tuxedo & Rockland, NY',
    description: `Kitchens, bathrooms, basements, built-ins, and expert handyman work in Tuxedo, Tuxedo Park & Rockland County, NY. ${siteConfig.yearsExperience}+ years of craftsmanship. Free estimates.`,
    path: '/',
    keywords: ['home services Tuxedo NY', 'handyman Tuxedo NY', 'Tuxedo Park contractor', 'kitchen remodel Tuxedo', 'bathroom remodel Tuxedo NY', 'home repair Rockland County'],
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
    answer: `Odds & Ends Handyman Service is focused on the Town of Tuxedo, New York — the Village of Tuxedo Park, the hamlet along Route 17, Eagle Valley, Southfields, Sterling Forest, and Arden — plus all of Rockland County next door. Owner Daniel Kiely has spent ${siteConfig.yearsExperience}+ years working in homes across Sloatsburg, Suffern, Nyack, New City, Pearl River, and the rest of Rockland, and Tuxedo sits right up Route 17 from that home base, so response times are short. Whether you are inside the gate in Tuxedo Park, on a wooded lot off Long Meadow Road, or in a Rockland colonial, the same crew shows up with the same standard of work. If your address falls anywhere in the Tuxedo–Ramapo Valley corridor or Rockland County, call or text (908) 461-2688 for a same-day callback.`,
  },
  {
    question: 'Do you offer free estimates?',
    answer: `Yes, every estimate from Odds & Ends Handyman Service is completely free with no obligation, no trip charge, and no pressure to book. You can request a quote three ways: call or text (908) 461-2688, fill out the online estimate form on this site, or email Dan directly. Most estimates are returned within a few hours during business hours, which run Monday through Friday 7am to 6pm and Saturday 8am to 4pm. Sending photos along with your request speeds the process dramatically; for smaller jobs like a TV mount or a sticking door we can often quote without an in-person visit. For larger projects like a kitchen refresh, a basement finish, or custom built-ins, owner Daniel Kiely will schedule a free walkthrough at your home — in Tuxedo, Tuxedo Park, or anywhere in Rockland County — so the estimate reflects exact measurements and materials. Quotes stay valid for 30 days.`,
  },
  {
    question: 'What kind of work do you handle?',
    answer: `Odds & Ends Handyman Service specializes in small to medium sized renovations: kitchens, bathrooms, basement finishing, custom accent walls, wainscoting, custom built-ins, deck repair and refinishing, flooring, and home offices. Alongside that renovation work, we still handle the full range of general handyman jobs that built this business — TV mounting, drywall repair, interior painting, door installation, light fixtures and ceiling fans, furniture assembly, picture hanging, smart home setup, and minor plumbing repairs. Older homes in Tuxedo and Tuxedo Park are a particular specialty; plaster walls, original trim, and vintage hardware demand a lighter touch than most contractors give them. We do not take on roofing, major electrical work, or full-house gut remodels, so those projects get referred to trusted specialists. With $1,000,000 in general liability coverage and a 5.0-star Google rating, every project gets handled to the same standard.`,
  },
  {
    question: 'How quickly can you start?',
    answer: `Most projects from Odds & Ends Handyman Service can be scheduled within 3 to 7 days of a confirmed estimate, with smaller repairs often booked the same week and urgent calls handled inside 48 hours when possible. Phone and text messages to (908) 461-2688 are answered the same business day, typically within a couple of hours during operating hours of Monday through Friday 7am to 6pm and Saturday 8am to 4pm. For a single TV mount, light fixture swap, or doorknob replacement in Tuxedo, Sloatsburg, or Suffern, we can frequently fit a half-day appointment alongside larger projects already on the calendar. Multi-day work like a bathroom renovation, a basement finish, or a deck rebuild books out further; in spring and fall the lead time can stretch to two or three weeks. For a true emergency, text owner Daniel Kiely directly with photos.`,
  },
  {
    question: 'Are you licensed and insured?',
    answer: `Yes. Odds & Ends Handyman Service is a Licensed Home Improvement Contractor holding License #H-25-600 issued by the Rockland County Office of Consumer Protection, with the current term effective March 4, 2026 through January 31, 2027, and operates legally as a DBA of Top Line Property Solutions LLC. The business carries a $1,000,000 general liability insurance policy that covers every job we take on, including all work in Tuxedo, Tuxedo Park, and the rest of Orange County. Owner Daniel Kiely founded the business in 2001 and has personally led every job for ${siteConfig.yearsExperience}+ years. Proof of license and insurance is provided in writing with every estimate, and homeowners can verify the license through the Rockland County government license lookup. That paper trail matters anywhere, but especially in Tuxedo Park, where homeowners rightly expect documentation before anyone works on a century-old house.`,
  },
  {
    question: 'Can I send photos of my project?',
    answer: `Absolutely — photos are the fastest path to an accurate estimate from Odds & Ends Handyman Service, and we encourage every customer to send a few before the conversation begins. The simplest method is texting them to (908) 461-2688; you can also attach images directly to the online estimate form or email them to Dan. For a TV mounting job, a wide shot of the wall and a close-up near where the bracket will land usually gets us to a quote without any site visit. For drywall repair, painting, or tile work, photos help confirm the area in square feet and reveal whether prep work like priming or moisture remediation is needed. For renovation work — a kitchen, a basement, a set of built-ins — we still walk the space in person, but photos cut the back-and-forth from days to minutes.`,
  },
  {
    question: 'Do you still handle small jobs?',
    answer: `Yes — small jobs are where Odds & Ends started, and they are still welcome every single week, especially in Tuxedo and Tuxedo Park. From single picture hangings and doorknob swaps to a quick TV mount or a couple of light fixtures, no job is beneath the calendar. Many contractors turn down anything under a few hundred dollars or tack on a stiff trip fee; our approach is to bundle multiple small items into one efficient visit. A typical small-job morning might pair a curtain rod installation with a leaky faucet swap and a pair of smoke detector replacements, all at one combined rate. There is no minimum hour requirement and no padded trip charge anywhere in the Tuxedo or Rockland County service area. The goal is simple: be the first name Tuxedo homeowners think of for every job, no matter the size.`,
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
