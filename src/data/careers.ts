/**
 * Careers page — job application wizard config.
 *
 * `applicationSteps` are rendered in order by JobApplicationBuilder, after the
 * built-in contact-info step. The same config is used server-side by the
 * careers-apply API route to turn raw answer values into readable labels for
 * the notification email, so the two can never drift apart.
 */

export interface CareerOption {
  label: string
  value: string
  /** Compact name for tight spaces like the email subject line. */
  short?: string
}

export type CareerStepType = 'single-select' | 'multi-select' | 'notes'

export interface CareerStep {
  id: string
  question: string
  hint?: string
  type: CareerStepType
  options?: CareerOption[]
  placeholder?: string
  /** Short label used in the notification email (defaults to `question`). */
  emailLabel?: string
}

export const applicationSteps: CareerStep[] = [
  {
    id: 'skills',
    question: 'What kind of work do you have experience with?',
    hint: 'Select all that apply',
    emailLabel: 'Experience',
    type: 'multi-select',
    options: [
      { label: '🎨 Painting (interior / exterior)', value: 'painting', short: 'Painting' },
      { label: '🧱 Drywall repair & finishing', value: 'drywall', short: 'Drywall' },
      { label: '🪵 Flooring (hardwood, laminate, LVP)', value: 'flooring', short: 'Flooring' },
      { label: '🔲 Tile work', value: 'tile', short: 'Tile' },
      { label: '🪚 Carpentry / trim & finish work', value: 'carpentry', short: 'Carpentry' },
      { label: '🏗️ Framing', value: 'framing', short: 'Framing' },
      { label: '🍳 Kitchen remodeling', value: 'kitchens', short: 'Kitchens' },
      { label: '🛁 Bathroom remodeling', value: 'bathrooms', short: 'Bathrooms' },
      { label: '🏠 Basement finishing', value: 'basements', short: 'Basements' },
      { label: '🗄️ Cabinets (install / refinish)', value: 'cabinets', short: 'Cabinets' },
      { label: '📚 Built-ins & shelving', value: 'built-ins', short: 'Built-ins' },
      { label: '🪜 Decks & outdoor structures', value: 'decks', short: 'Decks' },
      { label: '🚪 Doors & windows', value: 'doors-windows', short: 'Doors/Windows' },
      { label: '🔧 Basic plumbing repairs', value: 'plumbing', short: 'Plumbing' },
      { label: '💡 Light fixtures / ceiling fans', value: 'fixtures', short: 'Fixtures' },
      { label: '🚜 Excavation / site work', value: 'excavation', short: 'Excavation' },
      { label: '🛠️ General handyman repairs', value: 'general-handyman', short: 'General handyman' },
      { label: '🌱 New to the trades — eager to learn', value: 'no-experience', short: 'New to trades' },
    ],
  },
  {
    id: 'years',
    question: 'How many years of hands-on experience do you have?',
    emailLabel: 'Years of experience',
    type: 'single-select',
    options: [
      { label: '🌱 None yet', value: 'none' },
      { label: '⏱️ Under 1 year', value: 'under-1' },
      { label: '🔨 1–3 years', value: '1-3' },
      { label: '🛠️ 3–5 years', value: '3-5' },
      { label: '🏗️ 5–10 years', value: '5-10' },
      { label: '🏆 10+ years', value: '10-plus' },
    ],
  },
  {
    id: 'tools',
    question: 'Do you have your own tools?',
    emailLabel: 'Own tools',
    type: 'single-select',
    options: [
      { label: '🧰 Yes, a full set', value: 'full-set' },
      { label: '🔧 Some basic hand tools', value: 'basic' },
      { label: "🚫 No, I'd need tools provided", value: 'none' },
    ],
  },
  {
    id: 'work-authorization',
    question: 'Are you legally authorized to work in the United States?',
    emailLabel: 'Authorized to work in U.S.',
    type: 'single-select',
    options: [
      { label: '✅ Yes', value: 'yes' },
      { label: '❌ No', value: 'no' },
    ],
  },
  {
    id: 'license-transportation',
    question: "Do you have a driver's license and reliable transportation?",
    emailLabel: 'License / transportation',
    type: 'single-select',
    options: [
      { label: '✅ Yes — valid license and a reliable vehicle', value: 'both' },
      { label: '🪪 Valid license, but no reliable vehicle', value: 'license-only' },
      { label: '🚗 Reliable ride, but no license', value: 'transport-only' },
      { label: '❌ Neither right now', value: 'neither' },
    ],
  },
  {
    id: 'availability',
    question: "What's your availability?",
    hint: 'Select all that apply',
    emailLabel: 'Availability',
    type: 'multi-select',
    options: [
      { label: '🕘 Full-time (weekdays)', value: 'full-time' },
      { label: '🕒 Part-time', value: 'part-time' },
      { label: '📅 Weekends', value: 'weekends' },
      { label: '🌅 Early mornings', value: 'mornings' },
      { label: '🌆 Evenings', value: 'evenings' },
      { label: '🔄 Flexible / varies', value: 'flexible' },
    ],
  },
  {
    id: 'start-date',
    question: 'How soon could you start?',
    emailLabel: 'Can start',
    type: 'single-select',
    options: [
      { label: '⚡ Immediately', value: 'immediately' },
      { label: '📅 Within 1 week', value: '1-week' },
      { label: '🗓️ Within 2 weeks', value: '2-weeks' },
      { label: '📆 Within a month', value: '1-month' },
      { label: '📝 I need to give notice first', value: 'notice' },
    ],
  },
  {
    id: 'notes',
    question: 'Anything else we should know?',
    hint: 'Optional',
    emailLabel: 'Notes',
    type: 'notes',
    placeholder:
      "Certifications (OSHA 10, lead-safe, etc.), references, languages you speak, or anything else you'd like us to know.",
  },
]

