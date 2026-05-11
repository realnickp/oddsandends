import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, Sparkles, Truck, Recycle, BadgeCheck } from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { phoneHref } from '@/lib/utils'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const features = [
  {
    icon: BadgeCheck,
    title: 'Flat-Rate Pricing',
    description: 'No hourly clock. No surprise dump fees. You see the number before we lift a thing.',
  },
  {
    icon: Truck,
    title: 'Single Item to Whole House',
    description: 'One old couch, a packed garage, or a full estate cleanout — same crew, same care.',
  },
  {
    icon: Recycle,
    title: 'Donation & Recycling First',
    description: 'Usable items go to Habitat ReStore and Goodwill. Metal scrapped. E-waste recycled.',
  },
]

export function JunkRemovalAnnouncement() {
  return (
    <section className="relative overflow-hidden bg-gray-950">
      {/* Brand-blue ambient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.14),transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Soft blue glow accents */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 border border-blue-400/30 px-4 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                </span>
                <Sparkles className="h-3.5 w-3.5 text-blue-300" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                  New Service · 2026
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-5">
                NOW Offering{' '}
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                  Junk Removal
                </span>{' '}
                Services
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-xl">
                Garage cleanouts, appliance haul-away, estate cleanouts, construction debris — across all of Rockland County, NY. We load it, haul it, and dispose of it responsibly. You just point at what needs to go.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="/services/junk-removal"
                  className="inline-flex items-center justify-center gap-2.5 bg-white text-blue-700 hover:bg-blue-50 px-7 py-4 rounded-xl font-bold text-base md:text-lg transition-all animate-pulse-glow"
                >
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={phoneHref(siteConfig.phone)}
                  className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white border border-white/20 px-7 py-4 rounded-xl font-bold text-base md:text-lg transition-all"
                >
                  <Phone className="h-5 w-5" />
                  Call {siteConfig.phoneFormatted}
                </a>
              </div>
            </ScrollReveal>

            {/* Feature bullets */}
            <ScrollReveal delay={400}>
              <ul className="grid sm:grid-cols-3 gap-4 list-none">
                {features.map((feature) => (
                  <li
                    key={feature.title}
                    className="rounded-xl bg-white/[0.04] border border-white/10 p-4 backdrop-blur-sm"
                  >
                    <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-3">
                      <feature.icon className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-xs font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Right: Image */}
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-600/30 via-blue-500/15 to-transparent blur-2xl" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 bg-gray-900 shadow-2xl shadow-blue-950/40">
                <Image
                  src="/images/services/junk-removal.jpg"
                  alt="Two Odds & Ends crew members loading an old refrigerator, couch, boxes, and rolled rug onto a junk removal truck outside a Rockland County, NY home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent pointer-events-none" />
                {/* Floating badge */}
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-gray-950/80 backdrop-blur-md border border-blue-400/40 px-3.5 py-1.5">
                  <Truck className="h-3.5 w-3.5 text-blue-300" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200">
                    Now on the road
                  </span>
                </div>
                {/* Bottom credibility chip */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-2xl bg-gray-950/70 backdrop-blur-md border border-white/10 px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-blue-300 shrink-0" />
                    <span className="text-[11px] font-semibold text-white">
                      Licensed #H-25-600 · $1M insured
                    </span>
                  </div>
                  <span className="text-[10px] text-blue-200 font-bold uppercase tracking-wider">
                    Rockland County
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
