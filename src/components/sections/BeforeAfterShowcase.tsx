'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  before: string
  after: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Complete Flooring Transformation',
    description: 'Ripped out old flooring down to the subfloor and installed brand new vinyl plank throughout the entire living area.',
    before: '/images/before-after/1-before.jpg',
    after: '/images/before-after/1-after.jpg',
  },
  {
    id: 2,
    title: 'Custom Poolside Cabana Build',
    description: 'Designed and built a custom cabana structure by the pool — from bare concrete to a shaded retreat.',
    before: '/images/before-after/2-before.jpg',
    after: '/images/before-after/2-after.jpg',
  },
  {
    id: 3,
    title: 'Custom Wine Cellar & Stone Wall',
    description: 'Transformed raw drywall into a stunning glass-enclosed wine cellar with stone accent wall and custom lighting.',
    before: '/images/before-after/3-before.jpg',
    after: '/images/before-after/3-after.jpg',
  },
  {
    id: 4,
    title: 'Full Bathroom Renovation',
    description: 'Gutted an outdated bathroom and rebuilt it with subway tile, glass shower door, slate floors, and modern fixtures.',
    before: '/images/before-after/4-before.jpg',
    after: '/images/before-after/4-after.jpg',
  },
  {
    id: 5,
    title: 'Complete Kitchen Overhaul',
    description: 'From dated oak cabinets to a stunning modern kitchen with white cabinetry, quartz island, and stone backsplash.',
    before: '/images/before-after/5-before.jpg',
    after: '/images/before-after/5-after.jpg',
  },
  {
    id: 6,
    title: 'Nursery Room Build-Out',
    description: 'Took a gutted room down to exposed brick and transformed it into a beautiful nursery with herringbone hardwood, wainscoting, and wallpaper.',
    before: '/images/before-after/6-before.jpg',
    after: '/images/before-after/6-after.jpg',
  },
]

function BeforeAfterSlider({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sliderPos, setSliderPos] = useState(50)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.min(Math.max((x / rect.width) * 100, 2), 98)
    setSliderPos(pct)
  }, [])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }, [updatePosition])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return
    updatePosition(e.clientX)
  }, [updatePosition])

  const handlePointerUp = useCallback(() => {
    isDragging.current = false
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden cursor-col-resize select-none group"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{ touchAction: 'none' }}
    >
      {/* After (full background) */}
      <div className="absolute inset-0">
        <Image
          src={project.after}
          alt={`${project.title} - After`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 70vw"
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg z-10">
          After
        </div>
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image
          src={project.before}
          alt={`${project.title} - Before`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 70vw"
        />
        <div className="absolute top-4 left-4 bg-red-500/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
          Before
        </div>
      </div>

      {/* Slider line + handle */}
      <div
        className="absolute top-0 bottom-0 z-20 flex items-center"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-0.5 h-full bg-white shadow-lg" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center gap-0.5 transition-transform group-hover:scale-110">
          <ChevronLeft className="h-4 w-4 text-gray-700 -mr-1" />
          <ChevronRight className="h-4 w-4 text-gray-700 -ml-1" />
        </div>
      </div>

      {/* Instruction overlay */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none opacity-100 group-active:opacity-0 transition-opacity duration-500">
        <div className="bg-black/50 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full animate-pulse">
          Drag to compare
        </div>
      </div>
    </div>
  )
}

export function BeforeAfterShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabsRef = useRef<HTMLDivElement>(null)

  function goTo(index: number) {
    setActiveIndex(index)
    // Scroll the active tab into view on mobile
    if (tabsRef.current) {
      const buttons = tabsRef.current.querySelectorAll('button')
      buttons[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }

  function goPrev() {
    goTo(activeIndex > 0 ? activeIndex - 1 : projects.length - 1)
  }

  function goNext() {
    goTo(activeIndex < projects.length - 1 ? activeIndex + 1 : 0)
  }

  const activeProject = projects[activeIndex]

  return (
    <section className="py-20 md:py-28 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mb-10 md:mb-12">
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Transformations
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See the Difference
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed">
              Real projects. Real results. Drag the slider to see the transformation.
            </p>
          </div>
        </ScrollReveal>

        {/* ═══ MOBILE LAYOUT ═══ */}
        <div className="lg:hidden">
          {/* Horizontal scrollable project tabs */}
          <div
            ref={tabsRef}
            className="flex gap-2 overflow-x-auto pb-4 -mx-4 px-4 scroll-snap-x scrollbar-hide"
          >
            {projects.map((project, i) => (
              <button
                key={project.id}
                onClick={() => goTo(i)}
                className={`shrink-0 scroll-snap-start px-4 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  i === activeIndex
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white/[0.06] text-gray-400 border border-white/[0.08] hover:bg-white/[0.1]'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* Slider */}
          <BeforeAfterSlider key={activeProject.id} project={activeProject} />

          {/* Prev/Next arrows + description below slider */}
          <div className="mt-4 flex items-start gap-3">
            <button
              onClick={goPrev}
              className="shrink-0 h-10 w-10 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white hover:bg-white/[0.1] transition-colors mt-0.5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex-1 min-w-0 text-center">
              <h3 className="text-white font-semibold text-base mb-1">
                {activeProject.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {activeProject.description}
              </p>
            </div>
            <button
              onClick={goNext}
              className="shrink-0 h-10 w-10 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white hover:bg-white/[0.1] transition-colors mt-0.5"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex gap-1.5 mt-5 justify-center">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-7 bg-blue-500' : 'w-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ═══ DESKTOP LAYOUT ═══ */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_340px] gap-8 items-start">
          {/* Main slider */}
          <ScrollReveal direction="left">
            <BeforeAfterSlider key={activeProject.id} project={activeProject} />
          </ScrollReveal>

          {/* Project selector sidebar */}
          <div className="space-y-3">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 80} direction="right">
                <button
                  onClick={() => goTo(i)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-500 group ${
                    i === activeIndex
                      ? 'bg-blue-600/20 border border-blue-500/30 shadow-lg shadow-blue-500/10'
                      : 'bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                        i === activeIndex
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/10 text-gray-500 group-hover:text-white'
                      }`}
                    >
                      {project.id}
                    </div>
                    <div className="min-w-0">
                      <h3
                        className={`font-semibold text-sm mb-1 transition-colors ${
                          i === activeIndex ? 'text-white' : 'text-gray-400 group-hover:text-white'
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-xs leading-relaxed transition-all duration-500 ${
                          i === activeIndex
                            ? 'text-gray-300 max-h-20 opacity-100'
                            : 'text-gray-600 max-h-0 opacity-0 overflow-hidden'
                        }`}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
