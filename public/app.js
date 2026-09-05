import * as THREE from "three";

const CONTACT_EMAIL = "professionalfirestopllc@gmail.com";
const LANG_KEY = "pfl-lang";
const SUBJECTS = ["intro", "hero", "services", "work", "contact"];
const SUBJECT_SPAN_VH = 120;

const translations = {
  en: {
    pageTitle:
      "Profesional Firestop LLC | Core Drilling, GPR & Concrete Cutting",
    metaDescription:
      "Profesional Firestop LLC offers core drilling, GPR scanning, and concrete cutting for commercial and residential jobs. Call +1 (201) 917-6120.",
    ogTitle:
      "Profesional Firestop LLC | Core Drilling, GPR & Concrete Cutting",
    ogDescription:
      "Core drilling, GPR scanning, and concrete cutting for commercial and residential jobs.",
    brandHomeAria: "Profesional Firestop LLC home",
    navAria: "Primary",
    langGroupAria: "Language",
    subjectRailAria: "Subjects",
    navServices: "Services",
    navWork: "Work",
    navContact: "Contact",
    introAria: "Welcome",
    introTitle: "Welcome to Profesional Firestop LLC",
    introLede: "Scroll to move through our services, work, and contact.",
    introScroll: "Scroll forward",
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
    work1Alt: "Core drilling with a diamond core drill into a masonry wall",
    work1Caption: "Core drilling",
    work2Alt: "Rig-mounted core drill cutting a circular opening in concrete",
    work2Caption: "Core drilling on stand",
    work3Alt: "Concrete chainsaw cutting a vertical opening in a wall",
    work3Caption: "Concrete cutting",
    work4Alt: "Cut-off saw and water system ready for concrete cutting",
    work4Caption: "Concrete saw cutting",
    work5Alt: "Technician scanning a concrete wall with GPR equipment",
    work5Caption: "GPR scanning",
    work6Alt: "GPR scanner display showing subsurface scan results",
    work6Caption: "GPR results",
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
    pageTitle:
      "Profesional Firestop LLC | Perforación de núcleo, GPR y corte de concreto",
    metaDescription:
      "Profesional Firestop LLC ofrece perforación de núcleo, escaneo GPR y corte de concreto para trabajos comerciales y residenciales. Llame al +1 (201) 917-6120.",
    ogTitle:
      "Profesional Firestop LLC | Perforación de núcleo, GPR y corte de concreto",
    ogDescription:
      "Perforación de núcleo, escaneo GPR y corte de concreto para trabajos comerciales y residenciales.",
    brandHomeAria: "Inicio de Profesional Firestop LLC",
    navAria: "Principal",
    langGroupAria: "Idioma",
    subjectRailAria: "Temas",
    navServices: "Servicios",
    navWork: "Trabajos",
    navContact: "Contacto",
    introAria: "Bienvenida",
    introTitle: "Bienvenido A Profesional Firestop LLC",
    introLede: "Desplázate para avanzar por nuestros servicios, trabajos y contacto.",
    introScroll: "Avanzar",
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
    work1Alt: "Perforación de núcleo con taladro diamantado en una pared de mampostería",
    work1Caption: "Perforación de núcleo",
    work2Alt: "Taladro de núcleo en soporte cortando una apertura circular en concreto",
    work2Caption: "Perforación en soporte",
    work3Alt: "Motosierra de concreto cortando una apertura vertical en una pared",
    work3Caption: "Corte de concreto",
    work4Alt: "Sierra de corte y sistema de agua listos para corte de concreto",
    work4Caption: "Corte con sierra",
    work5Alt: "Técnico escaneando una pared de concreto con equipo GPR",
    work5Caption: "Escaneo GPR",
    work6Alt: "Pantalla del escáner GPR mostrando resultados del escaneo",
    work6Caption: "Resultados GPR",
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
let activeSubject = "intro";
let world = null;

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

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function canUseWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function subjectIndex(id) {
  const index = SUBJECTS.indexOf(id);
  return index < 0 ? 0 : index;
}

function scrollToSubject(id, behavior = "smooth") {
  const index = subjectIndex(id);
  const rail = document.getElementById("scroll-rail");
  if (!rail || document.body.classList.contains("is-flat")) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior, block: "start" });
    return;
  }

  const maxScroll = Math.max(
    document.documentElement.scrollHeight - window.innerHeight,
    1
  );
  const target = (index / Math.max(SUBJECTS.length - 1, 1)) * maxScroll;
  window.scrollTo({ top: target, behavior });
}

