// Scroll reveal for sections
const revealElements = document.querySelectorAll(".reveal");
function handleScrollReveal() {
  const triggerBottom = window.innerHeight * 0.8;
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", handleScrollReveal);
window.addEventListener("load", handleScrollReveal);

// Highlight active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
function setActiveNav() {
  let currentId = "";
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom > 120) {
      currentId = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active-link", link.getAttribute("href") === `#${currentId}`);
  });
}
window.addEventListener("scroll", setActiveNav);

// Add style for active nav link
const style = document.createElement("style");
style.innerHTML = `
  .active-link {
    color: var(--accent-color) !important;
  }
`;
document.head.appendChild(style);

// Theme toggle logic
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
// Default dark mode
body.classList.remove("light-mode");
themeToggle.textContent = "🌙";

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  themeToggle.textContent = body.classList.contains("light-mode") ? "☀️" : "🌙";
});

