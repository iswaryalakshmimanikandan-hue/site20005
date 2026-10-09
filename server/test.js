/**
 * Automated test suite for AskJuno contact service.
 * Verifies request validation, blocked domain rules, HTML escaping,
 * CORS preflight, and Resend API handling.
 * Run with: node server/test.js
 */

import assert from 'node:assert';
import { validateContactInput, escapeHtml, BLOCKED_DOMAINS } from './validator.js';
import { buildEmailContent } from './email.js';
import { processContactRequest } from './handler.js';

let passed = 0;
let failed = 0;

function runTest(name, fn) {
  try {
    fn();
    console.log(`  ✓ ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${name}`);
    console.error(`    ${err.message}`);
    failed++;
  }
}

async function runAsyncTest(name, fn) {
  try {
    await fn();
    console.log(`  ✓ ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${name}`);
    console.error(`    ${err.message}`);
    failed++;
  }
}

console.log('\n--- 1. Testing Input Validation ---');

runTest('Rejects missing required fields (name, email, subject)', () => {
  const result = validateContactInput({});
  assert.strictEqual(result.isValid, false);
  assert.ok(result.errors.name, 'Name error expected');
  assert.ok(result.errors.email, 'Email error expected');
  assert.ok(result.errors.subject, 'Subject error expected');
});

runTest('Rejects invalid email format', () => {
  const result = validateContactInput({
    name: 'Jane Doe',
    email: 'not-an-email',
    subject: 'Book a Consultation'
  });
  assert.strictEqual(result.isValid, false);
  assert.strictEqual(result.errors.email, 'Enter a valid email address');
});

runTest('Rejects blocked consumer/free email domains', () => {
  const sampleBlocked = ['user@gmail.com', 'test@yahoo.com', 'alice@outlook.com', 'bob@hotmail.co.uk', 'info@proton.me'];
  for (const email of sampleBlocked) {
    const result = validateContactInput({
      name: 'Tester',
      email,
      subject: 'Book a Consultation'
    });
    assert.strictEqual(result.isValid, false, `Expected ${email} to be rejected`);
    assert.strictEqual(result.errors.email, 'Please use your company email address');
  }
});

runTest('Rejects invalid phone digits (less than 8 or more than 15)', () => {
  const resultShort = validateContactInput({
    name: 'John Smith',
    email: 'john@enterprise.io',
    phone: '12345',
    subject: 'Book a Consultation'
  });
  assert.strictEqual(resultShort.isValid, false);
  assert.strictEqual(resultShort.errors.phone, 'Phone number must be between 8 and 15 digits');

  const resultLong = validateContactInput({
    name: 'John Smith',
    email: 'john@enterprise.io',
    phone: '+1 234 567 890 123 456 789',
    subject: 'Book a Consultation'
  });
  assert.strictEqual(resultLong.isValid, false);
  assert.strictEqual(resultLong.errors.phone, 'Phone number must be between 8 and 15 digits');
});

runTest('Accepts valid submission with company email and valid phone', () => {
  const validPayload = {
    name: 'Sarah Connor',
    email: 'sarah@cyberdyne.ai',
    phone: '+1 (555) 019-2834',
    company: 'Cyberdyne Systems',
    subject: 'Book a Consultation',
    message: 'We are looking to modernise our legacy systems with AI.'
  };
  const result = validateContactInput(validPayload);
  assert.strictEqual(result.isValid, true);
  assert.strictEqual(Object.keys(result.errors).length, 0);
  assert.strictEqual(result.sanitized.company, 'Cyberdyne Systems');
});

console.log('\n--- 2. Testing HTML Escaping & Email Content ---');

runTest('Escapes special characters (<, >, &, ", \') to prevent HTML injection', () => {
  const maliciousInput = '<script>alert("hack")</script> & \'test\'';
  const escaped = escapeHtml(maliciousInput);
  assert.strictEqual(
    escaped,
    '&lt;script&gt;alert(&quot;hack&quot;)&lt;/script&gt; &amp; &#39;test&#39;'
  );
});

