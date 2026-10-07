import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/products-section.css';

const products = [
  {
    id: 0,
    num: '01',
    tabName: 'Ariva',
    tabSub: 'AI-Powered · Document Intelligence',
    badge: 'AI-POWERED · DOCUMENT INTELLIGENCE',
    title: 'Ariva',
    tagline: 'Documents to Decisions.',
    desc: 'Transform unstructured business documents into validated, structured, and actionable data using AI-powered document intelligence.',
    capabilities: [
      { text: 'Intelligent Document Processing', icon: 'doc' },
      { text: 'AI-Powered Data Extraction', icon: 'cpu' },
      { text: 'Business Rule Validation', icon: 'clock' },
      { text: 'ERP & CRM Integration', icon: 'network' },
      { text: 'Workflow Automation', icon: 'workflow' },
      { text: 'Operational Intelligence', icon: 'chart' }
    ],
    impact: 'Reduce manual effort, improve data accuracy, accelerate decision-making, and gain real-time visibility across business operations.',
    btnText: 'Explore Ariva',
    mockHeader: { title: 'Document Pipeline', badge: 'LIVE', badgeType: 'blue' },
    mockType: 'progress',
    mockRows: [
      { label: 'Invoice_Q4_2024.pdf', status: 'Extracted', statusClass: 'st-ok', barClass: 'bar-green', pct: 100 },
      { label: 'PO_Batch_March.xlsx', status: 'Validating', statusClass: 'st-blue', barClass: 'bar-blue', pct: 72 },
      { label: 'Contract_Renewal.docx', status: 'Processing', statusClass: 'st-blue', barClass: 'bar-blue', pct: 45 },
      { label: 'GRN_Report_Feb.pdf', status: 'Queued', statusClass: 'st-mu', barClass: 'bar-muted', pct: 12 }
    ],
    mockStats: [
      { val: '94.8%', lbl: 'ACCURACY' },
      { val: '2.3s', lbl: 'AVG TIME' },
      { val: '1,240', lbl: 'PROCESSED' }
    ]
  },
  {
    id: 1,
    num: '02',
    tabName: 'EETi',
    tabSub: 'Enterprise · Engineering Platform',
    badge: 'ENTERPRISE · ENGINEERING PLATFORM',
    title: 'EETi',
    tagline: 'Engineering Operations, Unified.',
    desc: 'A modern engineering platform designed to streamline enterprise operations, improve collaboration, and support scalable digital transformation initiatives.',
    capabilities: [
      { text: 'Project Management', icon: 'kanban' },
      { text: 'Real-Time Collaboration', icon: 'users' },
      { text: 'CI/CD Integration', icon: 'cycle' },
      { text: 'Analytics & Reporting', icon: 'chart' }
    ],
    impact: 'Faster delivery cycles, better cross-team visibility, reduced operational overhead, and a platform that grows with your business.',
    btnText: 'Learn More',
    mockHeader: { title: 'Sprint Overview', badge: 'Q3 SPRINT 4', badgeType: 'blue' },
    mockType: 'progress',
    mockRows: [
      { label: 'API Gateway Upgrade', status: 'Backend', statusClass: 'st-mu', barClass: 'bar-green', pct: 88 },
      { label: 'UI Component Library', status: 'Frontend', statusClass: 'st-mu', barClass: 'bar-blue', pct: 65 },
      { label: 'Load Testing Suite', status: 'QA', statusClass: 'st-mu', barClass: 'bar-blue', pct: 42 },
      { label: 'Security Audit', status: 'DevOps', statusClass: 'st-mu', barClass: 'bar-muted', pct: 20 }
    ],
    mockStats: [
      { val: '12', lbl: 'ACTIVE TASKS' },
      { val: '3', lbl: 'IN REVIEW' },
      { val: '94%', lbl: 'ON TRACK' }
    ]
  },
  {
    id: 2,
    num: '03',
    tabName: 'MediGuard',
    tabSub: 'Healthcare · Medication Safety',
    badge: 'HEALTHCARE · MEDICATION SAFETY',
    title: 'MediGuard',
    tagline: 'Safer OTC Decisions at the Point of Purchase.',
    desc: 'An interactive pharmacy-based medication safety platform that helps customers make informed over-the-counter decisions while strengthening pharmacist engagement and clinical oversight all without collecting sensitive personal data.',
    capabilities: [
      { text: 'Medication Safety Screening', icon: 'cross' },
      { text: 'Duplicate Therapy Detection', icon: 'layers' },
      { text: 'Drug-to-Drug Interaction Review', icon: 'atom' },
      { text: 'Beers Criteria Senior Safety', icon: 'shield' },
      { text: 'Privacy-First · No PHI Required', icon: 'lock' }
    ],
    impact: 'Reduce medication errors, increase consumer confidence, and give pharmacies a technology-enabled safety service that differentiates their practice.',
    btnText: 'Learn About MediGuard',
    mockHeader: { title: 'Medication Review', badge: 'KIOSK ACTIVE', badgeType: 'green' },
    mockType: 'reviews',
    mockReviews: [
      { title: 'Duplicate Therapy', status: '⚠ Found', tagClass: 'tag-warn', sub: '2 products with Acetaminophen detected', pct: 100, barClass: 'bar-amber' },
      { title: 'Drug Interactions', status: '✓ Clear', tagClass: 'tag-green', sub: 'No interactions identified', pct: 100, barClass: 'bar-green' },
      { title: 'Beers Criteria', status: '⚠ Review', tagClass: 'tag-warn', sub: 'Senior safety flag raised', pct: 85, barClass: 'bar-amber' },
      { title: 'Consumer Report', status: '✓ Ready', tagClass: 'tag-green', sub: 'Summary generated for customer', pct: 100, barClass: 'bar-green' }
    ],
    mockStats: [
      { val: 'OTC', lbl: 'FOCUSED' },
      { val: '0 PHI', lbl: 'COLLECTED' },
      { val: 'FDA', lbl: 'ALIGNED' }
    ]
  },
  {
    id: 3,
    num: '04',
    tabName: 'FinReview AI',
    tabSub: 'Audit · Financial Intelligence',
    badge: 'AUDIT · FINANCIAL INTELLIGENCE',
    title: 'FinReview AI',
    tagline: 'Hours of Review. Minutes of Verification.',
    desc: 'An automated financial statement verification platform that performs every mechanical audit check instantly mathematical accuracy, prior year consistency, note-to-statement agreement, going concern signals, and audit report review against ISA standards.',
    capabilities: [
      { text: 'Mathematical Accuracy Verification', icon: 'math' },
      { text: 'Prior Year Consistency Review', icon: 'clock' },
      { text: 'Note-to-Statement Agreement', icon: 'doc' },
      { text: 'Audit Report Review (ISA)', icon: 'check' },
      { text: 'Going Concern Indicators', icon: 'alert' },
      { text: 'Evidence Trail & Audit Documentation', icon: 'search' }
    ],
    impact: 'Audit teams receive a structured, evidence-backed findings report in minutes freeing expert time for professional judgment rather than arithmetic.',
    btnText: 'Explore FinReview AI',
    mockHeader: { title: 'Statement Verification', badge: 'AUTO REVIEW', badgeType: 'blue' },
    mockType: 'reviews',
    mockReviews: [
      { title: 'Mathematical Accuracy', status: '✓ Pass', tagClass: 'tag-green', sub: '248 totals verified all correct', pct: 100, barClass: 'bar-green' },
      { title: 'Note-to-Statement', status: '✓ Pass', tagClass: 'tag-green', sub: 'All note values reconciled', pct: 100, barClass: 'bar-green' },
      { title: 'Going Concern', status: '⚠ Signals', tagClass: 'tag-warn', sub: 'Negative equity detected', pct: 92, barClass: 'bar-blue' }
    ],
    mockStats: [
      { val: '<3min', lbl: 'PER REPORT' },
      { val: '100%', lbl: 'COVERAGE' },
      { val: 'ISA', lbl: 'ALIGNED' }
    ]
  },
  {
    id: 4,
    num: '05',
    tabName: 'Custom AI & Enterprise',
    tabSub: 'Tailored · Solutions',
    badge: 'TAILORED · SOLUTIONS',
    title: 'Custom AI & Enterprise',
    tagline: 'Built Around Your Business.',
    desc: 'Every business is different. We design and build tailored AI solutions and enterprise platforms that solve unique operational challenges and integrate seamlessly with existing systems.',
    capabilities: [
      { text: 'AI Agents', icon: 'star' },
      { text: 'Workflow Automation', icon: 'star' },
      { text: 'SaaS Platforms', icon: 'star' },
      { text: 'Enterprise Portals', icon: 'star' },
      { text: 'Business Intelligence Dashboards', icon: 'star' },
      { text: 'Custom Integrations', icon: 'star' }
    ],
    impact: 'Purpose-built technology that fits your workflows, scales with your needs, and creates measurable value from day one.',
    btnText: 'Discuss Your Project',
    mockHeader: { title: 'Solutions Pipeline', badge: 'CUSTOM', badgeType: 'blue' },
    mockType: 'progress',
    mockRows: [
      { label: 'Autonomous AI Agents', status: 'Active', statusClass: 'st-ok', barClass: 'bar-green', pct: 98 },
      { label: 'Workflow Engine Automation', status: 'Live', statusClass: 'st-ok', barClass: 'bar-green', pct: 94 },
      { label: 'Enterprise Portals & SaaS', status: 'Deployed', statusClass: 'st-blue', barClass: 'bar-blue', pct: 88 },
      { label: 'Custom BI & ERP Bridges', status: 'Integrated', statusClass: 'st-blue', barClass: 'bar-blue', pct: 82 }
    ],
    mockStats: [
      { val: '100%', lbl: 'CUSTOM-BUILT' },
      { val: '6+', lbl: 'VERTICALS' },
      { val: '∞', lbl: 'SCALE' }
    ]
  }
];

