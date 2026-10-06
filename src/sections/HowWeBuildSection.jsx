import React, { useState, useEffect, useCallback } from 'react';
import '../styles/how-we-build.css';

const steps = [
  {
    num: '01',
    name: 'Discover',
    stepLabel: 'STEP 01 OF 05',
    title: 'Discovery & Strategic Roadmap',
    desc: 'We begin by understanding your business, users, goals and technical landscape. Through collaborative workshops and assessments, we define the right problem before building.',
    chips: ['Business Discovery', 'Requirements Analysis', 'Technical Assessment', 'Solution Roadmap'],
    systemCaption: 'DISCOVERY & STRATEGY SYSTEM',
    renderDiagram: () => (
      <svg viewBox="0 0 380 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hwb-schematic-svg">
        <rect x="15" y="15" width="105" height="70" fill="#FFFFFF" stroke="#365CAD" strokeWidth="1.5" strokeDasharray="3 3"/>
        <rect x="28" y="28" width="6" height="6" fill="#365CAD"/>
        <rect x="42" y="28" width="55" height="6" fill="#94A3B8"/>
        <rect x="28" y="45" width="70" height="5" fill="#CBD5E1"/>
        <rect x="28" y="58" width="50" height="5" fill="#E2E8F0"/>
        <rect x="28" y="70" width="60" height="4" fill="#E2E8F0"/>

        <path d="M120 50 L160 50" stroke="#365CAD" strokeWidth="1.5" strokeDasharray="3 3"/>
        <polygon points="160,47 166,50 160,53" fill="#365CAD"/>

        <rect x="166" y="20" width="100" height="60" fill="#EAF0FB" stroke="#365CAD" strokeWidth="1.5"/>
        <text x="216" y="44" textAnchor="middle" fill="#365CAD" fontSize="12" fontWeight="800" fontFamily="sans-serif">Strategic</text>
        <text x="216" y="60" textAnchor="middle" fill="#365CAD" fontSize="11" fontWeight="700" fontFamily="sans-serif">Roadmap</text>

        <path d="M216 80 L216 110" stroke="#365CAD" strokeWidth="1.5"/>
        <polygon points="213,110 216,116 219,110" fill="#365CAD"/>

        <rect x="150" y="116" width="130" height="65" fill="#FFFFFF" stroke="#365CAD" strokeWidth="1.5"/>
        <rect x="162" y="128" width="22" height="14" fill="#10B981" opacity="0.2"/>
        <text x="173" y="139" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="800" fontFamily="sans-serif">M1</text>
        <text x="192" y="139" fill="#1E293B" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">Technical Audit</text>

        <rect x="162" y="148" width="22" height="14" fill="#365CAD" opacity="0.15"/>
        <text x="173" y="159" textAnchor="middle" fill="#365CAD" fontSize="9" fontWeight="800" fontFamily="sans-serif">M2</text>
        <text x="192" y="159" fill="#1E293B" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">Architecture Scope</text>

        <rect x="290" y="55" width="75" height="90" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.2"/>
        <rect x="298" y="66" width="58" height="6" fill="#365CAD" opacity="0.7"/>
        <rect x="298" y="80" width="45" height="5" fill="#94A3B8"/>
        <rect x="302" y="98" width="6" height="6" fill="#10B981"/>
        <rect x="314" y="98" width="40" height="4" fill="#64748B"/>
        <rect x="302" y="114" width="6" height="6" fill="#10B981"/>
        <rect x="314" y="114" width="35" height="4" fill="#64748B"/>
        <rect x="302" y="130" width="6" height="6" fill="#365CAD"/>
        <rect x="314" y="130" width="30" height="4" fill="#64748B"/>
      </svg>
    )
  },
  {
    num: '02',
    name: 'Design',
    stepLabel: 'STEP 02 OF 05',
    title: 'Architecture & Interface Design',
    desc: 'We translate ideas into intuitive user experiences and scalable system architectures, ensuring every decision supports long-term growth.',
    chips: ['UI/UX Design', 'System Architecture', 'Technical Planning', 'Prototyping'],
    systemCaption: 'DESIGN & ARCHITECTURE SYSTEM',
    renderDiagram: () => (
      <svg viewBox="0 0 380 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hwb-schematic-svg">
        {/* Top-left wireframe browser box (Square box) */}
        <rect x="18" y="16" width="95" height="60" fill="#FFFFFF" stroke="#365CAD" strokeWidth="1.3"/>
        <rect x="26" y="22" width="4" height="4" fill="#365CAD"/>
        <rect x="33" y="22" width="4" height="4" fill="#365CAD"/>
        <rect x="40" y="22" width="4" height="4" fill="#365CAD"/>
        <line x1="18" y1="28" x2="113" y2="28" stroke="#E2E8F0" strokeWidth="1"/>
        <rect x="26" y="36" width="32" height="28" fill="#EAF0FB" stroke="#365CAD" strokeWidth="0.8"/>
        <rect x="64" y="38" width="40" height="4" fill="#CBD5E1"/>
        <rect x="64" y="47" width="32" height="4" fill="#CBD5E1"/>
        <rect x="64" y="56" width="36" height="4" fill="#CBD5E1"/>

        {/* Top flowchart connection lines */}
        <path d="M113 46 L138 46 L138 32 L150 32" stroke="#365CAD" strokeWidth="1.2"/>
        <polygon points="150,29 156,32 150,35" fill="#365CAD"/>

        {/* Top flowchart decision diamond */}
        <polygon points="175,18 200,32 175,46 150,32" fill="#FFFFFF" stroke="#365CAD" strokeWidth="1.3"/>
        <rect x="172" y="29" width="6" height="6" fill="#365CAD"/>

        <path d="M200 32 L225 32" stroke="#365CAD" strokeWidth="1.2"/>
        <polygon points="225,29 231,32 225,35" fill="#365CAD"/>

        {/* Top right layered UI windows (Square boxes) */}
        <rect x="236" y="16" width="60" height="38" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.2"/>
        <rect x="246" y="24" width="60" height="38" fill="#FFFFFF" stroke="#365CAD" strokeWidth="1.4"/>
        <line x1="246" y1="32" x2="306" y2="32" stroke="#E2E8F0" strokeWidth="1"/>
        <rect x="254" y="38" width="44" height="4" fill="#365CAD" opacity="0.6"/>
        <rect x="254" y="47" width="30" height="4" fill="#CBD5E1"/>

        {/* Central Bold Heading */}
        <text x="210" y="88" textAnchor="middle" fill="#0F172A" fontSize="15" fontWeight="800" fontFamily="sans-serif">Design &amp;</text>
        <text x="210" y="106" textAnchor="middle" fill="#0F172A" fontSize="15" fontWeight="800" fontFamily="sans-serif">Architecture</text>

        {/* Bottom Left UI Card with X image placeholder (Square box) */}
        <rect x="22" y="98" width="85" height="78" fill="#FFFFFF" stroke="#365CAD" strokeWidth="1.3"/>
        <rect x="30" y="106" width="69" height="36" fill="#EAF0FB"/>
        <line x1="30" y1="106" x2="99" y2="142" stroke="#365CAD" strokeWidth="1" strokeDasharray="3 3"/>
        <line x1="99" y1="106" x2="30" y2="142" stroke="#365CAD" strokeWidth="1" strokeDasharray="3 3"/>
        <rect x="30" y="150" width="48" height="5" fill="#64748B"/>
        <rect x="30" y="160" width="62" height="4" fill="#CBD5E1"/>

        {/* Bottom connector lines & flowchart blocks */}
        <path d="M107 137 L140 137 L140 152 L165 152" stroke="#365CAD" strokeWidth="1.2"/>
        <polygon points="165,149 171,152 165,155" fill="#365CAD"/>

        {/* Connector from central title downwards */}
        <path d="M255 106 L255 132 L280 132" stroke="#365CAD" strokeWidth="1.2"/>
        <polygon points="280,129 286,132 280,135" fill="#365CAD"/>

        {/* Mid-process node (Square box) */}
        <rect x="171" y="142" width="54" height="24" fill="#FFFFFF" stroke="#365CAD" strokeWidth="1.2"/>
        <rect x="179" y="152" width="38" height="4" fill="#365CAD"/>

        <path d="M225 154 L255 154 L255 160 L280 160" stroke="#365CAD" strokeWidth="1.2"/>
        <polygon points="280,157 286,160 280,163" fill="#365CAD"/>

        {/* Flowchart node top-right (Square box) */}
        <rect x="286" y="122" width="56" height="22" fill="#FFFFFF" stroke="#365CAD" strokeWidth="1.2"/>
        <rect x="293" y="130" width="6" height="6" fill="#10B981"/>
        <rect x="304" y="131" width="30" height="4" fill="#64748B"/>

        {/* Database cylinder on bottom right */}
        <g transform="translate(290, 150)">
          <rect x="0" y="4" width="36" height="28" fill="#EAF0FB" stroke="#365CAD" strokeWidth="1.3"/>
          <line x1="0" y1="12" x2="36" y2="12" stroke="#365CAD" strokeWidth="1"/>
          <line x1="0" y1="20" x2="36" y2="20" stroke="#365CAD" strokeWidth="1"/>
          <rect x="6" y="7" width="8" height="2" fill="#365CAD"/>
          <rect x="6" y="15" width="8" height="2" fill="#365CAD"/>
          <rect x="6" y="23" width="8" height="2" fill="#365CAD"/>
        </g>
      </svg>
    )
  },
  {
    num: '03',
    name: 'Develop',
    stepLabel: 'STEP 03 OF 05',
    title: 'Agile Engineering & API Development',
    desc: 'Using agile methods and modern engineering practices, we build secure, high-performance applications with transparency and continuous feedback.',
    chips: ['Agile Sprints', 'API Integration', 'Quality Assurance', 'Automated Testing'],
    systemCaption: 'AGILE DEVELOPMENT SYSTEM',
    renderDiagram: () => (
      <svg viewBox="0 0 380 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hwb-schematic-svg">
        {/* Code window with clean blueprint paper styling (NO black BG) */}
        <rect x="20" y="16" width="180" height="115" fill="#FFFFFF" stroke="#365CAD" strokeWidth="1.5"/>
        <rect x="30" y="24" width="6" height="6" fill="#EF4444"/>
        <rect x="40" y="24" width="6" height="6" fill="#F59E0B"/>
        <rect x="50" y="24" width="6" height="6" fill="#10B981"/>
        <text x="70" y="30" fill="#365CAD" fontSize="9" fontWeight="700" fontFamily="monospace">api_service.ts</text>
        <line x1="20" y1="36" x2="200" y2="36" stroke="#E2E8F0" strokeWidth="1"/>

        <text x="32" y="56" fill="#365CAD" fontSize="10" fontWeight="700" fontFamily="monospace">export const</text>
        <text x="110" y="56" fill="#0F172A" fontSize="10" fontWeight="700" fontFamily="monospace">service</text>
        <text x="32" y="74" fill="#64748B" fontSize="9.5" fontFamily="monospace">  const auth = await token();</text>
        <text x="32" y="90" fill="#10B981" fontSize="9.5" fontWeight="600" fontFamily="monospace">  return orchestrate(auth);</text>
        <text x="32" y="106" fill="#64748B" fontSize="9.5" fontFamily="monospace">&#125;;</text>
        <rect x="32" y="114" width="70" height="3" fill="#365CAD" opacity="0.3"/>

        <path d="M200 74 L235 74" stroke="#365CAD" strokeWidth="1.5"/>
        <polygon points="235,71 241,74 235,77" fill="#365CAD"/>

        <rect x="241" y="35" width="120" height="75" fill="#EAF0FB" stroke="#365CAD" strokeWidth="1.5"/>
        <text x="253" y="54" fill="#0F172A" fontSize="11" fontWeight="800" fontFamily="sans-serif">Git Branch Flow</text>
        <rect x="256" y="68" width="8" height="8" fill="#365CAD"/>
        <line x1="264" y1="72" x2="294" y2="72" stroke="#365CAD" strokeWidth="2"/>
        <rect x="296" y="68" width="8" height="8" fill="#10B981"/>
        <line x1="304" y1="72" x2="334" y2="72" stroke="#10B981" strokeWidth="2"/>
        <rect x="336" y="68" width="8" height="8" fill="#10B981"/>
        <text x="253" y="94" fill="#64748B" fontSize="9" fontFamily="monospace">main: 0 conflicts</text>

        <rect x="40" y="145" width="300" height="38" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5"/>
        <rect x="56" y="157" width="14" height="14" fill="#10B981"/>
        <path d="M59 164 L62 167 L67 161" stroke="#FFFFFF" strokeWidth="1.5"/>
        <text x="78" y="168" fill="#065F46" fontSize="11" fontWeight="800" fontFamily="sans-serif">TEST SUITE: 100% PASSING</text>
        <text x="245" y="168" fill="#047857" fontSize="10" fontFamily="monospace">coverage 98.4%</text>
      </svg>
    )
  },
  {
    num: '04',
    name: 'Deploy',
    stepLabel: 'STEP 04 OF 05',
    title: 'Cloud Deployment & Security Validation',
    desc: 'We ensure a smooth, secure rollout with cloud-native deployment, performance optimization, and rigorous security verification.',
    chips: ['Cloud Deployment', 'Performance Tuning', 'Security Audit', 'Go-Live Support'],
    systemCaption: 'DEPLOYMENT & SECURITY PIPELINE',
    renderDiagram: () => (
      <svg viewBox="0 0 380 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hwb-schematic-svg">
        <rect x="25" y="25" width="75" height="48" fill="#FFFFFF" stroke="#365CAD" strokeWidth="1.3"/>
        <text x="62" y="46" textAnchor="middle" fill="#1E293B" fontSize="10" fontWeight="700" fontFamily="sans-serif">Build</text>
        <text x="62" y="60" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="700" fontFamily="monospace">✓ verified</text>

        <path d="M100 49 L125 49" stroke="#365CAD" strokeWidth="1.5"/>
        <polygon points="125,46 131,49 125,52" fill="#365CAD"/>

        <rect x="131" y="25" width="75" height="48" fill="#FFFFFF" stroke="#365CAD" strokeWidth="1.3"/>
        <text x="168" y="46" textAnchor="middle" fill="#1E293B" fontSize="10" fontWeight="700" fontFamily="sans-serif">Security Scan</text>
        <text x="168" y="60" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="700" fontFamily="monospace">0 CVEs</text>

        <path d="M206 49 L231 49" stroke="#365CAD" strokeWidth="1.5"/>
        <polygon points="231,46 237,49 231,52" fill="#365CAD"/>

        <rect x="237" y="25" width="85" height="48" fill="#EAF0FB" stroke="#365CAD" strokeWidth="1.5"/>
        <text x="279" y="46" textAnchor="middle" fill="#365CAD" fontSize="10.5" fontWeight="800" fontFamily="sans-serif">Zero Downtime</text>
        <text x="279" y="60" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="700" fontFamily="monospace">Rolling pod</text>

        <rect x="40" y="95" width="290" height="85" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.3"/>
        <rect x="52" y="106" width="75" height="20" fill="#EAF0FB" stroke="#365CAD" strokeWidth="1"/>
        <rect x="58" y="113" width="6" height="6" fill="#10B981"/>
        <text x="68" y="120" fill="#365CAD" fontSize="9" fontWeight="800" fontFamily="sans-serif">PROD LIVE</text>

        <text x="52" y="145" fill="#64748B" fontSize="10" fontFamily="sans-serif">Cluster: AWS us-east-1</text>
        <text x="52" y="162" fill="#64748B" fontSize="10" fontFamily="sans-serif">Container: Kubernetes v1.30</text>

        <g transform="translate(240, 105)">
          <rect x="10" y="10" width="50" height="50" fill="#EAF0FB" stroke="#10B981" strokeWidth="1.5"/>
          <text x="35" y="32" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="800" fontFamily="sans-serif">99.9%</text>
          <text x="35" y="46" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="700" fontFamily="monospace">UPTIME</text>
        </g>
      </svg>
    )
  },
  {
    num: '05',
    name: 'Scale',
    stepLabel: 'STEP 05 OF 05',
    title: 'Continuous Monitoring & System Scaling',
    desc: 'Software is never finished. We continuously monitor, optimize, and enhance your solution as your business needs change, staying your partner long after launch.',
    chips: ['SLA Monitoring', 'Feature Expansion', 'System Scaling', 'Continuous Innovation'],
    systemCaption: 'CONTINUOUS SCALE & SLA SYSTEM',
    renderDiagram: () => (
      <svg viewBox="0 0 380 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hwb-schematic-svg">
        <rect x="20" y="20" width="105" height="60" fill="#FFFFFF" stroke="#365CAD" strokeWidth="1.3"/>
        <text x="32" y="38" fill="#64748B" fontSize="10" fontWeight="700" fontFamily="sans-serif">Uptime SLA</text>
        <text x="32" y="62" fill="#10B981" fontSize="18" fontWeight="800" fontFamily="sans-serif">99.99%</text>

        <rect x="135" y="20" width="105" height="60" fill="#FFFFFF" stroke="#365CAD" strokeWidth="1.3"/>
        <text x="147" y="38" fill="#64748B" fontSize="10" fontWeight="700" fontFamily="sans-serif">Latency</text>
        <text x="147" y="62" fill="#365CAD" fontSize="18" fontWeight="800" fontFamily="sans-serif">&lt; 38ms</text>

        <rect x="250" y="20" width="105" height="60" fill="#FFFFFF" stroke="#365CAD" strokeWidth="1.3"/>
        <text x="262" y="38" fill="#64748B" fontSize="10" fontWeight="700" fontFamily="sans-serif">Active Nodes</text>
        <text x="262" y="62" fill="#0F172A" fontSize="18" fontWeight="800" fontFamily="sans-serif">12 / 12</text>

        <rect x="20" y="94" width="335" height="85" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.3"/>
        <text x="34" y="112" fill="#1E293B" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">Real-time Telemetry &amp; Auto-scale Curve</text>
        
        <path d="M35 155 Q 90 150, 140 135 T 240 120 T 330 110" stroke="#365CAD" strokeWidth="2.5" fill="none"/>
        <path d="M35 155 Q 90 150, 140 135 T 240 120 T 330 110 L 330 165 L 35 165 Z" fill="#EAF0FB" opacity="0.6"/>
        
        <rect x="236" y="116" width="8" height="8" fill="#365CAD"/>
        <rect x="220" y="100" width="40" height="14" fill="#365CAD"/>
        <text x="240" y="110" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="700" fontFamily="sans-serif">PEAK</text>
      </svg>
    )
  }
];

