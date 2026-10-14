// Mobile menu: the burger button shows and hides the nav links
const burger = document.querySelector("#burger");
const navLinks = document.querySelector("#nav-links");

burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("show");
  burger.setAttribute("aria-expanded", open);
});

// Close the mobile menu after a link is clicked
document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => navLinks.classList.remove("show"))
);

// Dark mode toggle. The choice is remembered in localStorage; if storage is
// blocked (private mode) the toggle still works for the current visit.
const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");

try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
} catch (e) {}

themeToggle.addEventListener("click", () => {
  const isDark =
    root.dataset.theme === "dark" ||
    (!root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
  root.dataset.theme = isDark ? "light" : "dark";
  try {
    localStorage.setItem("theme", root.dataset.theme);
  } catch (e) {}
});

// Project filters: each card lists its categories in data-tags
const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".card");

chips.forEach((chip) =>
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");

    const filter = chip.dataset.filter;
    cards.forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      card.classList.toggle("hidden", filter !== "all" && !tags.includes(filter));
    });
  })
);

// Links still pointing at "#" (e.g. an app not deployed yet) are hidden,
// so the live site never shows a dead button
document.querySelectorAll("[data-hide-if-empty]").forEach((link) => {
  if (link.getAttribute("href") === "#") link.style.display = "none";
});

// Back to top
document.querySelector("#scroll-up").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Footer year
document.querySelector("#year").textContent = new Date().getFullYear();
