const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.site-header nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  nav.style.display = open ? 'flex' : '';
  if (open) {
    nav.style.position = 'absolute';
    nav.style.top = '74px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '20px 6vw';
    nav.style.background = 'rgba(255,255,255,.98)';
    nav.style.flexDirection = 'column';
    nav.style.gap = '18px';
    nav.style.borderBottom = '1px solid #dce5f1';
  }
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
      nav.removeAttribute('style');
    }
  });
});

const revealItems = document.querySelectorAll('.about-section,.timeline-item,.edu-card,.cert-panel,.skill-panel,.tool-panel,.contact-inner');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
