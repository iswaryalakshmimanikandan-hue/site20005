/**
 * Resend email delivery service for AskJuno website.
 * Uses native fetch (Node.js 18+ and AWS Lambda compatible) with zero external dependencies.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { escapeHtml } from './validator.js';

// Auto-load .env in development if not already loaded into process.env
if (!process.env.RESEND_API_KEY) {
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const envPath = path.resolve(__dirname, '..', '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      content.split(/\r?\n/).forEach(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;
        const eq = trimmed.indexOf('=');
        if (eq !== -1) {
          const k = trimmed.slice(0, eq).trim();
          let v = trimmed.slice(eq + 1).trim();
          if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
            v = v.slice(1, -1);
          }
          if (!process.env[k]) process.env[k] = v;
        }
      });
    }
  } catch {}
}

/**
 * Builds clean, responsive HTML and plain text email content.
 * All user inputs are strictly escaped to prevent HTML injection.
 * @param {object} data Sanitized form fields
 * @returns {{ html: string, text: string, emailSubject: string }}
 */
export function buildEmailContent(data) {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = data.phone ? escapeHtml(data.phone) : '<em>Not provided</em>';
  const safeCompany = data.company ? escapeHtml(data.company) : '<em>Not provided</em>';
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = data.message
    ? escapeHtml(data.message).replace(/\n/g, '<br/>')
    : '<em>No message provided</em>';

  const timestamp = new Date().toUTCString();

  const emailSubject = `[Website Enquiry] ${data.subject} – ${data.name}${data.company ? ` (${data.company})` : ''}`;

  const text = `
New Consultation Request from AskJuno Website
==============================================
Received: ${timestamp}

Contact Details:
- Name:    ${data.name}
- Email:   ${data.email}
- Phone:   ${data.phone || 'Not provided'}
- Company: ${data.company || 'Not provided'}
- Subject: ${data.subject}

Message:
${data.message || '(No message provided)'}

----------------------------------------------
Reply directly to this email to contact ${data.name} (${data.email}).
`.trim();

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Enquiry</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f9fa; color: #171d22; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e1e7ec; overflow: hidden; }
    .card-header { background: #0f172a; color: #ffffff; padding: 20px 24px; }
    .card-header h2 { margin: 0 0 4px 0; font-size: 20px; font-weight: 600; }
    .card-header p { margin: 0; font-size: 13px; color: #94a3b8; }
    .badge { display: inline-block; background: #f97316; color: #ffffff; font-size: 12px; font-weight: 600; padding: 3px 8px; border-radius: 4px; margin-top: 8px; }
    .card-body { padding: 24px; }
    .field-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    .field-table th { text-align: left; padding: 8px 12px; font-size: 13px; color: #64748b; font-weight: 600; width: 110px; vertical-align: top; border-bottom: 1px solid #f1f5f9; }
    .field-table td { padding: 8px 12px; font-size: 14px; color: #1e293b; border-bottom: 1px solid #f1f5f9; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; }
    .footer { padding: 16px 24px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
  </style>
</head>
<body>
  <div class="card">
    <div class="card-header">
      <h2>New Consultation Request</h2>
      <p>Submitted via askjuno.com contact form</p>
      <div class="badge">${safeSubject}</div>
    </div>
    <div class="card-body">
      <table class="field-table">
        <tr>
          <th>Name</th>
          <td><strong>${safeName}</strong></td>
        </tr>
        <tr>
          <th>Work Email</th>
          <td><a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a></td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>${safePhone}</td>
        </tr>
        <tr>
          <th>Company</th>
          <td>${safeCompany}</td>
        </tr>
        <tr>
          <th>Subject</th>
          <td>${safeSubject}</td>
        </tr>
      </table>

      <h4 style="margin: 20px 0 8px 0; font-size: 13px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Message</h4>
      <div class="message-box">
        ${safeMessage}
      </div>
    </div>
    <div class="footer">
      Received: ${timestamp} &bull; Reply directly to this email to reach the visitor.
    </div>
  </div>
</body>
</html>
`.trim();

  return { html, text, emailSubject };
}

/**
 * Dispatches the contact enquiry to the Resend API.
 * @param {object} sanitized Sanitized form fields
 * @param {object} [envOverrides] Optional environment variables for testing or Lambda
 * @returns {Promise<{ id: string }>}
 */
export async function sendContactEmail(sanitized, envOverrides = {}) {
  const apiKey = envOverrides.RESEND_API_KEY !== undefined
    ? envOverrides.RESEND_API_KEY
    : process.env.RESEND_API_KEY;

  if (!apiKey) {
    const error = new Error('RESEND_API_KEY is not configured on the server.');
    error.status = 500;
    throw error;
  }

  // Sender email: verified custom domain address or fallback for test accounts
  const fromEmail = envOverrides.RESEND_FROM_EMAIL !== undefined
    ? envOverrides.RESEND_FROM_EMAIL
    : (process.env.RESEND_FROM_EMAIL || 'AskJuno <website@askjuno.com>');

  const toEmail = envOverrides.CONTACT_TO_EMAIL !== undefined
    ? envOverrides.CONTACT_TO_EMAIL
    : (process.env.CONTACT_TO_EMAIL || 'enquiry@askjuno.com');

  const { html, text, emailSubject } = buildEmailContent(sanitized);

  const payload = {
    from: fromEmail,
    to: [toEmail],
    reply_to: sanitized.email,
    subject: emailSubject,
    html,
    text
  };

  const resendUrl = envOverrides.RESEND_API_URL || 'https://api.resend.com/emails';

  const response = await fetch(resendUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const responseData = await response.json().catch(() => ({}));

  if (!response.ok) {
    const errorMessage = responseData.message || responseData.error || `Resend API returned HTTP ${response.status}`;
    const err = new Error(errorMessage);
    err.status = response.status >= 500 ? 502 : response.status;
    err.resendError = responseData;
    throw err;
  }

  return { id: responseData.id };
}
