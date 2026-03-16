import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MessageSquare, Clock, MapPin } from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { phoneHref, smsHref } from '@/lib/utils'

const serviceLinks = [
  { label: 'TV Mounting', href: '/services/tv-mounting' },
  { label: 'Drywall Repair', href: '/services/drywall-repair' },
  { label: 'Door Installation', href: '/services/door-installation' },
  { label: 'Deck Repair', href: '/services/deck-repair' },
  { label: 'Painting', href: '/services/painting' },
  { label: 'Light Fixture Installation', href: '/services/light-fixture-installation' },
  { label: 'Bathroom Renovation', href: '/services/bathroom-renovation' },
  { label: 'Kitchen Renovation', href: '/services/kitchen-renovation' },
  { label: 'Cabinet Installation', href: '/services/cabinet-installation' },
  { label: 'All Services →', href: '/services' },
]

const areaLinks = [
  { label: 'Nyack', href: '/areas/nyack' },
  { label: 'New City', href: '/areas/new-city' },
  { label: 'Pearl River', href: '/areas/pearl-river' },
  { label: 'Nanuet', href: '/areas/nanuet' },
  { label: 'Piermont', href: '/areas/piermont' },
  { label: 'Suffern', href: '/areas/suffern' },
  { label: 'Clarkstown', href: '/areas/clarkstown' },
  { label: 'Tappan', href: '/areas/tappan' },
  { label: 'All Areas →', href: '/areas' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Free Estimate', href: '/estimate' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.businessName}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full"
              />
              <div>
                <p className="font-bold text-white text-lg leading-tight">
                  Odds & Ends
                </p>
                <p className="text-xs text-gray-400 tracking-wide uppercase">
                  Handyman Service
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Professional handyman services in {siteConfig.county},{' '}
              {siteConfig.stateAbbr}. Trusted by homeowners since{' '}
              {siteConfig.established}. No job too big or too small.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={phoneHref(siteConfig.phone)}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-blue-400" />
                {siteConfig.phoneFormatted}
              </a>
              <a
                href={smsHref(siteConfig.phone)}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <MessageSquare className="h-4 w-4 text-blue-400" />
                Text us anytime
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-blue-400" />
                Email us
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-blue-400" />
                {siteConfig.county}, {siteConfig.stateAbbr}
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-blue-400" />
                Mon–Fri {siteConfig.hours.weekdays}
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas column */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2.5">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-gray-900 rounded-xl">
              <p className="text-white font-semibold text-sm mb-1">Free Estimates</p>
              <p className="text-xs text-gray-400 mb-3">
                Call, text, or submit a request online
              </p>
              <Link
                href="/estimate"
                className="block text-center bg-blue-700 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Get Your Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights
            reserved. Est. {siteConfig.established}.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
