import React from 'react';

export default function StoriesSection() {
  return (
    <section className="sec" id="stories" aria-labelledby="h-st">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Success stories</p>
          <h2 className="h2 rv in">Turning complex challenges into <em>measurable results.</em></h2>
          <p className="lead rv in" style={{ '--d': 1 }}>
            Every engagement is a chance to solve a meaningful business problem. Here’s how we’ve helped organisations streamline operations, modernise technology and create lasting business value.
          </p>
        </div>

        <div className="metrics rv in" role="list">
          <div role="listitem"><b>5+</b><span>PROJECTS DELIVERED</span></div>
          <div role="listitem"><b>15+</b><span>BUSINESSES SERVED</span></div>
          <div role="listitem"><b>6</b><span>INDUSTRIES</span></div>
          <div role="listitem"><b>95%</b><span>CLIENT RETENTION</span></div>
          <div role="listitem"><b>5+</b><span>YEARS EXPERIENCE</span></div>
        </div>

        <div className="cases3">
          <article className="card rv in" style={{ '--d': 0 }}>
            <div className="card-top top">
              <span className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z"/>
                </svg>
              </span>
              <span className="cat">PHARMACEUTICAL</span>
            </div>
            <h3>AI-powered document intelligence for a pharmaceutical enterprise</h3>
            <p>Automated document extraction, validation and workflow orchestration to reduce manual effort and accelerate time-to-market.</p>
            <dl>
              <dt>Challenge</dt>
              <dd>Thousands of distributor and stockist reports were processed manually, leading to delays, inconsistencies and limited visibility into sales performance.</dd>
              <dt>Solution</dt>
              <dd>Implemented an AI-powered document intelligence platform to extract, validate, normalise and consolidate data from multiple document formats into a single operational view.</dd>
              <dt className="imp">Business impact</dt>
              <dd>
                <ul>
                  <li>Reduced manual processing effort</li>
                  <li>Improved data accuracy</li>
                  <li>Faster sales reporting</li>
                  <li>Better operational visibility</li>
                </ul>
              </dd>
            </dl>
          </article>

          <article className="card rv in" style={{ '--d': 1 }}>
            <div className="card-top top">
              <span className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 21V5l8-3v19M12 21V9l8 3v9M2 21h20"/>
                  <path d="M7 8h2M7 12h2M7 16h2M15 14h2M15 17h2"/>
                </svg>
              </span>
              <span className="cat">ENTERPRISE</span>
            </div>
            <h3>Modernising enterprise operations</h3>
            <p>Migrated legacy systems to a scalable cloud platform, improving performance, security and operational efficiency.</p>
            <dl>
              <dt>Challenge</dt>
              <dd>Legacy systems slowed business processes and made it difficult to integrate with modern applications, limiting the organisation’s ability to scale.</dd>
              <dt>Solution</dt>
              <dd>Designed and developed a scalable cloud-native platform with seamless system integrations and an improved user experience built for long-term growth.</dd>
              <dt className="imp">Business impact</dt>
              <dd>
                <ul>
                  <li>Faster business processes</li>
                  <li>Improved scalability</li>
                  <li>Enhanced user adoption</li>
                  <li>Reduced operational overhead</li>
                </ul>
              </dd>
            </dl>
          </article>

          <article className="card rv in" style={{ '--d': 2 }}>
            <div className="card-top top">
              <span className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="6" rx="1"/>
                  <rect x="14" y="15" width="7" height="6" rx="1"/>
                  <path d="M6.5 9v4a2 2 0 0 0 2 2h5.5"/>
                </svg>
              </span>
              <span className="cat">OPERATIONS</span>
            </div>
            <h3>Intelligent workflow automation</h3>
            <p>Automated complex workflows with AI and integration, reducing cycle time and improving accuracy across teams.</p>
            <dl>
              <dt>Challenge</dt>
              <dd>Teams spent significant time on repetitive manual tasks across multiple business functions, limiting productivity and creating error-prone hand-offs.</dd>
              <dt>Solution</dt>
              <dd>Developed AI-powered workflow automation to remove repetitive processes, reduce friction between teams and improve decision support across functions.</dd>
              <dt className="imp">Business impact</dt>
              <dd>
                <ul>
                  <li>Faster turnaround times</li>
                  <li>Fewer manual errors</li>
                  <li>Increased productivity</li>
                  <li>Better decision support</li>
                </ul>
              </dd>
            </dl>
          </article>
        </div>

        <div className="trusted rv in">
          <small>TRUSTED BY COMPANIES ACROSS INDUSTRIES</small>
          <span>Meridian Financial</span>
          <span>HealthCore Systems</span>
          <span>Sterling &amp; Associates</span>
          <span>Apex Manufacturing</span>
          <span>GovTech Solutions</span>
          <span>DataEdge Corp</span>
        </div>

        <p className="closing rv in">
          Technology creates value only when it delivers <b>measurable business outcomes.</b> Every solution we build is designed with that goal in mind.
        </p>
      </div>
    </section>
  );
}
