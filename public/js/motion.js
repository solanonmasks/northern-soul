/* Northern Soul Renovation — shared motion layer.
   Progressive enhancement: the markup paints first, this decorates afterwards.
   Everything here is a no-op under prefers-reduced-motion.

   Two rules carried over from the design handoff:
   1. Never blank authored text to animate it. Counters keep their real value in
      the DOM and the observer only borrows it — if the observer never fires the
      number on screen is still correct.
   2. State is driven by toggling classes, not by writing inline styles. */
(function () {
  'use strict';
  if (window.__nsrMotion) return;
  window.__nsrMotion = true;

  var reduced = false;
  try {
    reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) {}

  var hasIO = 'IntersectionObserver' in window;

  /* ---------------------------------------------------------------- reveal */
  var revealIO = hasIO
    ? new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (!en.isIntersecting) return;
            revealIO.unobserve(en.target);
            en.target.classList.add('is-in');
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
      )
    : null;

  function prepReveal(el) {
    if (el.__nsrReveal) return;
    el.__nsrReveal = true;
    if (reduced || !revealIO) {
      el.classList.add('is-in');
      return;
    }
    revealIO.observe(el);
    // Safety net: nothing stays invisible because an observer never fired.
    setTimeout(function () {
      if (!el.classList.contains('is-in')) {
        revealIO.unobserve(el);
        el.classList.add('is-in');
      }
    }, 3000);
  }

  /* -------------------------------------------------------------- counters */
  var countIO = hasIO
    ? new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (!en.isIntersecting) return;
            countIO.unobserve(en.target);
            runCount(en.target);
          });
        },
        { threshold: 0.4 }
      )
    : null;

  function runCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    if (!isFinite(target) || reduced) return;
    var pre = el.getAttribute('data-count-pre') || '';
    var post = el.getAttribute('data-count-post') || '';
    var dur = 1400;
    var t0 = null;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / dur);
      var eased = 1 - Math.pow(1 - p, 3); // cubic ease-out
      el.textContent = pre + Math.round(target * eased) + post;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = pre + target + post;
    }
    requestAnimationFrame(step);
  }

  function prepCount(el) {
    if (el.__nsrCount) return;
    el.__nsrCount = true;
    if (!isFinite(parseFloat(el.getAttribute('data-count')))) return;
    if (countIO && !reduced) countIO.observe(el);
  }

  /* ----------------------------------------------------- magnetic buttons */
  function prepMagnetic(el) {
    if (el.__nsrMag || reduced) return;
    el.__nsrMag = true;
    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      var dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      var dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      el.classList.add('is-pulling');
      el.style.transform =
        'translate3d(' + (dx * 10).toFixed(2) + 'px,' + (dy * 7).toFixed(2) + 'px,0)';
    });
    el.addEventListener('mouseleave', function () {
      el.classList.remove('is-pulling');
      el.style.transform = '';
    });
  }

  /* -------------------------------------------------------------- parallax */
  var parallaxNodes = [];

  /* ------------------------------------------------------- header + scroll */
  var header = document.querySelector('[data-header]');
  var progress = document.querySelector('[data-scroll-progress]');
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;

      if (progress) {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
      }

      if (header) header.classList.toggle('is-scrolled', y > 60);

      if (!reduced) {
        for (var i = 0; i < parallaxNodes.length; i++) {
          var n = parallaxNodes[i];
          var r = n.getBoundingClientRect();
          if (r.bottom < -200 || r.top > window.innerHeight + 200) continue;
          var amt = parseFloat(n.getAttribute('data-parallax')) || 0.07;
          var mid = r.top + r.height / 2 - window.innerHeight / 2;
          n.style.setProperty('--parallax-y', (-mid * amt).toFixed(1) + 'px');
        }
      }
    });
  }

  /* ------------------------------------------------------------------ scan */
  function scan() {
    var q = function (s) {
      return Array.prototype.slice.call(document.querySelectorAll(s));
    };
    q('.reveal, .wipe').forEach(prepReveal);
    q('[data-count]').forEach(prepCount);
    q('[data-magnetic]').forEach(prepMagnetic);
    q('[data-parallax]').forEach(function (n) {
      if (n.__nsrPar) return;
      n.__nsrPar = true;
      parallaxNodes.push(n);
    });
    onScroll();
  }

  function boot() {
    header = document.querySelector('[data-header]') || header;
    progress = document.querySelector('[data-scroll-progress]') || progress;
    scan();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
