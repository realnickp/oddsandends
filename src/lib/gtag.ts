// Google Ads conversion tracking — account AW-18165734950.
// The base gtag.js tag is loaded once in src/app/layout.tsx; this module
// only reports conversion events against it.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const ADS_ACCOUNT = 'AW-18165734950'

/**
 * Conversion action labels, copied from Google Ads → Goals → Conversions.
 * Each is combined with ADS_ACCOUNT to form the gtag `send_to` value.
 */
export const CONVERSION_LABELS = {
  /** Click on any tel: or sms: link sitewide. */
  phoneClick: 'ZrXrCKfFjq4cEKa8jNZD',
  /** Successful submit of the Quick Estimate form. */
  estimateForm: 'XrNdCN_Bjq4cEKa8jNZD',
  /** Successful completion of the Project Builder quiz. */
  projectBuilder: '3IibCKTFjq4cEKa8jNZD',
} as const

type ConversionLabel =
  (typeof CONVERSION_LABELS)[keyof typeof CONVERSION_LABELS]

/**
 * Reports a Google Ads conversion. No-ops if gtag has not loaded yet (or is
 * blocked), so a missing tag never throws or breaks the page.
 */
export function trackConversion(label: ConversionLabel): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }
  window.gtag('event', 'conversion', {
    send_to: `${ADS_ACCOUNT}/${label}`,
    value: 50.0,
    currency: 'USD',
  })
}
