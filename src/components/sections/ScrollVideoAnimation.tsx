'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface Caption {
  text: string
  startProgress: number
  endProgress: number
}

const TOTAL_FRAMES = 121
const MOBILE_BREAKPOINT = 768

function getFrameSrc(index: number, isMobile: boolean): string {
  const num = Math.min(Math.max(index, 1), TOTAL_FRAMES)
  const folder = isMobile ? '/video/frames-mobile/frame-' : '/video/frames/frame-'
  return `${folder}${String(num).padStart(3, '0')}.jpg`
}

export function ScrollVideoAnimation({
  captions = [],
  scrollHeight = '150vh',
}: {
  captions?: Caption[]
  scrollHeight?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const framesRef = useRef<HTMLImageElement[]>([])
  const currentFrameRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const isMobileRef = useRef(false)
  const [loaded, setLoaded] = useState(false)
  const [progress, setProgress] = useState(0)

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    const frames = framesRef.current
    if (!canvas || !ctx || frames.length === 0) return

    let img: HTMLImageElement | null = frames[index] ?? null
    if (!img || !img.complete || img.naturalWidth === 0) {
      img = null
      for (let i = index - 1; i >= 0; i--) {
        if (frames[i]?.complete && frames[i].naturalWidth > 0) {
          img = frames[i]
          break
        }
      }
      if (!img) {
        for (let i = index + 1; i < frames.length; i++) {
          if (frames[i]?.complete && frames[i].naturalWidth > 0) {
            img = frames[i]
            break
          }
        }
      }
    }
    if (!img) return

    const parent = canvas.parentElement
    if (!parent) return

    const containerWidth = parent.clientWidth
    const aspect = img.naturalHeight / img.naturalWidth
    const width = containerWidth
    const height = containerWidth * aspect

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width
      canvas.height = height
    }

    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(img, 0, 0, width, height)
  }, [])

  // Load frames based on screen size
  const loadFrames = useCallback((mobile: boolean) => {
    const images: HTMLImageElement[] = []
    let loadedCount = 0

    const onReady = () => {
      loadedCount++
      if (loadedCount >= TOTAL_FRAMES) {
        setLoaded(true)
      }
    }

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image()
      img.onload = onReady
      img.onerror = onReady
      img.src = getFrameSrc(i, mobile)
      if (img.complete) onReady()
      images.push(img)
    }

    framesRef.current = images
    isMobileRef.current = mobile

    if (images[0].complete) {
      drawFrame(0)
    } else {
      images[0].addEventListener('load', () => drawFrame(0))
    }
  }, [drawFrame])

  // Initialize and handle resize across breakpoint
  useEffect(() => {
    const mobile = window.innerWidth < MOBILE_BREAKPOINT
    loadFrames(mobile)

    const handleResize = () => {
      const nowMobile = window.innerWidth < MOBILE_BREAKPOINT
      if (nowMobile !== isMobileRef.current) {
        setLoaded(false)
        loadFrames(nowMobile)
      } else {
        drawFrame(currentFrameRef.current)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [loadFrames, drawFrame])

  // Redraw current frame once all frames finish loading
  useEffect(() => {
    if (loaded) {
      drawFrame(currentFrameRef.current)
    }
  }, [loaded, drawFrame])

  // Scroll handler
  useEffect(() => {
    let initialDraw = true

    const handleScroll = () => {
      if (rafRef.current) return

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const container = containerRef.current
        if (!container) return

        const rect = container.getBoundingClientRect()
        const windowHeight = window.innerHeight

        const startOffset = windowHeight * 0.5
        const totalTravel = rect.height - startOffset
        const distanceTraveled = startOffset - rect.top
        let rawProgress = 0
        if (distanceTraveled > 0) {
          rawProgress = Math.min(Math.max(distanceTraveled / totalTravel, 0), 1)
        }

        const frameIndex = Math.round(rawProgress * (TOTAL_FRAMES - 1))

        if (frameIndex !== currentFrameRef.current || initialDraw) {
          initialDraw = false
          currentFrameRef.current = frameIndex
          drawFrame(frameIndex)
        }

        setProgress(rawProgress)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [drawFrame, loaded])

  return (
    <section
      ref={containerRef}
      className="relative bg-gray-950"
      style={{ height: scrollHeight }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Loading state */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-950 z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
              <span className="text-gray-400 text-sm">Loading animation...</span>
            </div>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full max-w-6xl mx-auto md:px-4"
          style={{ display: 'block' }}
        />

        {/* Optional captions */}
        {captions.map((caption, i) => {
          const visible =
            progress >= caption.startProgress && progress <= caption.endProgress
          const range = caption.endProgress - caption.startProgress
          const fadeInEnd = caption.startProgress + range * 0.15
          const fadeOutStart = caption.endProgress - range * 0.15
          let opacity = 0
          if (visible) {
            if (progress < fadeInEnd) {
              opacity = (progress - caption.startProgress) / (fadeInEnd - caption.startProgress)
            } else if (progress > fadeOutStart) {
              opacity = (caption.endProgress - progress) / (caption.endProgress - fadeOutStart)
            } else {
              opacity = 1
            }
          }

          return (
            <div
              key={i}
              className="absolute inset-x-0 bottom-[15%] text-center pointer-events-none transition-opacity duration-100"
              style={{ opacity }}
            >
              <p className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg px-4">
                {caption.text}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
