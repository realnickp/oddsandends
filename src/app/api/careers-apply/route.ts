import { NextRequest, NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'
import {
  sendApplicationNotification,
  sendApplicantConfirmation,
} from '@/lib/email'
import { evaluateBotSignals, logBotRejection } from '@/lib/bot-check'
import {
  formatApplicationAnswers,
  summarizeSkills,
  type ApplicationAnswers,
} from '@/data/careers'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const CONTACT_METHODS = ['Text', 'Call', 'Email'] as const

function str(v: unknown, max: number): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

/** Keep only string / string[] answers with sane bounds. */
function sanitizeAnswers(raw: unknown): ApplicationAnswers {
  const out: ApplicationAnswers = {}
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return out
  for (const [key, val] of Object.entries(raw as Record<string, unknown>)) {
    if (typeof val === 'string') {
      out[key] = val.slice(0, 4000)
    } else if (Array.isArray(val)) {
      out[key] = val
        .filter((x): x is string => typeof x === 'string')
        .map((x) => x.slice(0, 100))
        .slice(0, 50)
    }
  }
  return out
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const name = str(body.name, 120)
    const phone = str(body.phone, 40)
    const email = str(body.email, 160)
    const city = str(body.city, 120)
    const contactMethod = CONTACT_METHODS.includes(body.contactMethod)
      ? (body.contactMethod as (typeof CONTACT_METHODS)[number])
      : 'Text'
    const answers = sanitizeAnswers(body.answers)

    const botCheck = evaluateBotSignals({
      formStartedAt: body.formStartedAt,
      honeypot: body.website,
    })
    if (botCheck.isBot) {
      logBotRejection('careers-apply', botCheck, { name, phone })
      // False acceptance — see lib/bot-check.ts
      return NextResponse.json({ success: true })
    }

    if (!name || phone.replace(/\D/g, '').length < 7 || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: 'Name, phone, and a valid email are required' },
        { status: 400 }
      )
    }

    const formatted = formatApplicationAnswers(answers)
    const skills = Array.isArray(answers.skills) ? answers.skills : []
    const notes = typeof answers.notes === 'string' ? answers.notes : ''

    // Persist the application. Deliberately non-fatal: the email to Dan is the
    // primary deliverable, so a missing table or DB hiccup must never block it.
    try {
      const supabase = getServiceSupabase()
      const { error: insertError } = await supabase
        .from('job_applications')
        .insert({
          name,
          phone,
          email,
          city,
          contact_method: contactMethod,
          answers,
          skills,
          notes,
          source: 'careers-page',
          status: 'new',
        })
      if (insertError) {
        console.error(
          '[careers-apply] Supabase insert failed (application still emailed):',
          insertError
        )
      }
    } catch (err) {
      console.error('[careers-apply] Supabase unavailable (application still emailed):', err)
    }

    const experienceSummary = summarizeSkills(skills)

    await Promise.allSettled([
      sendApplicationNotification({
        name,
        phone,
        email,
        city,
        contactMethod,
        answers: formatted,
        experienceSummary,
      }),
      sendApplicantConfirmation(email, name),
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Careers apply error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
