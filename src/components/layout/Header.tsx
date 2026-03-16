'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu, X, MessageSquare, ChevronDown, Wrench, MapPin, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { phoneHref, smsHref } from '@/lib/utils'

const featuredServices = [
  { slug: 'tv-mounting', name: 'TV Mounting' },
  { slug: 'drywall-repair', name: 'Drywall Repair' },
  { slug: 'door-installation', name: 'Door Installation' },
  { slug: 'fence-repair', name: 'Fence Repair' },
  { slug: 'deck-repair', name: 'Deck Repair' },
  { slug: 'furniture-assembly', name: 'Furniture Assembly' },
  { slug: 'light-fixture-installation', name: 'Light Fixture Installation' },
  { slug: 'bathroom-renovation', name: 'Bathroom Renovation' },
  { slug: 'kitchen-renovation', name: 'Kitchen Renovation' },
  { slug: 'flooring', name: 'Flooring' },
  { slug: 'tile-work', name: 'Tile Work' },
]

const featuredCities = [
  { slug: 'nyack', name: 'Nyack' },
  { slug: 'new-city', name: 'New City' },
  { slug: 'nanuet', name: 'Nanuet' },
  { slug: 'pearl-river', name: 'Pearl River' },
  { slug: 'spring-valley', name: 'Spring Valley' },
  { slug: 'haverstraw', name: 'Haverstraw' },
  { slug: 'stony-point', name: 'Stony Point' },
  { slug: 'suffern', name: 'Suffern' },
]

type NavItem =
  | { label: string; href: string; dropdown?: undefined }
  | { label: string; href: string; dropdown: 'services' | 'areas' }

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', dropdown: 'services' },
  { label: 'Service Areas', href: '/areas', dropdown: 'areas' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const navRef = useRef<HTMLElement>(null)

  const openDropdown = useCallback((key: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setActiveDropdown(key)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

  useEffect(() => {
    if (!mobileOpen) setMobileAccordion(null)
  }, [mobileOpen])

  const toggleMobileAccordion = (key: string) => {
    setMobileAccordion((prev) => (prev === key ? null : key))
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Top bar */}
      <div className="bg-gray-950 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <p className="text-gray-300">
            Serving {siteConfig.county}, {siteConfig.stateAbbr} — Free Estimates
          </p>
          <div className="flex items-center gap-6">
            <a
              href={smsHref(siteConfig.phone)}
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Text Us
            </a>
            <a
              href={phoneHref(siteConfig.phone)}
              className="flex items-center gap-1.5 font-semibold hover:text-blue-400 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.businessName}
              width={56}
              height={56}
              className="h-12 w-12 md:h-14 md:w-14"
              priority
            />
            <div className="hidden sm:block">
              <p className="font-bold text-gray-900 text-lg leading-tight tracking-tight">
                Odds &amp; Ends
              </p>
              <p className="text-xs text-gray-500 tracking-wide uppercase">
                Handyman Service
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => openDropdown(item.dropdown)}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1 group"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        activeDropdown === item.dropdown ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>

                  {/* Dropdown panel */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                      activeDropdown === item.dropdown
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-1'
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 ring-1 ring-black/5 p-5 w-72">
                      {item.dropdown === 'services' && (
                        <DesktopServicesPanel />
                      )}
                      {item.dropdown === 'areas' && (
                        <DesktopAreasPanel />
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
            <a
              href={phoneHref(siteConfig.phone)}
              className="hidden md:flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <Link
              href="/estimate"
              className="hidden sm:flex items-center bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              Free Estimate
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden border-t border-gray-100 bg-white overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[calc(100vh-8rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1 overflow-y-auto max-h-[calc(100vh-10rem)]">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.href}>
                <button
                  onClick={() => toggleMobileAccordion(item.dropdown)}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileAccordion === item.dropdown ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileAccordion === item.dropdown
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 pr-2 pb-2 space-y-0.5">
                    {item.dropdown === 'services' && (
                      <MobileServicesPanel onNavigate={() => setMobileOpen(false)} />
                    )}
                    {item.dropdown === 'areas' && (
                      <MobileAreasPanel onNavigate={() => setMobileOpen(false)} />
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-4 space-y-3">
            <a
              href={phoneHref(siteConfig.phone)}
              className="flex items-center justify-center gap-2 bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold"
            >
              <Phone className="h-4 w-4" />
              Call {siteConfig.phoneFormatted}
            </a>
            <a
              href={smsHref(siteConfig.phone)}
              className="flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg font-semibold"
            >
              <MessageSquare className="h-4 w-4" />
              Text Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

function DesktopServicesPanel() {
  return (
    <>
      <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-gray-100">
        <Wrench className="h-4 w-4 text-blue-600" />
        <span className="text-sm font-semibold text-gray-900">Popular Services</span>
      </div>
      <ul className="space-y-0.5">
        {featuredServices.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="block px-2.5 py-1.5 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-3 pt-2.5 border-t border-gray-100">
        <Link
          href="/services"
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
        >
          View All Services
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </>
  )
}

function DesktopAreasPanel() {
  return (
    <>
      <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-gray-100">
        <MapPin className="h-4 w-4 text-blue-600" />
        <span className="text-sm font-semibold text-gray-900">Service Areas</span>
      </div>
      <ul className="space-y-0.5">
        {featuredCities.map((city) => (
          <li key={city.slug}>
            <Link
              href={`/areas/${city.slug}`}
              className="block px-2.5 py-1.5 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
            >
              {city.name}, NY
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-3 pt-2.5 border-t border-gray-100">
        <Link
          href="/areas"
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
        >
          View All Service Areas
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </>
  )
}

function MobileServicesPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <>
      {featuredServices.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          onClick={onNavigate}
          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
        >
          {service.name}
        </Link>
      ))}
      <Link
        href="/services"
        onClick={onNavigate}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors mt-1"
      >
        View All Services
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </>
  )
}

function MobileAreasPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <>
      {featuredCities.map((city) => (
        <Link
          key={city.slug}
          href={`/areas/${city.slug}`}
          onClick={onNavigate}
          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
        >
          {city.name}, NY
        </Link>
      ))}
      <Link
        href="/areas"
        onClick={onNavigate}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors mt-1"
      >
        View All Service Areas
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </>
  )
}
