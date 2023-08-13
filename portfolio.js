const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

mobileMenu.addEventListener('click', toggleMobileMenu);

// Close mobile Menu when clicking on a menu item
const closeMobileMenu = () => {
  if (window.innerWidth <= 768 && mobileMenu.classList.contains('is-active')) {
    toggleMobileMenu();
  }
};

menuLinks.addEventListener('click', closeMobileMenu);
navLogo.addEventListener('click', closeMobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const homeMenu = document.querySelector('#navbar__home');
  const aboutMenu = document.querySelector('#navbar__about');
  const skillsMenu = document.querySelector('#navbar__skills');
  const projectsMenu = document.querySelector('#navbar__projects');
  const experienceMenu = document.querySelector('#navbar__experience');
  const contactMenu = document.querySelector('#navbar__contact');
  
  const scrollPos = window.scrollY;

  if (scrollPos < 600) {
    highlightNavItem(homeMenu);
  } else if (scrollPos < 1400) {
    highlightNavItem(aboutMenu);
  } else if (scrollPos < 2345) {
    highlightNavItem(skillsMenu);
  } else if (scrollPos < 3300) {
    highlightNavItem(projectsMenu);
  } else if (scrollPos < 4200) {
    highlightNavItem(experienceMenu);
  } else {
    highlightNavItem(contactMenu);
  }
};

const highlightNavItem = (element) => {
  const highlightedItem = document.querySelector('.navbar__links.highlight');
  if (highlightedItem) {
    highlightedItem.classList.remove('highlight');
  }
  element.classList.add('highlight');
};

window.addEventListener('scroll', highlightMenu);
