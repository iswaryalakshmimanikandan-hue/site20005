import React from 'react';

export default function Footer() {
  return (
    <footer className="sitefoot">
      <div className="wrap">
        <div className="foot-brand">
          <img src="/assets/logo-light-text.svg" width="120" height="56" alt="AskJuno" />
        </div>

        <div className="foot-row-desc">
          <p className="foot-desc">
            Enterprise AI and intelligent automation, responsibly built for modern engineering.
          </p>
          <div className="foot-linkedin-wrapper">
            <a
              href="https://www.linkedin.com/company/askjuno/"
              target="_blank"
              rel="noopener noreferrer"
              className="foot-linkedin"
              aria-label="AskJuno on LinkedIn"
              title="AskJuno on LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        <div className="bot">
          <span>© 2026 AskJuno Private Limited. All rights reserved.</span>
          <span>Built in India · Engineered for the world.</span>
        </div>
      </div>
    </footer>
  );
}
