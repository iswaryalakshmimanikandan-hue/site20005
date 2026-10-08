import React, { useState, useEffect, useRef } from 'react';

const sections = [
  { id: 'hero', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'why-juno', title: 'Why AskJuno' },
  { id: 'value', title: 'Principles' },
  { id: 'what-we-do', title: 'What we do' },
  { id: 'products', title: 'Products' },
  { id: 'technology', title: 'Engineering' },
  { id: 'approach', title: 'Approach' },
  { id: 'how-we-build', title: 'How we build' },
  { id: 'industries', title: 'Industries' },
  { id: 'stories', title: 'Stories' },
  { id: 'our-people', title: 'People' },
  { id: 'faq', title: 'FAQ' },
  { id: 'contact', title: 'Contact' }
];

export default function SectionDots() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isRevealed, setIsRevealed] = useState(false);
  const leaveTimerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setIsRevealed(true);
  };

  const handleMouseLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setIsRevealed(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    };
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`dots ${isRevealed ? 'is-revealed' : ''}`}
      aria-label="Sections"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {sections.map(({ id, title }) => (
        <a
          key={id}
          href={`#${id}`}
          title={title}
          aria-current={activeSection === id ? 'true' : undefined}
          onClick={(e) => handleClick(e, id)}
        >
          <small>{title}</small>
          <i></i>
        </a>
      ))}
    </nav>
  );
}
