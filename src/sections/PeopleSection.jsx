import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { teamData } from '../data/teamData';
import '../styles/people-section.css';

const ITEMS_PER_ROW = 4; // 1 x 4 grid (1 row of 4 team members)

export default function PeopleSection() {
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Divide teamData into chunks of 4 (1x4 per page)
  const pages = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < teamData.length; i += ITEMS_PER_ROW) {
      chunks.push(teamData.slice(i, i + ITEMS_PER_ROW));
    }
    return chunks;
  }, []);

  const totalPages = pages.length;

  const handlePrev = useCallback(() => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const handleNext = useCallback(() => {
    setPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  // Subtle auto-advance every 8s, paused on user hover or focus
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  return (
    <section className="sec alt" id="our-people" aria-labelledby="h-pp">
      <div className="wrap">
        {/* Header row with Section Head and 1x4 Carousel Navigation */}
        <div className="people-header-row">
          <div className="sec-head">
            <p className="eyebrow">Our people</p>
            <h2 id="h-pp" className="h2 rv in">
              The people behind <em>AskJuno.</em>
            </h2>
            <p className="lead rv in" style={{ '--d': 1 }}>
              Meet the people building technology that solves real business problems.
            </p>
          </div>

          {/* Stepper Controls: Page count & Prev/Next buttons */}
          <div className="people-controls" aria-label="Team carousel controls">
            <div className="people-counter" aria-live="polite">
              <span className="people-counter-current">0{page + 1}</span>
              <span className="people-counter-sep">/</span>
              <span className="people-counter-total">0{totalPages}</span>
            </div>
            <div className="people-nav-btns">
              <button
                type="button"
                className="people-nav-btn prev"
                onClick={handlePrev}
                aria-label="Previous team members"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                className="people-nav-btn next"
                onClick={handleNext}
                aria-label="Next team members"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* 1x4 Slider Container */}
        <div
          className="people-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div
            className="people-track"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {pages.map((group, pageIdx) => (
              <div
                key={pageIdx}
                className="people-page-grid"
                role="region"
                aria-label={`Team group ${pageIdx + 1} of ${totalPages}`}
                aria-hidden={page !== pageIdx}
              >
                {group.map((person) => (
                  <article key={person.name} className="pcard">
                    <figure>
                      <img
                        src={person.img}
                        alt={person.name}
                        loading="lazy"
                        width="400"
                        height="400"
                      />
                    </figure>
                    <div className="pcard-info">
                      <b className="pcard-name">{person.name}</b>
                      <span className="pcard-role">{person.role}</span>
                      <p className="pcard-skills">{person.skills}</p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>


        {/* Bottom CTA Band */}
        <div className="ctaband rv in">
          <div>
            <b>Want to know more about the people behind AskJuno?</b>
            <span>Get to know our team, culture and what drives us.</span>
          </div>
          <a
            className="btn btn-ink sm"
            href="https://www.linkedin.com/company/askjuno/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow AskJuno on LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
