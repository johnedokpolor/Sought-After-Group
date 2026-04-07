gsap.registerPlugin(ScrollTrigger);

// --- Navigation Toggle ---
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("active"));
});

// --- Theme Toggle ---
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// --- GSAP Animations ---
// Reveal elements on scroll
gsap.utils.toArray(".reveal").forEach((elem) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 90%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power2.out",
  });
});

// Specific Hero Animation
gsap.from("header .reveal", {
  opacity: 0,
  y: 60,
  duration: 1.5,
  ease: "power4.out",
});
