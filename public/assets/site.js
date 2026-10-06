/* AskJuno site prototype — one small, dependency-free script for every page. */
(function () {
  var d = document, root = d.documentElement; root.classList.add('js');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var ease = function (x) { return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };

  // theme toggle (initial theme set inline in <head>)
  var tb = d.querySelector('.theme-btn');
  var syncTheme = function () { var t = root.getAttribute('data-theme'); if (tb) { tb.setAttribute('aria-pressed', String(t === 'dark')); tb.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'); } };
  if (tb) tb.addEventListener('click', function () { var n = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; root.setAttribute('data-theme', n); try { localStorage.setItem('aj-theme', n); } catch (e) {} syncTheme(); });
  syncTheme();

  // mobile menu
  var mb = d.querySelector('.menu-btn'), menu = d.getElementById('menu');
  if (mb && menu) {
    var setM = function (o) { mb.setAttribute('aria-expanded', String(o)); mb.textContent = o ? 'Close' : 'Menu'; menu.hidden = !o; d.body.classList.toggle('menu-open', o); };
    mb.addEventListener('click', function () { setM(mb.getAttribute('aria-expanded') !== 'true'); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setM(false); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) { setM(false); mb.focus(); } });
  }

  // top / bottom buttons, scroll-linked sections
  var up = d.querySelector('[data-jump="top"]'), dn = d.querySelector('[data-jump="bottom"]'), jp = d.querySelector('.jumpers');
  if (up) up.addEventListener('click', function () { scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });
  if (dn) dn.addEventListener('click', function () { scrollTo({ top: d.documentElement.scrollHeight, behavior: reduce ? 'auto' : 'smooth' }); });
  var scrollies = Array.prototype.slice.call(d.querySelectorAll('[data-scrolly]')), hooks = [], raf = 0;
  var tick = function () {
    raf = 0;
    var y = scrollY, max = d.documentElement.scrollHeight - innerHeight;
    if (up) up.hidden = y < 500;
    if (dn) dn.hidden = y > max - 400;
    scrollies.forEach(function (s) { var r = s.getBoundingClientRect(), span = r.height - innerHeight * 0.8, p = span > 0 ? clamp(-r.top / span, 0, 1) : 1; s.style.setProperty('--p', (reduce ? 1 : p).toFixed(4)); });
    hooks.forEach(function (f) { f(); });
  };
  addEventListener('scroll', function () { if (!raf) raf = requestAnimationFrame(tick); }, { passive: true });
  addEventListener('resize', function () { if (!raf) raf = requestAnimationFrame(tick); }, { passive: true });

  // reveal once
  if ('IntersectionObserver' in window) {
    var once = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); once.unobserve(e.target); } }); }, { threshold: 0.12 });
    d.querySelectorAll('.rv').forEach(function (el) { once.observe(el); });
    var live = new IntersectionObserver(function (es) { es.forEach(function (e) { e.target.classList.toggle('run', e.isIntersecting); }); });
    d.querySelectorAll('.viz').forEach(function (el) { live.observe(el); });
  } else { d.querySelectorAll('.rv').forEach(function (el) { el.classList.add('in'); }); }

  // header dropdown groups (disclosure pattern)
  var groups = Array.prototype.slice.call(d.querySelectorAll('.nav .grp'));
  var closeAll = function (except) { groups.forEach(function (g) { if (g === except) return; var b = g.querySelector('button'); b.setAttribute('aria-expanded', 'false'); g.querySelector('.drop').hidden = true; }); };
  groups.forEach(function (g) {
    var b = g.querySelector('button'), p = g.querySelector('.drop');
    b.addEventListener('click', function (e) { e.stopPropagation(); var open = b.getAttribute('aria-expanded') !== 'true'; closeAll(g); b.setAttribute('aria-expanded', String(open)); p.hidden = !open; });
    g.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeAll(); b.focus(); } });
    p.addEventListener('click', function (e) { if (e.target.closest('a')) closeAll(); });
    g.addEventListener('focusout', function (e) { if (!g.contains(e.relatedTarget)) { b.setAttribute('aria-expanded', 'false'); p.hidden = true; } });
  });
  d.addEventListener('click', function () { closeAll(); });

  // right-side section dots
  var dotLinks = Array.prototype.slice.call(d.querySelectorAll('.dots a'));
  if (dotLinks.length && 'IntersectionObserver' in window) {
    var secs = dotLinks.map(function (a) { return d.getElementById(a.getAttribute('href').split('#')[1]); });
    var so = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { var i = secs.indexOf(e.target); dotLinks.forEach(function (a, k) { if (k === i) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); }); } }); }, { rootMargin: '-45% 0px -50% 0px' });
    secs.forEach(function (s) { if (s) so.observe(s); });
  }

  // generic tabs: [role=tablist] with aria-controls panels; optional auto-advance (data-auto ms)
  d.querySelectorAll('[role="tablist"]').forEach(function (list) {
    if (list.closest('#what-we-do') || list.closest('#products') || list.classList.contains('wwd-tabs')) return;
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    var host = list.closest('[data-tabs]') || list.parentNode, bar = host.querySelector('.autobar'), counter = host.querySelector('[data-count]');
    var dots = Array.prototype.slice.call(host.querySelectorAll('.hwb-dots i'));
    var rowBars = Array.prototype.slice.call(list.querySelectorAll('.hwb-row-bar'));
    var ms = +(list.dataset.auto || 0), timer = 0, idx = 0, stopped = reduce || !ms;
    var select = function (i, focus) {
      idx = i;
      tabs.forEach(function (t, k) {
        var on = k === i;
        t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; t.classList.toggle('past', k < i);
        var p = d.getElementById(t.getAttribute('aria-controls')); if (p) p.hidden = !on;
      });
      list.style.setProperty('--k', i);
      if (counter) counter.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(tabs.length).padStart(2, '0');
      if (dots.length) dots.forEach(function (dt, k) { dt.classList.toggle('on', k === i); });
      if (focus) tabs[i].focus();
      if (bar && !stopped) { bar.style.setProperty('--dur', ms + 'ms'); bar.classList.remove('go'); void bar.offsetWidth; bar.classList.add('go'); }
      if (rowBars.length) rowBars.forEach(function (rb, k) {
        rb.classList.remove('go');
        if (k === i && !stopped) { rb.style.setProperty('--dur', ms + 'ms'); void rb.offsetWidth; rb.classList.add('go'); }
      });
    };
    var restart = function () { clearInterval(timer); if (!stopped) timer = setInterval(function () { select((idx + 1) % tabs.length); }, ms); };
    var stop = function () { stopped = true; clearInterval(timer); if (bar) bar.classList.remove('go'); rowBars.forEach(function (rb) { rb.classList.remove('go'); }); };
    var start = function () { if (stopped) return; clearInterval(timer); timer = setInterval(function () { select((idx + 1) % tabs.length); }, ms); };
    var jump = function (i, focus) { select(i, focus); restart(); };
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { jump(i); });
      t.addEventListener('keydown', function (e) {
        var k = e.key, n = null;
        if (k === 'ArrowRight' || k === 'ArrowDown') n = (i + 1) % tabs.length;
        if (k === 'ArrowLeft' || k === 'ArrowUp') n = (i - 1 + tabs.length) % tabs.length;
        if (k === 'Home') n = 0; if (k === 'End') n = tabs.length - 1;
        if (n !== null) { e.preventDefault(); jump(n, true); }
      });
    });
    host.querySelectorAll('[data-step]').forEach(function (b) { b.addEventListener('click', function () { jump((idx + (+b.dataset.step) + tabs.length) % tabs.length); }); });
    if (!stopped && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) start(); else clearInterval(timer); }); }, { threshold: 0.1 }).observe(host);
    }
    select(0);
    if (!stopped) start();
  });

  // contact form → existing /api/contact endpoint (same payload and rules as the old site)
  var BLOCKED = 'gmail.com googlemail.com yahoo.com yahoo.co.uk yahoo.co.in yahoo.ca yahoo.com.au outlook.com hotmail.com hotmail.co.uk live.com live.co.uk msn.com icloud.com me.com mac.com aol.com mail.com email.com usa.com gmx.com gmx.de web.de inbox.com fastmail.com zoho.com yandex.com yandex.ru mail.ru proton.me protonmail.com tuta.com tutanota.com mailfence.com posteo.de startmail.com rediffmail.com rediffmailpro.com sify.com indiatimes.com'.split(' ');
  var cf = d.getElementById('contact-form');
  if (cf) {
    var rules = {
      name: function (v) { return v.trim() ? '' : 'Name is required'; },
      email: function (v) { v = v.trim().toLowerCase(); if (!v) return 'Email is required'; if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Enter a valid email address'; return BLOCKED.indexOf(v.split('@')[1]) > -1 ? 'Please use your company email address' : ''; },
      phone: function (v) { v = v.trim(); if (!v) return ''; var dg = v.replace(/\D/g, ''); if (dg.length < 7 || dg.length > 15) return 'Enter a valid phone number (7–15 digits)'; return /^\+?[0-9]{7,15}$/.test(v.replace(/[\s()-]/g, '')) ? '' : 'Enter a valid phone number format'; },
      subject: function (v) { return v.trim() ? '' : 'Subject is required'; }
    };
    var check = function (name) {
      var el = cf.elements[name], msg = rules[name](el.value), err = d.getElementById('err-' + name);
      el.setAttribute('aria-invalid', msg ? 'true' : 'false'); if (err) { err.textContent = msg; err.hidden = !msg; }
      return !msg;
    };
    Object.keys(rules).forEach(function (n) { cf.elements[n].addEventListener('blur', function () { check(n); }); });
    cf.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = Object.keys(rules).map(check).every(Boolean), status = d.getElementById('form-status');
      if (!ok) { var bad = cf.querySelector('[aria-invalid="true"]'); if (bad) bad.focus(); return; }
      var btn = cf.querySelector('button[type="submit"]'); btn.disabled = true; btn.textContent = 'Sending…'; status.hidden = true;
      var payload = {}; ['name', 'email', 'phone', 'company', 'subject', 'message'].forEach(function (k) { payload[k] = cf.elements[k].value.trim(); });
      fetch(cf.dataset.endpoint || '/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (data) { if (!r.ok || data.success === false) throw new Error(data.message || data.error || 'Unable to send your request right now.'); }); })
        .then(function () { cf.hidden = true; var s = d.getElementById('form-sent'); s.hidden = false; s.querySelector('h3').focus(); })
        .catch(function (err) { var m = err && err.message && !(err instanceof TypeError) ? err.message : 'We couldn’t send your message right now.'; status.hidden = false; status.innerHTML = ''; status.appendChild(d.createTextNode(m + ' Please try again, or email ')); var a = d.createElement('a'); a.href = 'mailto:enquiry@askjuno.com'; a.textContent = 'enquiry@askjuno.com'; status.appendChild(a); status.appendChild(d.createTextNode('.')); })
        .then(function () { btn.disabled = false; btn.textContent = 'Book a consultation →'; });
    });
    var again = d.getElementById('form-again');
    if (again) again.addEventListener('click', function () { cf.reset(); cf.hidden = false; d.getElementById('form-sent').hidden = true; cf.elements.name.focus(); });
  }

  // ---------- home hero: the whiteboard ----------
  var hero = d.querySelector('.wb');
  if (hero) {
    // one "scroll click" = one mouse-wheel notch (~100px). 16 clicks total:
    // 0-2 wait · 2-7 arrange (done by click 7) · 7-9 line reaches box 4 · 9-11 line reaches box 8 · 11-13 line reaches box 12 · 13-16 pause to read (then the orange pulse runs).
    var STEP = 170, WAIT = 2, ARRANGE = 5, SEG1 = 9, SEG2 = 11, SEG3 = 13, TOTAL = 16;
    var LABELS = ['IDEA', 'PROBLEM', 'PROCESS', 'DOCUMENTS', 'SYSTEM', 'AI', 'AUTOMATION', 'INTEGRATION', 'PRODUCT', 'ADOPTION', 'DECISIONS', 'IMPACT'];
    var pin = hero.querySelector('.pin'), board = hero.querySelector('.board'), copy = hero.querySelector('.copy'), h1 = hero.querySelector('h1');
    var flow = hero.querySelector('.flow'), pulse = hero.querySelector('.pulse');
    var seed = 11, rnd = function () { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    var marks = LABELS.map(function (l, i) {
      var el = d.createElement('span');
      el.className = 'mark' + (l === 'SYSTEM' ? ' sys' : '') + (l === 'IMPACT' ? ' imp' : '');
      el.textContent = l;
      board.appendChild(el);
      return { el: el, ph: rnd() * 6.28 };
    });
    hero.style.height = 'calc(100svh - 74px + ' + (TOTAL * STEP) + 'px)';
    var last = -1, t0 = performance.now(), lenAt = [0, 1];
    var layout = function () {
      var W = pin.clientWidth, H = pin.clientHeight, narrow = W < 720, cols = narrow ? 3 : 4, rows = LABELS.length / cols;
      var pb = pin.getBoundingClientRect(), cb = copy.getBoundingClientRect(), hb = h1.getBoundingClientRect();
      var top = cb.bottom - pb.top + (narrow ? 28 : 46), bottom = H - (narrow ? 34 : 46);
      var left = narrow ? 18 : W * 0.1, right = W - (narrow ? 18 : W * 0.1), gx = (right - left) / cols, gy = (bottom - top) / rows;
      marks.forEach(function (m, i) {
        var r = Math.floor(i / cols), c = r % 2 ? cols - 1 - (i % cols) : i % cols, w = m.el.offsetWidth;
        m.tx = clamp(left + gx * (c + 0.5), w / 2 + 6, W - w / 2 - 6); m.ty = top + gy * (r + 0.5);
      });
      // scatter inside the visible screen: never over the headline/button, never on top of each other
      seed = 11;
      // keep-out zone = only the headline and the button themselves, so the sides beside the headline fill up too
      var bb = copy.querySelector('.btn').getBoundingClientRect(), pad = narrow ? 14 : 22, gap = narrow ? 10 : 26;
      var av = { l: Math.min(hb.left, bb.left) - pb.left - gap, r: Math.max(hb.right, bb.right) - pb.left + gap, t: hb.top - pb.top - gap, b: bb.bottom - pb.top + gap };
      var corner = { l: W - 96, r: W, t: H - 150, b: H };
      var placed = [], hit = function (a, b2, m2) { return a.l < b2.r + m2 && a.r > b2.l - m2 && a.t < b2.b + m2 && a.b > b2.t - m2; };
      // zones: some marks are reserved for the space left and right of the headline, the rest go anywhere free
      var sideL = { x0: pad, x1: av.l, y0: pad, y1: av.b + 40 }, sideR = { x0: av.r, x1: W - pad, y0: pad, y1: av.b + 40 };
      var hasSides = !narrow && sideL.x1 - sideL.x0 > 150;
      marks.forEach(function (m, idx) {
        var w = m.el.offsetWidth + 10, h = m.el.offsetHeight + 10, best = null, x, y, rect;
        var zone = hasSides && idx % 3 === 0 ? (idx % 2 ? sideL : sideR) : { x0: pad, x1: W - pad, y0: pad, y1: H - pad - 26 };
        for (var n = 0; n < 400; n++) {
          var z = n < 250 ? zone : { x0: pad, x1: W - pad, y0: pad, y1: H - pad - 26 };
          x = z.x0 + w / 2 + rnd() * Math.max(1, z.x1 - z.x0 - w); y = z.y0 + h / 2 + rnd() * Math.max(1, z.y1 - z.y0 - h);
          rect = { l: x - w / 2, r: x + w / 2, t: y - h / 2, b: y + h / 2 };
          if (rect.l < pad || rect.r > W - pad || rect.t < pad || rect.b > H - pad - 20) continue;
          if (hit(rect, av, 0) || hit(rect, corner, 0)) continue;
          var ok = true; for (var k = 0; k < placed.length; k++) if (hit(rect, placed[k], narrow ? 6 : 18)) { ok = false; break; }
          if (ok) { best = rect; break; }
          if (!best) best = rect;
        }
        placed.push(best); m.sx = (best.l + best.r) / 2; m.sy = (best.t + best.b) / 2; m.r = (rnd() - 0.5) * 16;
        m.sp = 0.55 + rnd() * 0.5; m.amp = 6 + rnd() * 5;
      });
      var dd = marks.map(function (m, i) { return (i ? 'L' : 'M') + m.tx.toFixed(1) + ' ' + m.ty.toFixed(1); }).join(' ');
      flow.setAttribute('d', dd); pulse.setAttribute('d', dd);
      // cumulative length fraction (0-1) of the full path at each box, so --lp can target "reached box N" precisely
      var segLen = 0, total = 0, lens = [0];
      for (var i = 1; i < marks.length; i++) { segLen = Math.hypot(marks[i].tx - marks[i - 1].tx, marks[i].ty - marks[i - 1].ty); total += segLen; lens.push(total); }
      lenAt = lens.map(function (l) { return total > 0 ? l / total : 0; });
      render(true);
    };
    var render = function (force) {
      var clicks = (scrollY - hero.offsetTop) / STEP;
      var qa = reduce ? 1 : clamp((clicks - WAIT) / ARRANGE, 0, 1);
      // three draw segments: box1->box4 (by click SEG1), box4->box8 (by SEG2), box8->box12 (by SEG3)
      var b4 = lenAt[3] || 0, b8 = lenAt[7] || 0, b12 = lenAt[11] || 1, lp;
      if (reduce) lp = 1;
      else if (clicks <= ARRANGE + WAIT) lp = 0;
      else if (clicks < SEG1) lp = b4 * ease(clamp((clicks - (WAIT + ARRANGE)) / (SEG1 - (WAIT + ARRANGE)), 0, 1));
      else if (clicks < SEG2) lp = b4 + (b8 - b4) * ease(clamp((clicks - SEG1) / (SEG2 - SEG1), 0, 1));
      else if (clicks < SEG3) lp = b8 + (b12 - b8) * ease(clamp((clicks - SEG2) / (SEG3 - SEG2), 0, 1));
      else lp = b12;
      var qd = clamp((clicks - SEG3) / (TOTAL - SEG3), 0, 1);
      if (!force && qa === last && (qa === 1 || reduce) && qd >= 1) return;
      last = qa;
      var now = (performance.now() - t0) / 1000;
      pin.style.setProperty('--q', qa.toFixed(4));
      marks.forEach(function (m, i) {
        var e = ease(clamp((qa - (i / (marks.length - 1)) * 0.38) / 0.62, 0, 1)), dr = reduce ? 0 : 1 - e;
        var sp = m.sp || 0.7, amp = m.amp || 8;
        var x = m.sx + (m.tx - m.sx) * e + Math.sin(now * sp * 0.6 + m.ph) * amp * 0.6 * dr, y = m.sy + (m.ty - m.sy) * e + Math.sin(now * sp + m.ph * 1.3) * amp * dr;
        var wob = Math.sin(now * sp * 0.8 + m.ph) * 1.6 * dr;
        m.el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) translate(-50%,-50%) rotate(' + (m.r * (1 - e)).toFixed(2) + 'deg)';
        m.el.style.opacity = (0.92 + 0.08 * e).toFixed(3);
      });
      pin.style.setProperty('--lp', lp.toFixed(4));
      pin.classList.toggle('done', clicks >= SEG3);
    };
    var visible = true;
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }).observe(pin);
    (function idle() { if (visible && (last < 1 || !pin.classList.contains('done')) && !reduce) render(true); requestAnimationFrame(idle); })();
    hooks.push(function () { render(); });
    addEventListener('resize', layout, { passive: true });
    if (d.fonts && d.fonts.ready) d.fonts.ready.then(layout);
    layout();
  }
  tick();
})();
