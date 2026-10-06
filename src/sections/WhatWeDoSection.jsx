import React, { useState, useEffect } from 'react';

const services = [
  {
    id: 0,
    title: 'AI solutions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
        <path d="M10 10h4v4h-4z" />
      </svg>
    ),
    desc: 'Build intelligent applications, AI agents and automation workflows that streamline operations, accelerate decision-making and unlock new efficiencies.',
    capabilities: ['AI agents', 'Workflow automation', 'Generative AI', 'Document intelligence', 'Custom AI integrations']
  },
  {
    id: 1,
    title: 'Product engineering',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 2 8l10 5 10-5-10-5z" />
        <path d="m2 13 10 5 10-5" />
        <path d="m2 17.5 10 5 10-5" />
      </svg>
    ),
    desc: 'Design and develop scalable digital products from concept to launch, with a focus on performance, security and user experience.',
    capabilities: ['SaaS development', 'Product design', 'Web applications', 'Mobile applications', 'API development']
  },
  {
    id: 2,
    title: 'Enterprise software',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21V5l8-3v19M12 21V9l8 3v9M2 21h20" />
        <path d="M7 8h2M7 12h2M7 16h2M15 14h2M15 17h2" />
      </svg>
    ),
    desc: 'Modernise and extend enterprise systems with secure, scalable software that integrates seamlessly with your business.',
    capabilities: ['ERP & CRM solutions', 'System integration', 'Legacy modernisation', 'Business applications', 'Cloud migration']
  },
  {
    id: 3,
    title: 'Data & intelligence',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M6 17V11M11 17V6M16 17v-4M21 17V8" />
      </svg>
    ),
    desc: 'Transform business data into actionable insights through analytics, dashboards and intelligent reporting.',
    capabilities: ['Business intelligence', 'Analytics dashboards', 'Data engineering', 'Reporting automation', 'Decision support']
  }
];

const NORMAL_MS = 10000; // 10 seconds
const MANUAL_MS = 30000; // 30 seconds

// ==================================================
// SINGLE CONTROLLED TIMER MODEL (outside React render cycle)
// - One active timer ID (`currentTimer`)
// - Zero nested timeouts
// - Completely decoupled from scrolling and IntersectionObserver
// - Does not restart on React re-renders or component unmounting
// ==================================================
let currentTimer = null;
let activeStep = 0;
let manualMode = false;
let animVersion = 0;
const subscribers = new Set();

function updateUI() {
  const payload = {
    activeIdx: activeStep,
    isManual: manualMode,
    animVersion
  };
  subscribers.forEach((cb) => cb(payload));
}

function clearTimer() {
  if (currentTimer) {
    clearTimeout(currentTimer);
    currentTimer = null;
  }
}

function startNormalCycle() {
  clearTimer();
  manualMode = false;

  currentTimer = setTimeout(() => {
    activeStep = (activeStep + 1) % services.length;
    animVersion++;
    updateUI();
    startNormalCycle();
  }, NORMAL_MS);
}

function selectStepManually(clickedIndex) {
  clearTimer();
  activeStep = clickedIndex;
  manualMode = true;
  animVersion++;
  updateUI();

  currentTimer = setTimeout(() => {
    manualMode = false;
    activeStep = (activeStep + 1) % services.length;
    animVersion++;
    updateUI();
    startNormalCycle();
  }, MANUAL_MS);
}

// Start normal auto-cycle once globally
if (typeof window !== 'undefined' && !currentTimer) {
  startNormalCycle();
}

export default function WhatWeDoSection() {
  const [state, setState] = useState(() => ({
    activeIdx: activeStep,
    isManual: manualMode,
    animVersion
  }));

  useEffect(() => {
    if (!currentTimer) {
      startNormalCycle();
    }

    const listener = (newState) => {
      setState(newState);
    };

    subscribers.add(listener);

    // Sync on mount with the running timer state
    setState({
      activeIdx: activeStep,
      isManual: manualMode,
      animVersion
    });

    return () => {
      subscribers.delete(listener);
    };
  }, []);

  // Keyboard navigation for accessible tablist
  const handleKeyDown = (e, index) => {
    let target = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      target = (index + 1) % services.length;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      target = (index - 1 + services.length) % services.length;
    } else if (e.key === 'Home') {
      target = 0;
    } else if (e.key === 'End') {
      target = services.length - 1;
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectStepManually(index);
      return;
    }

    if (target !== null) {
      e.preventDefault();
      selectStepManually(target);
      const targetBtn = document.getElementById(`ts-${services[target].id}`);
      if (targetBtn) targetBtn.focus();
    }
  };

  const cur = services[state.activeIdx];
  const barDuration = state.isManual ? '30s' : '10s';

  return (
    <section className="sec bp-bg" id="what-we-do" aria-labelledby="h-wwd">
      <div className="wrap">
        <div className="sec-head wwd-head">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="h2 rv in">Solutions that <br /><em>power modern business.</em></h2>
          </div>
          <p className="lead rv in wwd-intro" style={{ '--d': 1 }}>
            Whether you're building a new digital product, modernising legacy systems or bringing AI into your operations, we deliver end-to-end engineering designed for long-term business impact.
          </p>
        </div>

        <div className="wwd-card">
          <div className="wwd-side">
            <p className="lbl mono" style={{ fontSize: 12, color: 'var(--mu)', margin: '0 0 14px', letterSpacing: '.1em' }}>
              SERVICE AREAS
            </p>
            <div className="wwd-tabs" role="tablist" aria-label="Service areas">
              {services.map((svc, i) => (
                <button
                  key={`${svc.id}-${state.activeIdx === i ? state.animVersion : 'idle'}`}
                  role="tab"
                  id={`ts-${svc.id}`}
                  aria-controls={`ps-${svc.id}`}
                  aria-selected={state.activeIdx === i}
                  tabIndex={state.activeIdx === i ? 0 : -1}
                  style={{ '--dur': barDuration }}
                  className={`wwd-tab ${state.activeIdx === i ? 'go' : ''}`}
                  onClick={() => selectStepManually(i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                >
                  <span className="wwd-ic" aria-hidden="true">{svc.icon}</span>
                  <span className="wwd-tab-txt">{svc.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="wwd-main">
            <div
              key={cur.id}
              role="tabpanel"
              id={`ps-${cur.id}`}
              aria-labelledby={`ts-${cur.id}`}
              className="wwd-panel"
            >
              <div className="wwd-top">
                <span className="wwd-icbig" aria-hidden="true">{cur.icon}</span>
                <h3>{cur.title}</h3>
              </div>
              <p className="desc">{cur.desc}</p>
              <p className="lbl">Capabilities</p>
              <ul className="wwd-caps">
                {cur.capabilities.map((cap) => (
                  <li key={cap}>{cap}</li>
                ))}
              </ul>
              <a className="wwd-more" href="#contact">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="wwd-dots hwb-dots" aria-hidden="true">
              {services.map((svc, i) => (
                <i
                  key={svc.id}
                  className={state.activeIdx === i ? 'on' : ''}
                  onClick={() => selectStepManually(i)}
                  role="button"
                  tabIndex={-1}
                  aria-label={`Go to ${svc.title}`}
                ></i>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
