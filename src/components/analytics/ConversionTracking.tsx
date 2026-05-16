'use client'

import { useEffect } from 'react'
import { CONVERSION_LABELS, trackConversion } from '@/lib/gtag'

/**
 * Fires the Google Ads "phone click" conversion whenever a tel: or sms: link
 * is clicked anywhere on the site. A single delegated listener on `document`
 * catches links rendered later by React — header, footer, contact page, the
 * chat widget, service pages, etc. — without instrumenting each one.
 */
export function ConversionTracking() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target
      if (!(target instanceof Element)) return
      const link = target.closest('a[href^="tel:"], a[href^="sms:"]')
      if (!link) return
      trackConversion(CONVERSION_LABELS.phoneClick)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
