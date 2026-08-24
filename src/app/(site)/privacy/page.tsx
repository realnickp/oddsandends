import { generatePageMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { siteConfig } from '@/data/site-config'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Privacy Policy',
    description: `Privacy policy for Odds & Ends Handyman Service. Learn how we collect, use, and protect your personal information.`,
    path: '/privacy',
  })
}

export default function PrivacyPage() {
  const sections = [
    {
      title: 'Introduction',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          {siteConfig.businessName} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website at {siteConfig.url} or use our services.
        </p>
      ),
    },
    {
      title: 'Information We Collect',
      content: (
        <>
          <p className="text-gray-500 font-light leading-relaxed mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-500 font-light">
            <li><strong className="text-gray-700">Contact Information:</strong> Name, phone number, email address, and city/town when you submit an estimate request or contact us.</li>
            <li><strong className="text-gray-700">Project Information:</strong> Descriptions of work needed, photos you upload, service preferences, and timeline requirements.</li>
            <li><strong className="text-gray-700">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring sources. This is collected through standard web analytics tools.</li>
            <li><strong className="text-gray-700">Device Information:</strong> Browser type, operating system, and device type for the purpose of optimizing your website experience.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'How We Use Your Information',
      content: (
        <>
          <p className="text-gray-500 font-light leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-500 font-light">
            <li>Respond to your estimate requests and inquiries</li>
            <li>Provide, maintain, and improve our handyman services</li>
            <li>Communicate with you about your projects via your preferred contact method</li>
            <li>Send follow-up communications related to services you&apos;ve requested</li>
            <li>Improve our website and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Information Sharing',
      content: (
        <>
          <p className="text-gray-500 font-light leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-500 font-light mt-4">
            <li><strong className="text-gray-700">Service Providers:</strong> We may share information with trusted third-party tools that help us operate our website and manage communications (e.g., form processing, analytics).</li>
            <li><strong className="text-gray-700">Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal processes.</li>
            <li><strong className="text-gray-700">Business Protection:</strong> We may share information to protect the rights, property, or safety of our business, our customers, or others.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Data Security',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
        </p>
      ),
    },
    {
      title: 'Cookies and Tracking',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect certain website functionality.
        </p>
      ),
    },
    {
      title: 'Third-Party Links',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          Our website may contain links to third-party websites (such as Google Reviews). We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>
      ),
    },
    {
      title: 'Your Rights',
      content: (
        <>
          <p className="text-gray-500 font-light leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-500 font-light">
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of any marketing communications</li>
          </ul>
          <p className="text-gray-500 font-light leading-relaxed mt-4">
            To exercise any of these rights, please contact us using the information below.
          </p>
        </>
      ),
    },
    {
      title: "Children's Privacy",
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          Our website and services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us and we will promptly delete it.
        </p>
      ),
    },
    {
      title: 'Changes to This Policy',
      content: (
        <p className="text-gray-500 font-light leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.
        </p>
      ),
    },
    {
      title: 'Contact Us',
      content: (
        <>
          <p className="text-gray-500 font-light leading-relaxed">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
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
          <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy' }]} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-16 md:pb-24">
          <ScrollReveal direction="up">
            <div className="max-w-3xl">
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                Legal
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Privacy Policy
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
