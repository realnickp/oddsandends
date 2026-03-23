import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Dan@oddsandendsny.com'
const NOTIFICATION_EMAILS = (process.env.NOTIFICATION_EMAIL || '').split(',').map((e) => e.trim()).filter(Boolean)
const REPLY_TO = 'Dkiely101@gmail.com'
const LOGO_URL = 'https://nbdukzyoxpcznegumygh.supabase.co/storage/v1/object/public/lead-uploads/branding/logo.png'
const SITE_URL = 'https://oddsandendshandymanservice.com'

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
                Odds & Ends Handyman Service · Rockland & Westchester County, NY<br />
                <a href="tel:+19084612688" style="color:#2563eb;text-decoration:none;">(908) 461-2688</a> · 
                <a href="${SITE_URL}" style="color:#2563eb;text-decoration:none;">oddsandendshandymanservice.com</a>
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
      <a href="tel:+1${data.phone.replace(/\D/g, '')}" style="color:#2563eb;text-decoration:none;font-weight:600;">${data.phone}</a>
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      ${rows.filter(Boolean).join('')}
    </table>
    ${photosHtml}
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px auto 0;">
      <tr>
        <td style="background-color:#2563eb;border-radius:8px;">
          <a href="tel:+1${data.phone.replace(/\D/g, '')}" style="display:block;padding:12px 28px;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;text-align:center;">
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
      We received your inquiry and Dan will be in touch soon — typically within a few hours during business days.
    </p>
    <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 24px;">
      In the meantime, feel free to call or text Dan directly if you'd like to get started right away:
    </p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 24px;">
      <tr>
        <td style="background-color:#2563eb;border-radius:8px;">
          <a href="tel:+19084612688" style="display:block;padding:14px 32px;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;text-align:center;">
            Call (908) 461-2688
          </a>
        </td>
      </tr>
    </table>
    <div style="background-color:#f0f9ff;border-radius:8px;padding:16px 20px;margin-bottom:16px;">
      <p style="color:#1e40af;font-size:13px;font-weight:600;margin:0 0 4px;">What happens next?</p>
      <ul style="color:#374151;font-size:14px;line-height:1.8;margin:0;padding-left:18px;">
        <li>Dan will review your request</li>
        <li>He'll reach out to discuss your project and schedule a time</li>
        <li>You'll receive an honest, no-obligation estimate</li>
      </ul>
    </div>
    <p style="color:#374151;font-size:15px;line-height:1.7;margin:0;">
      Thanks for choosing Odds & Ends — we look forward to helping!
    </p>
    <p style="color:#374151;font-size:15px;line-height:1.7;margin:16px 0 0;">
      <strong>Dan Kiely</strong><br />
      <span style="color:#6b7280;font-size:13px;">Owner, Odds & Ends Handyman Service</span>
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
      from: `Dan at Odds & Ends <${FROM_EMAIL}>`,
      to: customerEmail,
      replyTo: REPLY_TO,
      subject: `Thanks for reaching out, ${customerName.split(' ')[0]}! — Odds & Ends Handyman`,
      html: buildWelcomeHtml(customerName),
    })
  } catch (err) {
    console.error('Failed to send welcome email:', err)
  }
}