function syncSubjectUI(id, progress) {
  activeSubject = id;
  const cursor = progress * (SUBJECTS.length - 1);

  document.querySelectorAll(".subject").forEach((section) => {
    const key = section.getAttribute("data-subject");
    const index = subjectIndex(key);
    const local = cursor - index;
    const isActive = key === id;
    const isPassingOut = !isActive && local > 0.15 && local < 0.95;
    const isPassingIn = !isActive && local < -0.15 && local > -0.95;

    section.classList.toggle("is-active", isActive);
    section.classList.toggle("is-passing-out", isPassingOut);
    section.classList.toggle("is-passing-in", isPassingIn);

    // Drive depth for the active panel so it eases as you leave it.
    if (isActive) {
      const pull = THREE.MathUtils.clamp(local, -0.45, 0.45);
      const z = -pull * 140;
      const y = pull * 18;
      section.style.transform = `translate3d(0, ${y}px, ${z}px) rotateX(${pull * -6}deg)`;
      section.style.opacity = String(1 - Math.abs(pull) * 0.35);
    } else {
      section.style.transform = "";
      section.style.opacity = "";
    }
  });

  document.querySelectorAll("[data-subject-link]").forEach((link) => {
    const key = link.getAttribute("data-subject-link");
    link.classList.toggle("is-current", key === id);
  });

  document.querySelectorAll(".subject-rail__dot").forEach((dot) => {
    const key = dot.getAttribute("data-subject-link");
    dot.classList.toggle("is-active", key === id);
  });

  const header = document.querySelector(".site-header");
  if (header) {
    header.classList.toggle("is-solid", id !== "intro");
  }

  const footer = document.querySelector(".site-footer");
  if (footer) {
    footer.classList.toggle("is-visible", id === "contact");
  }
}

document.querySelectorAll("[data-subject-link]").forEach((el) => {
  el.addEventListener("click", (event) => {
    const id = el.getAttribute("data-subject-link");
    if (!id) return;
    event.preventDefault();
    scrollToSubject(id);
  });
});

