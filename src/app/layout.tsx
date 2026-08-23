import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { siteConfig } from '@/data/site-config'
import { ConversionTracking } from '@/components/analytics/ConversionTracking'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName} | Tuxedo & ${siteConfig.county}, ${siteConfig.stateAbbr}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  applicationName: siteConfig.businessName,
  authors: [{ name: siteConfig.owner, url: siteConfig.url }],
  creator: siteConfig.owner,
  publisher: siteConfig.businessName,
  category: 'home services',
  other: {
    'geo.region': `US-${siteConfig.stateAbbr}`,
    'geo.placename': `Tuxedo, ${siteConfig.stateAbbr}`,
    'geo.position': `${siteConfig.latitude};${siteConfig.longitude}`,
    ICBM: `${siteConfig.latitude}, ${siteConfig.longitude}`,
  },
  description: `Home improvement and handyman services in Tuxedo, Tuxedo Park, and ${siteConfig.county}, ${siteConfig.state}. Kitchens, bathrooms, basements, accent walls, custom built-ins, decks, flooring, and more. ${siteConfig.yearsExperience}+ years of experience. Owner operated, licensed, and insured. Free estimates. Call ${siteConfig.phoneFormatted}.`,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.businessName,
    title: siteConfig.businessName,
    description: `Kitchens, baths, basements, built-ins, and trusted handyman work in Tuxedo, Tuxedo Park & ${siteConfig.county}, ${siteConfig.stateAbbr}. ${siteConfig.yearsExperience}+ years of experience. Free estimates.`,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.businessName} — Kitchens, Baths & Home Services in Tuxedo & Rockland County, NY`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${siteConfig.url}/images/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-gray-900 bg-white">
        {/* Google tag (gtag.js) — Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18165734950"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18165734950');
          `}
        </Script>
        <ConversionTracking />
        {children}
      </body>
    </html>
  )
}
