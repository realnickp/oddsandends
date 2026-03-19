'use client'

import { useState, useRef } from 'react'
import { Send, Upload, CheckCircle2, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const serviceOptions = [
  'TV Mounting', 'Drywall Repair', 'Door Installation', 'Fence Repair',
  'Deck Repair', 'Furniture Assembly', 'Light Fixture Installation',
  'Toilet Installation', 'Faucet Installation', 'Tile Repair', 'Painting',
  'Shelving Installation', 'Cabinet Refinishing', 'Picture Hanging',
  'Ceiling Fan Installation', 'Minor Plumbing', 'Smart Home Setup',
  'Custom Accent Wall', 'Wainscoting', 'Built-Ins', 'Other',
]

const timelineOptions = [
  'As soon as possible',
  'Within a week',
  'Within 2-3 weeks',
  'Flexible / No rush',
]

const contactMethodOptions = [
  'Text (preferred)',
  'Phone call',
  'Email',
]

export function EstimateForm({
  compact = false,
  preselectedService,
}: {
  compact?: boolean
  preselectedService?: string
}) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const formRef = useRef<HTMLFormElement>(null)

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
        <p className="text-gray-600">
          Dan will review your project details and get back to you shortly.
          Thanks for choosing Odds & Ends!
        </p>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const form = formRef.current
      if (!form) return

      const formData = new FormData()
      const inputs = form.elements

      const data: Record<string, string> = {}

      if (compact) {
        data.name = (inputs.namedItem('name') as HTMLInputElement)?.value || ''
        data.phone = (inputs.namedItem('phone') as HTMLInputElement)?.value || ''
        data.serviceNeeded = (inputs.namedItem('service') as HTMLSelectElement)?.value || ''
        data.description = (inputs.namedItem('description') as HTMLTextAreaElement)?.value || ''
        data.contactMethod = 'Text (preferred)'
        data.timeline = 'As soon as possible'
        data.email = ''
        data.city = ''
      } else {
        data.name = (inputs.namedItem('name') as HTMLInputElement)?.value || ''
        data.email = (inputs.namedItem('email') as HTMLInputElement)?.value || ''
        data.phone = (inputs.namedItem('phone') as HTMLInputElement)?.value || ''
        data.city = (inputs.namedItem('city') as HTMLInputElement)?.value || ''
        data.serviceNeeded = (inputs.namedItem('service') as HTMLSelectElement)?.value || ''
        data.description = (inputs.namedItem('description') as HTMLTextAreaElement)?.value || ''
        data.contactMethod = (inputs.namedItem('contactMethod') as HTMLSelectElement)?.value || 'Text (preferred)'
        data.timeline = (inputs.namedItem('timeline') as HTMLSelectElement)?.value || 'As soon as possible'
      }

      formData.append('data', JSON.stringify(data))

      for (const file of files) {
        formData.append('photos', file)
      }

      const res = await fetch('/api/estimate-submit', {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) {
        throw new Error('Failed to submit')
      }

      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (compact) {
    return (
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select
          name="service"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">What do you need help with?</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <textarea
          name="description"
          placeholder="Brief description of your project..."
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-blue-700 hover:bg-blue-600 text-white py-3.5 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {submitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {submitting ? 'Sending...' : 'Request Free Estimate'}
        </button>
      </form>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            City / Town
          </label>
          <input
            type="text"
            name="city"
            placeholder="e.g., Nyack, New City..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Service Needed *
        </label>
        <select
          name="service"
          required
          defaultValue={preselectedService || ''}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Project Description *
        </label>
        <textarea
          name="description"
          required
          rows={4}
          placeholder="Tell us about your project. The more detail you provide, the more accurate our estimate will be."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Preferred Contact Method
          </label>
          <select
            name="contactMethod"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {contactMethodOptions.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Timeline
          </label>
          <select
            name="timeline"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {timelineOptions.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Photos (optional but helpful!)
        </label>
        <div
          className={cn(
            'border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:border-blue-400 transition-colors',
            files.length > 0 ? 'border-blue-400 bg-blue-50' : 'border-gray-200'
          )}
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600">
            {files.length > 0
              ? `${files.length} file(s) selected`
              : 'Click to upload photos of your project'}
          </p>
          <p className="text-xs text-gray-400 mt-1">JPG, PNG up to 10MB each</p>
          <input
            id="file-upload"
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => setFiles(Array.from(e.target.files || []))}
          />
        </div>
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
        <span className="text-sm text-gray-600">
          I consent to Odds & Ends Handyman Service contacting me about my project
          via the contact method I selected. I understand this is a free estimate
          with no obligation.
        </span>
      </label>

      {error && (
        <p className="text-red-600 text-sm text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-blue-700 hover:bg-blue-600 text-white py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {submitting ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Send className="h-5 w-5" />
        )}
        {submitting ? 'Submitting...' : 'Submit Estimate Request'}
      </button>

      <p className="text-center text-xs text-gray-500">
        Free estimates · No obligation · Usually responds within hours
      </p>
    </form>
  )
}
