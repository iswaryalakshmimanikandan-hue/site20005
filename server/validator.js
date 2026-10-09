/**
 * Contact form input validation and HTML escaping.
 * Fully decoupled and portable across Node.js, AWS Lambda, and test runners.
 */

export const BLOCKED_DOMAINS = [
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.uk', 'yahoo.co.in', 'yahoo.ca',
  'yahoo.com.au', 'outlook.com', 'hotmail.com', 'hotmail.co.uk', 'live.com', 'live.co.uk',
  'msn.com', 'icloud.com', 'me.com', 'mac.com', 'aol.com', 'mail.com', 'email.com',
  'usa.com', 'gmx.com', 'gmx.de', 'web.de', 'inbox.com', 'fastmail.com', 'zoho.com',
  'yandex.com', 'yandex.ru', 'mail.ru', 'proton.me', 'protonmail.com', 'tuta.com',
  'tutanota.com', 'mailfence.com', 'posteo.de', 'startmail.com', 'rediffmail.com',
  'rediffmailpro.com', 'sify.com', 'indiatimes.com'
];

export const ALLOWED_SUBJECTS = [
  'Book a Consultation',
  'Product Demo',
  'Enterprise Pricing',
  'Technical Questions',
  'Partnership'
];

/**
 * Escapes characters for safe inclusion in HTML email bodies.
 * @param {string} str
 * @returns {string}
 */
export function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Validates submitted contact form data.
 * @param {object} data
 * @returns {{ isValid: boolean, errors: Record<string, string>, sanitized: object }}
 */
export function validateContactInput(data = {}) {
  const errors = {};

  const name = typeof data.name === 'string' ? data.name.trim() : '';
  if (!name) {
    errors.name = 'Name is required';
  } else if (name.length > 100) {
    errors.name = 'Name cannot exceed 100 characters';
  }

  const rawEmail = typeof data.email === 'string' ? data.email.trim().toLowerCase() : '';
  if (!rawEmail) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail)) {
    errors.email = 'Enter a valid email address';
  } else {
    const domain = rawEmail.split('@')[1];
    if (BLOCKED_DOMAINS.includes(domain)) {
      errors.email = 'Please use your company email address';
    }
  }

  const rawPhone = typeof data.phone === 'string' ? data.phone.trim() : '';
  let phoneDigits = '';
  if (rawPhone) {
    phoneDigits = rawPhone.replace(/\D/g, '');
    if (phoneDigits.length < 8 || phoneDigits.length > 15) {
      errors.phone = 'Phone number must be between 8 and 15 digits';
    }
  }

  const rawSubject = typeof data.subject === 'string' ? data.subject.trim() : '';
  if (!rawSubject) {
    errors.subject = 'Subject is required';
  } else if (!ALLOWED_SUBJECTS.includes(rawSubject)) {
    errors.subject = 'Invalid subject selected';
  }

  const company = typeof data.company === 'string' ? data.company.trim().slice(0, 150) : '';
  const message = typeof data.message === 'string' ? data.message.trim().slice(0, 3000) : '';

  const sanitized = {
    name,
    email: rawEmail,
    phone: rawPhone,
    phoneDigits,
    company,
    subject: rawSubject,
    message
  };

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized
  };
}
