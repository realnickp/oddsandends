/**
 * Lightweight bot-filter for lead-capture forms.
 *
 * Two cheap heuristics, no external service required:
 *   1. Time-on-page: any submission completed in less than 20 seconds is
 *      almost certainly an automated form filler. Humans take longer to read
 *      labels, type, and confirm.
 *   2. Honeypot field: a hidden input that real users never see or fill.
 *      Bots that auto-complete every input will trip it.
 *
 * On the API side, when either signal trips we return a 200 / { success: true }
 * "false acceptance" so the bot believes its submission worked and stops
 * retrying with variations — but we never persist the lead or send emails.
 *
 * Field names are constants so the client and server stay in sync.
 */

export const BOT_CHECK_MIN_MS = 20_000

export const HONEYPOT_FIELD_NAME = 'website'
export const FORM_STARTED_AT_FIELD_NAME = 'formStartedAt'

export type BotReason =
  | 'honeypot'
  | 'missing-timestamp'
  | 'too-fast'
  | 'future-timestamp'

export interface BotCheckInput {
  formStartedAt?: number | string | null
  honeypot?: string | null
}

export interface BotCheckResult {
  isBot: boolean
  reason?: BotReason
  elapsedMs?: number
}

export function evaluateBotSignals(input: BotCheckInput): BotCheckResult {
  if (input.honeypot && String(input.honeypot).trim().length > 0) {
    return { isBot: true, reason: 'honeypot' }
  }

  const raw = input.formStartedAt
  const startedAt =
    typeof raw === 'string' ? Number(raw) : typeof raw === 'number' ? raw : NaN

  if (!Number.isFinite(startedAt) || startedAt <= 0) {
    return { isBot: true, reason: 'missing-timestamp' }
  }

  const elapsedMs = Date.now() - startedAt

  if (elapsedMs < -5_000) {
    return { isBot: true, reason: 'future-timestamp', elapsedMs }
  }

  if (elapsedMs < BOT_CHECK_MIN_MS) {
    return { isBot: true, reason: 'too-fast', elapsedMs }
  }

  return { isBot: false, elapsedMs }
}

/**
 * Server-side helper that logs the rejection with enough context for later
 * review without throwing or persisting anything.
 */
export function logBotRejection(
  source: string,
  result: BotCheckResult,
  extra?: Record<string, unknown>
) {
  console.warn(
    `[bot-check] Blocked ${source} submission`,
    JSON.stringify({
      reason: result.reason,
      elapsedMs: result.elapsedMs,
      ...extra,
    })
  )
}
