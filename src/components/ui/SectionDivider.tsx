type Variant = 'wave' | 'angle' | 'curve'

export function SectionDivider({
  variant = 'wave',
  fromColor = '#030712', // gray-950
  toColor = '#ffffff',
  flip = false,
}: {
  variant?: Variant
  fromColor?: string
  toColor?: string
  flip?: boolean
}) {
  const paths: Record<Variant, string> = {
    wave: 'M0,64 C320,120 640,0 960,64 C1280,128 1600,0 1920,64 L1920,160 L0,160 Z',
    angle: 'M0,0 L1920,120 L1920,160 L0,160 Z',
    curve: 'M0,128 Q960,0 1920,128 L1920,160 L0,160 Z',
  }

  return (
    <div
      className="relative w-full overflow-hidden leading-[0] -mt-px"
      style={{
        backgroundColor: fromColor,
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    >
      <svg
        viewBox="0 0 1920 160"
        preserveAspectRatio="none"
        className="block w-full h-12 md:h-20"
      >
        <path d={paths[variant]} fill={toColor} />
      </svg>
    </div>
  )
}
