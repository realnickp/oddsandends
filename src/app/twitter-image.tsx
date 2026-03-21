import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Odds & Ends Handyman Service — Rockland & Westchester County, NY'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0f1a',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #2563eb, #3b82f6, #2563eb)',
            display: 'flex',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-1px',
              lineHeight: 1.1,
              display: 'flex',
            }}
          >
            ODDS &amp; ENDS
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 600,
              color: '#e5e7eb',
              letterSpacing: '4px',
              lineHeight: 1.2,
              display: 'flex',
            }}
          >
            HANDYMAN SERVICE
          </div>
        </div>
        <div
          style={{
            width: '120px',
            height: '4px',
            backgroundColor: '#2563eb',
            borderRadius: '2px',
            margin: '28px 0',
            display: 'flex',
          }}
        />
        <div
          style={{
            fontSize: 26,
            fontWeight: 500,
            color: '#60a5fa',
            display: 'flex',
          }}
        >
          Professional Home Improvement
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '36px',
            fontSize: 18,
            fontWeight: 400,
            color: '#6b7280',
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <span>Rockland &amp; Westchester County, NY</span>
          <span style={{ color: '#374151' }}>•</span>
          <span>Licensed &amp; Insured</span>
          <span style={{ color: '#374151' }}>•</span>
          <span>Free Estimates</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
