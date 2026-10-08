# AskJuno Website

Marketing and content website for **AskJuno** — an enterprise software engineering and AI company. AskJuno modernises legacy systems, builds mission-critical platforms, integrates enterprise applications, and applies AI to eliminate manual, document-heavy work, combining software engineering, AI, cloud, data, and domain expertise.

This repo is the public-facing site: company overview, products, engineering approach, industries served, team, insights/blog, and contact/lead-gen form.

## Tech Stack
- **React 18** + **Vite 6** (`npm run dev` / `build` / `preview`)
- **React Router** for client-side routing
- Plain CSS design system (no CSS framework) with light/dark mode support
- Deployed as a static SPA on **Cloudflare Workers** (see `wrangler.jsonc`), built via `npm run build` into `dist/`

## Site Map
- `/` — Home page, composed of all marketing sections (hero, about, products, engineering, industries, people, FAQ, contact, etc.)
- `/privacy` — Privacy policy
- `/insights` — Insights hub (articles grouped by topic)
- `/insights/:topicSlug` — Articles filtered by topic
- `/insights/:topicSlug/:articleSlug` — Single article reader

## Structure
- `src/sections/` — one component per home-page section (hero, about, products, engineering, how-we-build, industries, stories, people, FAQ, contact, etc.)
- `src/pages/` — route-level page components
- `src/components/` — shared chrome (header, footer, scroll jumpers, section-dot nav)
- `src/data/` — static content data (insights articles, team directory)
- `src/styles/` — per-section CSS files; `src/index.css` holds global design tokens/theme
- `public/` / `assets/` — static assets and images

For a detailed file-by-file breakdown, see [README.md](README.md).

## Content Ownership
Section copy (company description, product names like ArivA, EETi, MediGuard, FinReview AI, team bios, FAQs) lives directly in the section components and `src/data/`. Update copy there rather than in this file — this document describes the project, not its content.

## Deployment
Configured for Cloudflare Workers static asset hosting (`wrangler.jsonc`): builds to `./dist` and serves as a single-page application (unmatched routes fall back to `index.html`).
