"use strict";

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");

const openNavMenu = function () {
  openMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
  mobileNav.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeNavMenu = function () {
  openMenu.classList.remove("hidden");
  closeMenu.classList.add("hidden");
  mobileNav.classList.add("hidden");
  overlay.classList.add("hidden");
};

openMenu.addEventListener("click", openNavMenu);
closeMenu.addEventListener("click", closeNavMenu);
