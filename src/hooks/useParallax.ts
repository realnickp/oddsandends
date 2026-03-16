'use client'

import { useEffect, useRef, useState, CSSProperties } from 'react'

export function useParallax(speed = 0.3): {
  ref: React.RefObject<HTMLDivElement | null>
  style: CSSProperties
} {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const handleScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const center = rect.top + rect.height / 2 - windowHeight / 2
        setOffset(center * speed)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [speed])

  return {
    ref,
    style: { transform: `translateY(${offset}px)`, willChange: 'transform' },
  }
}