const AUTOPLAY_DURATION = 10000; // 10 seconds auto-advance
const MANUAL_OVERRIDE_DURATION = 30000; // 30 seconds when user clicks a step

export default function HowWeBuildSection() {
  const [activeStep, setActiveStep] = useState(0); // Starts at Step 01
  const [isManual, setIsManual] = useState(false);
  const [cycleId, setCycleId] = useState(0);

  // Auto-advance timer: 10s normally, 30s if user manually clicked a step
  useEffect(() => {
    const duration = isManual ? MANUAL_OVERRIDE_DURATION : AUTOPLAY_DURATION;

    const timer = setTimeout(() => {
      // After duration elapses, advance to next step and revert to normal 10s cycle
      setIsManual(false);
      setActiveStep(prev => (prev + 1) % steps.length);
      setCycleId(c => c + 1);
    }, duration);

    return () => clearTimeout(timer);
  }, [activeStep, isManual, cycleId]);

  const handleStepSelect = useCallback((idx) => {
    setActiveStep(idx);
    setIsManual(true);
    setCycleId(c => c + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveStep(prev => (prev - 1 + steps.length) % steps.length);
    setIsManual(true);
    setCycleId(c => c + 1);
  }, []);

  const handleNext = useCallback(() => {
    setActiveStep(prev => (prev + 1) % steps.length);
    setIsManual(true);
    setCycleId(c => c + 1);
  }, []);

  const cur = steps[activeStep];
  const barDuration = isManual ? '30s' : '10s';

  return (
    <section id="how-we-build" aria-labelledby="hwb-heading">
      <div className="wrap">
        {/* Section Header */}
        <div className="hwb-head">
          <div className="hwb-badge">
            <span aria-hidden="true">+</span>
            <span>METHODOLOGY</span>
          </div>
          <h2 id="hwb-heading" className="hwb-title">
            From vision to <em>value.</em>
          </h2>
          <p className="hwb-lead">
            Every successful product starts with understanding the business behind it. Our
            engineering approach combines strategic thinking, agile execution, and continuous
            collaboration to deliver software that creates measurable impact.
          </p>
        </div>

        {/* Main Interactive Stepper Card (Square box container) */}
        <div className="hwb-card">
          {/* Horizontal Top Stepper Navigation (Square box tabs) */}
          <nav className="hwb-stepper-nav" role="tablist" aria-label="Process Steps">
            {steps.map((st, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={st.num}
                  role="tab"
                  id={`hwb-tab-${st.num}`}
                  aria-selected={isActive}
                  aria-controls={`hwb-panel-${st.num}`}
                  className={`hwb-step-tab ${isActive ? 'active' : ''}`}
                  onClick={() => handleStepSelect(idx)}
                >
                  <span className="hwb-step-tab-num">{st.num}</span>
                  <span>{st.name}</span>
                  {isActive && (
                    <span
                      className="hwb-tab-progress"
                      key={`bar-${activeStep}-${cycleId}`}
                      style={{ '--dur': barDuration }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Card Body: Split Content & Schematic Diagram */}
          <div
            id={`hwb-panel-${cur.num}`}
            role="tabpanel"
            aria-labelledby={`hwb-tab-${cur.num}`}
            className="hwb-card-body"
          >
            {/* Left Column: Step Details */}
            <div className="hwb-content-col">
              <div className="hwb-content-head">
                <span className="hwb-step-count">{cur.stepLabel}</span>
                <h3 className="hwb-step-title">{cur.title}</h3>
                <p className="hwb-step-desc">{cur.desc}</p>
              </div>

              {/* Chips List with Square Bullets & Square Box Tags */}
              <ul className="hwb-chips-list">
                {cur.chips.map((chip, idx) => (
                  <li key={idx} className="hwb-chip-item">
                    <span className="hwb-chip-bullet" aria-hidden="true" />
                    <span>{chip}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons (Square boxes) */}
              <div className="hwb-actions-row">
                <button
                  type="button"
                  className="hwb-btn-prev"
                  onClick={handlePrev}
                  aria-label="Previous step"
                >
                  <span aria-hidden="true">←</span>
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  className="hwb-btn-next"
                  onClick={handleNext}
                  aria-label="Next step"
                >
                  <span>Next step</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            {/* Right Column: Schematic Blueprint Diagram Preview (Square Box) */}
            <div className="hwb-schematic-col">
              <div className="hwb-schematic-card">
                {cur.renderDiagram()}
                <span className="hwb-schematic-footer">{cur.systemCaption}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner: Clean Blueprint Theme (NO BLACK BG, Square Box) */}
        <div className="hwb-banner">
          <div className="hwb-banner-left">
            <span className="hwb-banner-icon" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                <rect x="2" y="2" width="16" height="16" fill="#10B981" opacity="0.15" stroke="#10B981" strokeWidth="1.5"/>
                <path
                  d="M6 10 L9 13 L14 7"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeLinecap="square"
                  fill="none"
                />
              </svg>
            </span>
            <b className="hwb-banner-title">We don’t disappear after deployment.</b>
          </div>

          <p className="hwb-banner-desc">
            We stay engaged to <span>optimize, enhance and scale</span> your software as your business evolves.
          </p>

          <a href="#contact" className="hwb-banner-cta">
            <span>Our SLA Models</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
