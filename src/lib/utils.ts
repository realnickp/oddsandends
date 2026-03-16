import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
}

export function phoneHref(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, '')}`
}

export function smsHref(phone: string, body?: string): string {
  const base = `sms:+1${phone.replace(/\D/g, '')}`
  return body ? `${base}?body=${encodeURIComponent(body)}` : base
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length).trimEnd() + '…'
}
