// Function to include header and footer
function includeHTML() {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(async (el) => {
    const file = el.getAttribute('data-include');
    const res = await fetch(file);
    if (res.ok) {
      el.innerHTML = await res.text();
    } else {
      el.innerHTML = 'Component not found';
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  includeHTML();

  // Wait for includes to load
  setTimeout(() => {
    const nav = document.querySelector('nav');
    const navList = nav?.querySelector('ul');

    if (nav && navList) {
      nav.addEventListener('click', (e) => {
        const isMobile = window.innerWidth <= 768;
        const isDotClick = e.offsetX > nav.clientWidth - 60; // Approximate area for ︙ icon

        if (isMobile && isDotClick) {
          navList.classList.toggle('active');
        }
      });
    }
  }, 300);
});
