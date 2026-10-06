import React from 'react';

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
              src="/assets/img/approach_engineer.png"
              alt="An engineer at a dual-monitor workstation"
              loading="lazy"
              width="1200"
              height="670"
            />
          </figure>
        </div>

        <div className="steps4">
          <div className="rv in" style={{ '--d': 0 }}>
            <span className="num">01</span>
            <h3>Understand & strategise</h3>
            <p className="tg">Before we build, we understand.</p>
            <p>We dive into your business, users, workflows, existing technology and challenges, and define what success looks like.</p>
            <ul className="list" style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 12, borderTop: '1px solid var(--line)' }}>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>Business &amp; process discovery</li>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>Requirements &amp; opportunity analysis</li>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>Technology feasibility</li>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>Solution strategy &amp; architecture</li>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>Product roadmap</li>
            </ul>
          </div>

          <div className="rv in" style={{ '--d': 1 }}>
            <span className="num">02</span>
            <h3>Design & engineer</h3>
            <p className="tg">Turn the strategy into working technology.</p>
            <p>Our engineering teams bring the solution to life through focused execution, continuous collaboration and disciplined development.</p>
            <ul className="list" style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 12, borderTop: '1px solid var(--line)' }}>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>Product &amp; technical design</li>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>Agile engineering</li>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>AI &amp; automation integration</li>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>API &amp; enterprise integrations</li>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>Continuous testing &amp; QA</li>
            </ul>
          </div>

          <div className="rv in" style={{ '--d': 2 }}>
            <span className="num">03</span>
            <h3>Launch & operationalise</h3>
            <p className="tg">Software creates value when people can rely on it.</p>
            <p>We take solutions beyond development into real-world operation, with the infrastructure, security and support needed for production.</p>
            <ul className="list" style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 12, borderTop: '1px solid var(--line)' }}>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>Deployment &amp; cloud infrastructure</li>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>Production readiness</li>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>Security &amp; performance</li>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>Monitoring &amp; observability</li>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>User adoption &amp; support</li>
            </ul>
          </div>

          <div className="rv in" style={{ '--d': 3 }}>
            <span className="num">04</span>
            <h3>Scale & evolve</h3>
            <p className="tg">The launch isn’t the finish line.</p>
            <p>As your business grows, we stay involved to improve performance, expand capabilities, integrate new systems and identify what’s next.</p>
            <ul className="list" style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 12, borderTop: '1px solid var(--line)' }}>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>Continuous improvement</li>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>Product &amp; feature evolution</li>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>Performance optimisation</li>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>New integrations &amp; capabilities</li>
              <li style={{ display: 'flex', gap: 10, fontSize: 15 }}><span aria-hidden="true" style={{ color: 'var(--bl)' }}>+</span>Long-term advisory</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
