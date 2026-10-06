import React from 'react';

export default function AboutSection() {
  return (
    <section className="sec bp-bg" id="about" aria-labelledby="h-about">
      <div className="wrap">
        <div className="story">
          <div>
            <p className="eyebrow">About AskJuno</p>
            <h2 id="h-about" className="h2 rv in" style={{ marginTop: 14 }}>
              We build software around how your business <em>actually works.</em>
            </h2>
          </div>
          <div className="rule-l rv in" style={{ '--d': 1 }}>
            <p>
              AskJuno is an enterprise software engineering and AI company that turns business processes into scalable, intelligent technology. We modernise legacy systems, build mission-critical platforms, integrate enterprise applications, and apply AI to eliminate manual, document-heavy work. Combining software engineering, AI, cloud, data, and domain expertise, we create technology built around how your business operates. From intelligent document processing and automated workflows to custom SaaS platforms and enterprise integrations, we take ownership from strategy and architecture through engineering, deployment, and continuous improvement.
            </p>
          </div>
        </div>

        <p className="eyebrow" style={{ marginTop: 'clamp(40px,5vw,64px)' }}>What we believe</p>
        <div className="pillars rv in" style={{ marginTop: 14 }}>
          <div>
            <span className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="12" cy="12" r="1.5"/>
              </svg>
            </span>
            <span className="num">01</span>
            <h4>Business first</h4>
            <p>Technology should create measurable business value.</p>
          </div>

          <div>
            <span className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/>
              </svg>
            </span>
            <span className="num">02</span>
            <h4>Engineering that lasts</h4>
            <p>Build for today, engineer for tomorrow.</p>
          </div>

          <div>
            <span className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="6" width="12" height="12" rx="2"/>
                <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>
                <path d="M10 10h4v4h-4z"/>
              </svg>
            </span>
            <span className="num">03</span>
            <h4>AI with purpose</h4>
            <p>Use AI where it solves real problems.</p>
          </div>

          <div>
            <span className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3.5"/>
                <path d="M2 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5"/>
                <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.8c2.4.8 4 3 4 6.2"/>
              </svg>
            </span>
            <span className="num">04</span>
            <h4>Built around you</h4>
            <p>Technology should fit the way your business works.</p>
          </div>
        </div>

        <p className="strip rv in">
          <span>Specialising in enterprise software · AI · platform engineering</span>
          <span>Built in India · <b>Engineered for the world.</b></span>
        </p>
      </div>
    </section>
  );
}
