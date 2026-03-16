import { generatePageMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { siteConfig } from '@/data/site-config'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Terms of Service',
    description: `Terms of service for Odds & Ends Handyman Service. Read the terms and conditions that govern use of our website and services.`,
    path: '/terms',
  })
}

export default function TermsPage() {
  const sections = [
    {
      title: 'Agreement to Terms',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          By accessing or using the website of {siteConfig.businessName} at {siteConfig.url} (&ldquo;the Site&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.
        </p>
      ),
    },
    {
      title: 'Services',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          {siteConfig.businessName} provides handyman and home improvement services in {siteConfig.county}, {siteConfig.state}. Our website allows you to learn about our services, view our work, read customer reviews, and request free estimates. Submitting an estimate request does not create a binding contract — it is simply a request for a quote.
        </p>
      ),
    },
    {
      title: 'Estimates and Pricing',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          All estimates provided by {siteConfig.businessName} are free and carry no obligation. Estimates are based on the information provided and may be adjusted after an in-person assessment of the work. Final pricing will be agreed upon before any work begins. We strive to provide transparent, honest pricing with no hidden fees.
        </p>
      ),
    },
    {
      title: 'Work Agreement',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          Once you approve an estimate and schedule work, a service agreement is formed between you and {siteConfig.businessName}. The scope of work, pricing, and timeline will be discussed and agreed upon before the project begins. Any changes to the scope of work may result in adjusted pricing, which will be communicated and approved before proceeding.
        </p>
      ),
    },
    {
      title: 'Payment',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          Payment terms will be discussed and agreed upon as part of your service agreement. For larger projects, a deposit may be required before work begins. Full payment is due upon satisfactory completion of the work unless otherwise arranged.
        </p>
      ),
    },
    {
      title: 'Cancellations and Rescheduling',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          We understand that plans change. If you need to cancel or reschedule a project, please notify us as soon as possible so we can adjust our schedule accordingly. We appreciate reasonable notice and will work with you to find an alternative time.
        </p>
      ),
    },
    {
      title: 'Satisfaction Guarantee',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          We take pride in our work and strive for complete customer satisfaction on every project. If you are not satisfied with any aspect of our work, please let us know promptly and we will work to resolve the issue.
        </p>
      ),
    },
    {
      title: 'Intellectual Property',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          All content on this website — including text, images, logos, graphics, and design — is the property of {siteConfig.businessName} and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content from this site without our written permission.
        </p>
      ),
    },
    {
      title: 'User Submissions',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          When you submit information through our estimate form or contact us through our website, you grant us permission to use that information for the purpose of providing our services. This includes project descriptions, photos, and contact details. We will not use your submissions for any unrelated purpose without your consent.
        </p>
      ),
    },
    {
      title: 'Website Use',
      content: (
        <>
          <p className="text-gray-500 font-light leading-relaxed mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-500 font-light">
            <li>Use the website for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of the website</li>
            <li>Submit false or misleading information</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Limitation of Liability',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          {siteConfig.businessName} provides this website on an &ldquo;as is&rdquo; basis. While we strive to keep the information on our site accurate and up to date, we make no warranties or representations about the completeness, reliability, or accuracy of the content. To the fullest extent permitted by law, {siteConfig.businessName} shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website.
        </p>
      ),
    },
    {
      title: 'Third-Party Links',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          Our website may contain links to third-party websites for your convenience. We do not endorse or assume responsibility for the content, policies, or practices of any third-party sites. Access to third-party websites is at your own risk.
        </p>
      ),
    },
    {
      title: 'Governing Law',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          These Terms of Service shall be governed by and construed in accordance with the laws of the State of {siteConfig.state}, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of our services shall be resolved in the courts of {siteConfig.county}, {siteConfig.state}.
        </p>
      ),
    },
    {
      title: 'Changes to Terms',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          We reserve the right to update or modify these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Your continued use of the Site after any changes constitutes acceptance of the revised terms.
        </p>
      ),
    },
    {
      title: 'Contact Us',
      content: (
        <>
          <p className="text-gray-500 font-light leading-relaxed">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <ul className="list-none space-y-1.5 text-gray-500 font-light mt-4">
            <li><strong className="text-gray-700">{siteConfig.businessName}</strong></li>
            <li>Phone: <a href={`tel:+1${siteConfig.phone}`} className="text-blue-700 hover:text-blue-600 transition-colors">{siteConfig.phoneFormatted}</a></li>
            <li>Email: <a href={`mailto:${siteConfig.email}`} className="text-blue-700 hover:text-blue-600 transition-colors">{siteConfig.email}</a></li>
            <li>{siteConfig.county}, {siteConfig.state}</li>
          </ul>
        </>
      ),
    },
  ]

  return (
    <>
      {/* Dark Hero */}
      <section className="relative bg-gray-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          <Breadcrumbs items={[{ name: 'Terms of Service', url: '/terms' }]} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-16 md:pb-24">
          <ScrollReveal direction="up">
            <div className="max-w-3xl">
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                Legal
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Terms of Service
              </h1>
              <p className="text-gray-500 font-light">Last updated: March 12, 2026</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="curve" fromColor="#030712" toColor="#ffffff" />

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-12">
            {sections.map((section, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 40}>
                <div className="group">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </span>
                    {section.title}
                  </h2>
                  {section.content}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
