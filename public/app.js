const CONTACT_EMAIL = "professionalfirestopllc@gmail.com";

const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

function setStatus(message) {
  if (statusEl) {
    statusEl.textContent = message;
  }
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = String(new FormData(form).get("name") || "").trim();
    const email = String(new FormData(form).get("email") || "").trim();
    const message = String(new FormData(form).get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("Please fill in your name, email, and message.");
      return;
    }

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}\n${email}`
    );

    setStatus("Opening your email app…");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}

const revealItems = document.querySelectorAll(".reveal");
const header = document.querySelector(".site-header");
const hero = document.querySelector(".hero");

function updateHeader() {
  if (!header || !hero) return;
  const threshold = Math.max(hero.offsetHeight * 0.72, 120);
  header.classList.toggle("is-solid", window.scrollY > threshold);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", updateHeader);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