function createWorld(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.setClearColor(0x0b0e11, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0b0e11, 0.028);

  const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / Math.max(window.innerHeight, 1),
    0.1,
    200
  );
  camera.position.set(0, 1.4, 8);

  const ambient = new THREE.AmbientLight(0x9aa7b5, 0.55);
  scene.add(ambient);

  const key = new THREE.DirectionalLight(0xffffff, 1.15);
  key.position.set(4, 8, 6);
  scene.add(key);

  const ember = new THREE.PointLight(0xe10600, 28, 40, 2);
  ember.position.set(-3, 2.5, 2);
  scene.add(ember);

  const signal = new THREE.PointLight(0xffd400, 8, 28, 2);
  signal.position.set(4, 1.5, -8);
  scene.add(signal);

  const tunnel = new THREE.Group();
  scene.add(tunnel);

  function sideOffset(index) {
    return index % 2 === 0 ? -2.8 : 2.8;
  }

  const floorGeo = new THREE.PlaneGeometry(40, 160);
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x1a2229,
    roughness: 0.92,
    metalness: 0.08,
  });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(0, -2.2, -40);
  tunnel.add(floor);

  const wallMat = new THREE.MeshStandardMaterial({
    color: 0x151b21,
    roughness: 0.95,
    metalness: 0.05,
    side: THREE.DoubleSide,
  });

  [-1, 1].forEach((side) => {
    const wall = new THREE.Mesh(new THREE.PlaneGeometry(160, 18), wallMat);
    wall.position.set(side * 8.5, 2, -40);
    wall.rotation.y = side * -Math.PI / 2;
    tunnel.add(wall);
  });

  const ringGeo = new THREE.TorusGeometry(1.15, 0.08, 12, 48);
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0xe10600,
    emissive: 0x5a0200,
    roughness: 0.35,
    metalness: 0.7,
  });

  const steelMat = new THREE.MeshStandardMaterial({
    color: 0x8a95a1,
    roughness: 0.4,
    metalness: 0.85,
  });

  const markers = [];
  SUBJECTS.forEach((_, index) => {
    const z = -index * 18;
    const group = new THREE.Group();
    group.position.set(0, 0, z);

    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(sideOffset(index), 0.8, 0);
    ring.rotation.y = Math.PI / 2;
    group.add(ring);

    const core = new THREE.Mesh(
      new THREE.CylinderGeometry(0.35, 0.35, 2.4, 24),
      steelMat
    );
    core.position.set(sideOffset(index), 0.2, -1.2);
    core.rotation.z = Math.PI / 2;
    group.add(core);

    const disk = new THREE.Mesh(
      new THREE.CylinderGeometry(1.4, 1.4, 0.08, 48),
      new THREE.MeshStandardMaterial({
        color: 0x2a323a,
        roughness: 0.55,
        metalness: 0.6,
        emissive: 0x180000,
      })
    );
    disk.position.set(-sideOffset(index) * 0.85, 0.4, -2.2);
    disk.rotation.x = Math.PI / 2;
    group.add(disk);

    tunnel.add(group);
    markers.push({ group, ring, disk, core });
  });

  const loader = new THREE.TextureLoader();
  const workPaths = [
    "./assets/work/hero.jpg?v=20260905",
    "./assets/work/work-01.jpg?v=20260905",
    "./assets/work/work-02.jpg?v=20260905",
    "./assets/work/work-03.jpg?v=20260905",
    "./assets/work/work-04.jpg?v=20260905",
    "./assets/work/work-05.jpg?v=20260905",
    "./assets/work/work-06.jpg?v=20260905",
  ];

  const photoPlanes = [];
  workPaths.forEach((path, index) => {
    const texture = loader.load(path);
    texture.colorSpace = THREE.SRGBColorSpace;
    const aspect = 1.5;
    const height = 3.2;
    const width = height * aspect;
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      new THREE.MeshBasicMaterial({ map: texture, toneMapped: false })
    );
    const lane = index % 2 === 0 ? -4.2 : 4.2;
    const z = -6 - index * 9.5;
    mesh.position.set(lane, 1.1, z);
    mesh.rotation.y = lane > 0 ? -0.35 : 0.35;
    tunnel.add(mesh);
    photoPlanes.push(mesh);

    const frame = new THREE.Mesh(
      new THREE.PlaneGeometry(width + 0.18, height + 0.18),
      new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.08, transparent: true })
    );
    frame.position.copy(mesh.position);
    frame.position.z -= 0.02;
    frame.rotation.copy(mesh.rotation);
    tunnel.add(frame);
  });

  const dustCount = 900;
  const dustPositions = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i += 1) {
    dustPositions[i * 3] = (Math.random() - 0.5) * 16;
    dustPositions[i * 3 + 1] = Math.random() * 8 - 1;
    dustPositions[i * 3 + 2] = -Math.random() * 110;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
  const dust = new THREE.Points(
    dustGeo,
    new THREE.PointsMaterial({
      color: 0xc9d2db,
      size: 0.035,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    })
  );
  tunnel.add(dust);

  let targetProgress = 0;
  let smoothProgress = 0;
  let raf = 0;
  let disposed = false;

  function resize() {
    const width = window.innerWidth;
    const height = Math.max(window.innerHeight, 1);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
  }

  function setProgress(progress) {
    targetProgress = THREE.MathUtils.clamp(progress, 0, 1);
  }

  function tick(now) {
    if (disposed) return;
    raf = requestAnimationFrame(tick);

    smoothProgress += (targetProgress - smoothProgress) * 0.08;
    const depth = smoothProgress * ((SUBJECTS.length - 1) * 18);
    const sway = Math.sin(smoothProgress * Math.PI * 2) * 0.35;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, sway, 0.08);
    camera.position.y = 1.35 + Math.sin(smoothProgress * Math.PI) * 0.15;
    camera.position.z = 8 - depth;
    camera.lookAt(sway * 0.4, 1.1, camera.position.z - 10);

    ember.position.z = camera.position.z - 4;
    signal.position.z = camera.position.z - 14;

    markers.forEach((marker, index) => {
      marker.ring.rotation.x = now * 0.0007 + index;
      marker.disk.rotation.z = now * 0.0009 + index * 0.4;
      marker.core.rotation.x = now * 0.0012;
    });

    dust.rotation.z = Math.sin(now * 0.00015) * 0.04;
    photoPlanes.forEach((plane, index) => {
      plane.position.y = 1.1 + Math.sin(now * 0.001 + index) * 0.12;
    });

    renderer.render(scene, camera);
  }

  function dispose() {
    disposed = true;
    cancelAnimationFrame(raf);
    renderer.dispose();
  }

  window.addEventListener("resize", resize);
  resize();
  raf = requestAnimationFrame(tick);

  return { setProgress, dispose, resize };
}

function setupScrollExperience() {
  const rail = document.getElementById("scroll-rail");
  const canvas = document.getElementById("scene3d");
  if (!rail || !canvas) return;

  document.documentElement.style.setProperty(
    "--subject-count",
    String(SUBJECTS.length)
  );
  document.documentElement.style.setProperty(
    "--subject-span",
    `${SUBJECT_SPAN_VH}vh`
  );

  if (prefersReducedMotion() || !canUseWebGL()) {
    document.body.classList.remove("is-3d");
    document.body.classList.add("is-flat");
    return;
  }

  document.body.classList.add("is-3d");
  document.body.classList.remove("is-flat");
  world = createWorld(canvas);

  let ticking = false;

  function readProgress() {
    const maxScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1
    );
    return THREE.MathUtils.clamp(window.scrollY / maxScroll, 0, 1);
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const progress = readProgress();
      if (world) world.setProgress(progress);
      const index = Math.round(progress * (SUBJECTS.length - 1));
      syncSubjectUI(SUBJECTS[index], progress);
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  const hash = window.location.hash.replace("#", "");
  if (SUBJECTS.includes(hash)) {
    requestAnimationFrame(() => scrollToSubject(hash, "auto"));
  }
}

setupScrollExperience();
