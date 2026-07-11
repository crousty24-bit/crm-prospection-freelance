const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const revealSections = Array.from(document.querySelectorAll("[data-reveal-section]"));
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");

document.documentElement.classList.add("reveal-ready");

function closeNav() {
  nav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Ouvrir le menu");
  document.body.classList.remove("nav-open");
}

navToggle?.addEventListener("click", () => {
  const isOpen = !nav?.classList.contains("is-open");
  nav?.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  document.body.classList.toggle("nav-open", isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNav();
});

if (header && "IntersectionObserver" in window) {
  const sentinel = document.createElement("span");
  sentinel.setAttribute("aria-hidden", "true");
  sentinel.className = "header-sentinel";
  document.body.prepend(sentinel);

  const headerObserver = new IntersectionObserver(
    ([entry]) => {
      header.classList.toggle("is-scrolled", !entry.isIntersecting);
    },
    { rootMargin: "-24px 0px 0px 0px", threshold: 0 },
  );

  headerObserver.observe(sentinel);
}

function revealSection(section) {
  const items = Array.from(section.querySelectorAll("[data-reveal-item]"));
  items.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${index * 90}ms`);
  });
  section.classList.add("is-visible");
}

const heroSection = document.getElementById("accueil");
if (heroSection) revealSection(heroSection);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        revealSection(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
  );

  revealSections
    .filter((section) => section !== heroSection)
    .forEach((section) => revealObserver.observe(section));
} else {
  revealSections.forEach(revealSection);
}

if ("IntersectionObserver" in window) {
  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !entry.target.id) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
  );

  ["formats", "organisation", "plaisir", "contact"].forEach((id) => {
    const section = document.getElementById(id);
    if (section) activeObserver.observe(section);
  });
}

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!formStatus) return;

  formStatus.textContent = "Demande non envoyee. Cette preview reste statique.";
  formStatus.tabIndex = -1;
  formStatus.focus({ preventScroll: true });
});

