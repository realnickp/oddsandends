'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right'

const directionTransform: Record<Direction, string> = {
  up: 'translateY(VALpx)',
  down: 'translateY(-VALpx)',
  left: 'translateX(VALpx)',
  right: 'translateX(-VALpx)',
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  distance = 40,
  duration = 700,
  className,
  threshold,
  rootMargin,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  direction?: Direction
  delay?: number
  distance?: number
  duration?: number
  className?: string
  threshold?: number
  rootMargin?: string
  as?: 'div' | 'section' | 'span'
}) {
  const { ref, isVisible } = useScrollReveal({ threshold, rootMargin })

  const hiddenTransform = directionTransform[direction].replace('VAL', String(distance))

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : hiddenTransform,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  )
}
