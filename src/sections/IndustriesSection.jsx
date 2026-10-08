import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/industries-section.css';

const industries = [
  {
    id: 0,
    tabName: 'Manufacturing',
    title: 'Manufacturing',
    desc: 'Modernize production, inventory, quality control, and operational workflows with intelligent software that improves visibility and efficiency across the factory floor.',
    challenges: [
      'Lack of real-time production visibility',
      'Manual quality control processes',
      'Disconnected ERP and shop floor systems'
    ],
    solutions: [
      'Manufacturing Execution Systems',
      'Inventory Management',
      'Production Planning',
      'Quality Control',
      'Operational Dashboards'
    ],
    outcomes: [
      '30% reduction in downtime',
      'Improved inventory accuracy',
      'Real-time floor visibility'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" width="18" height="18">
        <rect x="3" y="13" width="4" height="7" />
        <rect x="10" y="8" width="4" height="12" />
        <rect x="17" y="4" width="4" height="16" />
      </svg>
    ),
    image: '/assets/img/industries/manufacturing.svg',
    btnText: 'Discuss Your Manufacturing Project →'
  },
  {
    id: 1,
    tabName: 'Healthcare & Pharma',
    title: 'Healthcare & Pharma',
    desc: 'Build secure, compliant solutions that streamline operations, automate document-intensive workflows, and improve decision-making across healthcare organizations and pharmaceutical businesses.',
    challenges: [
      'Document-heavy manual workflows',
      'Compliance and regulatory requirements',
      'Siloed patient and operational data'
    ],
    solutions: [
      'Healthcare Applications',
      'Pharma Operations',
      'Document Intelligence',
      'Compliance Workflows',
      'Data Automation'
    ],
    outcomes: [
      'Faster regulatory submissions',
      'Reduced manual documentation by 60%',
      'HIPAA-compliant architecture'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" width="18" height="18">
        <rect x="3" y="3" width="18" height="18" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
    image: '/assets/img/industries/healthcare.svg',
    btnText: 'Discuss Your Healthcare Project →'
  },
  {
    id: 2,
    tabName: 'Retail & Distribution',
    title: 'Retail & Distribution',
    desc: 'Connect inventory, sales, logistics, and customer operations through scalable platforms that support omnichannel growth and smarter business decisions.',
    challenges: [
      'Fragmented inventory across channels',
      'Poor supply chain visibility',
      'Disconnected customer data'
    ],
    solutions: [
      'Retail Platforms',
      'Supply Chain Visibility',
      'Order Management',
      'Inventory Intelligence',
      'Business Analytics'
    ],
    outcomes: [
      'Unified omnichannel inventory',
      'Faster order fulfilment',
      'Higher customer retention'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" width="18" height="18">
        <rect x="8" y="19" width="3" height="3" />
        <rect x="17" y="19" width="3" height="3" />
        <path d="M2 3h3.5l2.2 11.5h11.8L21 7H6" />
      </svg>
    ),
    image: '/assets/img/industries/retail.svg',
    btnText: 'Discuss Your Retail Project →'
  },
  {
    id: 3,
    tabName: 'Financial Services',
    title: 'Financial Services',
    desc: 'Develop secure, scalable applications that simplify financial operations, automate workflows, and strengthen data governance while maintaining compliance.',
    challenges: [
      'Manual reporting and reconciliation',
      'Regulatory compliance complexity',
      'Legacy system integration gaps'
    ],
    solutions: [
      'Financial Workflows',
      'Secure Portals',
      'Reporting Automation',
      'Document Processing',
      'Analytics & Audit Trails'
    ],
    outcomes: [
      '90% faster report generation',
      'Audit-ready data pipelines',
      'Reduced compliance risk'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" width="18" height="18">
        <rect x="3" y="4" width="18" height="16" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <rect x="7" y="13" width="3" height="3" />
      </svg>
    ),
    image: '/assets/img/industries/finance.svg',
    btnText: 'Discuss Your Financial Services Project →'
  },
  {
    id: 4,
    tabName: 'Logistics & Supply Chain',
    title: 'Logistics & Supply Chain',
    desc: 'Optimize transportation, warehouse operations, and supply chain visibility with software that improves coordination and operational efficiency.',
    challenges: [
      'Limited real-time shipment visibility',
      'Inefficient route and resource planning',
      'Manual warehouse coordination'
    ],
    solutions: [
      'Fleet Management',
      'Warehouse Solutions',
      'Shipment Tracking',
      'Route Optimization',
      'Logistics Analytics'
    ],
    outcomes: [
      '20% reduction in logistics costs',
      'Real-time delivery visibility',
      'Improved warehouse throughput'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" width="18" height="18">
        <rect x="2" y="7" width="13" height="9" />
        <path d="M15 10h4l3 3v3h-7v-6z" />
        <rect x="5" y="17" width="3" height="3" />
        <rect x="17" y="17" width="3" height="3" />
      </svg>
    ),
    image: '/assets/img/industries/logistics.svg',
    btnText: 'Discuss Your Logistics Project →'
  },
  {
    id: 5,
    tabName: 'Enterprise SaaS',
    title: 'Enterprise SaaS',
    desc: 'Partner with startups and enterprises to design, develop, and scale modern SaaS products from MVP to enterprise-grade platforms built for growth.',
    challenges: [
      'Scaling beyond MVP without technical debt',
      'Multi-tenant architecture complexity',
      'Subscription and billing infrastructure'
    ],
    solutions: [
      'SaaS Platforms',
      'Multi-Tenant Architecture',
      'Subscription Systems',
      'API Ecosystems',
      'Cloud Infrastructure'
    ],
    outcomes: [
      'Faster time-to-market',
      '99.9% uptime SLAs',
      'Scalable from 10 to 10,000 users'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" width="18" height="18">
        <path d="M18.178 8c5.096 0 5.096 8 0 8-2.548 0-3.822-4-5.096-4-1.274 0-2.548 4-5.096 4-5.096 0-5.096-8 0-8 2.548 0 3.822 4 5.096 4 1.274 0 2.548-4 5.096-4z" />
      </svg>
    ),
    image: '/assets/img/industries/saas.svg',
    btnText: 'Discuss Your Enterprise SaaS Project →'
  }
];

const AUTOPLAY_DURATION = 10000; // 10 seconds auto-advance
const MANUAL_DURATION = 30000; // 30 seconds manual hold

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState(4); // Defaults to Logistics & Supply Chain as shown in reference
  const [isManual, setIsManual] = useState(false);
  const [manualCount, setManualCount] = useState(0);

  const timerRef = useRef(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    clearTimer();
    const duration = isManual ? MANUAL_DURATION : AUTOPLAY_DURATION;

    timerRef.current = setTimeout(() => {
      setIsManual(false);
      setActiveTab((prev) => (prev + 1) % industries.length);
    }, duration);

    return () => clearTimer();
  }, [activeTab, isManual, manualCount, clearTimer]);

  const handleManualSelect = useCallback(
    (index) => {
      clearTimer();
      setActiveTab(index);
      setIsManual(true);
      setManualCount((c) => c + 1);
    },
    [clearTimer]
  );

  const prev = () => handleManualSelect((activeTab - 1 + industries.length) % industries.length);
  const next = () => handleManualSelect((activeTab + 1) % industries.length);

  const cur = industries[activeTab];
  const barDur = isManual ? '30s' : '10s';

  return (
    <section className="sec" id="industries" aria-labelledby="h-ind">
      <div className="wrap">
        {/* Split Section Header */}
        <div className="ind-header-split">
          <div className="ind-header-left">
            <div className="ind-badge">
              <span aria-hidden="true">—</span>
              <span>INDUSTRIES WE TRANSFORM</span>
            </div>
            <h2 id="h-ind" className="ind-title">
              Built for the Way Your<br />Industry Operates.
            </h2>
          </div>
          <p className="ind-lead">
            Every industry has its own workflows, regulations, and operational challenges. We
            combine engineering expertise with domain knowledge to build software that fits the
            way your business works not the other way around.
          </p>
        </div>

        {/* Horizontal Square Tab Strip */}
        <div className="ind-tab-strip" role="tablist" aria-label="Industries">
          {industries.map((ind, i) => {
            const isSelected = activeTab === i;
            return (
              <button
                key={ind.id}
                role="tab"
                id={`ti-${ind.id}`}
                aria-controls={`pi-${ind.id}`}
                aria-selected={isSelected}
                className={`ind-pill-tab ${isSelected ? 'active' : ''}`}
                onClick={() => handleManualSelect(i)}
              >
                <span className="tab-icon" aria-hidden="true">
                  {ind.icon}
                </span>
                <span>{ind.tabName}</span>
                {isSelected && (
                  <span
                    className="ind-tab-track"
                    key={`track-${activeTab}-${isManual ? 'man' : 'auto'}-${manualCount}`}
                    aria-hidden="true"
                  >
                    <span
                      className="ind-tab-bar"
                      style={{ '--dur': barDur }}
                    />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* 2-Card Split Layout: Content Box (Left) + Graphic Showcase Box (Right) */}
        <div
          role="tabpanel"
          id={`pi-${cur.id}`}
          aria-labelledby={`ti-${cur.id}`}
          key={activeTab}
          className="ind-content-grid"
        >
          {/* Left Main Card (Contains 2 sub-columns) */}
          <div className="ind-main-card">
            <div className="ind-inner-cols">
              {/* Subcolumn 1: Focus, Description, Key Challenges, Prev/Next */}
              <div className="ind-subcol-1">
                <div className="ind-focus-header">
                  <div className="ind-focus-icon-box" aria-hidden="true">
                    {cur.icon}
                  </div>
                  <div className="ind-focus-titles">
                    <span className="ind-focus-label">INDUSTRY FOCUS</span>
                    <h3 className="ind-focus-heading">{cur.title}</h3>
                  </div>
                </div>

                <p className="ind-focus-desc">{cur.desc}</p>

                <h4 className="ind-col-header">KEY CHALLENGES</h4>
                <ul className="ind-challenges-list">
                  {cur.challenges.map((c, idx) => (
                    <li key={idx} className="ind-challenge-box">
                      <span className="ind-bullet-square" aria-hidden="true" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                <div className="ind-subcol-nav">
                  <button
                    type="button"
                    className="ind-nav-btn"
                    onClick={prev}
                    aria-label="Previous industry"
                  >
                    ‹ Prev
                  </button>
                  <span className="ind-timer-badge" title="Auto-advance rotation timer">
                    <span className="ind-timer-pulse" aria-hidden="true" />
                    <span>{isManual ? '30s hold' : '10s auto'}</span>
                  </span>
                  <button
                    type="button"
                    className="ind-nav-btn"
                    onClick={next}
                    aria-label="Next industry"
                  >
                    Next ›
                  </button>
                </div>
              </div>

              {/* Subcolumn 2: Solutions We Build, Outcomes, CTA Button */}
              <div className="ind-subcol-2">
                <h4 className="ind-col-header">SOLUTIONS WE BUILD</h4>
                <div className="ind-solutions-grid">
                  {cur.solutions.map((s, idx) => (
                    <div key={idx} className="ind-solution-chip">
                      <span className="ind-check-mark" aria-hidden="true">
                        ✓
                      </span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>

                <h4 className="ind-col-header">BUSINESS OUTCOMES</h4>
                <ul className="ind-outcomes-list">
                  {cur.outcomes.map((o, idx) => (
                    <li key={idx} className="ind-outcome-row">
                      <span className="ind-outcome-num-box">{`0${idx + 1}`}</span>
                      <span className="ind-outcome-text">{o}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="ind-cta-btn">
                  <span>{cur.btnText}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Graphic Showcase Card */}
          <div className="ind-graphic-card">
            <div className="ind-graphic-inner">
              <img
                src={cur.image}
                alt={`${cur.title} visual dashboard preview`}
                className="ind-graphic-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
