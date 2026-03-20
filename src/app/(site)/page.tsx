import { generatePageMetadata } from '@/lib/metadata'
import { Hero } from '@/components/sections/Hero'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Odds & Ends Handyman | Rockland County, NY Services',
    description:
      'Professional handyman services in Rockland County, NY. 25+ years experience. TV mounting, drywall, painting, deck repair, and more. Free estimates.',
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
    answer: 'We serve all of Rockland County, New York, including Nyack, New City, Nanuet, Pearl River, Spring Valley, Haverstraw, Stony Point, Clarkstown, Orangetown, Ramapo, Suffern, Piermont, Grandview-on-Hudson, Sparkill, Tappan, and Pomona.',
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes! Every estimate is completely free with no obligation. Call, text, or fill out our online form and we\'ll get back to you quickly with an honest quote.',
  },
  {
    question: 'What kind of work do you handle?',
    answer: 'We handle a wide range of home improvement work including TV mounting, drywall repair, painting, door installation, deck repair, bathroom and kitchen renovations, light fixtures, furniture assembly, wainscoting, custom accent walls, built-ins, and much more. If you don\'t see your project listed, give Dan a call — he can almost definitely do it.',
  },
  {
    question: 'How quickly can you start?',
    answer: 'Dan typically responds within hours and can often schedule work within a few days. For urgent needs, call or text directly for the fastest response.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes. Odds & Ends Handyman Service has been established since 2001 with over 20 years of professional experience serving Rockland County homeowners.',
  },
  {
    question: 'Can I send photos of my project?',
    answer: 'Absolutely! Photos help us give you a faster, more accurate estimate. You can upload them through our online estimate form or text them directly to us.',
  },
  {
    question: 'Do you handle small jobs?',
    answer: 'No job too small, because we know how much the little things matter. Whether you need a single doorknob replaced or a full day of repairs knocked off your list, we\'re happy to help. We treat every project with the same care and attention.',
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
