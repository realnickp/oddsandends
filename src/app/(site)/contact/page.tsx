'use client'

import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { EstimateForm } from '@/components/forms/EstimateForm'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { siteConfig } from '@/data/site-config'
import { Phone, MessageSquare, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { phoneHref, smsHref } from '@/lib/utils'

const contactMethods = [
  {
    icon: Phone,
    label: 'Call Us',
    value: siteConfig.phoneFormatted,
    href: phoneHref(siteConfig.phone),
    description: 'Speak with Dan directly',
  },
  {
    icon: MessageSquare,
    label: 'Text Us (Preferred)',
    value: siteConfig.phoneFormatted,
    href: smsHref(siteConfig.phone),
    description: 'Fastest way to reach us — send photos too',
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: 'For detailed project inquiries',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero - Dark */}
      <section className="relative bg-gray-950 overflow-hidden pb-20 pt-8 md:pb-28 md:pt-12">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-8 [&_nav]:py-2 [&_ol]:text-gray-500 [&_span]:text-gray-300 [&_a]:text-gray-500 [&_a:hover]:text-blue-400 [&_svg]:text-gray-600">
            <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} />
          </div>

          <div className="max-w-3xl">
            <ScrollReveal direction="up" delay={0}>
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Get in Touch
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contact Odds & Ends Handyman Service
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
                Have a question or ready to get started? Reach out by phone, text, or
                email — Dan typically responds within hours.
              </p>
            </ScrollReveal>

            {/* Contact methods inline in hero */}
            <div className="grid sm:grid-cols-3 gap-4">
              {contactMethods.map((method, i) => (
                <ScrollReveal key={method.label} direction="up" delay={300 + i * 100}>
                  <a
                    href={method.href}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-600/50 hover:bg-gray-900 transition-all group"
                  >
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{method.label}</p>
                      <p className="text-blue-400 font-medium text-sm">{method.value}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{method.description}</p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" fromColor="#030712" toColor="#ffffff" />

      {/* Contact Form + Sidebar */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
            {/* Form */}
            <ScrollReveal direction="left">
              <div>
                <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                  Send a Message
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Request a Free Estimate
                </h2>
                <p className="text-gray-500 font-light mb-8">
                  Fill out the form below and Dan will get back to you with an honest,
                  no-obligation quote.
                </p>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl shadow-gray-200/50 border-t-4 border-blue-600">
                  <EstimateForm compact />
                </div>
              </div>
            </ScrollReveal>

            {/* Sidebar info */}
            <div className="space-y-8">
              {/* Hours */}
              <ScrollReveal direction="right" delay={100}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Hours of Operation</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500 font-light">Monday - Friday</span>
                      <span className="font-semibold text-gray-900">
                        {siteConfig.hours.weekdays}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-500 font-light">Saturday</span>
                      <span className="font-semibold text-gray-900">
                        {siteConfig.hours.saturday}
                      </span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-500 font-light">Sunday</span>
                      <span className="font-semibold text-gray-900">
                        {siteConfig.hours.sunday}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Service Area */}
              <ScrollReveal direction="right" delay={200}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Service Area</h3>
                  </div>
                  <p className="text-gray-500 font-light text-sm leading-relaxed mb-4">
                    We serve all of Rockland County, New York — including Nyack, New City,
                    Nanuet, Pearl River, Spring Valley, Haverstraw, Stony Point, Suffern,
                    Piermont, Tappan, Pomona, and surrounding communities.
                  </p>
                  <a
                    href="/areas"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-500 transition-colors"
                  >
                    View all service areas
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </ScrollReveal>

              {/* Prefer to talk - dark card */}
              <ScrollReveal direction="right" delay={300}>
                <div className="bg-gray-950 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_60%)]" />
                  <div className="relative">
                    <h3 className="text-lg font-bold mb-2">Prefer to Talk?</h3>
                    <p className="text-gray-400 font-light text-sm mb-5">
                      Call or text Dan directly for the fastest response.
                    </p>
                    <div className="space-y-3">
                      <a
                        href={phoneHref(siteConfig.phone)}
                        className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-500 transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        Call {siteConfig.phoneFormatted}
                      </a>
                      <a
                        href={smsHref(siteConfig.phone)}
                        className="flex items-center justify-center gap-2 w-full bg-gray-800 text-white py-3 rounded-xl font-bold text-sm hover:bg-gray-700 transition-colors border border-gray-700"
                      >
                        <MessageSquare className="h-4 w-4" />
                        Text Us
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Need a Faster Response?"
        subheadline="For the quickest turnaround, call or text Dan directly. He typically responds within hours and can often schedule work within a few days."
      />
    </>
  )
}
