'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export interface TransformationPair {
  key: string
  label: string
  before: { src: string; alt: string }
  after: { src: string; alt: string }
}

export const transformationPairs: TransformationPair[] = [
  {
    key: 'kitchens',
    label: 'Kitchens',
    before: { src: '/images/transformations/kitchen-before.jpg', alt: 'Dated 1990s kitchen with oak cabinets before renovation' },
    after: { src: '/images/transformations/kitchen-after.jpg', alt: 'Renovated kitchen with white shaker cabinets, brass hardware, and oak flooring' },
  },
  {
    key: 'bathrooms',
    label: 'Bathrooms',
    before: { src: '/images/transformations/bathroom-before.jpg', alt: 'Dated beige bathroom before renovation' },
    after: { src: '/images/transformations/bathroom-after.jpg', alt: 'Renovated bathroom with navy vanity, marble top, and glass shower' },
  },
  {
    key: 'basements',
    label: 'Basements',
    before: { src: '/images/transformations/basement-before.jpg', alt: 'Unfinished basement with concrete floor and exposed joists' },
    after: { src: '/images/transformations/basement-after.jpg', alt: 'Finished basement family room with built-in media wall' },
  },
  {
    key: 'accent-walls',
    label: 'Accent Walls',
    before: { src: '/images/transformations/accent-wall-before.jpg', alt: 'Plain beige living room wall before accent wall install' },
    after: { src: '/images/transformations/accent-wall-after.jpg', alt: 'Custom board-and-batten accent wall in deep green with floating console' },
  },
  {
    key: 'built-ins',
    label: 'Built-Ins',
    before: { src: '/images/transformations/built-ins-before.jpg', alt: 'Empty fireplace alcove with cluttered shelf before built-ins' },
    after: { src: '/images/transformations/built-ins-after.jpg', alt: 'Custom painted built-in bookcases beside a colonial fireplace' },
  },
]

const HOLD_AFTER_MS = 2600
const HOLD_BEFORE_MS = 1400
const WIPE_MS = 1600

/**
 * Interactive before/after showcase. Auto-plays a wipe from "before" to
 * "after" for each category, then advances. Dragging the handle pauses
 * the tour; it resumes after a few seconds of no interaction.
 */
export function HeroBeforeAfter({ className = '' }: { className?: string }) {
  const [idx, setIdx] = useState(0)
  const [pos, setPos] = useState(0) // 0 = all before, 100 = all after
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const interacted = useRef(0) // timestamp of last user interaction
  const raf = useRef<number>(0)

  // Auto-play tour
  useEffect(() => {
    let cancelled = false
    let start: number | null = null

    const tick = (t: number) => {
      if (cancelled) return
      // Pause the tour while the user is (or just was) interacting
      if (dragging.current || Date.now() - interacted.current < 4000) {
        start = null
        raf.current = requestAnimationFrame(tick)
        return
      }
      if (start === null) start = t
      const elapsed = t - start
      const cycle = HOLD_BEFORE_MS + WIPE_MS + HOLD_AFTER_MS

      const inCycle = elapsed % cycle
      if (elapsed >= cycle) {
        start = t
        setPos(0)
        setIdx((i) => (i + 1) % transformationPairs.length)
      } else if (inCycle < HOLD_BEFORE_MS) {
        setPos(0)
      } else if (inCycle < HOLD_BEFORE_MS + WIPE_MS) {
        const p = (inCycle - HOLD_BEFORE_MS) / WIPE_MS
        // easeInOutCubic
        const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2
        setPos(eased * 100)
      } else {
        setPos(100)
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => {
      cancelled = true
      cancelAnimationFrame(raf.current)
    }
  }, [])

  const posFromEvent = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const p = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, p)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    interacted.current = Date.now()
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    posFromEvent(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    interacted.current = Date.now()
    posFromEvent(e.clientX)
  }
  const endDrag = () => {
    dragging.current = false
    interacted.current = Date.now()
  }

  const pair = transformationPairs[idx]

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className="relative aspect-[3/2] rounded-2xl overflow-hidden select-none touch-pan-y cursor-ew-resize border border-white/10 shadow-2xl shadow-black/50"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {/* Preload every pair; only the active one is visible */}
        {transformationPairs.map((p, i) => (
          <div key={p.key} className={i === idx ? 'absolute inset-0' : 'absolute inset-0 opacity-0 pointer-events-none'}>
            {/* BEFORE (base layer) */}
            <Image
              src={p.before.src}
              alt={p.before.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={i === 0}
            />
            {/* AFTER (clipped reveal) */}
            <div
              className="absolute inset-0"
              style={i === idx ? { clipPath: `inset(0 ${100 - pos}% 0 0)` } : undefined}
            >
              <Image
                src={p.after.src}
                alt={p.after.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={i === 0}
              />
            </div>
          </div>
        ))}

        {/* Divider handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.5)]"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-9 w-9 rounded-full bg-white shadow-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 6 3 12l6 6M15 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span
          className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-sm rounded-lg px-2.5 py-1 transition-opacity duration-300"
          style={{ opacity: pos > 92 ? 0 : 1 }}
        >
          Before
        </span>
        <span
          className="absolute top-3 right-3 text-[11px] font-bold uppercase tracking-wider text-gray-900 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1 transition-opacity duration-300"
          style={{ opacity: pos < 8 ? 0 : 1 }}
        >
          After
        </span>

        {/* Current category label */}
        <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-blue-600/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
          {pair.label}
        </span>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mt-3 justify-center lg:justify-start">
        {transformationPairs.map((p, i) => (
          <button
            key={p.key}
            type="button"
            onClick={() => {
              interacted.current = Date.now()
              setIdx(i)
              setPos(100)
            }}
            className={
              i === idx
                ? 'text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-full bg-blue-600 text-white transition-colors'
                : 'text-[11px] md:text-xs font-semibold px-3 py-1.5 rounded-full bg-white/[0.07] text-gray-300 border border-white/10 hover:bg-white/[0.12] transition-colors'
            }
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  )
}
