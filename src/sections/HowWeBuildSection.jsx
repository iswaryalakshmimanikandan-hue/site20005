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
        <defs>
          <linearGradient id="hwb-radar-sweep-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Top-Left: Discovery Radar Hub */}
        <g transform="translate(18, 16)">
          <rect x="0" y="0" width="134" height="78" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <rect x="0" y="0" width="134" height="20" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <circle cx="10" cy="10" r="3" fill="#10B981" className="hwb-anim-pulse" />
          <text x="18" y="13.5" fill="var(--hwb-border-primary, #365CAD)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif" letterSpacing="0.04em">01 / DISCOVERY HUB</text>

          {/* Radar Scanner Graphic */}
          <g transform="translate(32, 48)">
            <circle cx="0" cy="0" r="21" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.45" />
            <circle cx="0" cy="0" r="13" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="0.8" opacity="0.65" />
            <circle cx="0" cy="0" r="5" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1" />
            {/* Rotating radar sweep */}
            <g className="hwb-anim-rotate">
              <line x1="0" y1="0" x2="21" y2="0" stroke="#10B981" strokeWidth="1.6" />
              <polygon points="0,0 21,-9 21,0" fill="url(#hwb-radar-sweep-grad)" />
            </g>
            {/* Blip dot & Expanding Ping */}
            <circle cx="7" cy="-7" r="2.5" fill="#10B981" />
            <circle cx="7" cy="-7" r="2.5" stroke="#10B981" strokeWidth="1" fill="none" className="hwb-anim-ping" />
          </g>

          {/* Discovery checklist tags */}
          <g transform="translate(64, 26)">
            <rect x="0" y="3" width="62" height="12" fill="var(--hwb-panel-soft, #EAF0FB)" />
            <text x="4" y="12" fill="var(--hwb-text-sub, #64748B)" fontSize="7" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">● USER CONTEXT</text>

            <rect x="0" y="19" width="62" height="12" fill="var(--hwb-panel-soft, #EAF0FB)" />
            <text x="4" y="28" fill="var(--hwb-text-sub, #64748B)" fontSize="7" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">● TECH AUDIT</text>

            <rect x="0" y="35" width="62" height="12" fill="var(--hwb-panel-soft, #EAF0FB)" />
            <text x="4" y="44" fill="var(--hwb-text-sub, #64748B)" fontSize="7" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">● SCOPE MATRIX</text>
          </g>
        </g>

        {/* Animated Connector from Discovery Engine to Strategy Roadmap */}
        <line x1="152" y1="55" x2="182" y2="55" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="182,52 188,55 182,58" fill="var(--hwb-border-primary, #365CAD)" />
        <circle cx="152" cy="55" r="3" fill="#F09018" className="hwb-anim-packet-x1" />

        {/* Top-Right: Strategic Roadmap Box */}
        <g transform="translate(188, 16)">
          <rect x="0" y="0" width="174" height="78" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <rect x="0" y="0" width="174" height="20" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <text x="10" y="13.5" fill="var(--hwb-border-primary, #365CAD)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif" letterSpacing="0.04em">STRATEGIC ROADMAP</text>
          <rect x="116" y="4" width="50" height="12" fill="#10B981" opacity="0.18" />
          <text x="141" y="13" textAnchor="middle" fill="#10B981" fontSize="7.5" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">ALIGNED ✓</text>

          {/* Roadmap Nodes & Progress Path */}
          <line x1="16" y1="46" x2="158" y2="46" stroke="var(--hwb-border-subtle, #CBD5E1)" strokeWidth="1.5" />
          <line x1="16" y1="46" x2="88" y2="46" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.8" className="hwb-anim-dash-fast" />

          {/* Phase 1 Node */}
          <circle cx="28" cy="46" r="4.5" fill="var(--hwb-border-primary, #365CAD)" />
          <circle cx="28" cy="46" r="7.5" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1" className="hwb-anim-pulse" fill="none" />
          <text x="28" y="60" textAnchor="middle" fill="var(--hwb-text-head, #0F172A)" fontSize="8" fontWeight="800" fontFamily="Carlito, sans-serif">Phase 1</text>
          <text x="28" y="69" textAnchor="middle" fill="var(--hwb-text-sub, #64748B)" fontSize="6.5" fontFamily="'IBM Plex Mono', monospace">Discovery</text>

          {/* Phase 2 Node */}
          <circle cx="88" cy="46" r="4.5" fill="#10B981" />
          <circle cx="88" cy="46" r="7.5" stroke="#10B981" strokeWidth="1" className="hwb-anim-pulse" fill="none" />
          <text x="88" y="60" textAnchor="middle" fill="var(--hwb-text-head, #0F172A)" fontSize="8" fontWeight="800" fontFamily="Carlito, sans-serif">Phase 2</text>
          <text x="88" y="69" textAnchor="middle" fill="#10B981" fontSize="6.5" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">Target Arc</text>

          {/* Phase 3 Node */}
          <circle cx="146" cy="46" r="4" fill="var(--hwb-border-subtle, #CBD5E1)" />
          <text x="146" y="60" textAnchor="middle" fill="var(--hwb-text-sub, #64748B)" fontSize="8" fontWeight="700" fontFamily="Carlito, sans-serif">Phase 3</text>
          <text x="146" y="69" textAnchor="middle" fill="var(--hwb-text-sub, #64748B)" fontSize="6.5" fontFamily="'IBM Plex Mono', monospace">Value Scale</text>
        </g>

        {/* Animated Connector down to Milestones */}
        <path d="M276 94 L276 104 L190 104 L190 114" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" className="hwb-anim-dash" fill="none" />
        <polygon points="187,114 190,120 193,114" fill="var(--hwb-border-primary, #365CAD)" />

        {/* Bottom: 3 Milestone Execution Cards */}
        {/* M1 Card */}
        <g transform="translate(18, 114)">
          <rect x="0" y="0" width="106" height="70" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <rect x="8" y="8" width="22" height="14" fill="#10B981" opacity="0.18" />
          <text x="19" y="18" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">M1</text>
          <text x="35" y="19" fill="var(--hwb-text-head, #0F172A)" fontSize="10" fontWeight="800" fontFamily="Carlito, sans-serif">Tech Audit</text>
          <line x1="8" y1="28" x2="98" y2="28" stroke="var(--hwb-border-subtle, #CBD5E1)" strokeWidth="0.8" />
          <text x="8" y="42" fill="var(--hwb-text-sub, #64748B)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">Legacy Stack: Scoped</text>
          <rect x="8" y="50" width="90" height="13" fill="#ECFDF5" />
          <circle cx="15" cy="56.5" r="2.5" fill="#10B981" className="hwb-anim-pulse" />
          <text x="22" y="60" fill="#065F46" fontSize="8" fontWeight="700" fontFamily="Carlito, sans-serif">Audit 100% Complete</text>
        </g>

        {/* Arrow M1 -> M2 */}
        <line x1="124" y1="149" x2="136" y2="149" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="136,146 142,149 136,152" fill="var(--hwb-border-primary, #365CAD)" />

        {/* M2 Card */}
        <g transform="translate(142, 114)">
          <rect x="0" y="0" width="106" height="70" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <rect x="8" y="8" width="22" height="14" fill="var(--hwb-border-primary, #365CAD)" opacity="0.18" />
          <text x="19" y="18" textAnchor="middle" fill="var(--hwb-border-primary, #365CAD)" fontSize="9" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">M2</text>
          <text x="35" y="19" fill="var(--hwb-text-head, #0F172A)" fontSize="10" fontWeight="800" fontFamily="Carlito, sans-serif">Architecture</text>
          <line x1="8" y1="28" x2="98" y2="28" stroke="var(--hwb-border-subtle, #CBD5E1)" strokeWidth="0.8" />
          <text x="8" y="42" fill="var(--hwb-text-sub, #64748B)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">Target System: Mapped</text>
          <rect x="8" y="50" width="90" height="13" fill="var(--hwb-panel-soft, #EAF0FB)" />
          <circle cx="15" cy="56.5" r="2.5" fill="var(--hwb-border-primary, #365CAD)" className="hwb-anim-pulse" />
          <text x="22" y="60" fill="var(--hwb-border-primary, #365CAD)" fontSize="8" fontWeight="700" fontFamily="Carlito, sans-serif">Scope Signed Off</text>
        </g>

        {/* Arrow M2 -> M3 */}
        <line x1="248" y1="149" x2="260" y2="149" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="260,146 266,149 260,152" fill="var(--hwb-border-primary, #365CAD)" />

        {/* M3 Card */}
        <g transform="translate(266, 114)">
          <rect x="0" y="0" width="96" height="70" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="#F09018" strokeWidth="1.3" />
          <rect x="8" y="8" width="22" height="14" fill="#F09018" opacity="0.18" />
          <text x="19" y="18" textAnchor="middle" fill="#F09018" fontSize="9" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">M3</text>
          <text x="35" y="19" fill="var(--hwb-text-head, #0F172A)" fontSize="10" fontWeight="800" fontFamily="Carlito, sans-serif">Sprint 0</text>
          <line x1="8" y1="28" x2="88" y2="28" stroke="var(--hwb-border-subtle, #CBD5E1)" strokeWidth="0.8" />
          <text x="8" y="42" fill="var(--hwb-text-sub, #64748B)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">Backlog: Prioritized</text>
          <rect x="8" y="50" width="80" height="13" fill="#FFF7ED" />
          <circle cx="15" cy="56.5" r="2.5" fill="#F09018" className="hwb-anim-pulse" />
          <text x="22" y="60" fill="#C2410C" fontSize="8" fontWeight="800" fontFamily="Carlito, sans-serif">Ready to Build</text>
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
      <svg viewBox="0 0 380 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hwb-schematic-svg">
        {/* Left: UI/UX Wireframe Screen */}
        <g transform="translate(18, 16)">
          <rect x="0" y="0" width="114" height="168" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          {/* Header bar */}
          <rect x="0" y="0" width="114" height="18" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <circle cx="8" cy="9" r="2.2" fill="#EF4444" />
          <circle cx="15" cy="9" r="2.2" fill="#F59E0B" />
          <circle cx="22" cy="9" r="2.2" fill="#10B981" />
          <text x="32" y="12" fill="var(--hwb-border-primary, #365CAD)" fontSize="8" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">UI Wireframe</text>

          {/* Shimmering navbar & hero banner */}
          <rect x="8" y="26" width="98" height="6" fill="var(--hwb-border-primary, #365CAD)" opacity="0.6" className="hwb-anim-shimmer" />
          <rect x="8" y="38" width="98" height="36" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-subtle, #CBD5E1)" strokeWidth="0.8" />
          <rect x="14" y="44" width="46" height="5" fill="var(--hwb-border-primary, #365CAD)" opacity="0.8" />
          <rect x="14" y="53" width="70" height="4" fill="var(--hwb-border-subtle, #CBD5E1)" />
          <rect x="14" y="61" width="36" height="7" fill="var(--hwb-border-primary, #365CAD)" />

          {/* Component Card 1 (Interactive dashboard metric with breathing stroke) */}
          <rect x="8" y="82" width="46" height="40" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="#F09018" strokeWidth="1.2" className="hwb-anim-breathing-stroke" />
          <rect x="14" y="88" width="24" height="4" fill="#F09018" opacity="0.7" />
          <line x1="14" y1="104" x2="48" y2="104" stroke="var(--hwb-border-subtle, #CBD5E1)" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="14" y1="112" x2="38" y2="100" stroke="#F09018" strokeWidth="1.5" />
          <circle cx="38" cy="100" r="2" fill="#F09018" />

          {/* Component Card 2 */}
          <rect x="60" y="82" width="46" height="40" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1" />
          <rect x="66" y="88" width="28" height="4" fill="var(--hwb-border-primary, #365CAD)" opacity="0.6" />
          <rect x="66" y="96" width="34" height="3" fill="var(--hwb-border-subtle, #CBD5E1)" />
          <rect x="66" y="103" width="26" height="3" fill="var(--hwb-border-subtle, #CBD5E1)" />
          <rect x="66" y="110" width="30" height="3" fill="var(--hwb-border-subtle, #CBD5E1)" />

          {/* Design System Tokens Pill */}
          <rect x="8" y="130" width="98" height="28" fill="var(--hwb-panel-soft, #EAF0FB)" />
          <text x="14" y="142" fill="var(--hwb-border-primary, #365CAD)" fontSize="7.5" fontWeight="800" fontFamily="Carlito, sans-serif">DESIGN TOKENS</text>
          <circle cx="16" cy="151" r="3" fill="var(--hwb-border-primary, #365CAD)" />
          <circle cx="26" cy="151" r="3" fill="#F09018" />
          <circle cx="36" cy="151" r="3" fill="#10B981" />
          <text x="46" y="153" fill="var(--hwb-text-sub, #64748B)" fontSize="7" fontFamily="'IBM Plex Mono', monospace">100% REUSABLE</text>
        </g>

        {/* Animated Connector Pipes from Wireframe to Gateway */}
        {/* Top Pipe */}
        <path d="M132 60 L166 60" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="166,57 172,60 166,63" fill="var(--hwb-border-primary, #365CAD)" />
        <circle cx="132" cy="60" r="3" fill="#10B981" className="hwb-anim-packet-x1" />

        {/* Bottom Pipe */}
        <path d="M132 140 L166 140" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="166,137 172,140 166,143" fill="var(--hwb-border-primary, #365CAD)" />
        <circle cx="132" cy="140" r="3" fill="#F09018" className="hwb-anim-packet-x1" />

        {/* Center: System Architecture & API Gateway Hub */}
        <g transform="translate(172, 24)">
          <rect x="0" y="0" width="94" height="152" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <rect x="0" y="0" width="94" height="18" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <text x="47" y="12" textAnchor="middle" fill="var(--hwb-border-primary, #365CAD)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif">API GATEWAY</text>

          {/* Central Router Diamond with Rotating Accent */}
          <g transform="translate(47, 56)">
            <polygon points="0,-18 18,0 0,18 -18,0" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
            <circle cx="0" cy="0" r="24" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="0.8" strokeDasharray="3 3" className="hwb-anim-rotate-slow" fill="none" />
            <circle cx="0" cy="0" r="4" fill="var(--hwb-border-primary, #365CAD)" className="hwb-anim-pulse" />
          </g>
          <text x="47" y="86" textAnchor="middle" fill="var(--hwb-text-head, #0F172A)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif">ROUTER CORE</text>
          <text x="47" y="95" textAnchor="middle" fill="var(--hwb-text-sub, #64748B)" fontSize="7" fontFamily="'IBM Plex Mono', monospace">GraphQL / REST</text>

          {/* Gateway Status Indicators */}
          <line x1="8" y1="104" x2="86" y2="104" stroke="var(--hwb-border-subtle, #CBD5E1)" strokeWidth="0.8" />
          <rect x="8" y="110" width="78" height="14" fill="#ECFDF5" />
          <circle cx="15" cy="117" r="2.5" fill="#10B981" className="hwb-anim-pulse" />
          <text x="22" y="120" fill="#065F46" fontSize="7.5" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">SSL Terminated</text>

          <rect x="8" y="128" width="78" height="14" fill="var(--hwb-panel-soft, #EAF0FB)" />
          <text x="47" y="138" textAnchor="middle" fill="var(--hwb-border-primary, #365CAD)" fontSize="7.5" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">P99 &lt; 1.4ms</text>
        </g>

        {/* Connectors from Gateway to Backend Services */}
        {/* Gateway -> Service 1 */}
        <path d="M266 50 L296 40" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="296,37 302,40 296,43" fill="var(--hwb-border-primary, #365CAD)" />

        {/* Gateway -> Service 2 */}
        <path d="M266 80 L296 85" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="296,82 302,85 296,88" fill="var(--hwb-border-primary, #365CAD)" />

        {/* Gateway -> DB */}
        <path d="M266 125 L296 142" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="296,139 302,142 296,145" fill="var(--hwb-border-primary, #365CAD)" />

        {/* Right: Distributed Microservices & High-Availability DB */}
        {/* Service 1: Auth & Logic Node */}
        <g transform="translate(302, 20)">
          <rect x="0" y="0" width="64" height="38" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.2" />
          <circle cx="8" cy="10" r="2.5" fill="#10B981" className="hwb-anim-pulse" />
          <text x="14" y="13" fill="var(--hwb-text-head, #0F172A)" fontSize="8" fontWeight="800" fontFamily="Carlito, sans-serif">Auth Logic</text>
          <rect x="6" y="20" width="52" height="12" fill="var(--hwb-panel-soft, #EAF0FB)" />
          <text x="32" y="29" textAnchor="middle" fill="var(--hwb-border-primary, #365CAD)" fontSize="7" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">Microservice</text>
        </g>

        {/* Service 2: AI Orchestrator */}
        <g transform="translate(302, 66)">
          <rect x="0" y="0" width="64" height="38" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="#F09018" strokeWidth="1.2" />
          <circle cx="8" cy="10" r="2.5" fill="#F09018" className="hwb-anim-pulse" />
          <text x="14" y="13" fill="var(--hwb-text-head, #0F172A)" fontSize="8" fontWeight="800" fontFamily="Carlito, sans-serif">AI Inference</text>
          <rect x="6" y="20" width="52" height="12" fill="#FFF7ED" />
          <text x="32" y="29" textAnchor="middle" fill="#C2410C" fontSize="7" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">AskJuno Core</text>
        </g>

        {/* Service 3: High-Availability Database Cylinder */}
        <g transform="translate(302, 114)">
          <rect x="0" y="0" width="64" height="62" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.2" />
          <text x="32" y="12" textAnchor="middle" fill="var(--hwb-border-primary, #365CAD)" fontSize="7.5" fontWeight="800" fontFamily="Carlito, sans-serif">DATABASE CLUSTER</text>
          {/* Cylinder discs */}
          <ellipse cx="32" cy="22" rx="24" ry="5" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1" />
          <ellipse cx="32" cy="34" rx="24" ry="5" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1" />
          <ellipse cx="32" cy="46" rx="24" ry="5" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1" />
          {/* Pulsing I/O write lights */}
          <circle cx="16" cy="22" r="1.8" fill="#10B981" className="hwb-anim-pulse" />
          <circle cx="16" cy="34" r="1.8" fill="#10B981" className="hwb-anim-pulse" />
          <circle cx="16" cy="46" r="1.8" fill="#F09018" className="hwb-anim-pulse" />
          <text x="32" y="58" textAnchor="middle" fill="var(--hwb-text-sub, #64748B)" fontSize="6.5" fontFamily="'IBM Plex Mono', monospace">ACID REPLICATED</text>
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
        {/* Top-Left: Code IDE Window */}
        <g transform="translate(18, 16)">
          <rect x="0" y="0" width="186" height="114" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          {/* Title bar */}
          <rect x="0" y="0" width="186" height="20" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <circle cx="10" cy="10" r="2.5" fill="#EF4444" />
          <circle cx="18" cy="10" r="2.5" fill="#F59E0B" />
          <circle cx="26" cy="10" r="2.5" fill="#10B981" />
          <rect x="38" y="4" width="82" height="12" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-subtle, #CBD5E1)" strokeWidth="0.8" />
          <text x="44" y="13" fill="var(--hwb-border-primary, #365CAD)" fontSize="7.5" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">orchestrator.ts</text>

          {/* Active line highlight strip */}
          <rect x="0" y="68" width="186" height="16" fill="var(--hwb-panel-soft, #EAF0FB)" opacity="0.6" />

          {/* Code lines with syntax highlighting */}
          <text x="10" y="38" fill="var(--hwb-text-sub, #64748B)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">1</text>
          <text x="22" y="38" fill="var(--hwb-border-primary, #365CAD)" fontSize="8.5" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">import</text>
          <text x="56" y="38" fill="var(--hwb-text-head, #0F172A)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">&#123; createEngine &#125;</text>

          <text x="10" y="54" fill="var(--hwb-text-sub, #64748B)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">2</text>
          <text x="22" y="54" fill="#F09018" fontSize="8.5" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">export const</text>
          <text x="82" y="54" fill="var(--hwb-text-head, #0F172A)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">service = async () =&gt; &#123;</text>

          <text x="10" y="70" fill="var(--hwb-text-sub, #64748B)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">3</text>
          <text x="22" y="70" fill="var(--hwb-text-sub, #64748B)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">  const auth = await token();</text>

          <text x="10" y="86" fill="var(--hwb-text-sub, #64748B)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">4</text>
          <text x="22" y="86" fill="#10B981" fontSize="8.5" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">  return pipeline.run(auth);</text>
          {/* Animated Blinking Cursor */}
          <rect x="156" y="77" width="2" height="10" fill="var(--hwb-border-primary, #365CAD)" className="hwb-anim-cursor" />

          <text x="10" y="102" fill="var(--hwb-text-sub, #64748B)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">5</text>
          <text x="22" y="102" fill="var(--hwb-text-head, #0F172A)" fontSize="8.5" fontFamily="'IBM Plex Mono', monospace">&#125;;</text>
        </g>

        {/* Animated Connector to Git Flow */}
        <line x1="204" y1="73" x2="218" y2="73" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="218,70 224,73 218,76" fill="var(--hwb-border-primary, #365CAD)" />

        {/* Top-Right: Git Branch Flow */}
        <g transform="translate(224, 16)">
          <rect x="0" y="0" width="138" height="114" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <rect x="0" y="0" width="138" height="20" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <text x="10" y="13" fill="var(--hwb-border-primary, #365CAD)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif">GIT BRANCH WORKFLOW</text>

          {/* Main branch line */}
          <line x1="14" y1="46" x2="124" y2="46" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="2" />
          <text x="14" y="38" fill="var(--hwb-border-primary, #365CAD)" fontSize="7.5" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">main</text>

          {/* Commit nodes on main */}
          <circle cx="24" cy="46" r="3.5" fill="var(--hwb-border-primary, #365CAD)" />
          <circle cx="64" cy="46" r="3.5" fill="var(--hwb-border-primary, #365CAD)" />

          {/* Feature branch line */}
          <path d="M24 46 Q 38 72, 54 72 L 96 72 Q 112 72, 118 46" stroke="#F09018" strokeWidth="1.8" fill="none" className="hwb-anim-dash-fast" />
          <text x="56" y="84" fill="#F09018" fontSize="7" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">feat/core</text>

          {/* Feature commit node with pulse */}
          <circle cx="68" cy="72" r="3.5" fill="#F09018" />
          <circle cx="68" cy="72" r="6" stroke="#F09018" strokeWidth="1" className="hwb-anim-pulse" fill="none" />

          {/* Merge node with glowing ping ring */}
          <circle cx="118" cy="46" r="4.5" fill="#10B981" />
          <circle cx="118" cy="46" r="4.5" stroke="#10B981" strokeWidth="1" className="hwb-anim-ping" fill="none" />

          {/* Branch status tag */}
          <rect x="10" y="94" width="118" height="14" fill="#ECFDF5" />
          <circle cx="18" cy="101" r="2.5" fill="#10B981" className="hwb-anim-pulse" />
          <text x="25" y="104" fill="#065F46" fontSize="7.5" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">PR Approved • 0 Conflicts</text>
        </g>

        {/* Bottom: Automated Testing & QA Suite */}
        <g transform="translate(18, 140)">
          <rect x="0" y="0" width="344" height="46" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.3" />
          {/* Checkmark icon with pulsing green ring */}
          <g transform="translate(18, 23)">
            <circle cx="0" cy="0" r="11" fill="#10B981" />
            <circle cx="0" cy="0" r="11" stroke="#10B981" strokeWidth="1" className="hwb-anim-ping" fill="none" />
            <path d="M-4 0 L-1 3 L5 -3" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text x="36" y="22" fill="#065F46" fontSize="11" fontWeight="800" fontFamily="Carlito, sans-serif">AUTOMATED TEST SUITE: 100% PASSING</text>
          <text x="36" y="34" fill="#047857" fontSize="8" fontFamily="'IBM Plex Mono', monospace">CI Runner #429 • Unit, Integration &amp; End-to-End verified</text>

          {/* Test progress meter */}
          <g transform="translate(242, 14)">
            <rect x="0" y="0" width="92" height="6" fill="#A7F3D0" />
            <rect x="0" y="0" width="92" height="6" fill="#10B981" className="hwb-anim-shimmer" />
            <text x="92" y="18" textAnchor="end" fill="#047857" fontSize="8" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">COVERAGE: 99.4%</text>
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
      <svg viewBox="0 0 380 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hwb-schematic-svg">
        {/* Top: 3-Stage CI/CD Deployment Pipeline */}
        {/* Stage 1: Build */}
        <g transform="translate(18, 16)">
          <rect x="0" y="0" width="96" height="66" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <rect x="0" y="0" width="96" height="18" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <text x="8" y="12" fill="var(--hwb-border-primary, #365CAD)" fontSize="8" fontWeight="800" fontFamily="Carlito, sans-serif">01 / BUILD</text>
          <rect x="68" y="4" width="22" height="10" fill="#10B981" opacity="0.2" />
          <text x="79" y="11.5" textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">DONE</text>

          <text x="48" y="36" textAnchor="middle" fill="var(--hwb-text-head, #0F172A)" fontSize="10" fontWeight="800" fontFamily="Carlito, sans-serif">Artifact Compiled</text>
          <text x="48" y="48" textAnchor="middle" fill="var(--hwb-text-sub, #64748B)" fontSize="7.5" fontFamily="'IBM Plex Mono', monospace">Docker: v2.4.0</text>
          <circle cx="48" cy="56" r="3" fill="#10B981" className="hwb-anim-pulse" />
        </g>

        {/* Animated Connector 1 -> 2 */}
        <line x1="114" y1="49" x2="134" y2="49" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="134,46 140,49 134,52" fill="var(--hwb-border-primary, #365CAD)" />
        <circle cx="114" cy="49" r="2.8" fill="#10B981" className="hwb-anim-packet-x1" />

        {/* Stage 2: Security Scan with Scanning Radar Shield */}
        <g transform="translate(140, 16)">
          <rect x="0" y="0" width="104" height="66" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <rect x="0" y="0" width="104" height="18" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <text x="8" y="12" fill="var(--hwb-border-primary, #365CAD)" fontSize="8" fontWeight="800" fontFamily="Carlito, sans-serif">02 / SEC AUDIT</text>
          <rect x="72" y="4" width="26" height="10" fill="#10B981" opacity="0.2" />
          <text x="85" y="11.5" textAnchor="middle" fill="#10B981" fontSize="7" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">0 CVE</text>

          <g transform="translate(24, 42)">
            {/* Shield polygon */}
            <path d="M0 -10 L9 -6 L9 2 Q 0 10, 0 10 Q 0 10, -9 2 L -9 -6 Z" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="#10B981" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="11" stroke="#10B981" strokeWidth="0.8" strokeDasharray="3 3" className="hwb-anim-rotate-fast" fill="none" />
            <circle cx="0" cy="0" r="2.5" fill="#10B981" />
          </g>

          <text x="44" y="38" fill="var(--hwb-text-head, #0F172A)" fontSize="9.5" fontWeight="800" fontFamily="Carlito, sans-serif">SAST &amp; DAST</text>
          <text x="44" y="50" fill="#10B981" fontSize="8" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">Pass: 0 Vulns</text>
        </g>

        {/* Animated Connector 2 -> 3 */}
        <line x1="244" y1="49" x2="264" y2="49" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.5" className="hwb-anim-dash" />
        <polygon points="264,46 270,49 264,52" fill="var(--hwb-border-primary, #365CAD)" />
        <circle cx="244" cy="49" r="2.8" fill="#F09018" className="hwb-anim-packet-x1" />

        {/* Stage 3: Zero-Downtime Rollout */}
        <g transform="translate(270, 16)">
          <rect x="0" y="0" width="92" height="66" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <rect x="0" y="0" width="92" height="18" fill="var(--hwb-border-primary, #365CAD)" />
          <text x="46" y="12" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800" fontFamily="Carlito, sans-serif">03 / ROLLOUT</text>

          <text x="46" y="36" textAnchor="middle" fill="var(--hwb-border-primary, #365CAD)" fontSize="10" fontWeight="800" fontFamily="Carlito, sans-serif">Zero-Downtime</text>
          <text x="46" y="48" textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">Rolling Pods</text>
          <circle cx="46" cy="56" r="3" fill="#10B981" className="hwb-anim-pulse" />
        </g>

        {/* Bottom: Production Kubernetes Cluster & Live Telemetry Gauge */}
        <g transform="translate(18, 94)">
          <rect x="0" y="0" width="344" height="92" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          {/* Header */}
          <rect x="0" y="0" width="344" height="20" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <circle cx="12" cy="10" r="3" fill="#10B981" className="hwb-anim-pulse" />
          <text x="20" y="13.5" fill="var(--hwb-border-primary, #365CAD)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif">PRODUCTION KUBERNETES CLUSTER</text>
          <rect x="274" y="4" width="62" height="12" fill="#ECFDF5" />
          <text x="305" y="12.5" textAnchor="middle" fill="#065F46" fontSize="7.5" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">PROD ACTIVE</text>

          {/* Left Cluster Info */}
          <g transform="translate(12, 32)">
            <text x="0" y="10" fill="var(--hwb-text-head, #0F172A)" fontSize="9" fontWeight="800" fontFamily="Carlito, sans-serif">Cluster: AWS us-east-1 (Multi-AZ)</text>
            <text x="0" y="24" fill="var(--hwb-text-sub, #64748B)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">Orchestrator: K8s v1.30 • Auto-healing: Enabled</text>

            {/* 4 Pods visualization */}
            <g transform="translate(0, 32)">
              {[
                { name: 'Pod-1', x: 0 },
                { name: 'Pod-2', x: 38 },
                { name: 'Pod-3', x: 76 },
                { name: 'Pod-4', x: 114 },
              ].map(pod => (
                <g key={pod.name} transform={`translate(${pod.x}, 0)`}>
                  <rect x="0" y="0" width="34" height="18" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1" />
                  <circle cx="6" cy="9" r="2" fill="#10B981" className="hwb-anim-pulse" />
                  <text x="12" y="12" fill="var(--hwb-border-primary, #365CAD)" fontSize="7" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">{pod.name}</text>
                </g>
              ))}
            </g>
          </g>

          {/* Right SLA Uptime Dial / Gauge Badge */}
          <g transform="translate(254, 28)">
            <rect x="0" y="0" width="82" height="56" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="#10B981" strokeWidth="1.3" />
            <circle cx="41" cy="22" r="16" stroke="var(--hwb-border-subtle, #CBD5E1)" strokeWidth="2.5" fill="none" />
            <circle cx="41" cy="22" r="16" stroke="#10B981" strokeWidth="2.5" strokeDasharray="90 30" className="hwb-anim-rotate" fill="none" />
            <text x="41" y="25" textAnchor="middle" fill="var(--hwb-text-head, #0F172A)" fontSize="10" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">99.9%</text>
            <text x="41" y="46" textAnchor="middle" fill="#047857" fontSize="8" fontWeight="800" fontFamily="Carlito, sans-serif">UPTIME SLA</text>
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
      <svg viewBox="0 0 380 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hwb-schematic-svg">
        <defs>
          <linearGradient id="hwb-scale-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#365CAD" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#365CAD" stopOpacity="0.02" />
          </linearGradient>
          <clipPath id="hwb-wave-clip">
            <rect x="0" y="22" width="344" height="78" />
          </clipPath>
        </defs>

        {/* Top: 3 Metric Cards */}
        {/* Card 1: Uptime SLA */}
        <g transform="translate(18, 16)">
          <rect x="0" y="0" width="106" height="58" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <circle cx="10" cy="12" r="2.5" fill="#10B981" className="hwb-anim-pulse" />
          <text x="18" y="15" fill="var(--hwb-text-sub, #64748B)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif">UPTIME SLA</text>
          <text x="10" y="38" fill="#10B981" fontSize="18" fontWeight="800" fontFamily="Carlito, sans-serif">99.99%</text>
          <rect x="10" y="44" width="86" height="8" fill="#ECFDF5" />
          <text x="53" y="50" textAnchor="middle" fill="#065F46" fontSize="6.5" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">ZERO REGRESSION</text>
        </g>

        {/* Card 2: Latency */}
        <g transform="translate(136, 16)">
          <rect x="0" y="0" width="108" height="58" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <circle cx="10" cy="12" r="2.5" fill="var(--hwb-border-primary, #365CAD)" className="hwb-anim-pulse" />
          <text x="18" y="15" fill="var(--hwb-text-sub, #64748B)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif">GLOBAL LATENCY</text>
          <text x="10" y="38" fill="var(--hwb-border-primary, #365CAD)" fontSize="18" fontWeight="800" fontFamily="Carlito, sans-serif">&lt; 28ms</text>
          <rect x="10" y="44" width="88" height="8" fill="var(--hwb-panel-soft, #EAF0FB)" />
          <text x="54" y="50" textAnchor="middle" fill="var(--hwb-border-primary, #365CAD)" fontSize="6.5" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">EDGE ACCELERATED</text>
        </g>

        {/* Card 3: Auto-Scaled Nodes */}
        <g transform="translate(256, 16)">
          <rect x="0" y="0" width="106" height="58" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="#F09018" strokeWidth="1.3" />
          <circle cx="10" cy="12" r="2.5" fill="#F09018" className="hwb-anim-pulse" />
          <text x="18" y="15" fill="var(--hwb-text-sub, #64748B)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif">ACTIVE NODES</text>
          <text x="10" y="38" fill="var(--hwb-text-head, #0F172A)" fontSize="18" fontWeight="800" fontFamily="Carlito, sans-serif">16 / 16</text>
          <rect x="10" y="44" width="86" height="8" fill="#FFF7ED" />
          <text x="53" y="50" textAnchor="middle" fill="#C2410C" fontSize="6.5" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">+8 AUTO-SCALED</text>
        </g>

        {/* Bottom: Real-Time Telemetry & Auto-Scale Wave Graph */}
        <g transform="translate(18, 84)">
          <rect x="0" y="0" width="344" height="102" fill="var(--hwb-panel-bg, #FFFFFF)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          {/* Header */}
          <rect x="0" y="0" width="344" height="20" fill="var(--hwb-panel-soft, #EAF0FB)" stroke="var(--hwb-border-primary, #365CAD)" strokeWidth="1.3" />
          <circle cx="10" cy="10" r="3" fill="#10B981" className="hwb-anim-pulse" />
          <text x="18" y="13.5" fill="var(--hwb-border-primary, #365CAD)" fontSize="8.5" fontWeight="800" fontFamily="Carlito, sans-serif">REAL-TIME TELEMETRY &amp; AUTO-SCALE CURVE</text>
          <rect x="260" y="4" width="76" height="12" fill="#ECFDF5" />
          <text x="298" y="12.5" textAnchor="middle" fill="#065F46" fontSize="7.5" fontWeight="800" fontFamily="'IBM Plex Mono', monospace">STREAM: 60 FPS</text>

          {/* Grid lines */}
          <line x1="10" y1="42" x2="334" y2="42" stroke="var(--hwb-border-subtle, #CBD5E1)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <line x1="10" y1="62" x2="334" y2="62" stroke="var(--hwb-border-subtle, #CBD5E1)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <line x1="10" y1="82" x2="334" y2="82" stroke="var(--hwb-border-subtle, #CBD5E1)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />

          {/* Flowing Telemetry Wave Curve inside clipped area */}
          <g clipPath="url(#hwb-wave-clip)">
            {/* Wave curve with soft gradient fill */}
            <path
              d="M10 88 Q 50 84, 85 76 T 160 62 T 235 40 T 290 56 T 334 78 L 334 98 L 10 98 Z"
              fill="url(#hwb-scale-grad)"
            />
            <path
              d="M10 88 Q 50 84, 85 76 T 160 62 T 235 40 T 290 56 T 334 78"
              stroke="var(--hwb-border-primary, #365CAD)"
              strokeWidth="2.4"
              fill="none"
              className="hwb-anim-dash"
            />
            {/* Moving scanning telemetry vertical line */}
            <line x1="15" y1="24" x2="15" y2="98" stroke="#10B981" strokeWidth="1.2" opacity="0.8" className="hwb-anim-scan-telemetry" />
          </g>

          {/* Peak Auto-Scale Beacon Tag */}
          <g transform="translate(195, 26)">
            {/* Tag badge */}
            <rect x="0" y="0" width="82" height="15" fill="#F09018" />
            <text x="41" y="10.5" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="800" fontFamily="Carlito, sans-serif">PEAK: +8 PODS</text>
            {/* Target line down to peak curve */}
            <line x1="41" y1="15" x2="41" y2="28" stroke="#F09018" strokeWidth="1.2" strokeDasharray="2 2" />
            {/* Glowing Beacon point */}
            <circle cx="41" cy="28" r="3.5" fill="#F09018" />
            <circle cx="41" cy="28" r="3.5" stroke="#F09018" strokeWidth="1" className="hwb-anim-ping" fill="none" />
          </g>

          {/* Bottom Live Throughput Tag */}
          <text x="12" y="94" fill="var(--hwb-text-sub, #64748B)" fontSize="7.5" fontFamily="'IBM Plex Mono', monospace">Throughput: 84.6k req/s • Load Balanced: 100%</text>
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
