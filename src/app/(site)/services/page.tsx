import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, Wrench, Paintbrush, Hammer, Tv, DoorOpen, Lightbulb, Phone,
  Armchair, Fan, Smartphone,
} from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'
import { services } from '@/data/services'
import { siteConfig } from '@/data/site-config'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { CTASection } from '@/components/sections/CTASection'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'
import { breadcrumbSchema } from '@/lib/schema'
import { phoneHref } from '@/lib/utils'

export async function generateMetadata() {
  return generatePageMetadata({
    title: 'Home Services in Tuxedo & Rockland County, NY',
    description:
      'Kitchens, baths, basements, accent walls, built-ins, decks, flooring, home offices, and trusted handyman work in Tuxedo & Rockland County, NY.',
    path: '/services',
    keywords: ['home services Tuxedo NY', 'kitchen remodel Tuxedo', 'bathroom renovation Rockland County', 'handyman services Tuxedo NY'],
  })
}

/* The eight signature project categories — the work we're scaling into */
const signatureCategories = [
  {
    slug: 'kitchen-renovation',
    title: 'Kitchens',
    blurb: 'Cabinets, counters, backsplash, lighting — practical kitchen transformations without the six-figure gut job.',
    image: '/images/transformations/kitchen-after.jpg',
    alt: 'Renovated kitchen with white shaker cabinets and brass hardware',
  },
  {
    slug: 'bathroom-renovation',
    title: 'Bathrooms',
    blurb: 'Vanities, tile, fixtures, and full small-bath renovations that feel brand new.',
    image: '/images/transformations/bathroom-after.jpg',
    alt: 'Renovated bathroom with navy vanity and marble top',
  },
  {
    slug: 'basement-finishing',
    title: 'Basements',
    blurb: 'Moisture-first basement finishing — from bare concrete to a family room, office, or gym.',
    image: '/images/transformations/basement-after.jpg',
    alt: 'Finished basement family room with built-in media wall',
  },
  {
    slug: 'custom-accent-walls',
    title: 'Accent Walls',
    blurb: 'Board-and-batten, shiplap, and feature walls that give a room a reason to be photographed.',
    image: '/images/transformations/accent-wall-after.jpg',
    alt: 'Deep green board-and-batten accent wall with floating console',
  },
  {
    slug: 'built-ins',
    title: 'Custom Built-Ins',
    blurb: 'Bookcases, window seats, and media walls built to look original to your home.',
    image: '/images/transformations/built-ins-after.jpg',
    alt: 'Custom painted built-in bookcases beside a fireplace',
  },
  {
    slug: 'deck-repair',
    title: 'Deck Repair & Refinishing',
    blurb: 'Repairs, board replacement, sanding, and stain — your deck, brought back to life.',
    image: '/images/transformations/deck-refinishing.jpg',
    alt: 'Freshly refinished wood deck surrounded by trees',
  },
  {
    slug: 'flooring',
    title: 'Flooring',
    blurb: 'Hardwood, LVP, and tile — installed with clean transitions and proper prep.',
    image: '/images/transformations/flooring.jpg',
    alt: 'New wide-plank white oak flooring in a sunlit room',
  },
  {
    slug: 'home-office-setup',
    title: 'Home Offices',
    blurb: 'Built-in desks, shelving, and finished rooms for people who commute to the living room.',
    image: '/images/transformations/home-office.jpg',
    alt: 'Custom home office with built-in desk and green cabinetry',
  },
]

/* Most common handyman jobs — the preview inside the General Handyman category */
const commonHandymanJobs = [
  { slug: 'tv-mounting', name: 'TV Mounting', icon: <Tv className="h-5 w-5" /> },
  { slug: 'drywall-repair', name: 'Drywall Repair', icon: <Hammer className="h-5 w-5" /> },
  { slug: 'painting', name: 'Painting', icon: <Paintbrush className="h-5 w-5" /> },
  { slug: 'door-installation', name: 'Door Installation', icon: <DoorOpen className="h-5 w-5" /> },
  { slug: 'light-fixture-installation', name: 'Light Fixtures', icon: <Lightbulb className="h-5 w-5" /> },
  { slug: 'furniture-assembly', name: 'Furniture Assembly', icon: <Armchair className="h-5 w-5" /> },
  { slug: 'ceiling-fan-installation-and-replacement', name: 'Ceiling Fans', icon: <Fan className="h-5 w-5" /> },
  { slug: 'smart-home-device-setup', name: 'Smart Home Setup', icon: <Smartphone className="h-5 w-5" /> },
]

