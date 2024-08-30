const openSidebar = document.getElementById('hamburgerMenu');
const closeSidebar = document.querySelector('.closeMenu');
const sidebar = document.querySelector('.sidebar');

const body = document.body;
const overlay = document.querySelector('.overlay');

const openMenu = () => {
  sidebar.classList.add('open');
  body.classList.add('lock');
  overlay.style.display = 'block';
}

const closeMenu = () => {
  sidebar.classList.remove('open');
  body.classList.remove('lock');
  overlay.style.display = 'none';
}

openSidebar.addEventListener('click', openMenu)
closeSidebar.addEventListener('click', closeMenu)