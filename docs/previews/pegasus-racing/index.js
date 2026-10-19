const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mobile menu
const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

if (menuToggle && menu) {
  const setMenu = (open) => {
    menu.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  };

  menuToggle.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
}

// Header state on scroll
const header = document.querySelector('[data-header]');
const onHeaderScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);

// Staggered scroll reveal
const revealBlocks = Array.from(document.querySelectorAll('[data-reveal]'));

const reveal = (block) => {
  block.querySelectorAll('[data-reveal-item]').forEach((item, index) => {
    item.style.setProperty('--d', `${index * 90}ms`);
  });
  block.classList.add('is-visible');
};

if (!reduceMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      reveal(entry.target);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
  revealBlocks.forEach((block) => observer.observe(block));
}

// Count-up on telemetry figures
const counters = Array.from(document.querySelectorAll('[data-count]'));
if (!reduceMotion) {
  counters.forEach((el) => {
    const target = Number(el.dataset.count);
    const start = performance.now();
    const duration = 1400;
    el.textContent = '0';
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(tick);
    };
    setTimeout(() => requestAnimationFrame(tick), 450);
  });
}

// Parallax (hero + section backgrounds), as in the Stitch export
const heroBg = document.querySelector('[data-parallax]');
const sectionBgs = Array.from(document.querySelectorAll('[data-parallax-section]'));
let ticking = false;

const updateParallax = () => {
  ticking = false;
  const y = window.scrollY;
  if (heroBg && y < window.innerHeight * 1.2) {
    heroBg.style.transform = `translate3d(0, ${y * Number(heroBg.dataset.parallax)}px, 0)`;
  }
  sectionBgs.forEach((bg) => {
    const rect = bg.parentElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const limit = rect.height * 0.15;
      const offset = Math.max(-limit, Math.min(limit, (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.25));
      bg.style.transform = `translate3d(0, ${offset}px, 0)`;
    }
  });
};

const onScroll = () => {
  onHeaderScroll();
  if (reduceMotion || ticking) return;
  ticking = true;
  requestAnimationFrame(updateParallax);
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Contact page: preselect the category from ?sujet= and count characters
const subject = document.querySelector('[data-subject]');
const wanted = new URLSearchParams(window.location.search).get('sujet');
if (subject && wanted && subject.querySelector(`option[value="${CSS.escape(wanted)}"]`)) {
  subject.value = wanted;
}

const counter = document.querySelector('[data-counter]');
const counted = counter?.closest('.field')?.querySelector('textarea');
if (counter && counted) {
  const max = Number(counted.getAttribute('maxlength'));
  const update = () => {
    counter.textContent = `${counted.value.length} / ${max}`;
    counter.classList.toggle('is-high', counted.value.length >= max * 0.9);
  };
  counted.addEventListener('input', update);
  counted.form?.addEventListener('reset', () => requestAnimationFrame(update));
}

// Demo form: validated locally, nothing is sent or stored
const demoForm = document.querySelector('[data-demo-form]');
if (demoForm) {
  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = Array.from(demoForm.querySelectorAll('input, select, textarea'));
    let firstInvalid = null;
    fields.forEach((field) => {
      const invalid = !field.checkValidity();
      field.setAttribute('aria-invalid', String(invalid));
      if (invalid && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }
    const feedback = demoForm.querySelector('[data-form-feedback]');
    demoForm.reset();
    fields.forEach((field) => field.removeAttribute('aria-invalid'));
    feedback.hidden = false;
    feedback.focus();
  });
}
