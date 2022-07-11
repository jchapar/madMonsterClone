const toggleBtn = document.getElementById('toggle-btn');
const toggleMenu = document.getElementById('toggle-menu');

toggleBtn.addEventListener('click', toggleNavbar);

function toggleNavbar() {
  toggleMenu.classList.toggle('hidden');
  toggleMenu.classList.toggle('absolute');
  toggleMenu.classList.toggle('flex');
  console.log('clicked');
}
