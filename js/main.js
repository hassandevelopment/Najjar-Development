/* Hassan Development — main.js */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Intersection Observer: fade-up sections ── */
if (!prefersReducedMotion) {
  const fadeEls = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  fadeEls.forEach((el) => observer.observe(el));
} else {
  /* Skip animation — mark all visible immediately */
  document.querySelectorAll('.fade-up').forEach((el) => el.classList.add('visible'));
}

/* ── Smooth scroll for anchor links (Safari fallback) ── */
if (!CSS.supports('scroll-behavior', 'smooth')) {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
