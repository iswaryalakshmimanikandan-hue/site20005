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
      <svg viewBox="0 0 440 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="hwb-schematic-svg">
        {/* Step 01: Discover & Strategic Roadmap */}
        {/* Card 1: 01 / AUDIT */}
        <g transform="translate(16, 14)">
          <rect x="0" y="0" width="118" height="144" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <rect x="0" y="0" width="118" height="24" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <circle cx="12" cy="12" r="3" fill="#10B981" className="hwb-anim-pulse" />
          <text x="20" y="15.5" fill="var(--hwb-border-primary)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif" letterSpacing="0.04em">01 / AUDIT</text>

          {/* Radar Scanner Graphic */}
          <g transform="translate(59, 58)">
            <circle cx="0" cy="0" r="18" stroke="var(--hwb-border-primary)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.45" />
            <circle cx="0" cy="0" r="10" stroke="var(--hwb-border-primary)" strokeWidth="0.8" opacity="0.7" />
            <line x1="-22" y1="0" x2="22" y2="0" stroke="var(--hwb-border-subtle)" strokeWidth="0.8" />
            <line x1="0" y1="-22" x2="0" y2="22" stroke="var(--hwb-border-subtle)" strokeWidth="0.8" />
            <circle cx="7" cy="-6" r="3" fill="#10B981" />
            <circle cx="7" cy="-6" r="3" stroke="#10B981" strokeWidth="1" fill="none" className="hwb-anim-ping" />
          </g>

          <text x="59" y="94" textAnchor="middle" fill="var(--hwb-text-head)" fontSize="11" fontWeight="800" fontFamily="Carlito, sans-serif">Tech &amp; User Audit</text>
          <text x="59" y="108" textAnchor="middle" fill="var(--hwb-text-sub)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">Stack Evaluated</text>

          <rect x="10" y="118" width="98" height="18" fill="var(--hwb-pill-green-bg)" stroke="#10B981" strokeWidth="0.8" />
          <text x="59" y="130.5" textAnchor="middle" fill="var(--hwb-pill-green-text)" fontSize="8" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">✓ Scope Mapped</text>
        </g>

        {/* Connector 1 -> 2 */}
        <line x1="134" y1="84" x2="155" y2="84" stroke="var(--hwb-border-primary)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="155,81 161,84 155,87" fill="var(--hwb-border-primary)" />
        <circle cx="134" cy="84" r="2.5" fill="#F09018" className="hwb-anim-packet-x1" />

        {/* Card 2: 02 / STRATEGY */}
        <g transform="translate(161, 14)">
          <rect x="0" y="0" width="118" height="144" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <rect x="0" y="0" width="118" height="24" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <circle cx="12" cy="12" r="3" fill="#365CAD" className="hwb-anim-pulse" />
          <text x="20" y="15.5" fill="var(--hwb-border-primary)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif" letterSpacing="0.04em">02 / STRATEGY</text>

          {/* Architecture Blueprint Graphic */}
          <g transform="translate(59, 58)">
            <line x1="-22" y1="0" x2="22" y2="0" stroke="var(--hwb-border-subtle)" strokeWidth="1.2" />
            <circle cx="-20" cy="0" r="6" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1" />
            <rect x="-9" y="-9" width="18" height="18" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="3" fill="#365CAD" className="hwb-anim-pulse" />
            <circle cx="20" cy="0" r="6" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1" />
          </g>

          <text x="59" y="94" textAnchor="middle" fill="var(--hwb-text-head)" fontSize="11" fontWeight="800" fontFamily="Carlito, sans-serif">Solution Target</text>
          <text x="59" y="108" textAnchor="middle" fill="var(--hwb-text-sub)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">Architecture Arc</text>

          <rect x="10" y="118" width="98" height="18" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="0.8" />
          <text x="59" y="130.5" textAnchor="middle" fill="var(--hwb-border-primary)" fontSize="8" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">✓ Feasibility Pass</text>
        </g>

        {/* Connector 2 -> 3 */}
        <line x1="279" y1="84" x2="300" y2="84" stroke="var(--hwb-border-primary)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="300,81 306,84 300,87" fill="var(--hwb-border-primary)" />
        <circle cx="279" cy="84" r="2.5" fill="#10B981" className="hwb-anim-packet-x1" />

        {/* Card 3: 03 / ROADMAP */}
        <g transform="translate(306, 14)">
          <rect x="0" y="0" width="118" height="144" fill="var(--hwb-panel-bg)" stroke="#F09018" strokeWidth="1.3" />
          <rect x="0" y="0" width="118" height="24" fill="#FFF7ED" stroke="#F09018" strokeWidth="1.3" />
          <circle cx="12" cy="12" r="3" fill="#F09018" className="hwb-anim-pulse" />
          <text x="20" y="15.5" fill="#C2410C" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif" letterSpacing="0.04em">03 / ROADMAP</text>

          {/* Timeline Nodes Graphic */}
          <g transform="translate(59, 58)">
            <line x1="-24" y1="0" x2="24" y2="0" stroke="var(--hwb-border-subtle)" strokeWidth="1.5" />
            <circle cx="-20" cy="0" r="4.5" fill="#10B981" />
            <circle cx="0" cy="0" r="5" fill="#F09018" />
            <circle cx="0" cy="0" r="5" stroke="#F09018" strokeWidth="1" fill="none" className="hwb-anim-ping" />
            <circle cx="20" cy="0" r="4.5" fill="var(--hwb-border-primary)" />
          </g>

          <text x="59" y="94" textAnchor="middle" fill="var(--hwb-text-head)" fontSize="11" fontWeight="800" fontFamily="Carlito, sans-serif">Sprint 0 Plan</text>
          <text x="59" y="108" textAnchor="middle" fill="var(--hwb-text-sub)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">Prioritized Backlog</text>

          <rect x="10" y="118" width="98" height="18" fill="var(--hwb-pill-orange-bg)" stroke="#F09018" strokeWidth="0.8" />
          <text x="59" y="130.5" textAnchor="middle" fill="var(--hwb-pill-orange-text)" fontSize="8" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">✓ Ready to Build</text>
        </g>

        {/* Bottom Full-Width Alignment Banner */}
        <g transform="translate(16, 172)">
          <rect x="0" y="0" width="408" height="34" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <circle cx="16" cy="17" r="3.5" fill="#10B981" className="hwb-anim-pulse" />
          <text x="28" y="20.5" fill="var(--hwb-text-head)" fontSize="9" fontWeight="800" fontFamily="Carlito, sans-serif" letterSpacing="0.03em">STRATEGIC ROADMAP: 100% ALIGNED &amp; SCOPED</text>
          <rect x="306" y="7" width="92" height="20" fill="#10B981" />
          <text x="352" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">APPROVED ✓</text>
        </g>
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
      <svg viewBox="0 0 440 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="hwb-schematic-svg">
        {/* Step 02: Design & Architecture System */}
        {/* Left Column: 01 / UI DESIGN */}
        <g transform="translate(16, 14)">
          <rect x="0" y="0" width="118" height="144" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <rect x="0" y="0" width="118" height="24" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <circle cx="8" cy="12" r="2" fill="#EF4444" />
          <circle cx="14" cy="12" r="2" fill="#F59E0B" />
          <circle cx="20" cy="12" r="2" fill="#10B981" />
          <text x="28" y="15.5" fill="var(--hwb-border-primary)" fontSize="8" fontWeight="800" fontFamily="Carlito, sans-serif" letterSpacing="0.03em">UI WIREFRAME</text>

          {/* Wireframe Mockup */}
          <rect x="10" y="32" width="98" height="6" fill="var(--hwb-border-primary)" opacity="0.5" className="hwb-anim-shimmer" />
          <rect x="10" y="44" width="98" height="24" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-subtle)" strokeWidth="0.8" />
          <rect x="16" y="50" width="46" height="4" fill="var(--hwb-border-primary)" opacity="0.8" />
          <rect x="16" y="58" width="68" height="3" fill="var(--hwb-border-subtle)" />

          {/* 2 Component Cards */}
          <rect x="10" y="74" width="46" height="36" fill="var(--hwb-panel-bg)" stroke="#F09018" strokeWidth="1" className="hwb-anim-breathing-stroke" />
          <line x1="16" y1="98" x2="48" y2="88" stroke="#F09018" strokeWidth="1.5" />
          <circle cx="48" cy="88" r="2" fill="#F09018" />

          <rect x="62" y="74" width="46" height="36" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-primary)" strokeWidth="0.9" />
          <rect x="68" y="80" width="30" height="3" fill="var(--hwb-border-primary)" opacity="0.6" />
          <rect x="68" y="87" width="34" height="3" fill="var(--hwb-border-subtle)" />
          <rect x="68" y="94" width="26" height="3" fill="var(--hwb-border-subtle)" />

          <rect x="10" y="118" width="98" height="18" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="0.8" />
          <text x="59" y="130.5" textAnchor="middle" fill="var(--hwb-border-primary)" fontSize="8" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">Design Tokens ✓</text>
        </g>

        {/* Connectors UI -> Gateway */}
        <line x1="134" y1="62" x2="155" y2="62" stroke="var(--hwb-border-primary)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="155,59 161,62 155,65" fill="var(--hwb-border-primary)" />
        <circle cx="134" cy="62" r="2.5" fill="#10B981" className="hwb-anim-packet-x1" />

        <line x1="134" y1="102" x2="155" y2="102" stroke="var(--hwb-border-primary)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="155,99 161,102 155,105" fill="var(--hwb-border-primary)" />
        <circle cx="134" cy="102" r="2.5" fill="#F09018" className="hwb-anim-packet-x1" />

        {/* Center Column: 02 / API GATEWAY */}
        <g transform="translate(161, 14)">
          <rect x="0" y="0" width="118" height="144" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <rect x="0" y="0" width="118" height="24" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <circle cx="12" cy="12" r="3" fill="var(--hwb-border-primary)" className="hwb-anim-pulse" />
          <text x="20" y="15.5" fill="var(--hwb-border-primary)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif" letterSpacing="0.04em">02 / GATEWAY</text>

          {/* Central Router Core */}
          <g transform="translate(59, 62)">
            <polygon points="0,-16 16,0 0,16 -16,0" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
            <circle cx="0" cy="0" r="22" stroke="var(--hwb-border-primary)" strokeWidth="0.8" strokeDasharray="3 3" className="hwb-anim-rotate-slow" fill="none" />
            <circle cx="0" cy="0" r="3.5" fill="var(--hwb-border-primary)" className="hwb-anim-pulse" />
          </g>

          <text x="59" y="94" textAnchor="middle" fill="var(--hwb-text-head)" fontSize="10.5" fontWeight="800" fontFamily="Carlito, sans-serif">Router Core</text>
          <text x="59" y="107" textAnchor="middle" fill="var(--hwb-text-sub)" fontSize="7.5" fontFamily="'IBM Plex Mono', monospace">GraphQL / REST</text>

          <rect x="10" y="118" width="98" height="18" fill="var(--hwb-pill-green-bg)" stroke="#10B981" strokeWidth="0.8" />
          <text x="59" y="130.5" textAnchor="middle" fill="var(--hwb-pill-green-text)" fontSize="8" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">P99 &lt; 1.2ms ✓</text>
        </g>

        {/* Connectors Gateway -> Backend */}
        <line x1="279" y1="56" x2="300" y2="56" stroke="var(--hwb-border-primary)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="300,53 306,56 300,59" fill="var(--hwb-border-primary)" />

        <line x1="279" y1="102" x2="300" y2="102" stroke="var(--hwb-border-primary)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="300,99 306,102 300,105" fill="var(--hwb-border-primary)" />

        {/* Right Column: 03 / SERVICES & DB */}
        <g transform="translate(306, 14)">
          <rect x="0" y="0" width="118" height="144" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <rect x="0" y="0" width="118" height="24" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <circle cx="12" cy="12" r="3" fill="#10B981" className="hwb-anim-pulse" />
          <text x="20" y="15.5" fill="var(--hwb-border-primary)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif" letterSpacing="0.04em">03 / SERVICES</text>

          {/* Microservice 1: Auth & AI */}
          <rect x="8" y="32" width="102" height="34" fill="var(--hwb-panel-bg)" stroke="#F09018" strokeWidth="1" />
          <circle cx="16" cy="44" r="2.5" fill="#F09018" className="hwb-anim-pulse" />
          <text x="24" y="47" fill="var(--hwb-text-head)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif">Auth &amp; AI Node</text>
          <text x="16" y="59" fill="#C2410C" fontSize="7" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">Microservice</text>

          {/* Database Cluster Cylinder */}
          <g transform="translate(8, 72)">
            <rect x="0" y="0" width="102" height="38" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-primary)" strokeWidth="1" />
            <ellipse cx="22" cy="12" rx="12" ry="3.5" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="0.8" />
            <ellipse cx="22" cy="19" rx="12" ry="3.5" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="0.8" />
            <ellipse cx="22" cy="26" rx="12" ry="3.5" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="0.8" />
            <circle cx="13" cy="19" r="1.5" fill="#10B981" className="hwb-anim-pulse" />
            <text x="40" y="18" fill="var(--hwb-text-head)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif">DB Cluster</text>
            <text x="40" y="29" fill="var(--hwb-text-sub)" fontSize="7" fontFamily="'IBM Plex Mono', monospace">PostgreSQL ACID</text>
          </g>

          <rect x="10" y="118" width="98" height="18" fill="var(--hwb-pill-green-bg)" stroke="#10B981" strokeWidth="0.8" />
          <text x="59" y="130.5" textAnchor="middle" fill="var(--hwb-pill-green-text)" fontSize="8" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">Zero-Trust Auth ✓</text>
        </g>

        {/* Bottom Full-Width Banner */}
        <g transform="translate(16, 172)">
          <rect x="0" y="0" width="408" height="34" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <circle cx="16" cy="17" r="3.5" fill="#10B981" className="hwb-anim-pulse" />
          <text x="28" y="20.5" fill="var(--hwb-text-head)" fontSize="9" fontWeight="800" fontFamily="Carlito, sans-serif" letterSpacing="0.03em">ARCHITECTURE: HIGH-AVAILABILITY &amp; MODULAR</text>
          <rect x="306" y="7" width="92" height="20" fill="var(--hwb-border-primary)" />
          <text x="352" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">MODULAR ✓</text>
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
      <svg viewBox="0 0 440 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="hwb-schematic-svg">
        {/* Step 03: Develop (IDE + Git Flow + Testing) */}
        {/* Top-Left: Code IDE Window */}
        <g transform="translate(16, 14)">
          <rect x="0" y="0" width="194" height="136" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <rect x="0" y="0" width="194" height="22" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <circle cx="9" cy="11" r="2.2" fill="#EF4444" />
          <circle cx="16" cy="11" r="2.2" fill="#F59E0B" />
          <circle cx="23" cy="11" r="2.2" fill="#10B981" />
          <rect x="34" y="4" width="76" height="14" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-subtle)" strokeWidth="0.8" />
          <text x="40" y="14" fill="var(--hwb-border-primary)" fontSize="7.5" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">pipeline.ts</text>

          {/* Active Line Highlight */}
          <rect x="0" y="77" width="194" height="18" fill="var(--hwb-panel-soft)" opacity="0.5" />

          {/* Code Lines with Clear Syntax Formatting */}
          <text x="10" y="42" fill="var(--hwb-text-sub)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">1</text>
          <text x="22" y="42" fill="var(--hwb-border-primary)" fontSize="8.5" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">import</text>
          <text x="56" y="42" fill="var(--hwb-text-head)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">&#123; createEngine &#125; from '@core';</text>

          <text x="10" y="60" fill="var(--hwb-text-sub)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">2</text>
          <text x="22" y="60" fill="#F09018" fontSize="8.5" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">export const</text>
          <text x="82" y="60" fill="var(--hwb-text-head)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">service = async () =&gt; &#123;</text>

          <text x="10" y="78" fill="var(--hwb-text-sub)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">3</text>
          <text x="22" y="78" fill="var(--hwb-text-sub)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">  const auth = await verifyToken();</text>

          <text x="10" y="96" fill="var(--hwb-text-sub)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">4</text>
          <text x="22" y="96" fill="#10B981" fontSize="8.5" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">  return pipeline.run(auth);</text>
          <rect x="156" y="87" width="2" height="10" fill="var(--hwb-border-primary)" className="hwb-anim-cursor" />

          <text x="10" y="114" fill="var(--hwb-text-sub)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">5</text>
          <text x="22" y="114" fill="var(--hwb-text-head)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">&#125;;</text>
        </g>

        {/* Connector from IDE to Git */}
        <line x1="210" y1="82" x2="224" y2="82" stroke="var(--hwb-border-primary)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="224,79 230,82 224,85" fill="var(--hwb-border-primary)" />

        {/* Top-Right: Git Branch Workflow */}
        <g transform="translate(230, 14)">
          <rect x="0" y="0" width="194" height="136" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <rect x="0" y="0" width="194" height="22" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <text x="10" y="15" fill="var(--hwb-border-primary)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif">GIT BRANCH WORKFLOW</text>

          {/* Main Branch Line */}
          <line x1="16" y1="52" x2="178" y2="52" stroke="var(--hwb-border-primary)" strokeWidth="2" />
          <text x="16" y="44" fill="var(--hwb-border-primary)" fontSize="7.5" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">main</text>
          <circle cx="30" cy="52" r="3.5" fill="var(--hwb-border-primary)" />
          <circle cx="80" cy="52" r="3.5" fill="var(--hwb-border-primary)" />

          {/* Feature Branch Curve */}
          <path d="M 30 52 Q 50 82, 70 82 L 130 82 Q 150 82, 160 52" stroke="#F09018" strokeWidth="1.8" fill="none" className="hwb-anim-dash-fast" />
          <text x="100" y="96" textAnchor="middle" fill="#F09018" fontSize="7" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">feat/core-api</text>
          <circle cx="100" cy="82" r="3.5" fill="#F09018" />
          <circle cx="100" cy="82" r="6" stroke="#F09018" strokeWidth="1" className="hwb-anim-pulse" fill="none" />

          {/* Merge Node */}
          <circle cx="160" cy="52" r="4.5" fill="#10B981" />
          <circle cx="160" cy="52" r="4.5" stroke="#10B981" strokeWidth="1" className="hwb-anim-ping" fill="none" />

          <rect x="10" y="108" width="174" height="18" fill="var(--hwb-pill-green-bg)" stroke="#10B981" strokeWidth="0.8" />
          <text x="97" y="120.5" textAnchor="middle" fill="var(--hwb-pill-green-text)" fontSize="8" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">PR Approved • 0 Conflicts ✓</text>
        </g>

        {/* Bottom: Automated Test Suite & Coverage Banner */}
        <g transform="translate(16, 162)">
          <rect x="0" y="0" width="408" height="44" fill="var(--hwb-pill-green-bg)" stroke="#10B981" strokeWidth="1.3" />
          <circle cx="20" cy="22" r="11" fill="#10B981" />
          <circle cx="20" cy="22" r="11" stroke="#10B981" strokeWidth="1" className="hwb-anim-ping" fill="none" />
          <path d="M16 22 L19 25 L25 19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

          <text x="38" y="18" fill="var(--hwb-pill-green-text)" fontSize="10.5" fontWeight="800" fontFamily="Carlito, sans-serif">AUTOMATED TEST SUITE: 100% PASSING</text>
          <text x="38" y="32" fill="var(--hwb-text-sub)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">Unit, Integration &amp; E2E Verified • CI Runner #429</text>

          {/* Test Coverage Bar */}
          <g transform="translate(290, 14)">
            <rect x="0" y="0" width="108" height="6" fill="#A7F3D0" />
            <rect x="0" y="0" width="106" height="6" fill="#10B981" className="hwb-anim-shimmer" />
            <text x="108" y="18" textAnchor="end" fill="var(--hwb-pill-green-text)" fontSize="8" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">COVERAGE: 99.4%</text>
          </g>
        </g>
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
      <svg viewBox="0 0 440 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="hwb-schematic-svg">
        {/* Step 04: Deploy (CI/CD Pipeline + Kubernetes Production) */}
        {/* Stage 1: Build */}
        <g transform="translate(16, 14)">
          <rect x="0" y="0" width="118" height="80" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <rect x="0" y="0" width="118" height="22" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <text x="10" y="14.5" fill="var(--hwb-border-primary)" fontSize="8" fontWeight="800" fontFamily="Carlito, sans-serif">01 / BUILD</text>
          <rect x="84" y="4" width="26" height="14" fill="#10B981" opacity="0.2" />
          <text x="97" y="13.5" textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">PASS</text>

          <text x="59" y="42" textAnchor="middle" fill="var(--hwb-text-head)" fontSize="10" fontWeight="800" fontFamily="Carlito, sans-serif">Container Image</text>
          <text x="59" y="55" textAnchor="middle" fill="var(--hwb-text-sub)" fontSize="7.5" fontFamily="'IBM Plex Mono', monospace">Docker: v2.4.0</text>

          <rect x="10" y="61" width="98" height="14" fill="var(--hwb-pill-green-bg)" />
          <text x="59" y="71" textAnchor="middle" fill="var(--hwb-pill-green-text)" fontSize="7" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">Artifact Ready ✓</text>
        </g>

        {/* Connector 1 -> 2 */}
        <line x1="134" y1="54" x2="155" y2="54" stroke="var(--hwb-border-primary)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="155,51 161,54 155,57" fill="var(--hwb-border-primary)" />
        <circle cx="134" cy="54" r="2.5" fill="#10B981" className="hwb-anim-packet-x1" />

        {/* Stage 2: Security Audit */}
        <g transform="translate(161, 14)">
          <rect x="0" y="0" width="118" height="80" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <rect x="0" y="0" width="118" height="22" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <text x="10" y="14.5" fill="var(--hwb-border-primary)" fontSize="8" fontWeight="800" fontFamily="Carlito, sans-serif">02 / SEC AUDIT</text>
          <rect x="80" y="4" width="30" height="14" fill="#10B981" opacity="0.2" />
          <text x="95" y="13.5" textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">0 CVE</text>

          <text x="59" y="42" textAnchor="middle" fill="var(--hwb-text-head)" fontSize="10" fontWeight="800" fontFamily="Carlito, sans-serif">SAST &amp; DAST</text>
          <text x="59" y="55" textAnchor="middle" fill="var(--hwb-text-sub)" fontSize="7.5" fontFamily="'IBM Plex Mono', monospace">Policy Validated</text>

          <rect x="10" y="61" width="98" height="14" fill="var(--hwb-pill-green-bg)" />
          <text x="59" y="71" textAnchor="middle" fill="var(--hwb-pill-green-text)" fontSize="7" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">0 Vulnerabilities ✓</text>
        </g>

        {/* Connector 2 -> 3 */}
        <line x1="279" y1="54" x2="300" y2="54" stroke="var(--hwb-border-primary)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="300,51 306,54 300,57" fill="var(--hwb-border-primary)" />
        <circle cx="279" cy="54" r="2.5" fill="#F09018" className="hwb-anim-packet-x1" />

        {/* Stage 3: Rollout */}
        <g transform="translate(306, 14)">
          <rect x="0" y="0" width="118" height="80" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <rect x="0" y="0" width="118" height="22" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <text x="10" y="14.5" fill="var(--hwb-border-primary)" fontSize="8" fontWeight="800" fontFamily="Carlito, sans-serif">03 / ROLLOUT</text>
          <rect x="80" y="4" width="30" height="14" fill="#10B981" opacity="0.2" />
          <text x="95" y="13.5" textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">LIVE</text>

          <text x="59" y="42" textAnchor="middle" fill="var(--hwb-text-head)" fontSize="10" fontWeight="800" fontFamily="Carlito, sans-serif">Zero-Downtime</text>
          <text x="59" y="55" textAnchor="middle" fill="var(--hwb-text-sub)" fontSize="7.5" fontFamily="'IBM Plex Mono', monospace">Canary Deployment</text>

          <rect x="10" y="61" width="98" height="14" fill="var(--hwb-panel-soft)" />
          <text x="59" y="71" textAnchor="middle" fill="var(--hwb-border-primary)" fontSize="7" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">100% Traffic Swapped ✓</text>
        </g>

        {/* Bottom: Production Kubernetes Cluster */}
        <g transform="translate(16, 106)">
          <rect x="0" y="0" width="408" height="100" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <rect x="0" y="0" width="408" height="22" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <circle cx="12" cy="11" r="3" fill="#10B981" className="hwb-anim-pulse" />
          <text x="20" y="14.5" fill="var(--hwb-border-primary)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif">PRODUCTION KUBERNETES CLUSTER (AWS MULTI-AZ)</text>
          <rect x="334" y="4" width="66" height="14" fill="var(--hwb-pill-green-bg)" />
          <text x="367" y="13.5" textAnchor="middle" fill="var(--hwb-pill-green-text)" fontSize="7.5" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">ACTIVE ✓</text>

          {/* Left Cluster Info & 4 Pods */}
          <g transform="translate(12, 30)">
            <text x="0" y="9" fill="var(--hwb-text-sub)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">Orchestrator: K8s v1.30 • Auto-Healing: Enabled</text>

            <g transform="translate(0, 18)">
              {[
                { name: 'Pod-01', x: 0 },
                { name: 'Pod-02', x: 68 },
                { name: 'Pod-03', x: 136 },
                { name: 'Pod-04', x: 204 },
              ].map(pod => (
                <g key={pod.name} transform={`translate(${pod.x}, 0)`}>
                  <rect x="0" y="0" width="60" height="22" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1" />
                  <circle cx="9" cy="11" r="2.2" fill="#10B981" className="hwb-anim-pulse" />
                  <text x="16" y="14" fill="var(--hwb-border-primary)" fontSize="7.5" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">{pod.name}</text>
                </g>
              ))}
            </g>

            <text x="0" y="56" fill="var(--hwb-text-sub)" fontSize="7.5" fontFamily="'IBM Plex Mono', monospace">Nodes Healthy: 4/4 • P99: 12ms</text>
          </g>

          {/* Right SLA Dial Box */}
          <g transform="translate(296, 30)">
            <rect x="0" y="0" width="102" height="60" fill="var(--hwb-panel-soft)" stroke="#10B981" strokeWidth="1" />
            <text x="51" y="24" textAnchor="middle" fill="var(--hwb-text-head)" fontSize="16" fontWeight="800" fontFamily="Carlito, sans-serif">99.9%</text>
            <text x="51" y="38" textAnchor="middle" fill="#047857" fontSize="8" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">UPTIME SLA</text>
            <text x="51" y="50" textAnchor="middle" fill="var(--hwb-text-sub)" fontSize="7" fontFamily="'IBM Plex Mono', monospace">Multi-Region Live</text>
          </g>
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
      <svg viewBox="0 0 440 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="hwb-schematic-svg">
        <defs>
          <linearGradient id="hwb-scale-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#365CAD" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#365CAD" stopOpacity="0.02" />
          </linearGradient>
          <clipPath id="hwb-wave-clip-new">
            <rect x="0" y="22" width="408" height="88" />
          </clipPath>
        </defs>

        {/* Top: 3 Metric Cards */}
        {/* Card 1: Uptime SLA */}
        <g transform="translate(16, 14)">
          <rect x="0" y="0" width="118" height="68" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <circle cx="12" cy="14" r="2.5" fill="#10B981" className="hwb-anim-pulse" />
          <text x="20" y="17" fill="var(--hwb-text-sub)" fontSize="8" fontWeight="800" fontFamily="Carlito, sans-serif">UPTIME SLA</text>
          <text x="12" y="42" fill="#10B981" fontSize="18" fontWeight="800" fontFamily="Carlito, sans-serif">99.99%</text>
          <rect x="10" y="48" width="98" height="13" fill="var(--hwb-pill-green-bg)" />
          <text x="59" y="57" textAnchor="middle" fill="var(--hwb-pill-green-text)" fontSize="6.5" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">ZERO REGRESSION</text>
        </g>

        {/* Card 2: Latency */}
        <g transform="translate(161, 14)">
          <rect x="0" y="0" width="118" height="68" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <circle cx="12" cy="14" r="2.5" fill="var(--hwb-border-primary)" className="hwb-anim-pulse" />
          <text x="20" y="17" fill="var(--hwb-text-sub)" fontSize="8" fontWeight="800" fontFamily="Carlito, sans-serif">GLOBAL LATENCY</text>
          <text x="12" y="42" fill="var(--hwb-border-primary)" fontSize="18" fontWeight="800" fontFamily="Carlito, sans-serif">&lt; 24ms</text>
          <rect x="10" y="48" width="98" height="13" fill="var(--hwb-panel-soft)" />
          <text x="59" y="57" textAnchor="middle" fill="var(--hwb-border-primary)" fontSize="6.5" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">EDGE ACCELERATED</text>
        </g>

        {/* Card 3: Active Nodes */}
        <g transform="translate(306, 14)">
          <rect x="0" y="0" width="118" height="68" fill="var(--hwb-panel-bg)" stroke="#F09018" strokeWidth="1.3" />
          <circle cx="12" cy="14" r="2.5" fill="#F09018" className="hwb-anim-pulse" />
          <text x="20" y="17" fill="var(--hwb-text-sub)" fontSize="8" fontWeight="800" fontFamily="Carlito, sans-serif">ACTIVE NODES</text>
          <text x="12" y="42" fill="var(--hwb-text-head)" fontSize="18" fontWeight="800" fontFamily="Carlito, sans-serif">16 / 16</text>
          <rect x="10" y="48" width="98" height="13" fill="var(--hwb-pill-orange-bg)" />
          <text x="59" y="57" textAnchor="middle" fill="var(--hwb-pill-orange-text)" fontSize="6.5" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">+8 AUTO-SCALED</text>
        </g>

        {/* Bottom: Real-Time Telemetry & Auto-Scale Wave Graph */}
        <g transform="translate(16, 94)">
          <rect x="0" y="0" width="408" height="112" fill="var(--hwb-panel-bg)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <rect x="0" y="0" width="408" height="22" fill="var(--hwb-panel-soft)" stroke="var(--hwb-border-primary)" strokeWidth="1.3" />
          <circle cx="12" cy="11" r="3" fill="#10B981" className="hwb-anim-pulse" />
          <text x="20" y="14.5" fill="var(--hwb-border-primary)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif">REAL-TIME TELEMETRY &amp; AUTO-SCALE CURVE</text>
          <rect x="318" y="4" width="82" height="14" fill="var(--hwb-pill-green-bg)" />
          <text x="359" y="13.5" textAnchor="middle" fill="var(--hwb-pill-green-text)" fontSize="7.5" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">STREAM: 60 FPS</text>

          {/* Grid lines */}
          <line x1="12" y1="42" x2="396" y2="42" stroke="var(--hwb-border-subtle)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <line x1="12" y1="62" x2="396" y2="62" stroke="var(--hwb-border-subtle)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <line x1="12" y1="82" x2="396" y2="82" stroke="var(--hwb-border-subtle)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />

          {/* Telemetry Wave Curve inside clipped area */}
          <g clipPath="url(#hwb-wave-clip-new)">
            <path
              d="M 12 84 Q 70 80, 120 70 T 200 58 T 280 48 T 340 60 T 396 76 L 396 90 L 12 90 Z"
              fill="url(#hwb-scale-grad)"
            />
            <path
              d="M 12 84 Q 70 80, 120 70 T 200 58 T 280 48 T 340 60 T 396 76"
              stroke="var(--hwb-border-primary)"
              strokeWidth="2.2"
              fill="none"
              className="hwb-anim-dash"
            />
            <line x1="12" y1="24" x2="12" y2="90" stroke="#10B981" strokeWidth="1.2" opacity="0.8" className="hwb-anim-scan-telemetry" />
          </g>

          {/* Peak Auto-Scale Beacon Tag */}
          <g transform="translate(238, 24)">
            <rect x="0" y="0" width="84" height="14" fill="#F09018" rx="2" />
            <text x="42" y="10" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="800" fontFamily="Carlito, sans-serif">PEAK: +8 PODS</text>
            <line x1="42" y1="14" x2="42" y2="24" stroke="#F09018" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="42" cy="24" r="3" fill="#F09018" />
            <circle cx="42" cy="24" r="3" stroke="#F09018" strokeWidth="1" className="hwb-anim-ping" fill="none" />
          </g>

          <text x="14" y="101" fill="var(--hwb-text-sub)" fontSize="7.5" fontFamily="'IBM Plex Mono', monospace">Throughput: 85.2k req/s • P99: 14ms • Auto-Heal: 100% Active</text>
        </g>
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


  const cur = steps[activeStep];
  const barDuration = isManual ? '30s' : '10s';

  return (
    <section id="how-we-build" aria-labelledby="hwb-heading">
      <div className="wrap">
        {/* Section Header */}
        <div className="hwb-head">
          <p className="eyebrow">How we build</p>
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

      </div>
    </section>
  );
}
