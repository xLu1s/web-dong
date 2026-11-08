(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (CSS.supports('animation-timeline', 'view()')) return;

  var root = document.documentElement;
  var ticking = false;

  function clamp(n, a, b) {
    return Math.min(b, Math.max(a, n));
  }

  function seen(el) {
    var r = el.getBoundingClientRect();
    return clamp((window.innerHeight - r.top) / (window.innerHeight * 0.7), 0, 1);
  }

  function frame() {
    ticking = false;
    var max = root.scrollHeight - window.innerHeight;
    var page = max > 0 ? window.scrollY / max : 0;
    var bar = document.querySelector('.progress');
    if (bar) bar.style.transform = 'scaleX(' + page + ')';

    document.querySelectorAll('.arrive').forEach(function (el) {
      var p = seen(el);
      var y = (1 - p) * 68;
      var s = 0.92 + p * 0.08;
      el.style.transform = 'translateY(' + y + 'px) scale(' + s + ')';
    });

    document.querySelectorAll('.mark').forEach(function (el) {
      var p = seen(el);
      el.style.transform = 'scale(' + (0.45 + p * 0.55) + ') rotate(' + ((1 - p) * -18) + 'deg)';
    });

    document.querySelectorAll('.phrase .word').forEach(function (el, i) {
      var p = clamp((seen(el.parentElement) - i * 0.03) / 0.7, 0, 1);
      el.style.transform = 'translateY(' + ((1 - p) * 52) + 'px)';
    });

    document.querySelectorAll('.frame img').forEach(function (img) {
      var p = seen(img);
      img.style.clipPath = 'inset(0 0 ' + ((1 - p) * 100) + '% 0)';
      img.style.transform = 'scale(' + (0.92 + p * 0.08) + ')';
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
