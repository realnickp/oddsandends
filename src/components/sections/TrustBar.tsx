'use client'

import { Shield, Clock, Star, ThumbsUp, Wrench, MapPin } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useCountUp } from '@/hooks/useCountUp'
import type { LucideIcon } from 'lucide-react'

interface TrustItem {
  icon: LucideIcon
  value: string
  countTo?: number
  decimals?: number
  suffix?: string
  label: string
}

const trustItems: TrustItem[] = [
  { icon: Clock, value: '20+', countTo: 20, suffix: '+', label: 'Years Experience' },
  { icon: Star, value: '5.0', countTo: 5, decimals: 1, label: 'Star Rating' },
  { icon: Shield, value: 'Free', label: 'Estimates' },
  { icon: ThumbsUp, value: '100%', countTo: 100, suffix: '%', label: 'Satisfaction' },
  { icon: Wrench, value: '30+', countTo: 30, suffix: '+', label: 'Services' },
  { icon: MapPin, value: '16', countTo: 16, label: 'Towns Served' },
]

function CounterValue({ item, isVisible }: { item: TrustItem; isVisible: boolean }) {
  const count = useCountUp(item.countTo ?? 0, isVisible, 2000, item.decimals ?? 0)

  if (!item.countTo) {
    return <span className="text-3xl md:text-4xl font-bold text-blue-700">{item.value}</span>
  }

  return (
    <span className="text-3xl md:text-4xl font-bold text-blue-700">
      {count}{item.suffix ?? ''}
    </span>
  )
}

export function TrustBar() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50 border-y border-gray-100"
    >
      {/* Desktop: grid with dividers */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 py-12">
        <div
          className="grid grid-cols-3 lg:grid-cols-6 gap-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(20px)',
            transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {trustItems.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col items-center text-center gap-1.5 ${
                i < trustItems.length - 1 ? 'lg:border-r lg:border-gray-200' : ''
              }`}
            >
              <item.icon className="h-5 w-5 text-blue-500 mb-1" />
              <CounterValue item={item} isVisible={isVisible} />
              <p className="text-sm text-gray-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: marquee */}
      <div className="md:hidden overflow-hidden py-6">
        <div className="animate-marquee flex gap-10 w-max">
          {[...trustItems, ...trustItems].map((item, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-blue-700" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">{item.value}</p>
                <p className="text-xs text-gray-500">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
