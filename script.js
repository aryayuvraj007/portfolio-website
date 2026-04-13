
const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || savedTheme === "light") {
  root.setAttribute("data-theme", savedTheme);
}

function updateThemeButton(theme) {
  if (!themeBtn) return;
  const isDark = theme === "dark";
  themeBtn.textContent = isDark ? "🌙" : "☀️";
  themeBtn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  themeBtn.setAttribute("title", isDark ? "Light mode" : "Dark mode");
}

updateThemeButton(root.getAttribute("data-theme"));

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeButton(next);
  });
}

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => menu.classList.toggle("open"));
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => menu.classList.remove("open"));
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const button = e.target.querySelector("button");
    button.textContent = "Message Sent";
    setTimeout(() => {
      e.target.reset();
      button.textContent = "Send Message";
    }, 1800);
  });
}


const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || savedTheme === "light") {
  root.setAttribute("data-theme", savedTheme);
}

function updateThemeButton(theme) {
  if (!themeBtn) return;
  const isDark = theme === "dark";
  themeBtn.textContent = isDark ? "🌙" : "☀️";
  themeBtn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  themeBtn.setAttribute("title", isDark ? "Light mode" : "Dark mode");
}

updateThemeButton(root.getAttribute("data-theme"));

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeButton(next);
  });
}

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => menu.classList.toggle("open"));
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => menu.classList.remove("open"));
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const button = e.target.querySelector("button");
    button.textContent = "Message Sent";
    setTimeout(() => {
      e.target.reset();
      button.textContent = "Send Message";
    }, 1800);
  });
}


const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || savedTheme === "light") {
  root.setAttribute("data-theme", savedTheme);
}

function updateThemeButton(theme) {
  if (!themeBtn) return;
  const isDark = theme === "dark";
  themeBtn.textContent = isDark ? "🌙" : "☀️";
  themeBtn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  themeBtn.setAttribute("title", isDark ? "Light mode" : "Dark mode");
}

updateThemeButton(root.getAttribute("data-theme"));

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeButton(next);
  });
}

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => menu.classList.toggle("open"));
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => menu.classList.remove("open"));
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const button = e.target.querySelector("button");
    button.textContent = "Message Sent";
    setTimeout(() => {
      e.target.reset();
      button.textContent = "Send Message";
    }, 1800);
  });
}


const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || savedTheme === "light") {
  root.setAttribute("data-theme", savedTheme);
}

function updateThemeButton(theme) {
  if (!themeBtn) return;
  const isDark = theme === "dark";
  themeBtn.textContent = isDark ? "🌙" : "☀️";
  themeBtn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  themeBtn.setAttribute("title", isDark ? "Light mode" : "Dark mode");
}

updateThemeButton(root.getAttribute("data-theme"));

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeButton(next);
  });
}

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => menu.classList.toggle("open"));
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => menu.classList.remove("open"));
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const button = e.target.querySelector("button");
    button.textContent = "Message Sent";
    setTimeout(() => {
      e.target.reset();
      button.textContent = "Send Message";
    }, 1800);
  });
}
