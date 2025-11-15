const navbarToggle = document.querySelector('.navbar__toggle');
const navbarLinks = document.querySelector('.navbar__links');
const yearSpan = document.getElementById('year');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (navbarToggle && navbarLinks) {
  navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('navbar__links--open');
  });
}

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (window.scrollY > 80) {
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
  }
});
