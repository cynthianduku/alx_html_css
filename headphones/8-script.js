// 8-script.js
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon'); // selects by class now
  const navMenu = document.getElementById('nav-menu'); // make sure this ID exists in your HTML

  menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    // Optional: toggle accessibility attribute
    const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true';
    menuIcon.setAttribute('aria-expanded', !isExpanded);
  });
});
