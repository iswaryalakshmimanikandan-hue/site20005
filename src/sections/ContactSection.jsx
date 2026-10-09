import React, { useState } from 'react';

const BLOCKED_DOMAINS = [
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.uk', 'yahoo.co.in', 'yahoo.ca',
  'yahoo.com.au', 'outlook.com', 'hotmail.com', 'hotmail.co.uk', 'live.com', 'live.co.uk',
  'msn.com', 'icloud.com', 'me.com', 'mac.com', 'aol.com', 'mail.com', 'email.com',
  'usa.com', 'gmx.com', 'gmx.de', 'web.de', 'inbox.com', 'fastmail.com', 'zoho.com',
  'yandex.com', 'yandex.ru', 'mail.ru', 'proton.me', 'protonmail.com', 'tuta.com',
  'tutanota.com', 'mailfence.com', 'posteo.de', 'startmail.com', 'rediffmail.com',
  'rediffmailpro.com', 'sify.com', 'indiatimes.com'
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Book a Consultation',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Name is required';
    }

    const emailTrim = formData.email.trim().toLowerCase();
    if (!emailTrim) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) {
      errs.email = 'Enter a valid email address';
    } else {
      const domain = emailTrim.split('@')[1];
      if (BLOCKED_DOMAINS.includes(domain)) {
        errs.email = 'Please use your company email address';
      }
    }

    const phoneTrim = formData.phone.trim();
    if (phoneTrim) {
      const digits = phoneTrim.replace(/\D/g, '');
      if (digits.length < 8 || digits.length > 15) {
        errs.phone = 'Phone number must be between 8 and 15 digits';
      }
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '');
      if (digits.length > 15) {
        return; // Limit entry to maximum 15 digits
      }
    }
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const endpoint = import.meta.env.VITE_CONTACT_API_URL || '/api/contact';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) {
        throw new Error(data.message || data.error || 'Unable to send your request right now.');
      }
      setIsSent(true);
    } catch (err) {
      // In development or when API is offline, gracefully notify
      setSubmitError(
        err.message || 'We could not send your message right now. Please email enquiry@askjuno.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: 'Book a Consultation',
      message: ''
    });
    setErrors({});
    setIsSent(false);
  };

  return (
    <section className="sec alt" id="contact" aria-labelledby="h-ct">
      <div className="wrap">
        <div className="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="h-ct" className="h2 rv in" style={{ marginTop: 14 }}>
              Let’s build <em style={{ color: 'var(--or)' }}>something great together.</em>
            </h2>
            <p className="lead rv in" style={{ marginTop: 14 }}>
              Have a project in mind, a question, or just want to say hello? We’d love to hear from you.
            </p>

            <div className="cdet">
              <a href="mailto:enquiry@askjuno.com">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="1" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <span>
                  <small>EMAIL</small>
                  <span>enquiry@askjuno.com</span>
                </span>
              </a>

              <a href="tel:+917550267584">
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2" />
                  </svg>
                </span>
                <span>
                  <small>PHONE</small>
                  <span>India · +91 75502 67584</span>
                </span>
              </a>

              <div>
                <span className="icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                <span>
                  <small>OFFICE</small>
                  <span>ASV Chandilya Towers, 397, Rajiv Gandhi Salai, Nehru Nagar, Thoraipakkam, Tamil Nadu 600097</span>
                </span>
              </div>
            </div>
          </div>

          <div className="cform2">
            {!isSent ? (
              <form id="contact-form" noValidate onSubmit={handleSubmit} aria-describedby="form-note">
                <div className="cform-head">
                  <h3 className="cform-title">Start a Conversation</h3>
                  <p className="cform-desc">
                    Tell us about your team and goals. We'll connect you with an engineering lead within 24 hours.
                  </p>
                </div>

                <div className="cform-body">
                  <div className="row2">
                    <div className="field">
                      <label htmlFor="f-name">Name <span className="req" aria-hidden="true">*</span></label>
                      <input
                        id="f-name"
                        name="name"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'err-name' : undefined}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="err" id="err-name">{errors.name}</p>}
                    </div>

                    <div className="field">
                      <label htmlFor="f-email">Work email <span className="req" aria-hidden="true">*</span></label>
                      <input
                        id="f-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'err-email' : undefined}
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="err" id="err-email">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="row2">
                    <div className="field">
                      <label htmlFor="f-phone">
                        Phone <span className="field-hint">(8–15 digits)</span>
                      </label>
                      <input
                        id="f-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        maxLength={18}
                        value={formData.phone}
                        onChange={handleChange}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'err-phone' : undefined}
                        placeholder="XXXXX XXXXX"
                      />
                      {errors.phone && <p className="err" id="err-phone">{errors.phone}</p>}
                    </div>

                    <div className="field">
                      <label htmlFor="f-company">Company</label>
                      <input
                        id="f-company"
                        name="company"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your organisation"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="f-subject">Subject <span className="req" aria-hidden="true">*</span></label>
                    <select
                      id="f-subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'err-subject' : undefined}
                    >
                      <option>Book a Consultation</option>
                      <option>Product Demo</option>
                      <option>Enterprise Pricing</option>
                      <option>Technical Questions</option>
                      <option>Partnership</option>
                    </select>
                    {errors.subject && <p className="err" id="err-subject">{errors.subject}</p>}
                  </div>

                  <div className="field">
                    <label htmlFor="f-message">Message</label>
                    <textarea
                      id="f-message"
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your challenge or goals (optional)"
                    ></textarea>
                  </div>

                  <p className="small cform-note" id="form-note">
                    <span className="req">*</span> Required fields. Please use your corporate email address.
                  </p>

                  <div className="cform-action">
                    <button className="btn btn-or cform-btn" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending request…' : 'Book a consultation →'}
                    </button>
                  </div>
                  {submitError && (
                    <p className="form-msg" id="form-status" role="alert">
                      {submitError}
                    </p>
                  )}
                </div>
              </form>
            ) : (
              <div className="sent" id="form-sent">
                <span className="ok" aria-hidden="true">✓</span>
                <h3 tabIndex="-1">Thank you!</h3>
                <p className="small">Your consultation request has been sent. We'll get back to you shortly.</p>
                <button className="btn btn-ln sm" type="button" onClick={handleReset}>
                  Book another consultation
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
