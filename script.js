/* ==========================================================================
   Sharaf Shipping Agency — Saudi Arabia. Home page interaction layer.
   All data injected from the page (window.__PORTS / __SERVICES / __OFFICES).
   ========================================================================== */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ------------------------------------------------------- mobile nav --- */
  var burger = $('#burger'), nav = $('#nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      nav.setAttribute('data-open', String(!open));
      burger.textContent = !open ? 'إغلاق' : 'القائمة';
    });
    $$('a', nav).forEach(function (a) {
      a.addEventListener('click', function () {
        burger.setAttribute('aria-expanded', 'false');
        nav.setAttribute('data-open', 'false');
        burger.textContent = 'القائمة';
      });
    });
  }

  /* ------------------------------------------------ hero chart canvas --- */
  var cv = $('#chart');
  if (cv && !reduce) {
    var ctx = cv.getContext('2d');
    var W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var t0 = performance.now(), raf = null;
    var marks = [], contours = [];
    var ptr = { x: .5, y: .5, tx: .5, ty: .5 };

    function build() {
      var b = cv.getBoundingClientRect();
      W = b.width; H = b.height;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // bathymetric contour bands: soft sine ridges running across the canvas
      contours = [];
      var n = W < 640 ? 5 : 8;
      for (var i = 0; i < n; i++) {
        contours.push({
          y: 0.12 + i * (0.78 / (n - 1)),
          amp: 0.018 + (i % 3) * 0.012,
          freq: 1.1 + (i % 4) * 0.55,
          phase: i * 0.9,
          speed: 0.00006 + (i % 3) * 0.00003
        });
      }
      // vessel marks travelling along the shipping lane
      marks = [];
      var m = W < 640 ? 5 : 9;
      for (var j = 0; j < m; j++) {
        marks.push({
          t: Math.random(),
          lane: Math.floor(Math.random() * contours.length),
          v: 0.00006 + Math.random() * 0.00016,
          big: Math.random() < 0.3
        });
      }
    }

    function laneY(c, x, now) {
      return (c.y + Math.sin(x * c.freq * Math.PI * 2 + c.phase + now * c.speed) * c.amp
              + (ptr.y - 0.5) * 0.02) * H;
    }

    function frame(now) {
      ptr.x += (ptr.tx - ptr.x) * .05; ptr.y += (ptr.ty - ptr.y) * .05;
      ctx.clearRect(0, 0, W, H);

      // chart grid
      ctx.strokeStyle = 'rgba(255,255,255,.045)';
      ctx.lineWidth = 1;
      var step = W < 640 ? 46 : 64;
      for (var gx = 0; gx <= W; gx += step) { ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke(); }
      for (var gy = 0; gy <= H; gy += step) { ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke(); }

      // depth contours
      for (var i = 0; i < contours.length; i++) {
        var c = contours[i];
        ctx.beginPath();
        for (var x = 0; x <= 1.0001; x += 0.02) ctx[x === 0 ? 'moveTo' : 'lineTo'](x * W, laneY(c, x, now));
        var alpha = 0.10 + (i / contours.length) * 0.16;
        ctx.strokeStyle = 'rgba(0,172,181,' + alpha + ')';
        ctx.lineWidth = i % 3 === 0 ? 1.4 : 1;
        ctx.stroke();
      }

      // vessel marks
      for (var k = 0; k < marks.length; k++) {
        var m = marks[k];
        m.t += m.v * 16;
        if (m.t > 1.08) { m.t = -0.08; m.lane = Math.floor(Math.random() * contours.length); }
        var cx = m.t * W, cy = laneY(contours[m.lane], m.t, now);
        var r = m.big ? 4.2 : 2.6;
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = m.big ? 'rgba(0,172,181,.95)' : 'rgba(210,232,236,.75)';
        ctx.fill();
        if (m.big) {
          ctx.beginPath(); ctx.arc(cx, cy, r * 3.6, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(0,172,181,.28)'; ctx.lineWidth = 1; ctx.stroke();
          ctx.beginPath(); ctx.moveTo(cx - 26, cy); ctx.lineTo(cx - r * 4, cy);
          ctx.strokeStyle = 'rgba(0,172,181,.22)'; ctx.stroke();
        }
      }
      raf = requestAnimationFrame(frame);
    }

    build(); raf = requestAnimationFrame(frame);
    window.addEventListener('resize', build, { passive: true });
    window.addEventListener('pointermove', function (e) {
      var b = cv.getBoundingClientRect();
      if (e.clientY > b.bottom + 200) return;
      ptr.tx = Math.max(0, Math.min(1, (e.clientX - b.left) / b.width));
      ptr.ty = Math.max(0, Math.min(1, (e.clientY - b.top) / b.height));
    }, { passive: true });
    document.addEventListener('visibilitychange', function () {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(frame);
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (en) {
          cancelAnimationFrame(raf);
          if (en.isIntersecting && !document.hidden) raf = requestAnimationFrame(frame);
        });
      }, { threshold: 0 }).observe(cv);
    }
  }

  /* ---------------------------------------------------- port explorer --- */
  var PORTS = window.__PORTS || [];
  var plist = $('#port-list'), ppanel = $('#port-panel');
  if (plist && ppanel && PORTS.length) {
    PORTS.forEach(function (p, i) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'port-btn'; b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', String(i === 0));
      b.dataset.i = i;
      b.innerHTML = '<span>' + p.ar + '</span><small>' + p.region + '</small>';
      plist.appendChild(b);
    });
    var pbtns = $$('.port-btn', plist);
    function renderPort(i) {
      var p = PORTS[i];
      var rows = p.rows.map(function (r) {
        var v = r[1];
        var isUrl = /^(www\.|http)/i.test(v);
        var val = isUrl
          ? '<a href="' + (v.indexOf('http') === 0 ? v : 'https://' + v) + '" target="_blank" rel="noopener">' + v + '</a>'
          : (/^[0-9]/.test(v) && v.length < 28 ? '<span class="mono">' + v + '</span>' : v);
        return '<div class="spec-row"><dt>' + r[0] + '</dt><dd>' + val + '</dd></div>';
      }).join('');
      ppanel.innerHTML =
        '<div class="port-head"><h3>' + p.ar + '</h3>' +
        '<a href="port-info/?p=' + i + '">صفحة الميناء الكاملة ↗</a></div>' +
        '<dl class="spec">' + rows + '</dl>';
      pbtns.forEach(function (b, j) { b.setAttribute('aria-selected', String(j === i)); });
      var sel = $('#port-jump'); if (sel) sel.value = String(i);
    }
    plist.addEventListener('click', function (e) {
      var b = e.target.closest('.port-btn'); if (b) renderPort(+b.dataset.i);
    });
    plist.addEventListener('keydown', function (e) {
      var i = pbtns.indexOf(document.activeElement); if (i < 0) return;
      var nx = null;
      if (e.key === 'ArrowDown') nx = i + 1;
      if (e.key === 'ArrowUp') nx = i - 1;
      if (nx === null) return;
      e.preventDefault(); nx = (nx + pbtns.length) % pbtns.length;
      pbtns[nx].focus(); renderPort(nx);
    });
    var jump = $('#port-jump');
    if (jump) {
      PORTS.forEach(function (p, i) {
        var o = document.createElement('option'); o.value = i; o.textContent = p.ar; jump.appendChild(o);
      });
      jump.addEventListener('change', function () {
        renderPort(+jump.value);
        var box = $('#ports'); if (box) box.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      });
    }
    renderPort(0);
  }

  /* --------------------------------------------------- region filter --- */
  var rtabs = $$('.region-tab');
  if (rtabs.length) {
    var cards = $$('.office');
    rtabs.forEach(function (t) {
      t.addEventListener('click', function () {
        rtabs.forEach(function (x) { x.setAttribute('aria-selected', String(x === t)); });
        var r = t.dataset.r;
        cards.forEach(function (c) { c.hidden = (r !== 'الكل' && c.dataset.region !== r); });
      });
    });
  }

  /* ------------------------------------------------- glossary search --- */
  var gq = $('#gq');
  if (gq) {
    var gitems = $$('.gterm'), gc = $('#gcount'), ge = $('#gempty');
    var run = function () {
      var v = (gq.value || '').trim().toLowerCase(), n = 0;
      gitems.forEach(function (i) {
        var ok = !v || i.dataset.k.indexOf(v) > -1;
        i.hidden = !ok; if (ok) n++;
      });
      if (gc) gc.textContent = n + ' / ' + gitems.length;
      if (ge) {
        ge.hidden = n !== 0;
        if (n === 0 && v) {
          ge.innerHTML = 'لا نتائج ضمن المصطلحات المعروضة هنا. ' +
            '<a href="glossary-of-terms/?q=' + encodeURIComponent(gq.value.trim()) +
            '" style="color:var(--cyan-deep);text-decoration:underline">ابحث في القاموس الكامل ←</a>';
        }
      }
    };
    gq.addEventListener('input', run); run();
  }

  /* ---------------------------------------------------------- counts --- */
  var counters = $$('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, target = parseInt(el.dataset.count, 10);
        co.unobserve(el);
        if (reduce) { el.textContent = String(target); return; }
        el.textContent = '0';
        var start = performance.now(), done = false;
        var finish = function () { if (!done) { done = true; el.textContent = String(target); } };
        setTimeout(finish, 1700);
        (function step(now) {
          if (done) return;
          var k = Math.min(1, (now - start) / 1200);
          el.textContent = String(Math.round(target * (1 - Math.pow(1 - k, 3))));
          if (k < 1) requestAnimationFrame(step); else finish();
        })(start);
      });
    }, { threshold: .4 });
    counters.forEach(function (el) {
      el.textContent = String(parseInt(el.dataset.count, 10));
      co.observe(el);
    });
  }

  /* ---------------------------------------------------------- reveal --- */
  var rises = $$('[data-rise]');
  /* في التبويب المخفي لا يعمل IntersectionObserver ولا تُشغَّل المؤقتات،
     فيبقى المحتوى عند opacity:0 وتظهر الصفحة فارغة. لذا يُكشف فورًا. */
  var showAllRises = function () {
    /* الانتقالات لا تتقدّم في التبويب المخفي، فيبقى العنصر عند opacity:0 رغم ضبط السمة.
       لذا يُلغى الانتقال ليُطبَّق الوضع النهائي فورًا. */
    rises.forEach(function (el) { el.style.transition = 'none'; el.setAttribute('data-shown', 'true'); });
  };
  if (rises.length && 'IntersectionObserver' in window && !reduce && document.visibilityState !== 'hidden') {
    var ro = new IntersectionObserver(function (es) {
      es.forEach(function (e, i) {
        if (!e.isIntersecting) return;
        var el = e.target;
        setTimeout(function () { el.setAttribute('data-shown', 'true'); }, i * 65);
        ro.unobserve(el);
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    rises.forEach(function (el) { ro.observe(el); });
    setTimeout(showAllRises, 2600);
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') { showAllRises(); }
    });
  } else {
    showAllRises();
  }

  /* ------------------------------------------------------- spotlight --- */
  $$('[data-spot]').forEach(function (host) {
    host.addEventListener('pointermove', function (e) {
      var c = e.target.closest('.vv-card'); if (!c) return;
      var b = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - b.left) + 'px');
      c.style.setProperty('--my', (e.clientY - b.top) + 'px');
    }, { passive: true });
  });

  /* ---------------------------------------------- enquiry + validation --- */
  var PR = window.__PORT_REGION || {};
  var enq = $('#enq');
  function officeFor() {
    var sel = $('#f-port');
    var r = sel ? (PR[sel.value] || '') : '';
    return r === 'المنطقة الغربية' ? ['مكتب جدة', 'info@ssajeddah.com'] : ['مكتب الدمام', 'info@ssadammam.com'];
  }
  function syncSummary() {
    var s = $('#s-service'), p = $('#s-port'), o = $('#s-office');
    if (s) s.textContent = $('#f-service').value;
    if (p) p.textContent = $('#f-port').value;
    if (o) o.textContent = officeFor()[0];
  }
  if (enq) {
    ['f-service', 'f-port'].forEach(function (id) {
      var el = $('#' + id); if (el) el.addEventListener('change', syncSummary);
    });
    syncSummary();

    var RULES = {
      name: [function (v) { return v.trim().length >= 3; }, 'اكتب الاسم كاملاً (3 أحرف على الأقل).'],
      email: [function (v) { return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.trim()); }, 'أدخل بريداً إلكترونياً صحيحاً.']
    };
    function check(n) {
      var w = enq.querySelector('[data-field="' + n + '"]'), i = w.querySelector('input');
      var ok = RULES[n][0](i.value);
      w.setAttribute('data-bad', String(!ok));
      w.querySelector('[data-err]').textContent = ok ? '' : RULES[n][1];
      i.setAttribute('aria-invalid', String(!ok));
      return ok;
    }
    Object.keys(RULES).forEach(function (n) {
      var i = enq.querySelector('[data-field="' + n + '"] input');
      i.addEventListener('blur', function () { check(n); });
      i.addEventListener('input', function () {
        if (enq.querySelector('[data-field="' + n + '"]').getAttribute('data-bad') === 'true') check(n);
      });
    });
    enq.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!Object.keys(RULES).map(check).every(Boolean)) {
        enq.querySelector('[data-bad="true"] input').focus(); return;
      }
      var btn = $('#f-send');
      btn.setAttribute('data-busy', 'true'); btn.textContent = 'جارٍ التحضير…';
      var to = officeFor()[1];
      var body = [
        'الاسم: ' + $('#f-name').value.trim(),
        'البريد: ' + $('#f-email').value.trim(),
        'الخدمة: ' + $('#f-service').value,
        'الميناء: ' + $('#f-port').value,
        '', 'الرسالة:', ($('#f-msg') ? $('#f-msg').value.trim() : '')
      ].join('\n');
      setTimeout(function () {
        var ok = $('#f-ok');
        ok.hidden = false;
        ok.textContent = 'تم تجهيز رسالتك وسيفتح برنامج البريد لديك لإرسالها إلى ' + to + '.';
        btn.removeAttribute('data-busy'); btn.textContent = 'إرسال';
        window.location.href = 'mailto:' + to + '?subject=' +
          encodeURIComponent('استفسار من موقع شرف للملاحة — ' + $('#f-service').value) +
          '&body=' + encodeURIComponent(body);
      }, 420);
    });
  }

  /* ------------------------------------------------------ scroll spy --- */
  var links = $$('#nav a[href^="#"]');
  if (links.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) {
          a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + e.target.id));
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(function (s) { spy.observe(s); });
  }
})();
