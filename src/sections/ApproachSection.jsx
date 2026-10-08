import React from 'react';

const steps = [
  {
    num: '01 |',
    title: 'Understand & strategise',
    tagline: 'Before we build, we understand.',
    desc: 'We dive into your business, users, workflows, existing technology and challenges, and define what success looks like.',
    stage: 'Discovery Stage →',
    items: [
      'Business & process discovery',
      'Requirements & opportunity analysis',
      'Technology feasibility',
      'Solution strategy & architecture',
      'Product roadmap'
    ]
  },
  {
    num: '02 |',
    title: 'Design & engineer',
    tagline: 'Turn the strategy into working technology.',
    desc: 'Our engineering teams bring the solution to life through focused execution, continuous collaboration and disciplined development.',
    stage: 'Engineering Stage →',
    items: [
      'Product & technical design',
      'Agile engineering',
      'AI & automation integration',
      'API & enterprise integrations',
      'Continuous testing & QA'
    ]
  },
  {
    num: '03 |',
    title: 'Launch & operationalise',
    tagline: 'Software creates value when people can rely on it.',
    desc: 'We take solutions beyond development into real-world operation, with the infrastructure, security and support needed for production.',
    stage: 'Operations Stage →',
    items: [
      'Deployment & cloud infrastructure',
      'Production readiness',
      'Security & performance',
      'Monitoring & observability',
      'User adoption & support'
    ]
  },
  {
    num: '04 |',
    title: 'Scale & evolve',
    tagline: "The launch isn't the finish line.",
    desc: 'As your business grows, we stay involved to improve performance, expand capabilities, integrate new systems and identify what’s next.',
    stage: 'Expansion Stage →',
    items: [
      'Continuous improvement',
      'Product & feature evolution',
      'Performance optimisation',
      'New integrations & capabilities',
      'Long-term advisory'
    ]
  }
];

export default function ApproachSection() {
  return (
    <section className="sec" id="approach" aria-labelledby="h-appr">
      <div className="wrap">
        <div className="appr">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2 id="h-appr" className="h2 rv in" style={{ marginTop: 14 }}>
              From understanding <em>to impact.</em>
            </h2>
            <p className="lead rv in" style={{ marginTop: 16 }}>
              Great software doesn’t start with code. It starts with understanding your business, your people and the problems you’re solving. We work alongside you through the whole journey, from shaping the right solution to building, launching and evolving it as your business grows.
            </p>
            <p className="tri rv in">
              Real problems.<br />
              Thoughtful solutions.<br />
              <span>Lasting impact.</span>
            </p>
          </div>
          <figure className="rv in">
            <img
              src="/assets/img/approach_engineer.svg"
              alt="An engineer at a dual-monitor workstation"
              loading="lazy"
              width="1200"
              height="670"
            />
          </figure>
        </div>

        <div className="steps4">
          {steps.map((st, i) => (
            <div key={st.num} className="step-card rv in" style={{ '--d': i }}>
              <span className="step-badge">{st.num}</span>
              <h3>{st.title}</h3>
              <p className="step-tagline">{st.tagline}</p>
              <p className="step-desc">{st.desc}</p>
              <div className="step-pills">
                {st.items.map((item, idx) => (
                  <span
                    key={idx}
                    className={`step-pill ${i === 0 && idx === 1 ? 'featured' : ''}`}
                  >
                    <span className="step-pill-icon" aria-hidden="true">✦</span>
                    {item}
                  </span>
                ))}
              </div>
              <a href="#how-we-build" className="step-stage">
                {st.stage}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