runTest('Email content generator includes escaped fields and safe formatting', () => {
  const data = {
    name: 'Alice <CEO>',
    email: 'alice@innovate.co',
    phone: '+91 98765 43210',
    company: 'Innovate "Labs"',
    subject: 'Enterprise Pricing',
    message: 'Hello\nWorld & Partners'
  };
  const { html, text, emailSubject } = buildEmailContent(data);
  assert.ok(html.includes('&lt;CEO&gt;'));
  assert.ok(html.includes('Innovate &quot;Labs&quot;'));
  assert.ok(html.includes('World &amp; Partners'));
  assert.ok(html.includes('<br/>'));
  assert.ok(text.includes('Alice <CEO>'));
  assert.ok(emailSubject.includes('Enterprise Pricing'));
  assert.ok(emailSubject.includes('Innovate "Labs"'));
});

console.log('\n--- 3. Testing Handler & CORS ---');

await runAsyncTest('OPTIONS request returns 204 with CORS headers', async () => {
  const response = await processContactRequest({
    method: 'OPTIONS'
  });
  assert.strictEqual(response.statusCode, 204);
  assert.strictEqual(response.headers['Access-Control-Allow-Methods'], 'POST, OPTIONS');
  assert.ok(response.headers['Access-Control-Allow-Origin']);
});

await runAsyncTest('GET request returns 405 Method Not Allowed', async () => {
  const response = await processContactRequest({
    method: 'GET'
  });
  assert.strictEqual(response.statusCode, 405);
  const parsed = JSON.parse(response.body);
  assert.strictEqual(parsed.success, false);
});

await runAsyncTest('Validation error returns 400 with descriptive error', async () => {
  const response = await processContactRequest({
    method: 'POST',
    body: JSON.stringify({ name: 'Bob', email: 'bob@gmail.com' })
  });
  assert.strictEqual(response.statusCode, 400);
  const parsed = JSON.parse(response.body);
  assert.strictEqual(parsed.success, false);
  assert.strictEqual(parsed.error, 'Please use your company email address');
});

await runAsyncTest('Handles missing RESEND_API_KEY with 500 error without leaking secrets', async () => {
  const response = await processContactRequest({
    method: 'POST',
    body: JSON.stringify({
      name: 'Valid User',
      email: 'user@enterprise.org',
      subject: 'Product Demo'
    }),
    envOverrides: { RESEND_API_KEY: '' }
  });
  assert.strictEqual(response.statusCode, 500);
  const parsed = JSON.parse(response.body);
  assert.strictEqual(parsed.success, false);
  assert.ok(parsed.error.includes('enquiry@askjuno.com'));
});

await runAsyncTest('Successful Resend API response returns success: true', async () => {
  // Test with mock server override
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, opts) => {
    assert.strictEqual(url, 'https://api.resend.com/emails');
    assert.strictEqual(opts.method, 'POST');
    assert.ok(opts.headers.Authorization.includes('test_api_key'));
    const parsedPayload = JSON.parse(opts.body);
    assert.strictEqual(parsedPayload.to[0], 'enquiry@askjuno.com');
    assert.strictEqual(parsedPayload.reply_to, 'user@enterprise.org');
    assert.ok(parsedPayload.subject.includes('Product Demo'));
    return {
      ok: true,
      status: 200,
      json: async () => ({ id: 're_123456789' })
    };
  };

  try {
    const response = await processContactRequest({
      method: 'POST',
      body: JSON.stringify({
        name: 'Valid User',
        email: 'user@enterprise.org',
        subject: 'Product Demo',
        company: 'Enterprise Corp',
        message: 'Looking for a demo next Tuesday.'
      }),
      envOverrides: {
        RESEND_API_KEY: 'test_api_key',
        CONTACT_TO_EMAIL: 'enquiry@askjuno.com'
      }
    });
    assert.strictEqual(response.statusCode, 200);
    const parsed = JSON.parse(response.body);
    assert.strictEqual(parsed.success, true);
    assert.strictEqual(parsed.id, 're_123456789');
  } finally {
    globalThis.fetch = originalFetch;
  }
});

console.log(`\n========================================`);
console.log(`Test Results: ${passed} passed, ${failed} failed`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
}
