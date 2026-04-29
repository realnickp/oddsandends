import type { Metadata } from 'next'
import DashboardClient from './_DashboardClient'

// Server-component wrapper exists solely to export `metadata` with
// noindex/nofollow — the inner DashboardClient is a `'use client'` file
// and cannot export route metadata. /dashboard/* is also Disallowed in
// robots.txt, but noindex is the load-bearing signal that prevents
// search engines from indexing URLs they discover via inbound links.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <DashboardClient>{children}</DashboardClient>
}
