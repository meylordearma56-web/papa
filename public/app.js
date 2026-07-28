const CONTACT_EMAIL = "professionalfirestopllc@gmail.com";
const LANG_KEY = "pfl-lang";

const translations = {
  en: {
    pageTitle: "Profesional Firestop LLC",
    metaDescription:
      "Profesional Firestop LLC — core drilling, GPR, and concrete cutting.",
    brandHomeAria: "Profesional Firestop LLC home",
    navAria: "Primary",
    langGroupAria: "Language",
    navWork: "Work",
    navContact: "Contact",
    heroAria: "Introduction",
    heroTitle: "Core drilling, GPR, and concrete cutting.",
    heroLede:
      "Precision cuts and scans for commercial and residential jobs — done clean, on schedule, and ready for the next trade.",
    heroCtaMessage: "Send a message",
    heroCtaWork: "See our work",
    servicesTitle: "What we do",
    servicesIntro:
      "Focused concrete services for builders, GCs, and property teams.",
    serviceCoreTitle: "Core drilling",
    serviceCoreBody:
      "Clean openings through slabs and walls for plumbing, electrical, and HVAC.",
    serviceGprTitle: "GPR",
    serviceGprBody:
      "Ground-penetrating radar scans to locate rebar, conduits, and voids before you cut.",
    serviceCutTitle: "Concrete cutting",
    serviceCutBody:
      "Saw cutting and controlled demolition for openings, removals, and renovations.",
    workTitle: "Our work",
    workIntro:
      "Jobsite photos from drilling, scanning, and concrete cutting projects.",
    work1Alt: "Concrete formwork and crew on a commercial construction site",
    work1Caption: "Concrete assemblies",
    work2Alt: "Construction crew installing protection on a commercial site",
    work2Caption: "Jobsite install",
    work3Alt: "Trades worker on a commercial jobsite",
    work3Caption: "On-site crew",
    work4Alt: "Structural framing on a multi-story commercial building",
    work4Caption: "Structural openings",
    work5Alt: "Technician sealing and finishing an installed system on site",
    work5Caption: "System sealing",
    work6Alt: "Finished commercial corridor with glass partitions",
    work6Caption: "Commercial interiors",
    contactTitle: "Write to us",
    contactIntro:
      'Tell us about your project. Your message opens in your email app addressed to <a href="mailto:professionalfirestopllc@gmail.com">professionalfirestopllc@gmail.com</a>.',
    formNameLabel: "Your name",
    formNamePlaceholder: "Full name",
    formEmailLabel: "Your email",
    formEmailPlaceholder: "you@example.com",
    formMessageLabel: "Message",
    formMessagePlaceholder:
      "Core drilling, GPR scan, concrete cutting — location, timing, and details…",
    formSubmit: "Open email draft",
    formMissing: "Please fill in your name, email, and message.",
    formOpening: "Opening your email app…",
    formSubject: "Project inquiry from",
    footerText:
      'Profesional Firestop LLC · Core drilling, GPR, and concrete cutting · <a href="mailto:professionalfirestopllc@gmail.com">professionalfirestopllc@gmail.com</a>',
  },
  es: {
    pageTitle: "Profesional Firestop LLC",
    metaDescription:
      "Profesional Firestop LLC — perforación de núcleo, GPR y corte de concreto.",
    brandHomeAria: "Inicio de Profesional Firestop LLC",
    navAria: "Principal",
    langGroupAria: "Idioma",
    navWork: "Trabajos",
    navContact: "Contacto",
    heroAria: "Introducción",
    heroTitle: "Perforación de núcleo, GPR y corte de concreto.",
    heroLede:
      "Cortes y escaneos precisos para trabajos comerciales y residenciales: limpios, a tiempo y listos para el siguiente oficio.",
    heroCtaMessage: "Enviar un mensaje",
    heroCtaWork: "Ver nuestros trabajos",
    servicesTitle: "Qué hacemos",
    servicesIntro:
      "Servicios de concreto para constructores, contratistas generales y equipos de propiedad.",
    serviceCoreTitle: "Perforación de núcleo",
    serviceCoreBody:
      "Aperturas limpias en losas y paredes para plomería, electricidad y HVAC.",
    serviceGprTitle: "GPR",
    serviceGprBody:
      "Escaneos con radar de penetración terrestre para localizar varillas, conductos y huecos antes de cortar.",
    serviceCutTitle: "Corte de concreto",
    serviceCutBody:
      "Corte con sierra y demolición controlada para aperturas, remociones y renovaciones.",
    workTitle: "Nuestros trabajos",
    workIntro:
      "Fotos de obra de proyectos de perforación, escaneo y corte de concreto.",
    work1Alt: "Encofrado de concreto y equipo en una obra comercial",
    work1Caption: "Ensamblajes de concreto",
    work2Alt: "Cuadrilla de construcción instalando protección en una obra comercial",
    work2Caption: "Instalación en obra",
    work3Alt: "Trabajador de oficio en una obra comercial",
    work3Caption: "Cuadrilla en sitio",
    work4Alt: "Estructura de un edificio comercial de varios pisos",
    work4Caption: "Aperturas estructurales",
    work5Alt: "Técnico sellando y terminando un sistema instalado en sitio",
    work5Caption: "Sellado de sistemas",
    work6Alt: "Pasillo comercial terminado con divisiones de vidrio",
    work6Caption: "Interiores comerciales",
    contactTitle: "Escríbenos",
    contactIntro:
      'Cuéntanos sobre tu proyecto. Tu mensaje se abre en tu correo dirigido a <a href="mailto:professionalfirestopllc@gmail.com">professionalfirestopllc@gmail.com</a>.',
    formNameLabel: "Tu nombre",
    formNamePlaceholder: "Nombre completo",
    formEmailLabel: "Tu correo",
    formEmailPlaceholder: "tu@ejemplo.com",
    formMessageLabel: "Mensaje",
    formMessagePlaceholder:
      "Perforación de núcleo, escaneo GPR, corte de concreto — ubicación, horario y detalles…",
    formSubmit: "Abrir borrador de correo",
    formMissing: "Por favor completa tu nombre, correo y mensaje.",
    formOpening: "Abriendo tu aplicación de correo…",
    formSubject: "Consulta de proyecto de",
    footerText:
      'Profesional Firestop LLC · Perforación de núcleo, GPR y corte de concreto · <a href="mailto:professionalfirestopllc@gmail.com">professionalfirestopllc@gmail.com</a>',
  },
};

let currentLang = "en";

function getInitialLang() {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === "en" || saved === "es") return saved;
  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem(LANG_KEY, lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value == null) return;

    const attr = el.getAttribute("data-i18n-attr");
    if (attr) {
      el.setAttribute(attr, value);
      if (attr === "content" && el.tagName === "META") {
        // content already set
      }
      return;
    }

    el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    const value = dict[key];
    if (value != null) {
      el.innerHTML = value;
    }
  });

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    const active = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    if (lang === "en" || lang === "es") {
      applyTranslations(lang);
      setStatus("");
    }
  });
});

applyTranslations(getInitialLang());

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
    const dict = translations[currentLang];

    if (!name || !email || !message) {
      setStatus(dict.formMissing);
      return;
    }

    const subject = encodeURIComponent(`${dict.formSubject} ${name}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);

    setStatus(dict.formOpening);
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
