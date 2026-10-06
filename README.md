# AskJuno — React & Vite Website

Modern React-based architecture with modular, dedicated section components and descriptive page names.

## Features & Tech Stack
- **Framework**: React 18 + Vite
- **Routing**: React Router (`/`, `/privacy`, `/insights`, `/insights/:topicSlug`, `/insights/:topicSlug/:articleSlug`)
- **Styling**: Curated responsive CSS design system with light/dark mode support (empty CSS rulesets resolved)
- **Zero Python dependencies**: 100% pure React/Node.js project

## Project Structure
```
askjuno-whiteboard-site/
├── index.html                   # HTML entry point for Vite
├── vite.config.js               # Vite configuration
├── package.json                 # Scripts and dependencies
├── public/                      # Static assets (images, logos, favicon)
│   └── assets/
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Route definitions
    ├── index.css                # Global design system & theme variables
    ├── components/              # Shared layout components
    │   ├── Header.jsx           # Top navbar, dropdowns, dark mode toggle, mobile menu
    │   ├── Footer.jsx           # Site footer with grouped navigation links
    │   ├── Jumpers.jsx          # Scroll to top & bottom buttons
    │   └── SectionDots.jsx      # Right-side floating section indicator
    ├── sections/                # Dedicated files for each section of the home page
    │   ├── HeroWhiteboard.jsx   # Interactive whiteboard hero ("From idea to impact")
    │   ├── AboutSection.jsx     # About AskJuno & 4 core pillars
    │   ├── WhyAskJunoSection.jsx# 6 reasons businesses choose AskJuno
    │   ├── PrinciplesSection.jsx# Vision, Mission, Values & How we work
    │   ├── WhatWeDoSection.jsx  # 4 Service areas with interactive tabs
    │   ├── ProductsSection.jsx  # ArivA, EETi, MediGuard, FinReview AI, Custom AI
    │   ├── EngineeringSection.jsx# Cloud, App dev, AI, Data, Security tech stack
    │   ├── ApproachSection.jsx  # 4-stage engineering approach
    │   ├── HowWeBuildSection.jsx# 5-step process ticker & detail panels
    │   ├── IndustriesSection.jsx# 6 industry focus tabs & outcomes
    │   ├── StoriesSection.jsx   # Metrics, case studies & trusted partners
    │   ├── PeopleSection.jsx    # 12 team members grid & LinkedIn CTA
    │   ├── FaqSection.jsx       # Interactive accordion FAQ
    │   └── ContactSection.jsx   # Consultation form with validation
    ├── pages/                   # Distinct, descriptive page templates
    │   ├── HomePage.jsx         # Home page assembling all sections
    │   ├── PrivacyPolicyPage.jsx# Dedicated privacy policy page
    │   ├── InsightsHubPage.jsx  # Insights hub with topic filter & all articles
    │   ├── TopicDetailPage.jsx  # Dynamic topic page filtered by category
    │   └── ArticleDetailPage.jsx# Full article reader with sidebar & CTA
    └── data/                    # Clean, centralized content data
        ├── insightsData.js      # Topics and articles content
        └── teamData.js          # Team members directory
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```
