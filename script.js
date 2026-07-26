document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  /* ---------- Ambient sparkle field ---------- */
  var field = document.querySelector('.sparkle-field');
  if (field && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var COUNT = window.innerWidth < 700 ? 26 : 46;
    for (var i = 0; i < COUNT; i++) {
      var s = document.createElement('span');
      var size = Math.random();
      s.className = 'sparkle' + (size < 0.5 ? ' small' : '') + (size > 0.85 ? ' diamond' : '');
      s.style.left = Math.random() * 100 + 'vw';
      s.style.top = Math.random() * 100 + 'vh';

      var driftDuration = 14 + Math.random() * 18; /* seconds to float upward */
      var twinkleDuration = 2.5 + Math.random() * 3.5;
      var delay = Math.random() * driftDuration;

      s.style.animationDuration = driftDuration + 's, ' + twinkleDuration + 's';
      s.style.animationDelay = '-' + delay + 's, -' + (Math.random() * twinkleDuration) + 's';

      field.appendChild(s);
    }
  }

  /* ---------- Scroll-reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('in-view'); });
    }
  }

});
