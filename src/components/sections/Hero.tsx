'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Phone, ArrowRight, Star, Shield, Clock, MapPin } from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { phoneHref } from '@/lib/utils'
import { HeroBeforeAfter } from '@/components/sections/HeroBeforeAfter'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const show = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'none' : 'translateY(20px)',
    transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  })

  const fadeIn = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'scale(1)' : 'scale(0.97)',
    transition: `opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  })

  return (
    <section className="relative bg-gray-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(59,130,246,0.07),transparent_55%)]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* ═══ MOBILE + TABLET ═══ */}
      <div className="lg:hidden relative px-5 pt-8 pb-10">
        <div className="flex justify-center mb-6" style={show(100)}>
          <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5">
            <Shield className="h-3.5 w-3.5 text-green-400" />
            <span className="text-xs text-white/80 font-medium">
              Licensed &amp; Insured · Lic# {siteConfig.license.number}
            </span>
          </div>
        </div>

        <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center" style={show(200)}>
          {siteConfig.businessName} · Est. {siteConfig.established}
        </p>

        <h1 className="text-[2.1rem] sm:text-4xl font-bold text-white leading-[1.08] tracking-tight mb-3 text-center">
          <span className="text-gradient">Tuxedo&apos;s Go-To Guy</span>{' '}
          for Every Home Project
        </h1>

        <p className="text-sm sm:text-base text-gray-300/80 font-light leading-relaxed mb-6 max-w-md mx-auto text-center" style={show(350)}>
          Kitchens, baths, basements, custom built-ins — and every small job in between.
          Serving Tuxedo, Tuxedo Park &amp; Rockland County since {siteConfig.established}.
        </p>

        <div style={fadeIn(450)}>
          <HeroBeforeAfter />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-7 mb-5" style={show(600)}>
          <a
            href={phoneHref(siteConfig.phone)}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl font-bold text-[15px] transition-all animate-pulse-glow"
          >
            <Phone className="h-4.5 w-4.5" />
            Call {siteConfig.phoneFormatted}
          </a>
          <Link
            href="/estimate"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold text-[15px] transition-all"
          >
            Free Estimate
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4 text-xs text-white/50" style={show(750)}>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="ml-0.5">5.0</span>
          </div>
          <span className="w-px h-3 bg-white/20" />
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3 text-blue-400" />
            Tuxedo, NY
          </div>
          <span className="w-px h-3 bg-white/20" />
          <span>{siteConfig.yearsExperience}+ Yrs</span>
        </div>
      </div>

      {/* ═══ DESKTOP ═══ */}
      <div className="hidden lg:block relative">
        <div className="relative max-w-7xl mx-auto px-4 py-20 xl:py-24">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* Left — copy */}
            <div>
              <div style={show(100)}>
                <div className="inline-flex items-center gap-2 bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-gray-300">
                    Licensed &amp; Insured · Lic# {siteConfig.license.number} · Est. {siteConfig.established}
                  </span>
                </div>
              </div>

              <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
                <span className="block text-gradient">Tuxedo&apos;s Go-To Guy</span>
                <span className="block">for Every</span>
                <span className="block">Home Project</span>
              </h2>

              <p
                className="text-lg xl:text-xl text-gray-400 font-light leading-relaxed mb-10 max-w-xl"
                style={show(500)}
              >
                From a sticking door to a full kitchen transformation — kitchens, baths,
                basements, accent walls, and custom built-ins, plus the trusted handyman work
                we built our name on. Proudly serving Tuxedo, Tuxedo Park &amp; Rockland
                County since {siteConfig.established}.
              </p>

              <div className="flex flex-row gap-4 mb-12" style={show(650)}>
                <a
                  href={phoneHref(siteConfig.phone)}
                  className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-blue-600/25 animate-pulse-glow"
                >
                  <Phone className="h-5 w-5" />
                  Call {siteConfig.phoneFormatted}
                </a>
                <Link
                  href="/estimate"
                  className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white border border-white/20 hover:border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  Free Estimate
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-400" style={show(800)}>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span>5.0 Stars on Google</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span>Fast Response Times</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-400" />
                  <span>Tuxedo · Tuxedo Park · Rockland</span>
                </div>
              </div>
            </div>

            {/* Right — Before/After showcase */}
            <div style={fadeIn(300)}>
              <HeroBeforeAfter />
              <p className="text-xs text-gray-500 mt-3 text-center lg:text-left">
                Drag the handle — the kinds of transformations we bring to Tuxedo homes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
