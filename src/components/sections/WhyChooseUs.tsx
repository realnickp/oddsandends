import Image from 'next/image'
import { Sparkles, Clock, Shield, Paintbrush, MessagesSquare, DollarSign } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/data/site-config'

const reasons = [
  {
    icon: Clock,
    title: '20+ Years of Experience',
    description: "Dan has been solving homeowners' problems since 2001. You're not getting a rookie — you're getting decades of hands-on expertise.",
  },
  {
    icon: Sparkles,
    title: 'Meticulous Attention to Detail',
    description: 'Every project is finished to the highest standard. We leave your home cleaner than we found it — that\'s not a slogan, it\'s what our reviews say.',
  },
  {
    icon: Shield,
    title: 'Honest & Transparent',
    description: "No surprise charges, no upselling. You get a clear quote upfront and work completed exactly as promised. If something can be a simple fix, we'll tell you.",
  },
  {
    icon: Paintbrush,
    title: 'Creative Problem Solver',
    description: "Dan doesn't just fix things — he finds better solutions. Multiple customers have said the finished result exceeded what they imagined.",
  },
  {
    icon: MessagesSquare,
    title: 'Responsive & Reliable',
    description: "Quick response times, punctual arrivals, and clear communication throughout. Text or call — we get back to you fast.",
  },
  {
    icon: DollarSign,
    title: 'Fair, Reasonable Pricing',
    description: 'Premium work at honest prices. Free estimates on every job. No obligation to commit — we earn your business through quality.',
  },
]

const leftColumn = reasons.slice(0, 3)
const rightColumn = reasons.slice(3)

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[8rem] md:text-[12rem] font-black text-gray-100/60 leading-none select-none pointer-events-none -rotate-6 translate-x-1/4">
        WHY US
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-blue-700 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Why Homeowners Trust Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Handyman Rockland County Counts On
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              Owner operated, licensed, and local — Dan specializes in small and medium
              sized renovations and carries a million dollar insurance policy.
              Here&apos;s why hundreds of homeowners trust him with their homes.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-col items-center mb-14">
            <div className="relative h-28 w-28 rounded-full overflow-hidden shadow-lg shadow-gray-300/50 ring-4 ring-white">
              <Image
                src="/images/site/dan.png"
                alt="Dan Kiely, owner of Odds & Ends Handyman Service"
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
            <p className="mt-4 font-bold text-gray-900 text-lg">Dan Kiely</p>
            <p className="text-gray-500 text-sm font-light">Owner &amp; Craftsman Since 2001</p>
            <p className="text-green-600 text-xs font-medium flex items-center justify-center gap-1 mt-1">
              <Shield className="h-3 w-3" />
              Licensed &amp; Insured in Rockland County
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop: 2 columns with offset */}
        <div className="hidden md:grid md:grid-cols-2 gap-x-12 gap-y-0 max-w-5xl mx-auto">
          <div className="space-y-6">
            {leftColumn.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 150} direction="left">
                <ReasonCard reason={reason} />
              </ScrollReveal>
            ))}
          </div>
          <div className="space-y-6 mt-12 lg:mt-20">
            {rightColumn.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 150 + 200} direction="right">
                <ReasonCard reason={reason} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="md:hidden space-y-4">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 80}>
              <ReasonCard reason={reason} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ reason }: { reason: typeof reasons[0] }) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl hover:bg-gray-50/80 transition-colors group">
      <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
        <reason.icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h3 className="font-bold text-gray-900 mb-1.5">{reason.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {reason.description}
        </p>
      </div>
    </div>
  )
}
