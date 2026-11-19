/*
WEBWORKS STUDIO — WEEK 14 PRODUCTION STARTER

Add JavaScript only if your Week 13 MVP requires an interaction.

Rules:
- Prefer native HTML behavior when possible.
- Keep interaction tied to a documented user task.
- Preserve keyboard accessibility and visible focus.
- Do not add libraries unless your Week 13 technical plan justifies them.
*/

"use strict";

console.log("Hill Country Coffee production script connected.");

const btn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-menu");

btn.addEventListener("click", () => {
  const open = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!open));
  btn.classList.toggle("active", !open);
  nav.classList.toggle("is-open", !open);
});

// Close on Escape or link click
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    btn.click();
  }
});
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) btn.click();
});
