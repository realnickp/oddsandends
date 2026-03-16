'use client'

import { useState, useRef, useEffect } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  X,
  Camera,
  ClipboardList,
  FileText,
} from 'lucide-react'
import { cn, phoneHref } from '@/lib/utils'
import { siteConfig } from '@/data/site-config'
import { getQuizConfig } from '@/data/quiz-configs'
import type { QuizStep } from '@/data/quiz-configs'
import { EstimateForm } from '@/components/forms/EstimateForm'

interface ServiceProjectBuilderProps {
  serviceSlug: string
  serviceName: string
}

type StepType = QuizStep['type'] | 'photos' | 'contact'

interface WizardStep {
  id: string
  question: string
  type: StepType
  options?: { label: string; value: string }[]
  placeholder?: string
}

type AnimPhase = 'visible' | 'exit' | 'enter'

export function ServiceProjectBuilder({
  serviceSlug,
  serviceName,
}: ServiceProjectBuilderProps) {
  const quizConfig = getQuizConfig(serviceSlug)

  const serviceSteps: WizardStep[] = (quizConfig?.steps ?? []).map((s) => ({
    id: s.id,
    question: s.question,
    type: s.type,
    options: s.options,
    placeholder: s.placeholder,
  }))

  const allSteps: WizardStep[] = [
    ...serviceSteps,
    {
      id: 'project-stage',
      question: 'Where are you in the process?',
      type: 'single-select',
      options: [
        { label: '🔍 Just exploring options', value: 'exploring' },
        { label: '📋 Getting estimates', value: 'getting-estimates' },
        { label: '✅ Ready to hire', value: 'ready-to-hire' },
        { label: '🚨 Urgent — need it fixed ASAP', value: 'urgent' },
      ],
    },
    {
      id: 'timeline',
      question: "What's your timeline?",
      type: 'single-select',
      options: [
        { label: '⚡ As soon as possible', value: 'asap' },
        { label: '📅 Within 1–2 weeks', value: '1-2-weeks' },
        { label: '🗓️ Within a month', value: 'within-month' },
        { label: '🤔 Flexible / no rush', value: 'flexible' },
      ],
    },
    { id: 'photos', question: 'Photos & Details', type: 'photos' },
    { id: 'contact', question: 'Contact Info', type: 'contact' },
  ]

  const totalSteps = allSteps.length

  // ── State ──────────────────────────────────────────────────────────────────
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [photos, setPhotos] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactMethod, setContactMethod] = useState<'Text' | 'Call' | 'Email'>(
    'Text'
  )
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [checkVisible, setCheckVisible] = useState(false)
  const [mode, setMode] = useState<'builder' | 'simple'>('builder')
  const [showDetails, setShowDetails] = useState(false)
  const [description, setDescription] = useState('')

  // ── Animation ──────────────────────────────────────────────────────────────
  const [phase, setPhase] = useState<AnimPhase>('visible')
  const dirRef = useRef<'next' | 'back'>('next')
  const animatingRef = useRef(false)
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dragCounterRef = useRef(0)
  const [isDragOver, setIsDragOver] = useState(false)

  const step = allSteps[currentStep]
  const isLastStep = currentStep === totalSteps - 1
  const progress = ((currentStep + 1) / totalSteps) * 100

  // ── Cleanup ────────────────────────────────────────────────────────────────
  useEffect(() => {
    return () => {
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      previewUrls.forEach((url) => URL.revokeObjectURL(url))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (submitted) {
      const t = setTimeout(() => setCheckVisible(true), 50)
      return () => clearTimeout(t)
    }
  }, [submitted])

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
      case 'single-select':
        return !!answers[step.id]
      case 'multi-select': {
        const val = answers[step.id]
        return Array.isArray(val) && val.length > 0
      }
      case 'text':
        return (
          typeof answers[step.id] === 'string' &&
          (answers[step.id] as string).trim().length > 0
        )
      case 'number':
        return !!answers[step.id]
      case 'photos':
        return true
      case 'contact':
        return contactName.trim().length > 0 && contactPhone.trim().length > 0
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

  function addPhotos(files: File[]) {
    const imageFiles = files.filter((f) => f.type.startsWith('image/'))
    if (imageFiles.length === 0) return
    setPhotos((prev) => [...prev, ...imageFiles])
    const urls = imageFiles.map((f) => URL.createObjectURL(f))
    setPreviewUrls((prev) => [...prev, ...urls])
  }

  function removePhoto(index: number) {
    URL.revokeObjectURL(previewUrls[index])
    setPhotos((prev) => prev.filter((_, i) => i !== index))
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index))
  }

  // ── Submission ─────────────────────────────────────────────────────────────
  async function handleSubmit() {
    if (submitting || !isStepValid()) return
    setSubmitting(true)

    try {
      const formData = new FormData()
      const payload = {
        serviceSlug,
        serviceName,
        answers,
        description: description || '',
        photos: photos.map((f) => f.name),
        name: contactName,
        phone: contactPhone,
        email: contactEmail,
        contactMethod,
        city: (answers['city'] as string) || '',
        projectStage: (answers['project-stage'] as string) || '',
        timeline: (answers['timeline'] as string) || '',
      }
      formData.append('data', JSON.stringify(payload))
      photos.forEach((file) => formData.append('photos', file))

      await fetch('/api/quiz-submit', { method: 'POST', body: formData })
      setSubmitted(true)
    } catch (err) {
      console.error('Submission failed:', err)
    } finally {
      setSubmitting(false)
    }
  }

  // ── Keyboard ───────────────────────────────────────────────────────────────
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== 'Enter' || e.shiftKey || phase !== 'visible') return
      if (step.type === 'text' || step.type === 'contact') return
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

  // ── Drag-and-drop ──────────────────────────────────────────────────────────
  function onDragEnter(e: React.DragEvent) {
    e.preventDefault()
    dragCounterRef.current++
    setIsDragOver(true)
  }
  function onDragLeave(e: React.DragEvent) {
    e.preventDefault()
    dragCounterRef.current--
    if (dragCounterRef.current === 0) setIsDragOver(false)
  }
  function onDragOver(e: React.DragEvent) {
    e.preventDefault()
  }
  function onDrop(e: React.DragEvent) {
    e.preventDefault()
    dragCounterRef.current = 0
    setIsDragOver(false)
    addPhotos(Array.from(e.dataTransfer.files))
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
                  <span className="absolute top-2.5 right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                ) : (
                  <span className="absolute top-2.5 right-2.5 h-5 w-5 rounded-full border-2 border-gray-300" />
                )
              }
            />
          )
        })}
      </div>
    )
  }

  function renderTextStep() {
    return (
      <textarea
        rows={5}
        placeholder={step.placeholder || 'Type your answer...'}
        value={(answers[step.id] as string) || ''}
        onChange={(e) => handleTextChange(e.target.value)}
        className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none transition-colors"
      />
    )
  }

  function renderNumberStep() {
    return (
      <input
        type="number"
        placeholder={step.placeholder || 'Enter a number...'}
        value={(answers[step.id] as string) || ''}
        onChange={(e) => handleTextChange(e.target.value)}
        className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
      />
    )
  }

  function renderPhotosStep() {
    return (
      <div className="space-y-4">
        <div
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            'flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-8 text-center cursor-pointer transition-all duration-200',
            isDragOver
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 bg-gray-50/50 hover:border-gray-400 hover:bg-gray-50'
          )}
        >
          <div
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-full transition-colors',
              isDragOver ? 'bg-blue-100' : 'bg-gray-100'
            )}
          >
            <Camera
              className={cn(
                'h-6 w-6',
                isDragOver ? 'text-blue-600' : 'text-gray-400'
              )}
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">
              Drag photos here or tap to upload
            </p>
            <p className="mt-1 text-xs text-gray-400">
              JPG, PNG up to 10 MB each
            </p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => addPhotos(Array.from(e.target.files || []))}
          />
        </div>

        <p className="text-center text-xs text-gray-400">
          Optional but photos help {siteConfig.ownerFirstName} give you a more
          accurate estimate
        </p>

        {previewUrls.length > 0 && (
          <div className="grid grid-cols-3 gap-3">
            {previewUrls.map((url, i) => (
              <div key={url} className="group relative aspect-square">
                <img
                  src={url}
                  alt={`Upload ${i + 1}`}
                  className="h-full w-full rounded-lg object-cover"
                />
                <button
                  type="button"
                  onClick={() => removePhoto(i)}
                  className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Optional details */}
        {!showDetails ? (
          <button
            type="button"
            onClick={() => setShowDetails(true)}
            className="flex items-center gap-2 text-sm text-blue-600 font-medium hover:text-blue-500 transition-colors mx-auto"
          >
            <FileText className="h-4 w-4" />
            Add project details
          </button>
        ) : (
          <textarea
            rows={4}
            placeholder="Describe what you need done — the more detail, the better Dan can help."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none transition-colors"
          />
        )}
      </div>
    )
  }

  function renderContactStep() {
    const methods: Array<'Text' | 'Call' | 'Email'> = ['Text', 'Call', 'Email']
    return (
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            placeholder="Your full name"
            className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Phone <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
            placeholder="(555) 123-4567"
            className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Email{' '}
            <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <input
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Preferred contact method
          </label>
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
      case 'single-select':
        return renderSingleSelect()
      case 'multi-select':
        return renderMultiSelect()
      case 'text':
        return renderTextStep()
      case 'number':
        return renderNumberStep()
      case 'photos':
        return renderPhotosStep()
      case 'contact':
        return renderContactStep()
      default:
        return null
    }
  }

  // ── Success screen ─────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <section className="bg-gray-950 py-16 px-4">
        <div className="mx-auto max-w-lg">
          <div className="rounded-2xl bg-white p-8 shadow-xl sm:p-12">
            <div className="text-center">
              <div
                className={cn(
                  'mx-auto mb-6 inline-flex transform transition-all duration-700',
                  checkVisible
                    ? 'scale-100 opacity-100'
                    : 'scale-0 opacity-0'
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
                Project Request Sent!
              </h3>
              <p className="mb-8 text-gray-600">
                {siteConfig.ownerFirstName} will review your{' '}
                {serviceName.toLowerCase()} project and reach out shortly.
              </p>

              <div className="rounded-xl bg-gray-50 p-6">
                <p className="mb-3 text-sm text-gray-500">
                  Call or text for faster response
                </p>
                <a
                  href={phoneHref(siteConfig.phone)}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
                >
                  <Phone className="h-5 w-5" />
                  {siteConfig.phoneFormatted}
                </a>
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

  const quizHeadline = quizConfig?.headline || `Plan Your ${serviceName} Project`
  const quizSubtitle =
    quizConfig?.subtitle ||
    `Answer a few quick questions so Dan can prepare an accurate estimate`

  return (
    <section id="project-builder" className="bg-gray-950 py-16 sm:py-20 px-4">
      <div className="mx-auto max-w-2xl text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          {mode === 'builder' ? quizHeadline : `Request a ${serviceName} Estimate`}
        </h2>
        <p className="text-gray-400 text-lg mb-6">
          {mode === 'builder'
            ? quizSubtitle
            : 'Fill out this quick form and Dan will get back to you ASAP'}
        </p>

        <div className="inline-flex rounded-xl bg-gray-800/60 p-1">
          <button
            type="button"
            onClick={() => setMode('builder')}
            className={cn(
              'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200',
              mode === 'builder'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            )}
          >
            <ClipboardList className="h-4 w-4" />
            Project Builder
          </button>
          <button
            type="button"
            onClick={() => setMode('simple')}
            className={cn(
              'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200',
              mode === 'simple'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            )}
          >
            <FileText className="h-4 w-4" />
            Quick Estimate
          </button>
        </div>
      </div>

      {mode === 'simple' ? (
        <div className="mx-auto max-w-lg">
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl">
            <EstimateForm preselectedService={serviceName} />
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-lg">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
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

              <h3 className="mb-6 text-xl font-bold text-gray-900">
                {step.question}
              </h3>

              <div className="min-h-[200px]" style={getContentStyle()}>
                {renderStepContent()}
              </div>

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
                          Submit
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
        </div>
      )}
    </section>
  )
}
