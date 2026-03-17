'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft, Upload, CheckCircle2, Phone, Wrench, Sparkles } from 'lucide-react'
import { siteConfig } from '@/data/site-config'
import { phoneHref } from '@/lib/utils'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionDivider } from '@/components/ui/SectionDivider'

const projectTypes = [
  'Repair / Fix Something', 'Install Something New', 'Replace / Upgrade',
  'Custom Project', 'Multiple Projects', 'Not Sure — Need Advice',
]

const roomTypes = [
  'Kitchen', 'Bathroom', 'Living Room', 'Bedroom', 'Basement',
  'Garage', 'Outdoor / Deck', 'Office', 'Multiple Rooms', 'Other',
]

const cityOptions = [
  'Nyack', 'New City', 'Nanuet', 'Pearl River', 'Spring Valley',
  'Haverstraw', 'Stony Point', 'Clarkstown', 'Orangetown', 'Ramapo',
  'Suffern', 'Piermont', 'Grandview on Hudson', 'Sparkill', 'Tappan',
  'Pomona', 'Other area in Rockland County',
]

const timelineOptions = [
  'As soon as possible', 'Within a week', 'Within 2-3 weeks',
  'Within a month', 'Flexible / No rush',
]

const steps = [
  { title: 'Project Type', subtitle: 'What kind of help do you need?' },
  { title: 'Location', subtitle: 'Which room or area of your home?' },
  { title: 'Your City', subtitle: 'Where are you located?' },
  { title: 'Timeline', subtitle: 'How soon do you need this done?' },
  { title: 'Details', subtitle: 'Tell us more about your project' },
  { title: 'Photos', subtitle: 'Have any photos to share?' },
  { title: 'Contact Info', subtitle: 'How should we reach you?' },
]

export default function QuizContent() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState({
    projectType: '',
    room: '',
    city: '',
    timeline: '',
    description: '',
    files: [] as File[],
    name: '',
    phone: '',
    email: '',
    contactMethod: 'Text',
  })

  const updateData = (key: string, value: string | File[]) => {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1))
  const prev = () => setStep((s) => Math.max(s - 1, 0))

  const handleSubmit = () => {
    // In Phase 2 this submits to Supabase
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <section className="relative bg-gray-950 overflow-hidden min-h-[70vh] flex items-center">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />

          <div className="relative w-full px-4 py-20">
            <div className="text-center max-w-lg mx-auto">
              <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 animate-pulse-glow">
                <CheckCircle2 className="h-12 w-12 text-emerald-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Project Request Received!
              </h1>
              <p className="text-lg text-gray-400 font-light mb-10 leading-relaxed">
                Dan will review your project details and reach out shortly. For a
                faster response, feel free to call or text directly.
              </p>
              <a
                href={phoneHref(siteConfig.phone)}
                className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-blue-600/25"
              >
                <Phone className="h-5 w-5" />
                Call {siteConfig.phoneFormatted}
              </a>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Dark Hero */}
      <section className="relative bg-gray-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
                <Sparkles className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-blue-300">Quick & Easy</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
                Project{' '}
                <span className="text-gradient">Builder</span>
              </h1>
              <p className="text-lg text-gray-400 font-light leading-relaxed">
                Answer a few quick questions and we&apos;ll put together a personalized estimate.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider variant="wave" fromColor="#030712" toColor="#ffffff" />

      {/* Quiz Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4">
          {/* Progress bar */}
          <ScrollReveal direction="up">
            <div className="mb-10">
              <div className="flex justify-between text-sm mb-3">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">
                  Step {step + 1} of {steps.length}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold">
                  {steps[step].title}
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((step + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Step content */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 shadow-xl shadow-gray-200/50 min-h-[360px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <Wrench className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                {steps[step].title}
              </h2>
            </div>
            <p className="text-gray-500 font-light mb-8 ml-12">{steps[step].subtitle}</p>

            {step === 0 && (
              <div className="grid sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => { updateData('projectType', type); next() }}
                    className={`p-4 rounded-xl border text-left text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      data.projectType === type
                        ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md shadow-blue-100'
                        : 'border-gray-200 hover:border-blue-300 text-gray-700'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}

            {step === 1 && (
              <div className="grid sm:grid-cols-2 gap-3">
                {roomTypes.map((room) => (
                  <button
                    key={room}
                    onClick={() => { updateData('room', room); next() }}
                    className={`p-4 rounded-xl border text-left text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      data.room === room
                        ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md shadow-blue-100'
                        : 'border-gray-200 hover:border-blue-300 text-gray-700'
                    }`}
                  >
                    {room}
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="grid sm:grid-cols-2 gap-3">
                {cityOptions.map((city) => (
                  <button
                    key={city}
                    onClick={() => { updateData('city', city); next() }}
                    className={`p-4 rounded-xl border text-left text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      data.city === city
                        ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md shadow-blue-100'
                        : 'border-gray-200 hover:border-blue-300 text-gray-700'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3">
                {timelineOptions.map((timeline) => (
                  <button
                    key={timeline}
                    onClick={() => { updateData('timeline', timeline); next() }}
                    className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      data.timeline === timeline
                        ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md shadow-blue-100'
                        : 'border-gray-200 hover:border-blue-300 text-gray-700'
                    }`}
                  >
                    {timeline}
                  </button>
                ))}
              </div>
            )}

            {step === 4 && (
              <div>
                <textarea
                  rows={5}
                  value={data.description}
                  onChange={(e) => updateData('description', e.target.value)}
                  placeholder="Describe what you need done. The more detail, the better we can help. For example: 'I need a TV mounted on a plaster wall in my living room. The TV is 65 inches and I'd like the cables hidden.'"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all font-light"
                />
              </div>
            )}

            {step === 5 && (
              <div>
                <div
                  className="border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300"
                  onClick={() => document.getElementById('quiz-upload')?.click()}
                >
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mx-auto mb-4">
                    <Upload className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-700 font-medium mb-1">
                    {data.files.length > 0
                      ? `${data.files.length} photo(s) selected`
                      : 'Click to upload project photos'}
                  </p>
                  <p className="text-xs text-gray-400 font-light">Optional but helpful for accurate estimates</p>
                  <input
                    id="quiz-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => updateData('files', Array.from(e.target.files || []) as unknown as string)}
                  />
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={data.name}
                  onChange={(e) => updateData('name', e.target.value)}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-light"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={data.phone}
                  onChange={(e) => updateData('phone', e.target.value)}
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-light"
                />
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={data.email}
                  onChange={(e) => updateData('email', e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-light"
                />
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-3">
                    {['Text', 'Call', 'Email'].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => updateData('contactMethod', method)}
                        className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                          data.contactMethod === method
                            ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md shadow-blue-100'
                            : 'border-gray-200 text-gray-600 hover:border-blue-300'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prev}
              disabled={step === 0}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>

            {step < steps.length - 1 ? (
              <button
                onClick={next}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-7 py-3.5 rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:shadow-blue-600/25"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!data.name || !data.phone}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3.5 rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:shadow-blue-600/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                Submit Project Request
                <CheckCircle2 className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
