import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/data/site-config'

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
    default: `${siteConfig.businessName} | Professional Handyman in ${siteConfig.county}, ${siteConfig.stateAbbr}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `Professional handyman services in ${siteConfig.county}, ${siteConfig.state}. ${siteConfig.yearsExperience}+ years of experience. TV mounting, drywall repair, painting, deck repair, and a wide range of home improvement services. Owner operated, licensed, and insured. Free estimates. Call ${siteConfig.phoneFormatted}.`,
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
    description: `Professional handyman services in ${siteConfig.county}, ${siteConfig.stateAbbr}. ${siteConfig.yearsExperience}+ years of experience. Free estimates.`,
  },
  twitter: {
    card: 'summary_large_image',
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
        {children}
      </body>
    </html>
  )
}
