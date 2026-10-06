import React, { useEffect, useRef } from 'react';

const LABELS = ['IDEA', 'PROBLEM', 'PROCESS', 'DOCUMENTS', 'SYSTEM', 'AI', 'AUTOMATION', 'INTEGRATION', 'PRODUCT', 'ADOPTION', 'DECISIONS', 'IMPACT'];

export default function HeroWhiteboard() {
  const heroRef = useRef(null);
  const pinRef = useRef(null);
  const boardRef = useRef(null);
  const copyRef = useRef(null);
  const h1Ref = useRef(null);
  const btnRef = useRef(null);
  const flowRef = useRef(null);
  const pulseRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const pin = pinRef.current;
    const board = boardRef.current;
    const copy = copyRef.current;
    const h1 = h1Ref.current;
    const btn = btnRef.current;
    const flow = flowRef.current;
    const pulse = pulseRef.current;
    if (!hero || !pin || !board || !copy || !h1 || !btn || !flow || !pulse) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

    const STEP = 170, WAIT = 2, ARRANGE = 5, SEG1 = 9, SEG2 = 11, SEG3 = 13, TOTAL = 16;
    let seed = 11;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    // Clean previous marks if any
    const existingMarks = board.querySelectorAll('.mark');
    existingMarks.forEach(el => el.remove());

    const marks = LABELS.map((label) => {
      const el = document.createElement('span');
      el.className = 'mark' + (label === 'SYSTEM' ? ' sys' : '') + (label === 'IMPACT' ? ' imp' : '');
      el.textContent = label;
      board.appendChild(el);
      return { el, ph: rnd() * 6.28 };
    });

    hero.style.height = `calc(100svh - 74px + ${TOTAL * STEP}px)`;
    let last = -1;
    const t0 = performance.now();
    let lenAt = [0, 1];

    const layout = () => {
      const W = pin.clientWidth;
      const H = pin.clientHeight;
      const narrow = W < 720;
      const cols = narrow ? 3 : 4;
      const rows = LABELS.length / cols;

      const pb = pin.getBoundingClientRect();
      const cb = copy.getBoundingClientRect();
      const hb = h1.getBoundingClientRect();

      const top = cb.bottom - pb.top + (narrow ? 28 : 46);
      const bottom = H - (narrow ? 34 : 46);
      const left = narrow ? 18 : W * 0.1;
      const right = W - (narrow ? 18 : W * 0.1);
      const gx = (right - left) / cols;
      const gy = (bottom - top) / rows;

      marks.forEach((m, i) => {
        const r = Math.floor(i / cols);
        const c = r % 2 ? cols - 1 - (i % cols) : i % cols;
        const w = m.el.offsetWidth || 80;
        m.tx = clamp(left + gx * (c + 0.5), w / 2 + 6, W - w / 2 - 6);
        m.ty = top + gy * (r + 0.5);
      });

      seed = 11;
      const bb = btn.getBoundingClientRect();
      const pad = narrow ? 14 : 22;
      const gap = narrow ? 10 : 26;
      const av = {
        l: Math.min(hb.left, bb.left) - pb.left - gap,
        r: Math.max(hb.right, bb.right) - pb.left + gap,
        t: hb.top - pb.top - gap,
        b: bb.bottom - pb.top + gap
      };
      const corner = { l: W - 96, r: W, t: H - 150, b: H };
      const placed = [];
      const hit = (a, b2, m2) => a.l < b2.r + m2 && a.r > b2.l - m2 && a.t < b2.b + m2 && a.b > b2.t - m2;

      const sideL = { x0: pad, x1: av.l, y0: pad, y1: av.b + 40 };
      const sideR = { x0: av.r, x1: W - pad, y0: pad, y1: av.b + 40 };
      const hasSides = !narrow && sideL.x1 - sideL.x0 > 150;

      marks.forEach((m, idx) => {
        const w = (m.el.offsetWidth || 80) + 10;
        const h = (m.el.offsetHeight || 30) + 10;
        let best = null;
        let x, y, rect;
        const zone = hasSides && idx % 3 === 0 ? (idx % 2 ? sideL : sideR) : { x0: pad, x1: W - pad, y0: pad, y1: H - pad - 26 };

        for (let n = 0; n < 400; n++) {
          const z = n < 250 ? zone : { x0: pad, x1: W - pad, y0: pad, y1: H - pad - 26 };
          x = z.x0 + w / 2 + rnd() * Math.max(1, z.x1 - z.x0 - w);
          y = z.y0 + h / 2 + rnd() * Math.max(1, z.y1 - z.y0 - h);
          rect = { l: x - w / 2, r: x + w / 2, t: y - h / 2, b: y + h / 2 };
          if (rect.l < pad || rect.r > W - pad || rect.t < pad || rect.b > H - pad - 20) continue;
          if (hit(rect, av, 0) || hit(rect, corner, 0)) continue;
          let ok = true;
          for (let k = 0; k < placed.length; k++) {
            if (hit(rect, placed[k], narrow ? 6 : 18)) {
              ok = false;
              break;
            }
          }
          if (ok) { best = rect; break; }
          if (!best) best = rect;
        }
        placed.push(best || rect);
        m.sx = ((best || rect).l + (best || rect).r) / 2;
        m.sy = ((best || rect).t + (best || rect).b) / 2;
        m.r = (rnd() - 0.5) * 16;
        m.sp = 0.55 + rnd() * 0.5;
        m.amp = 6 + rnd() * 5;
      });

      const dd = marks.map((m, i) => (i ? 'L' : 'M') + m.tx.toFixed(1) + ' ' + m.ty.toFixed(1)).join(' ');
      flow.setAttribute('d', dd);
      pulse.setAttribute('d', dd);

      let segLen = 0, total = 0;
      const lens = [0];
      for (let i = 1; i < marks.length; i++) {
        segLen = Math.hypot(marks[i].tx - marks[i - 1].tx, marks[i].ty - marks[i - 1].ty);
        total += segLen;
        lens.push(total);
      }
      lenAt = lens.map(l => (total > 0 ? l / total : 0));
      render(true);
    };

    const render = (force) => {
      const clicks = (window.scrollY - hero.offsetTop) / STEP;
      const qa = reduce ? 1 : clamp((clicks - WAIT) / ARRANGE, 0, 1);
      const b4 = lenAt[3] || 0, b8 = lenAt[7] || 0, b12 = lenAt[11] || 1;
      let lp;

      if (reduce) lp = 1;
      else if (clicks <= ARRANGE + WAIT) lp = 0;
      else if (clicks < SEG1) lp = b4 * ease(clamp((clicks - (WAIT + ARRANGE)) / (SEG1 - (WAIT + ARRANGE)), 0, 1));
      else if (clicks < SEG2) lp = b4 + (b8 - b4) * ease(clamp((clicks - SEG1) / (SEG2 - SEG1), 0, 1));
      else if (clicks < SEG3) lp = b8 + (b12 - b8) * ease(clamp((clicks - SEG2) / (SEG3 - SEG2), 0, 1));
      else lp = b12;

      const qd = clamp((clicks - SEG3) / (TOTAL - SEG3), 0, 1);
      if (!force && qa === last && (qa === 1 || reduce) && qd >= 1) return;
      last = qa;
      const now = (performance.now() - t0) / 1000;

      pin.style.setProperty('--q', qa.toFixed(4));
      marks.forEach((m, i) => {
        const e = ease(clamp((qa - (i / (marks.length - 1)) * 0.38) / 0.62, 0, 1));
        const dr = reduce ? 0 : 1 - e;
        const sp = m.sp || 0.7;
        const amp = m.amp || 8;
        const x = m.sx + (m.tx - m.sx) * e + Math.sin(now * sp * 0.6 + m.ph) * amp * 0.6 * dr;
        const y = m.sy + (m.ty - m.sy) * e + Math.sin(now * sp + m.ph * 1.3) * amp * dr;
        m.el.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) translate(-50%,-50%) rotate(${(m.r * (1 - e)).toFixed(2)}deg)`;
        m.el.style.opacity = (0.92 + 0.08 * e).toFixed(3);
      });

      pin.style.setProperty('--lp', lp.toFixed(4));
      pin.classList.toggle('done', clicks >= SEG3);
    };

    let rafId;
    let visible = true;
    const obs = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    obs.observe(pin);

    const idle = () => {
      if (visible && (last < 1 || !pin.classList.contains('done')) && !reduce) {
        render(true);
      }
      rafId = requestAnimationFrame(idle);
    };
    rafId = requestAnimationFrame(idle);

    const onScroll = () => render(false);
    const onResize = () => layout();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(layout);
    } else {
      setTimeout(layout, 100);
    }

    return () => {
      obs.disconnect();
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section className="wb" id="hero" aria-labelledby="h-hero" ref={heroRef}>
      <div className="pin" ref={pinRef}>
        <div className="board" aria-hidden="true" ref={boardRef}>
          <svg>
            <path className="flow" pathLength="1" ref={flowRef} />
            <path className="pulse" pathLength="1" ref={pulseRef} />
          </svg>
        </div>
        <div className="copy" ref={copyRef}>
          <h1 id="h-hero" ref={h1Ref}>
            From idea to impact.<br />
            <span>Engineered.</span>
          </h1>
          <a className="btn btn-or" href="#contact" ref={btnRef}>
            Let’s build together <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className="sr" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
          How we work: idea, problem, process, documents, system, AI, automation, integration, product, adoption, decisions, impact.
        </p>
        <p className="cue" aria-hidden="true">scroll</p>
      </div>
    </section>
  );
}