function CapabilityIcon({ type }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };

  switch (type) {
    case 'star':
      return (
        <svg {...common}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case 'doc':
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
    case 'cpu':
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case 'network':
      return (
        <svg {...common}>
          <rect x="2" y="2" width="6" height="6" rx="1" />
          <rect x="16" y="2" width="6" height="6" rx="1" />
          <rect x="9" y="16" width="6" height="6" rx="1" />
          <path d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
          <line x1="12" y1="13" x2="12" y2="16" />
        </svg>
      );
    case 'workflow':
      return (
        <svg {...common}>
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
      );
    case 'chart':
      return (
        <svg {...common}>
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case 'kanban':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="9" />
          <rect x="14" y="3" width="7" height="5" />
          <rect x="14" y="12" width="7" height="9" />
          <rect x="3" y="16" width="7" height="5" />
        </svg>
      );
    case 'users':
      return (
        <svg {...common}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'cycle':
      return (
        <svg {...common}>
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
        </svg>
      );
    case 'cross':
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <line x1="12" y1="8" x2="12" y2="14" />
          <line x1="9" y1="11" x2="15" y2="11" />
        </svg>
      );
    case 'layers':
      return (
        <svg {...common}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'atom':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'lock':
      return (
        <svg {...common}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case 'math':
      return (
        <svg {...common}>
          <path d="M4 19l4-14 4 14" />
          <line x1="5" y1="14" x2="11" y2="14" />
          <line x1="15" y1="9" x2="21" y2="9" />
          <line x1="15" y1="15" x2="21" y2="15" />
        </svg>
      );
    case 'check':
      return (
        <svg {...common}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <polyline points="9 14 11 16 15 12" />
        </svg>
      );
    case 'alert':
      return (
        <svg {...common}>
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    case 'search':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
  }
}

const AUTOPLAY_DURATION = 10000; // 10 seconds auto-advance
const MANUAL_HOLD_DURATION = 30000; // 30 seconds manual hold

function AnimatedProgressBar({ pct, barClass, delay = 0, triggerKey }) {
  const [currentPct, setCurrentPct] = useState(0);

  useEffect(() => {
    setCurrentPct(0);
    const timeout = setTimeout(() => {
      const duration = 2200; // Slower, smoother bar fill
      const startTime = performance.now();
      let animId;

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const ease = 1 - Math.pow(1 - progress, 3);
        const val = Math.min(pct, Math.round(pct * ease));
        setCurrentPct(val);

        if (progress < 1) {
          animId = requestAnimationFrame(step);
        } else {
          setCurrentPct(pct);
        }
      };

      animId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animId);
    }, delay);

    return () => clearTimeout(timeout);
  }, [pct, delay, triggerKey]);

  return (
    <div className="prod-pipe-bar-row">
      <div className="prod-pipe-bar">
        <div
          className={`prod-pipe-fill ${barClass}`}
          style={{ width: `${currentPct}%` }}
        >
          <span className="prod-pipe-shimmer" />
        </div>
      </div>
      <span className="prod-pipe-pct-val">{currentPct}%</span>
    </div>
  );
}

function AnimatedStatValue({ value, triggerKey }) {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const valStr = String(value).trim();
    const match = valStr.match(/^([<>]?)\s*([\d,.]+)\s*(.*)$/);

    if (match) {
      const prefix = match[1] || '';
      const numClean = match[2].replace(/,/g, '');
      const suffix = match[3] || '';
      const target = parseFloat(numClean);

      if (!isNaN(target)) {
        const hasComma = match[2].includes(',');
        const decimals = match[2].includes('.') ? (match[2].split('.')[1] || '').length : 0;
        const duration = 2200; // Slower, readable count animation
        const startTime = performance.now();
        let animId;

        const update = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(1, elapsed / duration);
          const ease = 1 - Math.pow(1 - progress, 3);
          const current = target * ease;

          let numFormatted;
          if (decimals > 0) {
            numFormatted = current.toFixed(decimals);
          } else {
            numFormatted = Math.round(current).toString();
          }

          if (hasComma) {
            const parts = numFormatted.split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            numFormatted = parts.join('.');
          }

          setDisplay(`${prefix}${numFormatted}${suffix}`);

          if (progress < 1) {
            animId = requestAnimationFrame(update);
          } else {
            setDisplay(valStr);
          }
        };

        setDisplay(`${prefix}0${suffix}`);
        animId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animId);
      }
    }

    // High-tech matrix scramble for text tokens (OTC, FDA, ISA, ∞)
    const chars = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    const targetStr = valStr;
    const duration = 800; // Slightly slower scramble
    const startTime = performance.now();
    let animId;

    const scramble = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);

      if (progress < 1) {
        const scrambled = targetStr
          .split('')
          .map((ch, idx) => {
            if (idx / targetStr.length < progress) return ch;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
        setDisplay(scrambled);
        animId = requestAnimationFrame(scramble);
      } else {
        setDisplay(targetStr);
      }
    };

    animId = requestAnimationFrame(scramble);
    return () => cancelAnimationFrame(animId);
  }, [value, triggerKey]);

  return <span className="prod-stat-value">{display}</span>;
}

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState(0);
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

    const duration = isManual ? MANUAL_HOLD_DURATION : AUTOPLAY_DURATION;

    timerRef.current = setTimeout(() => {
      // Advance to next product and resume normal 10s auto-rotation
      setIsManual(false);
      setActiveTab((prev) => (prev + 1) % products.length);
      setManualCount((c) => c + 1);
    }, duration);

    return () => clearTimer();
  }, [activeTab, isManual, manualCount, clearTimer]);

  const handleManualSelect = useCallback((index) => {
    clearTimer();
    setActiveTab(index);
    setIsManual(true);
    setManualCount((c) => c + 1);
  }, [clearTimer]);

  const handlePrev = useCallback(() => {
    clearTimer();
    setActiveTab((prev) => (prev - 1 + products.length) % products.length);
    setIsManual(true);
    setManualCount((c) => c + 1);
  }, [clearTimer]);

  const handleNext = useCallback(() => {
    clearTimer();
    setActiveTab((prev) => (prev + 1) % products.length);
    setIsManual(true);
    setManualCount((c) => c + 1);
  }, [clearTimer]);

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      handleManualSelect((index + 1) % products.length);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      handleManualSelect((index - 1 + products.length) % products.length);
    }
  };

  const cur = products[activeTab];
  const barDur = isManual ? '30s' : '10s';

  return (
    <section
      className="sec prod-showcase-section"
      id="products"
      aria-labelledby="products-title"
    >
      <div className="wrap">
        {/* Section Header */}
        <div className="prod-section-header">
          <div className="prod-eyebrow-row">
            <span className="prod-accent-dash" aria-hidden="true" />
            <span className="prod-eyebrow-text">Products & Platforms</span>
          </div>
          <h2 className="prod-main-heading" id="products-title">
            Products Built to Solve Real Business Challenges.
          </h2>
        </div>

        {/* 3-Column Showcase Grid */}
        <div className="prod-showcase-grid">
          {/* Column 1: Tabs Navigation */}
          <div className="prod-sidebar" role="tablist" aria-label="Products and platforms navigation">
            <div className="prod-tab-list">
              {products.map((p, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={p.id}
                    role="tab"
                    id={`prod-tab-${p.id}`}
                    aria-selected={isActive}
                    aria-controls={`prod-panel-${p.id}`}
                    tabIndex={isActive ? 0 : -1}
                    className={`prod-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleManualSelect(idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                  >
                    <div className="prod-tab-left">
                      <span className="prod-tab-num">{p.num}</span>
                      <span className="prod-tab-title">{p.tabName}</span>
                      {isActive && <span className="prod-tab-sub">{p.tabSub}</span>}
                    </div>
                    {isActive && (
                      <span className="prod-tab-chevron" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                    )}
                    {isActive && (
                      <span className="prod-tab-track" aria-hidden="true">
                        <span
                          className="prod-tab-progress"
                          key={`prod-bar-${activeTab}-${isManual ? 'man' : 'auto'}-${manualCount}`}
                          style={{ '--dur': barDur }}
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Arrow Controls */}
            <div className="prod-arrow-controls">
              <button
                type="button"
                className="prod-arrow-btn"
                aria-label="Previous product"
                onClick={handlePrev}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
              </button>
              <span className="prod-timer-badge" title="Auto-advance rotation timer">
                <span className="prod-timer-pulse" aria-hidden="true" />
                <span>{isManual ? '30s hold' : '10s auto'}</span>
              </span>
              <button
                type="button"
                className="prod-arrow-btn"
                aria-label="Next product"
                onClick={handleNext}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="prod-dots-row" aria-label="Product indicators">
              {products.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  aria-label={`Jump to ${p.tabName}`}
                  aria-current={activeTab === idx ? 'true' : undefined}
                  className={`prod-dot-btn ${activeTab === idx ? 'active' : ''}`}
                  onClick={() => handleManualSelect(idx)}
                />
              ))}
            </div>
          </div>

          {/* Column 2: Center Details Panel */}
          <div
            key={`detail-${cur.id}`}
            role="tabpanel"
            id={`prod-panel-${cur.id}`}
            aria-labelledby={`prod-tab-${cur.id}`}
            className="prod-details-panel"
          >
            <div className="prod-details-head">
              <div className="prod-pill-badge">{cur.badge}</div>
              <h3 className="prod-content-title">{cur.title}</h3>
              <p className="prod-content-tagline">{cur.tagline}</p>
              <p className="prod-content-desc">{cur.desc}</p>
            </div>

            <div className="prod-caps-wrap">
              <ul className="prod-caps-grid">
                {cur.capabilities.map((c, i) => (
                  <li key={i} className="prod-cap-item">
                    <span className="prod-cap-icon" aria-hidden="true">
                      <CapabilityIcon type={c.icon} />
                    </span>
                    <span className="prod-cap-text">{c.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="prod-impact-callout">
              <strong>Impact:</strong> {cur.impact}
            </div>

            <div className="prod-details-action">
              <a className="prod-cta-button" href="#contact">
                <span>{cur.btnText}</span>
                <span className="prod-cta-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Column 3: Interactive Mock Preview Card */}
          <div
            key={`mock-${cur.id}-${manualCount}`}
            className="prod-mock-card"
            aria-hidden="true"
          >
            {/* Header */}
            <div className="prod-mock-top">
              <h4 className="prod-mock-title">{cur.mockHeader.title}</h4>
              <span className={`prod-mock-badge badge-${cur.mockHeader.badgeType}`}>
                <span className="prod-live-pulse-dot" aria-hidden="true" />
                {cur.mockHeader.badge}
              </span>
            </div>

            {/* Body */}
            <div className="prod-mock-body">
              {/* Progress rows for Ariva, EETi & Custom AI */}
              {cur.mockType === 'progress' &&
                cur.mockRows.map((r, i) => (
                  <div key={i} className="prod-pipe-item">
                    <div className="prod-pipe-top">
                      <span className="prod-pipe-label">{r.label}</span>
                      <span className={`prod-pipe-status ${r.statusClass}`}>{r.status}</span>
                    </div>
                    <AnimatedProgressBar
                      pct={r.pct}
                      barClass={r.barClass}
                      delay={i * 150}
                      triggerKey={`${cur.id}-${manualCount}`}
                    />
                  </div>
                ))}

              {/* Review cards for MediGuard & FinReview AI */}
              {cur.mockType === 'reviews' &&
                cur.mockReviews.map((r, i) => (
                  <div key={i} className="prod-review-box">
                    <div className="prod-review-row">
                      <span>{r.title}</span>
                      <span className={`prod-tag-badge ${r.tagClass}`}>{r.status}</span>
                    </div>
                    <span className="prod-review-sub">{r.sub}</span>
                    <AnimatedProgressBar
                      pct={r.pct || 100}
                      barClass={r.barClass || 'bar-green'}
                      delay={i * 150}
                      triggerKey={`${cur.id}-${manualCount}`}
                    />
                  </div>
                ))}
            </div>

            {/* Footer Stats with Animated Number Counts */}
            <div className="prod-mock-stats">
              {cur.mockStats.map((s, i) => (
                <div key={i} className="prod-stat-cell">
                  <AnimatedStatValue
                    value={s.val}
                    triggerKey={`${cur.id}-${manualCount}`}
                  />
                  <span className="prod-stat-label">{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
