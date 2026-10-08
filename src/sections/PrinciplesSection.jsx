import React, { useState, useEffect } from 'react';

const insideSteps = [
  { num: '01', title: 'Own the outcome', desc: 'Take responsibility beyond your assigned task.' },
  { num: '02', title: 'Challenge respectfully', desc: 'Question ideas. Challenge assumptions. Keep it constructive.' },
  { num: '03', title: 'Stay curious', desc: 'Keep learning, experimenting and sharing.' },
  { num: '04', title: 'Trust through accountability', desc: 'Give people room to make decisions, and own them.' },
  { num: '05', title: 'Help the team win', desc: 'Share knowledge. Support each other. Give credit.' },
  { num: '06', title: 'Keep improving', desc: 'Every project and process is a chance to get better.' }
];

export default function PrinciplesSection() {
  const [activeTab, setActiveTab] = useState('clients');
  const [activeInsideStep, setActiveInsideStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveInsideStep(prev => (prev + 1) % insideSteps.length);
    }, 5000); // 5s timing per step

    return () => clearInterval(timer);
  }, [activeInsideStep]);

  return (
    <section className="sec alt" id="value" aria-labelledby="h-val">
      <div className="wrap">
        <div className="sec-head" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,0.7fr)', gap: 20, alignItems: 'end', maxWidth: 'none' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p className="eyebrow">Our principles</p>
            <h2 id="h-val" className="h2 rv in">The principles that shape <em>how we think, build and work.</em></h2>
          </div>
          <p className="motto rv in">
            Better technology.<br />
            Stronger businesses.<br />
            <span>A smarter tomorrow.</span>
          </p>
        </div>

        {/* Vision, Mission, Values */}
        <div className="vmv">
          <article className="card rv in" style={{ '--d': 0 }}>
            <div className="card-top top">
              <span className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </span>
              <span className="lab">VISION</span>
            </div>
            <h3>Make technology a competitive advantage.</h3>
            <p>To help businesses operate with greater clarity, intelligence and agility, turning complex processes and operational challenges into opportunities for growth.</p>
            <span className="foot">Where we’re going</span>
          </article>

          <article className="card rv in" style={{ '--d': 1 }}>
            <div className="card-top top">
              <span className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="12" cy="12" r="1.5"/>
                </svg>
              </span>
              <span className="lab">MISSION</span>
            </div>
            <h3>Engineer solutions that move businesses forward.</h3>
            <p>We combine engineering, AI, product thinking and business understanding to design, build and evolve technology that solves meaningful problems and creates measurable outcomes.</p>
            <span className="foot">Why we exist</span>
          </article>

          <article className="card rv in" style={{ '--d': 2 }}>
            <div className="card-top top">
              <span className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3.5"/>
                  <path d="M2 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5"/>
                  <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.8c2.4.8 4 3 4 6.2"/>
                </svg>
              </span>
              <span className="lab">VALUES</span>
            </div>
            <h3>Ownership. Curiosity. Integrity. Excellence.</h3>
            <p>The behaviours that shape how we make decisions, work with each other and build lasting relationships.</p>
            <span className="foot">How we show up</span>
          </article>
        </div>

        {/* How we work */}
        <div className="ways" data-tabs>
          <div className="ways-head">
            <div>
              <h3>How we work</h3>
              <p>We don’t just build software. We build long-term partnerships.</p>
            </div>
            <div className="tablist" role="tablist" aria-label="How we work">
              <button
                role="tab"
                id="tw-1"
                aria-controls="pw-1"
                aria-selected={activeTab === 'clients'}
                onClick={() => setActiveTab('clients')}
              >
                With clients
              </button>
              <button
                role="tab"
                id="tw-2"
                aria-controls="pw-2"
                aria-selected={activeTab === 'together'}
                onClick={() => setActiveTab('together')}
              >
                Together
              </button>
            </div>
          </div>

          {activeTab === 'clients' && (
            <div role="tabpanel" id="pw-1" aria-labelledby="tw-1">
              <div className="items6">
                <div>
                  <span className="num">01</span>
                  <b>Business outcomes first</b>
                  <p>We start with the business problem, not the technology. Success isn’t measured by features delivered, it’s measured by the value created.</p>
                </div>
                <div>
                  <span className="num">02</span>
                  <b>Partnership over projects</b>
                  <p>We work as an extension of your team, collaborating closely to build solutions that evolve with your business.</p>
                </div>
                <div>
                  <span className="num">03</span>
                  <b>Intelligence with purpose</b>
                  <p>We apply AI where it can automate work, improve decisions, simplify operations and create new capabilities.</p>
                </div>
                <div>
                  <span className="num">04</span>
                  <b>Transparency by default</b>
                  <p>You always have visibility into architecture, trade-offs, risks and timelines, so you can decide with confidence.</p>
                </div>
                <div>
                  <span className="num">05</span>
                  <b>Build for what’s next</b>
                  <p>We design technology that can evolve with your users, data, systems and business, without unnecessary complexity.</p>
                </div>
                <div>
                  <span className="num">06</span>
                  <b>Leave it better</b>
                  <p>Whether building something new or modernising an existing system, our goal is always improvement for your business, people and customers.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'together' && (
            <div role="tabpanel" id="pw-2" aria-labelledby="tw-2">
              <div className="items6">
                <div>
                  <span className="num">01</span>
                  <b>Shared ownership</b>
                  <p>We take collective responsibility from day one, winning and learning as one team.</p>
                </div>
                <div>
                  <span className="num">02</span>
                  <b>Open & direct dialogue</b>
                  <p>We communicate with clarity, welcoming constructive challenge and diverse viewpoints.</p>
                </div>
                <div>
                  <span className="num">03</span>
                  <b>Curiosity & knowledge sharing</b>
                  <p>We share discoveries, mentor one another and raise the collective standard.</p>
                </div>
                <div>
                  <span className="num">04</span>
                  <b>Cross-functional alignment</b>
                  <p>We connect business context, design intuition and deep engineering without silos.</p>
                </div>
                <div>
                  <span className="num">05</span>
                  <b>Trust through autonomy</b>
                  <p>We empower people to make bold decisions and stand behind their execution.</p>
                </div>
                <div>
                  <span className="num">06</span>
                  <b>Sustained momentum</b>
                  <p>We keep moving with focus and discipline, maintaining pace without burning out.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Inside AskJuno */}
        <div className="inside rv in">
          <figure>
            <img
              src="/assets/img/office_better_together.svg"
              alt="AskJuno office with the ‘Better Together’ sign"
              loading="lazy"
              width="1100"
              height="821"
            />
          </figure>
          <div className="txt">
            <p className="eyebrow">Inside AskJuno</p>
            <h3 className="h3" style={{ fontSize: 'clamp(24px,2.4vw,32px)' }}>Great work starts with great people.</h3>
            <p className="small">The way we work with each other shapes the way we work with our customers. Our workplace values help us stay humble, grow together and do our best work.</p>
            <ol className="inside-list">
              {insideSteps.map((step, idx) => (
                <li
                  key={step.num}
                  className={`inside-step ${activeInsideStep === idx ? 'active' : ''}`}
                  onClick={() => setActiveInsideStep(idx)}
                >
                  <span className="num">{step.num}</span>
                  <span>
                    <b>{step.title}</b>
                    <span>{step.desc}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
