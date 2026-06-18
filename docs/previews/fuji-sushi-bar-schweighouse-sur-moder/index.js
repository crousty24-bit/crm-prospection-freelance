const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const categoryButtons = Array.from(document.querySelectorAll("[data-category]"));
const menuItems = Array.from(document.querySelectorAll("[data-group]"));

function syncHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
}

function closeNav() {
  nav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
}

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  document.body.classList.toggle("nav-open", Boolean(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

function activateCategory(button) {
  const category = button.dataset.category;
  categoryButtons.forEach((item) => item.classList.toggle("is-active", item === button));
  menuItems.forEach((item) => {
    item.classList.toggle("is-hidden", item.dataset.group !== category);
  });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => activateCategory(button));
});

const initialCategory = categoryButtons.find((button) => button.classList.contains("is-active"));
if (initialCategory) activateCategory(initialCategory);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -45% 0px" },
);

["concept", "carte", "horaires", "contact"].forEach((id) => {
  const section = document.getElementById(id);
  if (section) sectionObserver.observe(section);
});

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
