/**
 * Local Node.js development server for testing the contact API in Antigravity.
 * Runs independently on port 3001 (proxied by Vite) with zero third-party dependencies.
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { processContactRequest } from './handler.js';

// Auto-load .env file if present in project root
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '..', '.env');

if (fs.existsSync(envPath)) {
  try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx !== -1) {
        const key = trimmed.slice(0, eqIdx).trim();
        let val = trimmed.slice(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    });
  } catch (err) {
    console.warn('[Local Server] Could not read .env file:', err.message);
  }
}

const PORT = parseInt(process.env.PORT || '3001', 10);

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  // Health check endpoint
  if (url.pathname === '/health' || url.pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', service: 'askjuno-contact-api' }));
    return;
  }

  // Handle contact route (/api/contact or /contact)
  if (url.pathname === '/api/contact' || url.pathname === '/contact') {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', async () => {
      const rawBody = Buffer.concat(chunks).toString('utf8');
      const response = await processContactRequest({
        method: req.method,
        body: rawBody
      });

      res.writeHead(response.statusCode, response.headers);
      res.end(response.body);
    });
    return;
  }

  // Fallback 404
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  AskJuno Contact API Server running locally on:`);
  console.log(`  http://localhost:${PORT}/api/contact`);
  console.log(`======================================================`);
  console.log(`  RESEND_API_KEY:       ${process.env.RESEND_API_KEY ? 'Configured [OK]' : 'MISSING (set in .env)'}`);
  console.log(`  RESEND_FROM_EMAIL:    ${process.env.RESEND_FROM_EMAIL || 'AskJuno <website@askjuno.com>'}`);
  console.log(`  CONTACT_TO_EMAIL:     ${process.env.CONTACT_TO_EMAIL || 'enquiry@askjuno.com'}`);
  console.log(`======================================================\n`);
});
