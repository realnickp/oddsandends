import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Dan@oddsandendsny.com'
const NOTIFICATION_EMAILS = (process.env.NOTIFICATION_EMAIL || '').split(',').map((e) => e.trim()).filter(Boolean)
const REPLY_TO = 'Dkiely101@gmail.com'
const LOGO_URL = 'https://nbdukzyoxpcznegumygh.supabase.co/storage/v1/object/public/lead-uploads/branding/logo.png'
const SITE_URL = 'https://www.oddsandendsny.com'

function formatTelHref(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  if (digits.startsWith('1') && digits.length === 11) return `tel:+${digits}`
  if (digits.length === 10) return `tel:+1${digits}`
  return `tel:+${digits}`
}

// ─── Shared styles ───────────────────────────────────────────────

const emailWrapper = (content: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color:#030712;padding:28px 32px;text-align:center;">
              <img src="${LOGO_URL}" alt="Odds & Ends Handyman Service" width="72" height="72" style="border-radius:50%;display:inline-block;" />
              <p style="color:#ffffff;font-size:18px;font-weight:700;margin:12px 0 0;letter-spacing:0.5px;">Odds & Ends Handyman Service</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#f9fafb;padding:20px 32px;border-top:1px solid #e5e7eb;">
              <p style="color:#6b7280;font-size:12px;margin:0;text-align:center;line-height:1.6;">
                Odds & Ends Handyman Service · Tuxedo, Tuxedo Park & Rockland County, NY<br />
                <a href="tel:+19084612688" style="color:#2563eb;text-decoration:none;">(908) 461-2688</a> · 
                <a href="${SITE_URL}" style="color:#2563eb;text-decoration:none;">oddsandendsny.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

// ─── Notification email (to Dan + Nick) ──────────────────────────

interface LeadNotificationData {
  source: 'Estimate Form' | 'Project Builder' | 'Chat Lead'
  name: string
  phone: string
  email?: string
  service?: string
  description?: string
  city?: string
  contactMethod?: string
  timeline?: string
  quizAnswers?: Record<string, string>
  photoUrls?: string[]
  chatSummary?: string
}

function buildDetailRow(label: string, value: string | undefined) {
  if (!value) return ''
  return `
    <tr>
      <td style="padding:8px 12px;font-size:13px;color:#6b7280;font-weight:600;white-space:nowrap;vertical-align:top;border-bottom:1px solid #f3f4f6;">${label}</td>
      <td style="padding:8px 12px;font-size:14px;color:#111827;border-bottom:1px solid #f3f4f6;">${value}</td>
    </tr>`
}

function buildNotificationHtml(data: LeadNotificationData) {
  const rows = [
    buildDetailRow('Name', data.name),
    buildDetailRow('Phone', data.phone),
    buildDetailRow('Email', data.email),
    buildDetailRow('Service', data.service),
    buildDetailRow('City', data.city),
    buildDetailRow('Preferred Contact', data.contactMethod),
    buildDetailRow('Timeline', data.timeline),
    buildDetailRow('Description', data.description),
  ]

  if (data.quizAnswers && Object.keys(data.quizAnswers).length > 0) {
    for (const [question, answer] of Object.entries(data.quizAnswers)) {
      rows.push(buildDetailRow(question, answer))
    }
  }

  if (data.chatSummary) {
    rows.push(buildDetailRow('Chat Summary', data.chatSummary))
  }

  let photosHtml = ''
  if (data.photoUrls && data.photoUrls.length > 0) {
    photosHtml = `
      <div style="margin-top:20px;">
        <p style="font-size:13px;font-weight:600;color:#6b7280;margin-bottom:8px;">Attached Photos:</p>
        ${data.photoUrls.map((url) => `<a href="${url}" style="display:inline-block;margin-right:8px;margin-bottom:8px;"><img src="${url}" alt="Project photo" width="120" style="border-radius:8px;border:1px solid #e5e7eb;" /></a>`).join('')}
      </div>`
  }

  const sourceColor = data.source === 'Estimate Form' ? '#2563eb' : data.source === 'Project Builder' ? '#059669' : '#7c3aed'

  return emailWrapper(`
    <div style="text-align:center;margin-bottom:24px;">
      <span style="display:inline-block;background-color:${sourceColor};color:#ffffff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:999px;text-transform:uppercase;letter-spacing:0.5px;">
        New ${data.source} Lead
      </span>
    </div>
    <h2 style="color:#111827;font-size:22px;font-weight:700;margin:0 0 4px;text-align:center;">
      ${data.name}
    </h2>
    <p style="color:#6b7280;font-size:14px;margin:0 0 24px;text-align:center;">
      <a href="${formatTelHref(data.phone)}" style="color:#2563eb;text-decoration:none;font-weight:600;">${data.phone}</a>
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      ${rows.filter(Boolean).join('')}
    </table>
    ${photosHtml}
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin:24px auto 0;">
      <tr>
        <td align="center" bgcolor="#2563eb" style="background-color:#2563eb;border-radius:8px;">
          <a href="${formatTelHref(data.phone)}" style="display:inline-block;padding:12px 28px;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;text-align:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
            Call ${data.name.split(' ')[0]} Now
          </a>
        </td>
      </tr>
    </table>
  `)
}

// ─── Welcome / confirmation email (to customer) ─────────────────

function buildWelcomeHtml(customerName: string) {
  const firstName = customerName.split(' ')[0]

  return emailWrapper(`
    <h2 style="color:#111827;font-size:24px;font-weight:700;margin:0 0 16px;text-align:center;">
      Thank You, ${firstName}!
    </h2>
    <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 16px;">
      We received your inquiry and we'll be in touch soon — typically within a few hours during business days.
    </p>
    <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 24px;">
      In the meantime, feel free to call or text us directly if you'd like to get started right away:
    </p>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin:0 auto 24px;">
      <tr>
        <td align="center" bgcolor="#2563eb" style="background-color:#2563eb;border-radius:8px;">
          <a href="tel:+19084612688" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;text-align:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
            Call (908) 461-2688
          </a>
        </td>
      </tr>
    </table>
    <div style="background-color:#f0f9ff;border-radius:8px;padding:16px 20px;margin-bottom:16px;">
      <p style="color:#1e40af;font-size:13px;font-weight:600;margin:0 0 4px;">What happens next?</p>
      <ul style="color:#374151;font-size:14px;line-height:1.8;margin:0;padding-left:18px;">
        <li>We'll review your request</li>
        <li>We'll reach out to discuss your project and schedule a time</li>
        <li>You'll receive an honest, no-obligation estimate</li>
      </ul>
    </div>
    <p style="color:#374151;font-size:15px;line-height:1.7;margin:0;">
      Thanks for choosing Odds & Ends — we look forward to helping!
    </p>
    <p style="color:#374151;font-size:15px;line-height:1.7;margin:16px 0 0;">
      <strong>The Odds & Ends Team</strong><br />
      <span style="color:#6b7280;font-size:13px;">Odds & Ends Handyman Service</span>
    </p>
  `)
}

// ─── Public API ──────────────────────────────────────────────────

export async function sendLeadNotification(data: LeadNotificationData) {
  if (!NOTIFICATION_EMAILS.length) return

  try {
    await resend.emails.send({
      from: `Odds & Ends Leads <${FROM_EMAIL}>`,
      to: NOTIFICATION_EMAILS,
      replyTo: data.email || REPLY_TO,
      subject: `New ${data.source} Lead: ${data.name}${data.service ? ` — ${data.service}` : ''}`,
      html: buildNotificationHtml(data),
    })
  } catch (err) {
    console.error('Failed to send lead notification email:', err)
  }
}

export async function sendWelcomeEmail(customerEmail: string, customerName: string) {
  if (!customerEmail) return

  try {
    await resend.emails.send({
      from: `Odds & Ends Handyman <${FROM_EMAIL}>`,
      to: customerEmail,
      replyTo: REPLY_TO,
      subject: `Thanks for reaching out, ${customerName.split(' ')[0]}! — Odds & Ends Handyman`,
      html: buildWelcomeHtml(customerName),
    })
  } catch (err) {
    console.error('Failed to send welcome email:', err)
  }
}

// ─── Job application notification (Careers page) ────────────────

// Careers applications go to everyone on NOTIFICATION_EMAIL (Dan + Nick, so
// nothing gets missed) plus any extra addresses in CAREERS_NOTIFICATION_EMAIL.
const CAREERS_NOTIFICATION_EMAILS = Array.from(
  new Set([
    ...NOTIFICATION_EMAILS,
    ...(process.env.CAREERS_NOTIFICATION_EMAIL || '')
      .split(',')
      .map((e) => e.trim())
      .filter(Boolean),
  ])
)

export interface ApplicationNotificationData {
  name: string
  phone: string
  email: string
  city?: string
  contactMethod?: string
  /** Readable question/answer pairs, already in display order. */
  answers: { label: string; answer: string }[]
  /** Short comma-separated experience list, used in the subject line. */
  experienceSummary?: string
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildApplicationHtml(data: ApplicationNotificationData) {
  const firstName = escapeHtml(data.name.split(' ')[0])
  const telHref = formatTelHref(data.phone)
  const mailHref = `mailto:${escapeHtml(data.email)}`

  const rows = [
    buildDetailRow('Name', escapeHtml(data.name)),
    buildDetailRow(
      'Phone',
      `<a href="${telHref}" style="color:#2563eb;text-decoration:none;">${escapeHtml(data.phone)}</a>`
    ),
    buildDetailRow(
      'Email',
      `<a href="${mailHref}" style="color:#2563eb;text-decoration:none;">${escapeHtml(data.email)}</a>`
    ),
    buildDetailRow('Town / City', data.city ? escapeHtml(data.city) : undefined),
    buildDetailRow(
      'Preferred Contact',
      data.contactMethod ? escapeHtml(data.contactMethod) : undefined
    ),
    ...data.answers.map((a) =>
      buildDetailRow(
        escapeHtml(a.label),
        escapeHtml(a.answer).replace(/\n/g, '<br />')
      )
    ),
  ]

  return emailWrapper(`
    <div style="text-align:center;margin-bottom:24px;">
      <span style="display:inline-block;background-color:#d97706;color:#ffffff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:999px;text-transform:uppercase;letter-spacing:0.5px;">
        New Job Application
      </span>
    </div>
    <h2 style="color:#111827;font-size:22px;font-weight:700;margin:0 0 4px;text-align:center;">
      ${escapeHtml(data.name)}
    </h2>
    <p style="color:#6b7280;font-size:14px;margin:0 0 24px;text-align:center;">
      <a href="${telHref}" style="color:#2563eb;text-decoration:none;font-weight:600;">${escapeHtml(data.phone)}</a>
      &nbsp;·&nbsp;
      <a href="${mailHref}" style="color:#2563eb;text-decoration:none;">${escapeHtml(data.email)}</a>
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      ${rows.filter(Boolean).join('')}
    </table>
    <p style="color:#9ca3af;font-size:12px;margin:16px 0 0;text-align:center;line-height:1.6;">
      Submitted through the Careers page at ${SITE_URL}/careers.<br />
      If this applicant came from Indeed, their resume is in your Indeed inbox.
    </p>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin:24px auto 0;">
      <tr>
        <td align="center" bgcolor="#2563eb" style="background-color:#2563eb;border-radius:8px;">
          <a href="${telHref}" style="display:inline-block;padding:12px 28px;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;text-align:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
            Call ${firstName} Now
          </a>
        </td>
        <td style="width:12px;"></td>
        <td align="center" bgcolor="#111827" style="background-color:#111827;border-radius:8px;">
          <a href="${mailHref}" style="display:inline-block;padding:12px 28px;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;text-align:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
            Email ${firstName}
          </a>
        </td>
      </tr>
    </table>
  `)
}

function buildApplicantConfirmationHtml(applicantName: string) {
  const firstName = escapeHtml(applicantName.split(' ')[0])

  return emailWrapper(`
    <h2 style="color:#111827;font-size:24px;font-weight:700;margin:0 0 16px;text-align:center;">
      Thanks for Applying, ${firstName}!
    </h2>
    <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 16px;">
      We received your application to join the Odds &amp; Ends team. Every application is reviewed personally, and we'll reach out if it looks like a good fit.
    </p>
    <div style="background-color:#f0f9ff;border-radius:8px;padding:16px 20px;margin-bottom:24px;">
      <p style="color:#1e40af;font-size:13px;font-weight:600;margin:0 0 4px;">What happens next?</p>
      <ul style="color:#374151;font-size:14px;line-height:1.8;margin:0;padding-left:18px;">
        <li>We review your experience and availability</li>
        <li>If it's a match, we'll call or text to set up a conversation</li>
        <li>Questions in the meantime? Call or text us anytime</li>
      </ul>
    </div>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin:0 auto 24px;">
      <tr>
        <td align="center" bgcolor="#2563eb" style="background-color:#2563eb;border-radius:8px;">
          <a href="tel:+19084612688" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;text-align:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
            Call (908) 461-2688
          </a>
        </td>
      </tr>
    </table>
    <p style="color:#374151;font-size:15px;line-height:1.7;margin:0;">
      Thanks for your interest in working with us.
    </p>
    <p style="color:#374151;font-size:15px;line-height:1.7;margin:16px 0 0;">
      <strong>The Odds &amp; Ends Team</strong><br />
      <span style="color:#6b7280;font-size:13px;">Odds &amp; Ends Handyman Service</span>
    </p>
  `)
}

export async function sendApplicationNotification(
  data: ApplicationNotificationData
) {
  if (!CAREERS_NOTIFICATION_EMAILS.length) return

  const summary = data.experienceSummary
    ? ` — ${data.experienceSummary.length > 60 ? data.experienceSummary.slice(0, 57).trimEnd() + '…' : data.experienceSummary}`
    : ''

  try {
    const { error } = await resend.emails.send({
      from: `Odds & Ends Careers <${FROM_EMAIL}>`,
      to: CAREERS_NOTIFICATION_EMAILS,
      replyTo: data.email || REPLY_TO,
      subject: `New Job Application: ${data.name}${summary}`,
      html: buildApplicationHtml(data),
    })
    if (error) {
      console.error('Resend rejected job application notification email:', error)
    }
  } catch (err) {
    console.error('Failed to send job application notification email:', err)
  }
}

export async function sendApplicantConfirmation(
  applicantEmail: string,
  applicantName: string
) {
  if (!applicantEmail) return

  try {
    const { error } = await resend.emails.send({
      from: `Odds & Ends Handyman <${FROM_EMAIL}>`,
      to: applicantEmail,
      replyTo: REPLY_TO,
      subject: `We received your application, ${applicantName.split(' ')[0]} — Odds & Ends Handyman`,
      html: buildApplicantConfirmationHtml(applicantName),
    })
    if (error) {
      console.error('Resend rejected applicant confirmation email:', error)
    }
  } catch (err) {
    console.error('Failed to send applicant confirmation email:', err)
  }
}
