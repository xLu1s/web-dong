(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (CSS.supports('animation-timeline', 'view()')) return;

  var root = document.documentElement;
  var ticking = false;

  function clamp(n, a, b) {
    return Math.min(b, Math.max(a, n));
  }

  function mix(from, to, t) {
    var a = from.match(/\w\w/g).map(function (h) { return parseInt(h, 16); });
    var b = to.match(/\w\w/g).map(function (h) { return parseInt(h, 16); });
    var c = a.map(function (v, i) { return Math.round(v + (b[i] - v) * t); });
    return 'rgb(' + c.join(',') + ')';
  }

  function seen(el) {
    var r = el.getBoundingClientRect();
    var passed = window.innerHeight - r.top;
    return clamp(passed / (window.innerHeight * 0.72), 0, 1);
  }

  function frame() {
    ticking = false;
    var max = root.scrollHeight - window.innerHeight;
    var page = max > 0 ? window.scrollY / max : 0;
    var bar = document.querySelector('.progress');
    if (bar) bar.style.transform = 'scaleX(' + page + ')';

    var hero = document.querySelector('.hero');
    if (hero) {
      var hr = hero.getBoundingClientRect();
      var exit = clamp(-hr.top / Math.max(hr.height, 1), 0, 1);
      var media = document.querySelector('.hero-media');
      if (media) {
        media.style.transform = 'scale(' + (1 + exit * 0.12) + ') translateY(' + (exit * -4) + '%)';
        media.style.filter = 'blur(' + (exit * 8) + 'px)';
      }
      document.querySelectorAll('.kanji-stroke .draw, .hero .branch .draw, .hero .branch .twig').forEach(function (path) {
        path.style.strokeDashoffset = String(1 - exit);
      });
    }

    document.querySelectorAll('.branch-fixed .draw, .branch-fixed .twig').forEach(function (path) {
      path.style.strokeDashoffset = String(1 - page);
    });

    document.querySelectorAll('.phrase span').forEach(function (span, i) {
      var local = clamp((seen(span.parentElement) - i * 0.025) / 0.55, 0, 1);
      span.style.color = span.classList.contains('hot') ? mix('#c4beb4', '#e4272a', local) : mix('#c4beb4', '#f1e9de', local);
    });

    var track = document.querySelector('.marquee-track');
    var band = document.querySelector('.marquee');
    if (track && band) track.style.transform = 'translateX(' + (8 - seen(band) * 42) + 'vw)';

    document.querySelectorAll('.section-title .brush').forEach(function (brush) {
      brush.style.transform = 'scaleX(' + seen(brush) + ')';
      brush.style.transformOrigin = '0 50%';
    });

    document.querySelectorAll('.frame img').forEach(function (img) {
      var p = seen(img);
      img.style.clipPath = 'inset(0 0 ' + ((1 - p) * 100) + '% 0)';
      img.style.transform = 'scale(' + (1.06 - p * 0.06) + ')';
    });

    document.querySelectorAll('.count-a, .count-b').forEach(function (el) {
      var p = seen(el);
      var tick = el.querySelector('.duo-price__tick');
      if (!tick) return;
      if (p >= 0.98) {
        tick.style.opacity = '0';
        return;
      }
      var euros = Math.round((el.classList.contains('count-a') ? 15 : 29) * p);
      var cents = String(Math.round(95 * p)).padStart(2, '0');
      tick.dataset.count = euros + ',' + cents + ' €';
      tick.style.opacity = '1';
    });
  }

  function request() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(frame);
    }
  }

  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  frame();
})();
