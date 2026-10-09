/**
 * Hosting-independent request handler for AskJuno contact enquiries.
 * Supports:
 * 1. AWS Lambda & API Gateway (HTTP API v2 or REST API v1)
 * 2. Standalone Node.js HTTP servers (local development, Docker, ECS, App Runner)
 */

import { validateContactInput } from './validator.js';
import { sendContactEmail } from './email.js';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN || '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json'
};

/**
 * Handles incoming contact request payload and returns standard response.
 * @param {object} options
 * @param {string} options.method HTTP method (GET, POST, OPTIONS, etc.)
 * @param {any} options.body Parsed JSON object or raw JSON string
 * @param {object} [options.envOverrides] Optional environment overrides
 * @returns {Promise<{ statusCode: number, headers: Record<string, string>, body: string }>}
 */
export async function processContactRequest({ method, body, envOverrides = {} }) {
  const normMethod = (method || '').toUpperCase();

  // Handle CORS preflight
  if (normMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: CORS_HEADERS,
      body: ''
    };
  }

  // Only allow POST
  if (normMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        success: false,
        error: 'Method Not Allowed. Only POST requests are supported.'
      })
    };
  }

  // Parse body if it is a string
  let parsedBody = body;
  if (typeof body === 'string') {
    try {
      parsedBody = JSON.parse(body || '{}');
    } catch {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({
          success: false,
          error: 'Invalid JSON request payload'
        })
      };
    }
  }

  // Validate fields against rules & blocked domains
  const validation = validateContactInput(parsedBody);
  if (!validation.isValid) {
    const firstErrorMessage = Object.values(validation.errors)[0] || 'Validation failed';
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        success: false,
        error: firstErrorMessage,
        errors: validation.errors
      })
    };
  }

  // Send email via Resend
  try {
    const result = await sendContactEmail(validation.sanitized, envOverrides);
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        success: true,
        message: 'Your consultation request has been sent successfully.',
        id: result.id
      })
    };
  } catch (err) {
    console.error('[AskJuno Contact Error]', err.message, err.resendError || '');

    // Safely return error message without leaking sensitive server secrets
    const isClientError = err.status && err.status >= 400 && err.status < 500;
    const clientMessage = isClientError
      ? err.message
      : 'We could not send your message right now. Please email enquiry@askjuno.com directly.';

    return {
      statusCode: err.status || 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        success: false,
        error: clientMessage
      })
    };
  }
}

/**
 * AWS Lambda handler entrypoint.
 * Automatically adapts API Gateway HTTP API v2 and REST API v1 payloads.
 */
export async function lambdaHandler(event, context) {
  // Extract HTTP method across different API Gateway schemas
  const method =
    event.requestContext?.http?.method ||
    event.httpMethod ||
    'POST';

  // Extract body, handling base64 encoding if applicable
  let rawBody = event.body;
  if (event.isBase64Encoded && typeof rawBody === 'string') {
    rawBody = Buffer.from(rawBody, 'base64').toString('utf8');
  }

  return processContactRequest({
    method,
    body: rawBody
  });
}
