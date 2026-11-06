// ============================================================
// main.js — small bits of interactivity.
// Right now it only opens/closes the menu on phones.
// ============================================================

// 1. Find the hamburger button and the menu on the page.
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

// 2. When the button is clicked, toggle the "open" class on the menu.
//    style.css shows the menu when it has class "open".
menuButton.addEventListener("click", function () {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen); // for screen readers
});