export type ApplicationAnswers = Record<string, string | string[]>

export interface FormattedAnswer {
  id: string
  label: string
  answer: string
}

/** Strip the leading emoji/punctuation from an option label for email use. */
function cleanLabel(label: string): string {
  return label.replace(/^[^A-Za-z0-9]+/, '').trim()
}

function lookupLabel(step: CareerStep, value: string): string {
  const opt = step.options?.find((o) => o.value === value)
  return opt ? cleanLabel(opt.label) : value
}

/**
 * Turns raw wizard answers into readable question/answer pairs, in step order.
 * Unknown keys are ignored; unknown values fall back to the raw value.
 */
export function formatApplicationAnswers(
  answers: ApplicationAnswers
): FormattedAnswer[] {
  const out: FormattedAnswer[] = []
  for (const step of applicationSteps) {
    const raw = answers[step.id]
    if (raw === undefined || raw === null) continue

    let answer: string
    if (Array.isArray(raw)) {
      if (raw.length === 0) continue
      answer = raw.map((v) => lookupLabel(step, String(v))).join(', ')
    } else {
      const s = String(raw).trim()
      if (!s) continue
      answer = step.type === 'notes' ? s : lookupLabel(step, s)
    }

    out.push({ id: step.id, label: step.emailLabel ?? step.question, answer })
  }
  return out
}

/**
 * Compact experience summary for subject lines, e.g.
 * "Painting, Drywall, Flooring +2 more". Returns '' when nothing is selected.
 */
export function summarizeSkills(values: string[], max = 3): string {
  const step = applicationSteps.find((s) => s.id === 'skills')
  const names = values
    .map((v) => {
      const opt = step?.options?.find((o) => o.value === v)
      return opt ? (opt.short ?? cleanLabel(opt.label)) : v
    })
    .filter(Boolean)
  if (names.length === 0) return ''
  const shown = names.slice(0, max).join(', ')
  const rest = names.length - max
  return rest > 0 ? `${shown} +${rest} more` : shown
}
