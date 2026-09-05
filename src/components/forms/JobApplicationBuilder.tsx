'use client'

import { useState, useRef, useEffect } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  MessageSquare,
  Briefcase,
} from 'lucide-react'
import { cn, phoneHref, smsHref } from '@/lib/utils'
import { siteConfig } from '@/data/site-config'
import {
  applicationSteps,
  type CareerStep,
  type ApplicationAnswers,
} from '@/data/careers'
import {
  FORM_STARTED_AT_FIELD_NAME,
  HONEYPOT_FIELD_NAME,
} from '@/lib/bot-check'

/**
 * Multi-step job application wizard for the Careers page. Mirrors the look
 * and behavior of ServiceProjectBuilder (progress bar, option cards,
 * auto-advance on single-select, slide animation, bot-check) but collects
 * contact info first, then trade experience and logistics.
 */

type StepType = CareerStep['type'] | 'contact'

interface WizardStep {
  id: string
  question: string
  hint?: string
  type: StepType
  options?: { label: string; value: string }[]
  placeholder?: string
}

type AnimPhase = 'visible' | 'exit' | 'enter'
type ContactMethod = 'Text' | 'Call' | 'Email'

const CONTACT_STEP: WizardStep = {
  id: 'contact',
  question: "Let's start with your contact info",
  hint: "So we know who's applying and how to reach you",
  type: 'contact',
}

const allSteps: WizardStep[] = [CONTACT_STEP, ...applicationSteps]
const totalSteps = allSteps.length

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputClass =
  'w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors'

