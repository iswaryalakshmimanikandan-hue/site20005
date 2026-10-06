import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('aj-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } catch {
      return 'light';
    }
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('aj-theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownToggle = (id, e) => {
    e.stopPropagation();
    setActiveDropdown(prev => (prev === id ? null : id));
  };

  return (
    <>
      <header className="top">
        <div className="wrap">
          <Link to="/" className="logo" aria-label="AskJuno home">
            <img className="lg-l" src="/assets/logo-dark-text.webp" width="112" height="52" alt="AskJuno" />
            <img className="lg-d" src="/assets/logo-light-text.webp" width="112" height="52" alt="AskJuno" />
          </Link>

          <nav className="nav" aria-label="Main" ref={navRef}>
            {/* Who we are */}
            <div className="grp">
              <button
                type="button"
                aria-expanded={activeDropdown === 'dd0'}
                aria-controls="dd0"
                onClick={(e) => handleDropdownToggle('dd0', e)}
              >
                Who we are
              </button>
              <div className="drop" id="dd0" hidden={activeDropdown !== 'dd0'}>
                <a href="/#about" onClick={() => setActiveDropdown(null)}>About us<small>Our story & mission</small></a>
                <a href="/#why-juno" onClick={() => setActiveDropdown(null)}>Why AskJuno<small>Why businesses choose us</small></a>
                <a href="/#value" onClick={() => setActiveDropdown(null)}>Our principles<small>Vision, mission & values</small></a>
              </div>
            </div>

            {/* What we build */}
            <div className="grp">
              <button
                type="button"
                aria-expanded={activeDropdown === 'dd1'}
                aria-controls="dd1"
                onClick={(e) => handleDropdownToggle('dd1', e)}
              >
                What we build
              </button>
              <div className="drop" id="dd1" hidden={activeDropdown !== 'dd1'}>
                <a href="/#what-we-do" onClick={() => setActiveDropdown(null)}>What we do<small>Services & capabilities</small></a>
                <a href="/#products" onClick={() => setActiveDropdown(null)}>Products & platforms<small>ArivA, EETi, MediGuard, FinReview AI</small></a>
                <a href="/#technology" onClick={() => setActiveDropdown(null)}>Engineering<small>Technical capabilities</small></a>
              </div>
            </div>

            {/* How we build */}
            <div className="grp">
              <button
                type="button"
                aria-expanded={activeDropdown === 'dd2'}
                aria-controls="dd2"
                onClick={(e) => handleDropdownToggle('dd2', e)}
              >
                How we build
              </button>
              <div className="drop" id="dd2" hidden={activeDropdown !== 'dd2'}>
                <a href="/#approach" onClick={() => setActiveDropdown(null)}>Our approach<small>Partnership & collaboration</small></a>
                <a href="/#how-we-build" onClick={() => setActiveDropdown(null)}>How we build<small>5-step engineering process</small></a>
              </div>
            </div>

            {/* Impact */}
            <div className="grp">
              <button
                type="button"
                aria-expanded={activeDropdown === 'dd3'}
                aria-controls="dd3"
                onClick={(e) => handleDropdownToggle('dd3', e)}
              >
                Impact
              </button>
              <div className="drop" id="dd3" hidden={activeDropdown !== 'dd3'}>
                <a href="/#industries" onClick={() => setActiveDropdown(null)}>Industries<small>Sectors we serve</small></a>
                <a href="/#stories" onClick={() => setActiveDropdown(null)}>Success stories<small>Measurable results</small></a>
                <a href="/#our-people" onClick={() => setActiveDropdown(null)}>Our people<small>The team behind AskJuno</small></a>
              </div>
            </div>

            <Link
              to="/insights"
              aria-current={location.pathname.startsWith('/insights') ? 'page' : undefined}
            >
              Insights
            </Link>

            <a className="btn btn-ink btn-sm" href="/#contact">
              Let’s build together
            </a>
          </nav>

          <div className="tools">
            <button
              className="icon-btn theme-btn"
              type="button"
              aria-pressed={theme === 'dark'}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={toggleTheme}
            >
              <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4.2"/>
                <path d="M12 2v2.2M12 19.8V22M2 12h2.2M19.8 12H22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M19.1 4.9l-1.6 1.6M6.5 17.5l-1.6 1.6"/>
              </svg>
              <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/>
              </svg>
            </button>

            <button
              className="menu-btn"
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="menu"
              onClick={() => setMobileMenuOpen(prev => !prev)}
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <nav className="menu" id="menu" aria-label="Menu" hidden={!mobileMenuOpen}>
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <p className="mgroup">Who we are</p>
        <a href="/#about" onClick={() => setMobileMenuOpen(false)}>About us</a>
        <a href="/#why-juno" onClick={() => setMobileMenuOpen(false)}>Why AskJuno</a>
        <a href="/#value" onClick={() => setMobileMenuOpen(false)}>Our principles</a>
        
        <p className="mgroup">What we build</p>
        <a href="/#what-we-do" onClick={() => setMobileMenuOpen(false)}>What we do</a>
        <a href="/#products" onClick={() => setMobileMenuOpen(false)}>Products & platforms</a>
        <a href="/#technology" onClick={() => setMobileMenuOpen(false)}>Engineering</a>

        <p className="mgroup">How we build</p>
        <a href="/#approach" onClick={() => setMobileMenuOpen(false)}>Our approach</a>
        <a href="/#how-we-build" onClick={() => setMobileMenuOpen(false)}>How we build</a>

        <p className="mgroup">Impact</p>
        <a href="/#industries" onClick={() => setMobileMenuOpen(false)}>Industries</a>
        <a href="/#stories" onClick={() => setMobileMenuOpen(false)}>Success stories</a>
        <a href="/#our-people" onClick={() => setMobileMenuOpen(false)}>Our people</a>

        <p className="mgroup">Proven in practice</p>
        <Link to="/insights" onClick={() => setMobileMenuOpen(false)}>Insights</Link>
        <a className="btn btn-ink" href="/#contact" onClick={() => setMobileMenuOpen(false)}>Let’s build together</a>
      </nav>
    </>
  );
}
