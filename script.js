// HAMBURGER NAVIGATION MENU

const hamburger = document.querySelector('.hamburger_menu_container');
const navMenu = document.querySelector('.nav__menu');
const closeHamburger = document.querySelector('.close_hamburger_container');

hamburger.addEventListener('click', mobileMenu);

// Toggles the Hamburger Menu button
function mobileMenu() {
  hamburger.classList.toggle('hidden');
  navMenu.classList.toggle('active');
  closeHamburger.classList.toggle('active');
};

closeHamburger.addEventListener('click', closeMobileMenu);

// Toggles the Close Menu button
function closeMobileMenu() {
  hamburger.classList.toggle('hidden');
  navMenu.classList.toggle('active');
  closeHamburger.classList.toggle('active');
};