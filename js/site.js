const hamburgerMenu = document.querySelector('#hamburgerMenu');
const nav = document.querySelector('.nav');

hamburgerMenu.addEventListener('click', () => {
  nav.classList.toggle('show');
});
