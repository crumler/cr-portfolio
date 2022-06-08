// HAMBURGER NAVIGATION MENU

const hamburger = document.querySelector('.hamburger_menu_container');
const navMenu = document.querySelector('.nav__menu');
const closeHamburger = document.querySelector('.close_hamburger_container');
const navLogo = document.querySelector('.nav_logo_container');
const ctaButton = document.querySelector('.btn');
const navigationLink = document.querySelector('.nav-link');

hamburger.addEventListener('click', mobileMenu);

// Toggles the Hamburger Menu button
function mobileMenu() {
  hamburger.classList.toggle('hidden');
  navMenu.classList.toggle('active');
  closeHamburger.classList.toggle('active');
  navLogo.classList.toggle('hidden');
  // ctaButton.classList.toggle('hidden');
};

closeHamburger.addEventListener('click', closeMobileMenu);

navigationLink.addEventListener('click', closeMobileMenu);

// Toggles the Close Menu button
function closeMobileMenu() {
  hamburger.classList.toggle('hidden');
  navMenu.classList.toggle('active');
  closeHamburger.classList.toggle('active');
  // ctaButton.classList.toggle('active');
};

// For Animations
AOS.init();

// Copyright Year
document.querySelector('.copyright-year').innerText = new Date().getFullYear();