export function JobApplicationBuilder() {
  // ── State ──────────────────────────────────────────────────────────────────
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<ApplicationAnswers>({})
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [contactMethod, setContactMethod] = useState<ContactMethod>('Text')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [checkVisible, setCheckVisible] = useState(false)

  // ── Animation ──────────────────────────────────────────────────────────────
  const [phase, setPhase] = useState<AnimPhase>('visible')
  const dirRef = useRef<'next' | 'back'>('next')
  const animatingRef = useRef(false)
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const formStartedAtRef = useRef<number>(Date.now())
  const honeypotRef = useRef<HTMLInputElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const step = allSteps[currentStep]
  const isLastStep = currentStep === totalSteps - 1
  const progress = ((currentStep + 1) / totalSteps) * 100

  // ── Cleanup ────────────────────────────────────────────────────────────────
  useEffect(() => {
    return () => {
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current)
    }
  }, [])

  useEffect(() => {
    if (submitted) {
      scrollToWizard(document.getElementById('apply'))
      const t = setTimeout(() => setCheckVisible(true), 50)
      return () => clearTimeout(t)
    }
  }, [submitted])

  // ── Scroll management ──────────────────────────────────────────────────────
  /**
   * Long steps (the skills list) push the Next button far down the page. When
   * the following step is shorter, the page would otherwise be left scrolled
   * past the card. If the card's top has gone above the sticky header, bring
   * it back into view.
   */
  function scrollToWizard(el: HTMLElement | null) {
    if (!el) return
    const header = document.querySelector('header')
    const offset = (header?.getBoundingClientRect().height ?? 0) + 16
    const top = el.getBoundingClientRect().top
    if (top < offset) {
      window.scrollTo({ top: top + window.scrollY - offset, behavior: 'smooth' })
    }
  }

  // ── Navigation ─────────────────────────────────────────────────────────────
  function goTo(target: number, dir: 'next' | 'back') {
    if (animatingRef.current || target < 0 || target >= totalSteps) return
    if (autoAdvanceRef.current) {
      clearTimeout(autoAdvanceRef.current)
      autoAdvanceRef.current = null
    }
    animatingRef.current = true
    dirRef.current = dir
    setPhase('exit')
    setTimeout(() => {
      setCurrentStep(target)
      setPhase('enter')
      requestAnimationFrame(() => {
        // New step is in the DOM by now, so the card has its new height.
        scrollToWizard(cardRef.current)
        requestAnimationFrame(() => {
          setPhase('visible')
          animatingRef.current = false
        })
      })
    }, 200)
  }

  function goNext() {
    if (currentStep < totalSteps - 1) goTo(currentStep + 1, 'next')
  }

  function goBack() {
    if (currentStep > 0) goTo(currentStep - 1, 'back')
  }

  // ── Validation ─────────────────────────────────────────────────────────────
  function isStepValid(): boolean {
    switch (step.type) {
      case 'contact':
        return (
          name.trim().length > 0 &&
          phone.replace(/\D/g, '').length >= 7 &&
          EMAIL_RE.test(email.trim())
        )
      case 'single-select':
        return !!answers[step.id]
      case 'multi-select': {
        const val = answers[step.id]
        return Array.isArray(val) && val.length > 0
      }
      case 'notes':
        return true
      default:
        return true
    }
  }

  // ── Handlers ───────────────────────────────────────────────────────────────
  function handleSingleSelect(value: string) {
    setAnswers((prev) => ({ ...prev, [step.id]: value }))
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current)
    if (!isLastStep) {
      autoAdvanceRef.current = setTimeout(() => goNext(), 300)
    }
  }

  function handleMultiSelect(value: string) {
    setAnswers((prev) => {
      const current = (prev[step.id] as string[]) || []
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
      return { ...prev, [step.id]: updated }
    })
  }

  function handleTextChange(value: string) {
    setAnswers((prev) => ({ ...prev, [step.id]: value }))
  }

  // ── Submission ─────────────────────────────────────────────────────────────
  async function handleSubmit() {
    if (submitting || !isStepValid()) return
    setSubmitting(true)
    setSubmitError(null)

    try {
      const payload = {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        city: city.trim(),
        contactMethod,
        answers,
        [FORM_STARTED_AT_FIELD_NAME]: formStartedAtRef.current,
        [HONEYPOT_FIELD_NAME]: honeypotRef.current?.value || '',
      }

      const res = await fetch('/api/careers-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      setSubmitted(true)
    } catch (err) {
      console.error('Application submit failed:', err)
      setSubmitError(
        'Something went wrong sending your application. Please try again, or call or text us directly.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  // ── Keyboard ───────────────────────────────────────────────────────────────
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== 'Enter' || e.shiftKey || phase !== 'visible') return
      if (step.type === 'contact' || step.type === 'notes') return
      if (!isStepValid()) return
      if (isLastStep) {
        handleSubmit()
      } else {
        goNext()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })

  // ── Content animation style ────────────────────────────────────────────────
  function getContentStyle(): React.CSSProperties {
    const dir = dirRef.current
    switch (phase) {
      case 'exit':
        return {
          transform: `translateX(${dir === 'next' ? '-40px' : '40px'})`,
          opacity: 0,
          transition: 'transform 200ms ease-out, opacity 150ms ease-out',
        }
      case 'enter':
        return {
          transform: `translateX(${dir === 'next' ? '40px' : '-40px'})`,
          opacity: 0,
          transition: 'none',
        }
      default:
        return {
          transform: 'translateX(0)',
          opacity: 1,
          transition: 'transform 300ms ease-out, opacity 250ms ease-in',
        }
    }
  }

  // ── Render: option card ────────────────────────────────────────────────────
  function OptionCard({
    label,
    selected,
    onClick,
    indicator,
  }: {
    label: string
    selected: boolean
    onClick: () => void
    indicator?: React.ReactNode
  }) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(
          'relative w-full rounded-xl border-2 p-4 text-left text-sm font-medium transition-all duration-200',
          'hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
          indicator ? 'pr-10' : '',
          selected
            ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
            : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
        )}
      >
        {label}
        {indicator}
      </button>
    )
  }

  // ── Render: step content ───────────────────────────────────────────────────
  function renderSingleSelect() {
    const selected = (answers[step.id] as string) || ''
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {step.options?.map((opt) => (
          <OptionCard
            key={opt.value}
            label={opt.label}
            selected={selected === opt.value}
            onClick={() => handleSingleSelect(opt.value)}
          />
        ))}
      </div>
    )
  }

  function renderMultiSelect() {
    const selected = (answers[step.id] as string[]) || []
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {step.options?.map((opt) => {
          const isSelected = selected.includes(opt.value)
          return (
            <OptionCard
              key={opt.value}
              label={opt.label}
              selected={isSelected}
              onClick={() => handleMultiSelect(opt.value)}
              indicator={
                isSelected ? (
                  <span className="absolute top-1/2 -translate-y-1/2 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                ) : (
                  <span className="absolute top-1/2 -translate-y-1/2 right-3 h-5 w-5 rounded-full border-2 border-gray-300" />
                )
              }
            />
          )
        })}
      </div>
    )
  }

  function renderNotesStep() {
    return (
      <textarea
        rows={5}
        placeholder={step.placeholder || 'Type your answer...'}
        value={(answers[step.id] as string) || ''}
        onChange={(e) => handleTextChange(e.target.value)}
        className={cn(inputClass, 'resize-none')}
      />
    )
  }

  function renderContactStep() {
    const methods: ContactMethod[] = ['Text', 'Call', 'Email']
    return (
      <div className="space-y-4">
        <div>
          <label
            htmlFor="apply-name"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Full name <span className="text-red-400">*</span>
          </label>
          <input
            id="apply-name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="apply-phone"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Phone <span className="text-red-400">*</span>
            </label>
            <input
              id="apply-phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 123-4567"
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="apply-email"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Email <span className="text-red-400">*</span>
            </label>
            <input
              id="apply-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="apply-city"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Town / city you live in{' '}
            <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <input
            id="apply-city"
            type="text"
            autoComplete="address-level2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Tuxedo, Sloatsburg, Suffern"
            className={inputClass}
          />
        </div>
        <div>
          <p className="mb-2 block text-sm font-medium text-gray-700">
            Best way to reach you
          </p>
          <div className="grid grid-cols-3 gap-2">
            {methods.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setContactMethod(m)}
                className={cn(
                  'rounded-xl border-2 py-2.5 text-sm font-medium transition-all duration-200',
                  contactMethod === m
                    ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                )}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  function renderStepContent() {
    switch (step.type) {
      case 'contact':
        return renderContactStep()
      case 'single-select':
        return renderSingleSelect()
      case 'multi-select':
        return renderMultiSelect()
      case 'notes':
        return renderNotesStep()
      default:
        return null
    }
  }

  // ── Success screen ─────────────────────────────────────────────────────────
  if (submitted) {
    const firstName = name.trim().split(' ')[0]
    return (
      <section id="apply" className="bg-gray-950 py-16 sm:py-20 px-4">
        <div className="mx-auto max-w-lg">
          <div className="rounded-2xl bg-white p-8 shadow-xl sm:p-12">
            <div className="text-center">
              <div
                className={cn(
                  'mx-auto mb-6 inline-flex transform transition-all duration-700',
                  checkVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                )}
                style={
                  checkVisible
                    ? {
                        transitionTimingFunction:
                          'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      }
                    : undefined
                }
              >
                <CheckCircle2 className="h-20 w-20 text-green-500" />
              </div>

              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                Application Sent!
              </h3>
              <p className="mb-8 text-gray-600">
                Thanks, {firstName}. We&apos;ll review your application and
                reach out if it looks like a good fit. A confirmation is on its
                way to your email.
              </p>

              <div className="rounded-xl bg-gray-50 p-6">
                <p className="mb-3 text-sm text-gray-500">
                  Questions in the meantime? Call or text anytime.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={phoneHref(siteConfig.phone)}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
                  >
                    <Phone className="h-5 w-5" />
                    {siteConfig.phoneFormatted}
                  </a>
                  <a
                    href={smsHref(siteConfig.phone)}
                    className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
                  >
                    <MessageSquare className="h-5 w-5" />
                    Text Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // ── Wizard ─────────────────────────────────────────────────────────────────
  const valid = isStepValid()
  const showNextButton = step.type !== 'single-select'

  return (
    <section
      id="apply"
      className="relative bg-gray-950 py-16 sm:py-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Honeypot: invisible to humans, tempting to bots */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          opacity: 0,
          pointerEvents: 'none',
        }}
      >
        <label htmlFor="apply-website-field">
          Leave this field blank
          <input
            id="apply-website-field"
            ref={honeypotRef}
            type="text"
            name={HONEYPOT_FIELD_NAME}
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>

      <div className="relative mx-auto max-w-2xl text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
          <Briefcase className="h-4 w-4 text-blue-400" />
          <span className="text-sm text-blue-300 font-medium">
            Online Application
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Apply to Join the Team
        </h2>
        <p className="text-gray-400 text-lg">
          A few quick questions about your experience and availability.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          About 2 minutes · No resume required
        </p>
      </div>

      <div className="relative mx-auto max-w-xl">
        <div
          ref={cardRef}
          className="overflow-hidden rounded-2xl bg-white shadow-xl"
        >
          <div className="h-1.5 bg-gray-100">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-6 sm:p-8">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
              Step {currentStep + 1} of {totalSteps}
            </p>

            <h3 className="text-xl font-bold text-gray-900">{step.question}</h3>
            {step.hint ? (
              <p className="mt-1 mb-6 text-sm text-gray-500">{step.hint}</p>
            ) : (
              <div className="mb-6" />
            )}

            <div className="min-h-[200px]" style={getContentStyle()}>
              {renderStepContent()}
            </div>

            {submitError && (
              <p
                role="alert"
                className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {submitError}
              </p>
            )}

            <div className="mt-8 flex items-center justify-between">
              {currentStep > 0 ? (
                <button
                  type="button"
                  onClick={goBack}
                  className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {showNextButton &&
                (isLastStep ? (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!valid || submitting}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200',
                      valid && !submitting
                        ? 'bg-blue-700 hover:bg-blue-600 shadow-sm hover:shadow'
                        : 'cursor-not-allowed bg-gray-300'
                    )}
                  >
                    {submitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Submit Application
                        <CheckCircle2 className="h-4 w-4" />
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={!valid}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200',
                      valid
                        ? 'bg-blue-700 hover:bg-blue-600 shadow-sm hover:shadow'
                        : 'cursor-not-allowed bg-gray-300'
                    )}
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ))}

              {!showNextButton && <div />}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500 leading-relaxed">
          Odds &amp; Ends Handyman Service is an equal opportunity employer.
          Your information is only used to consider you for employment.
        </p>
      </div>
    </section>
  )
}
