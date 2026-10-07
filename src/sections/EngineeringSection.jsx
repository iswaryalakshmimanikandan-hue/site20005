import React from 'react';

export default function EngineeringSection() {
  return (
    <section className="sec bp-bg" id="technology" aria-labelledby="h-tech">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Engineering</p>
          <h2 className="h2 rv in">Modern engineering. <em>Built for scale.</em></h2>
          <p className="lead rv in" style={{ '--d': 1 }}>
            We combine modern technologies, cloud-native architectures and AI capabilities to build secure, scalable, future-ready software. Every technology we choose is driven by your business goals, not by trends.
          </p>
        </div>

        <div className="eng">
          <article className="card rv in" style={{ '--d': 0 }}>
            <span className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 18a5 5 0 0 1-.5-10A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z" />
              </svg>
            </span>
            <h3>Cloud & infrastructure</h3>
            <p>Build resilient, high-performance applications with cloud-native architectures that scale as your business grows.</p>
            <span className="ttl">TOOLS &amp; TECHNOLOGIES</span>
            <ul className="chips">
              <li>AWS</li><li>Microsoft Azure</li><li>Google Cloud</li><li>Docker</li><li>Kubernetes</li>
            </ul>
          </article>

          <article className="card rv in" style={{ '--d': 1 }}>
            <span className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
              </svg>
            </span>
            <h3>Application development</h3>
            <p>Create intuitive, high-performance applications across web, mobile and enterprise platforms.</p>
            <span className="ttl">TOOLS &amp; TECHNOLOGIES</span>
            <ul className="chips">
              <li>React</li><li>Angular</li><li>Flutter</li><li>.NET</li><li>Node.js</li><li>Python</li><li>Java</li>
            </ul>
          </article>

          <article className="card rv in" style={{ '--d': 2 }}>
            <span className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="6" width="12" height="12" rx="2" />
                <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
                <path d="M10 10h4v4h-4z" />
              </svg>
            </span>
            <h3>AI & intelligent automation</h3>
            <p>Transform business processes with AI that automates work, extracts insight and supports better decisions.</p>
            <span className="ttl">TOOLS &amp; TECHNOLOGIES</span>
            <ul className="chips">
              <li>AI agents</li><li>Generative AI</li><li>LLM integrations</li><li>Document intelligence</li><li>Workflow automation</li><li>Predictive analytics</li>
            </ul>
          </article>

          <article className="card rv in" style={{ '--d': 0 }}>
            <span className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
                <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
              </svg>
            </span>
            <h3>Data & integration</h3>
            <p>Connect systems, unify data and enable real-time visibility across your business.</p>
            <span className="ttl">TOOLS &amp; TECHNOLOGIES</span>
            <ul className="chips">
              <li>REST APIs</li><li>GraphQL</li><li>Data engineering</li><li>Business intelligence</li><li>ERP &amp; CRM integrations</li><li>Data pipelines</li>
            </ul>
          </article>

          <article className="card rv in" style={{ '--d': 1 }}>
            <span className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5z" />
                <path d="m8.5 12 2.5 2.5 4.5-5" />
              </svg>
            </span>
            <h3>Security & quality</h3>
            <p>Build with confidence using engineering practices that prioritise reliability, performance and long-term maintainability.</p>
            <span className="ttl">TOOLS &amp; TECHNOLOGIES</span>
            <ul className="chips">
              <li>Secure SDLC</li><li>Automated testing</li><li>CI/CD</li><li>Performance optimisation</li><li>Monitoring</li><li>Compliance best practices</li>
            </ul>
          </article>

          <article className="card card-principle rv in" style={{ '--d': 2, background: 'var(--bl, #365CAD)', borderColor: 'var(--bl, #365CAD)', color: '#ffffff' }}>
            <span className="num" style={{ color: '#fff', opacity: 0.8 }}>PRINCIPLE</span>
            <h3 style={{ color: '#fff' }}>Technology choices that stand the test of time.</h3>
            <p style={{ color: '#fff', opacity: 0.9 }}>
              Great software is built on strong engineering fundamentals. That’s why we prioritise scalability, security, maintainability and performance in every solution we deliver.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
