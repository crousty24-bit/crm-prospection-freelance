const root = document.documentElement;
const body = document.body;
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");

root.classList.add("js");

function closeNav() {
  nav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Ouvrir le menu");
  body.classList.remove("nav-open");
}

function toggleNav() {
  const isOpen = nav?.classList.toggle("is-open");
  navToggle?.setAttribute("aria-expanded", String(Boolean(isOpen)));
  navToggle?.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  body.classList.toggle("nav-open", Boolean(isOpen));
}

navToggle?.addEventListener("click", toggleNav);

navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNav();
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 50, 240)}ms`;
    revealObserver.observe(item);
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-42% 0px -48% 0px", threshold: 0 },
  );

  ["services", "avis", "apropos", "contact"].forEach((id) => {
    const section = document.getElementById(id);
    if (section) sectionObserver.observe(section);
  });

  if (header) {
    const sentinel = document.createElement("span");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.position = "absolute";
    sentinel.style.top = "0";
    sentinel.style.left = "0";
    sentinel.style.width = "1px";
    sentinel.style.height = "1px";
    document.body.prepend(sentinel);

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        header.classList.toggle("is-scrolled", !entry.isIntersecting);
      },
      { rootMargin: "-24px 0px 0px 0px", threshold: 0 },
    );

    headerObserver.observe(sentinel);
  }
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

function setFieldError(control, message) {
  const field = control.closest(".field");
  const error = field?.querySelector("[data-error-for]");
  field?.classList.toggle("is-invalid", Boolean(message));
  control.setAttribute("aria-invalid", String(Boolean(message)));
  if (error) error.textContent = message;
}

function validateContactForm() {
  const requiredControls = Array.from(contactForm.querySelectorAll("[required]"));
  let firstInvalid = null;

  requiredControls.forEach((control) => {
    let message = "";
    if (control.validity.valueMissing) {
      message = "Champ requis.";
    } else if (control.validity.typeMismatch) {
      message = "Format attendu non valide.";
    }
    setFieldError(control, message);
    if (message && !firstInvalid) firstInvalid = control;
  });

  if (firstInvalid) {
    firstInvalid.focus();
    return false;
  }

  return true;
}

contactForm?.addEventListener("input", (event) => {
  const control = event.target.closest("input, select, textarea");
  if (!control || !control.required) return;
  setFieldError(control, "");
  if (formStatus) formStatus.textContent = "";
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateContactForm()) return;

  if (formStatus) {
    formStatus.textContent =
      "Demande prete dans cette preview. Aucun message n'est envoye automatiquement.";
  }

  contactForm.reset();
  Array.from(contactForm.querySelectorAll(".field")).forEach((field) => {
    field.classList.remove("is-invalid");
  });
  Array.from(contactForm.querySelectorAll("[aria-invalid]")).forEach((control) => {
    control.setAttribute("aria-invalid", "false");
  });
});