export default function ServicesPage() {
  const signatureSlugs = signatureCategories.map((c) => c.slug)
  const previewSlugs = commonHandymanJobs.map((j) => j.slug)
  const moreHandymanServices = services.filter(
    (s) => !signatureSlugs.includes(s.slug) && !previewSlugs.includes(s.slug)
  )

  return (
    <>
      <SchemaMarkup
        schema={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ])}
      />
      {/* Breadcrumbs on dark */}
      <section className="bg-gray-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="text-xs text-gray-500">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Services</span>
          </nav>
        </div>
      </section>

      {/* Dark Hero */}
      <section className="bg-gray-950 relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              What We Do
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
              Home Services in Tuxedo, Tuxedo Park &amp; Rockland County
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
              Small and medium sized renovations — kitchens, baths, basements, built-ins —
              plus the full range of trusted handyman work we built our name on.
              One local team, {siteConfig.yearsExperience}+ years of craftsmanship.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex gap-8 mt-10">
              <div>
                <p className="text-3xl font-bold text-white">Owner</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Operated</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white">{siteConfig.yearsExperience}+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Years Experience</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Five-Star Rated</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="curve" fromColor="#030712" toColor="#ffffff" />

      {/* Signature Renovations — the 8 categories */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="mb-14">
              <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Signature Projects
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Transformations We Love
              </h2>
              <p className="text-lg text-gray-600 font-light max-w-2xl">
                The rooms that change how your home feels — planned, built, and finished by
                one trusted local team.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {signatureCategories.map((cat, i) => (
              <ScrollReveal key={cat.slug} delay={(i % 4) * 80}>
                <Link
                  href={`/services/${cat.slug}`}
                  className="group relative block rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-500 h-[280px] md:h-[320px] bg-gray-950"
                >
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-bold text-white text-lg md:text-xl mb-1.5 drop-shadow-sm">
                      {cat.title}
                    </h3>
                    <p className="text-white/90 text-sm font-light line-clamp-2 mb-3 drop-shadow-sm">
                      {cat.blurb}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-white font-semibold text-sm group-hover:gap-2.5 group-hover:text-blue-200 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="curve" fromColor="#ffffff" toColor="#030712" flip />

      {/* General Handyman Services */}
      <section className="py-20 md:py-28 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.06),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="mb-12 max-w-2xl">
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                Still Proudly a Handyman
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                General Handyman Services
              </h2>
              <p className="text-lg text-gray-400 font-light">
                The to-do list work that built this business — still welcome, still done
                with the same care as a full renovation. These are the most common calls:
              </p>
            </div>
          </ScrollReveal>

          {/* Preview: most common handyman jobs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {commonHandymanJobs.map((job, i) => (
              <ScrollReveal key={job.slug} delay={(i % 4) * 60}>
                <Link
                  href={`/services/${job.slug}`}
                  className="group flex items-center gap-3 rounded-xl bg-white/[0.05] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.08] px-4 py-4 transition-all"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                    {job.icon}
                  </span>
                  <span className="text-sm md:text-[15px] font-semibold text-white group-hover:text-blue-200 transition-colors">
                    {job.name}
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* The rest, as little buttons */}
          <ScrollReveal>
            <div className="mt-8 rounded-xl bg-white/[0.03] border border-white/[0.06] px-5 py-5">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3.5">
                Plus everything else on the list
              </p>
              <div className="flex flex-wrap gap-2">
                {moreHandymanServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center rounded-full bg-white/[0.06] border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.12] px-3.5 py-1.5 text-xs md:text-sm font-semibold text-gray-300 hover:text-white transition-all"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Don't see your project? — now correctly inside the dark section */}
          <ScrollReveal>
            <div className="mt-12 text-center bg-white/[0.05] border border-white/10 rounded-2xl p-8 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Don&apos;t See Your Project Listed?
              </h3>
              <p className="text-gray-400 font-light max-w-lg mx-auto mb-6">
                We can almost definitely do it. Give us a call or fill out the estimate form
                and describe what you need — chances are it&apos;s right in our wheelhouse.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={phoneHref(siteConfig.phone)}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call {siteConfig.phoneFormatted}
                </a>
                <Link
                  href="/estimate"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  Free Estimate
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="wave" fromColor="#030712" toColor="#ffffff" />

      {/* Bottom band — one call */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 mb-5">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                One Call Handles It All
              </h3>
              <p className="text-gray-600 font-light max-w-lg mx-auto">
                Why juggle multiple contractors? Odds &amp; Ends handles everything from quick
                fixes to full room transformations — all with the same care and five-star quality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
