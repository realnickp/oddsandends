'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, Star, Shield, Clock } from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { phoneHref } from '@/lib/utils'

const workPhotos = [
  { src: '/images/site/outdoor-stairs.jpg', alt: 'Custom outdoor staircase with LED lighting' },
  { src: '/images/site/outdoor-living.jpg', alt: 'Outdoor living space build' },
  { src: '/images/site/firepit-deck.jpg', alt: 'Custom deck with fire pit area' },
]

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
    transform: mounted ? 'scale(1)' : 'scale(0.96)',
    transition: `opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  })

  return (
    <section className="relative bg-gray-950 overflow-hidden">
      {/* ═══ MOBILE + TABLET: Full-bleed cinematic photo hero ═══ */}
      <div className="lg:hidden relative min-h-[100svh] flex flex-col justify-end">
        <div className="absolute inset-0">
          <Image
            src="/images/site/dan.png"
            alt="Owner of Odds & Ends Handyman Service at work in Rockland County"
            fill
            className="object-cover object-[center_15%]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 via-[45%] to-gray-950/10" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/40 via-transparent to-transparent" />
        </div>

        <div className="absolute top-4 left-0 right-0 z-10 flex justify-center" style={show(200)}>
          <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5">
            <Shield className="h-3.5 w-3.5 text-green-400" />
            <span className="text-xs text-white/80 font-medium">
              Licensed & Insured · Lic# {siteConfig.license.number}
            </span>
          </div>
        </div>

        <div className="relative z-10 px-5 pb-8 pt-16 safe-area-bottom">
          <div style={show(300)}>
            <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
              {siteConfig.shortName} · Est. {siteConfig.established}
            </p>
          </div>

          <h1 className="text-[2rem] sm:text-4xl font-bold text-white leading-[1.1] tracking-tight mb-3">
            Your Reliable{' '}
            <span className="text-gradient">Rockland County</span>{' '}
            Handyman
          </h1>

          <p className="text-sm sm:text-base text-gray-300/80 font-light leading-relaxed mb-6 max-w-md" style={show(550)}>
            {siteConfig.yearsExperience}+ years of meticulous craftsmanship across Rockland County.
            Locally owned, licensed, and insured — specializing in small and medium sized renovations.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-5" style={show(650)}>
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

          <div className="flex items-center gap-4 text-xs text-white/50" style={show(800)}>
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
              <Clock className="h-3 w-3 text-blue-400" />
              Fast Response
            </div>
            <span className="w-px h-3 bg-white/20" />
            <span>{siteConfig.yearsExperience}+ Yrs</span>
          </div>
        </div>
      </div>

      {/* ═══ DESKTOP: Copy left + Bento mosaic right ═══ */}
      <div className="hidden lg:block relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.06),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 py-20 xl:py-28">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* Left — copy */}
            <div>
              <div style={show(100)}>
                <div className="inline-flex items-center gap-2 bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-gray-300">
                    Licensed & Insured · Lic# {siteConfig.license.number} · {siteConfig.county}, {siteConfig.stateAbbr}
                  </span>
                </div>
              </div>

              <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
                <span className="block">Your Reliable</span>
                <span className="block text-gradient">Rockland County</span>
                <span className="block">Handyman</span>
              </h2>

              <p
                className="text-lg xl:text-xl text-gray-400 font-light leading-relaxed mb-10 max-w-xl"
                style={show(600)}
              >
                {siteConfig.shortName} has delivered professional handyman service across Rockland County
                since {siteConfig.established}. Locally owned, licensed, and insured —
                specializing in small and medium sized renovations. Free estimates, honest pricing, meticulous work.
              </p>

              <div className="flex flex-row gap-4 mb-12" style={show(750)}>
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

              <div className="flex flex-wrap gap-6 text-sm text-gray-400" style={show(900)}>
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
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>Licensed & Insured</span>
                </div>
              </div>
            </div>

            {/* Right — Bento mosaic */}
            <div
              className="grid grid-cols-[1.3fr_1fr] grid-rows-[1.1fr_1fr] gap-2.5 h-[480px] xl:h-[540px]"
              style={fadeIn(300)}
            >
              {/* Owner photo — tall hero, left column spanning both rows */}
              <div className="row-span-2 relative rounded-2xl overflow-hidden group">
                <Image
                  src="/images/site/dan.png"
                  alt="Owner of Odds & Ends Handyman Service"
                  fill
                  className="object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1280px) 30vw, 25vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <p className="text-white font-bold text-lg">{siteConfig.shortName}</p>
                  <p className="text-blue-300 text-xs font-medium">Locally Owned · Est. {siteConfig.established}</p>
                </div>
              </div>

              {/* Top right — outdoor stairs (night shot) */}
              <div className="relative rounded-2xl overflow-hidden group" style={fadeIn(500)}>
                <Image
                  src={workPhotos[0].src}
                  alt={workPhotos[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-[11px] font-semibold bg-black/30 backdrop-blur-sm rounded-lg px-2.5 py-1">
                  Custom Stairs
                </span>
              </div>

              {/* Bottom right — firepit deck */}
              <div className="relative rounded-2xl overflow-hidden group" style={fadeIn(650)}>
                <Image
                  src={workPhotos[2].src}
                  alt={workPhotos[2].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-[11px] font-semibold bg-black/30 backdrop-blur-sm rounded-lg px-2.5 py-1">
                  Deck &amp; Fire Pit
                </span>
              </div>
            </div>
          </div>

          {/* Work strip below the bento — full width, 3 extra photos */}
          <div
            className="grid grid-cols-3 gap-2.5 mt-2.5 h-28 xl:h-32"
            style={fadeIn(800)}
          >
            <div className="relative rounded-xl overflow-hidden group">
              <Image
                src={workPhotos[1].src}
                alt={workPhotos[1].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-2.5 left-3 text-white text-[11px] font-semibold bg-black/30 backdrop-blur-sm rounded-lg px-2.5 py-1">
                Outdoor Living
              </span>
            </div>
            <div className="relative rounded-xl overflow-hidden group">
              <Image
                src="/images/site/pergola.jpg"
                alt="Custom pergola build"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-2.5 left-3 text-white text-[11px] font-semibold bg-black/30 backdrop-blur-sm rounded-lg px-2.5 py-1">
                Pergola Build
              </span>
            </div>
            <div className="relative rounded-xl overflow-hidden group flex items-center justify-center bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.06] transition-colors cursor-pointer">
              <Link href="/services" className="flex flex-col items-center gap-1.5 text-center">
                <span className="text-white font-bold text-sm">Full-Service Handyman</span>
                <span className="text-blue-400 text-xs font-medium flex items-center gap-1">
                  View All <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
