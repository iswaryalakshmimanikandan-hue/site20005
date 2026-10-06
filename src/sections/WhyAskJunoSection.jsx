import React from 'react';

const reasons = [
  {
    num: '01',
    title: 'Business-first engineering',
    desc: 'We understand your business goals, workflows, systems and constraints before designing the solution, so what we build solves the right problem, not just the stated requirement.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="12" cy="12" r="1.5"/>
      </svg>
    )
  },
  {
    num: '02',
    title: 'AI where it matters',
    desc: 'From intelligent document processing to automation, validation, decision support and AI-powered applications, we apply AI where it removes manual effort and improves how work gets done.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="2"/>
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>
        <path d="M10 10h4v4h-4z"/>
      </svg>
    )
  },
  {
    num: '03',
    title: 'Built to scale',
    desc: 'We architect for today’s needs without creating tomorrow’s limits: scalable architecture, secure integrations, cloud-native foundations and production-ready engineering.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"/>
        <path d="M5 21V13h4v8M10 21V8h4v13M15 21V3h4v18"/>
      </svg>
    )
  },
  {
    num: '04',
    title: 'End-to-end ownership',
    desc: 'From discovery and architecture through development, QA, deployment, integrations and ongoing support, we stay accountable across the whole technology lifecycle.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12 5 9l4-4 3 2 3-2 4 4-3 3"/>
        <path d="m8 12 3 3a1.5 1.5 0 0 0 2-2l-2-2"/>
        <path d="m11 15 1.5 1.5a1.5 1.5 0 0 0 2-2L13 13"/>
        <path d="m14 16 .5.5a1.5 1.5 0 0 0 2-2L16 14"/>
      </svg>
    )
  },
  {
    num: '05',
    title: 'Business + technology thinking',
    desc: 'Building our own products and solving real operational problems helps us bridge business and engineering teams, turning requirements into solutions people actually use.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z"/>
      </svg>
    )
  },
  {
    num: '06',
    title: 'Engineering that lasts',
    desc: 'Clean architecture, rigorous testing, security, maintainability, observability and performance are considered from the start, because software has to work long after launch.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/>
      </svg>
    )
  }
];

export default function WhyAskJunoSection() {
  return (
    <section className="sec" id="why-juno" aria-labelledby="h-why">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Why AskJuno</p>
          <h2 className="h2 rv in">Why businesses <em>choose AskJuno.</em></h2>
        </div>
        <div className="cards">
          {reasons.map((r, i) => (
            <article key={r.num} className="card rv in" style={{ '--d': i % 3 }}>
              <div className="card-top top">
                <span className="icon" aria-hidden="true">{r.icon}</span>
                <span className="num">{r.num}</span>
              </div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
