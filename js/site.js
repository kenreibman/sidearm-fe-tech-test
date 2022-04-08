const hamburgerMenu = document.querySelector('#hamburgerMenu');
const nav = document.querySelector('.nav');

const navItem = document.querySelectorAll('.nav__item');
const dropDown = document.querySelector('.dropdown__nav');

hamburgerMenu.addEventListener('click', () => {
  nav.classList.toggle('show');

  // hamburgerMenu toggle animation
  hamburgerMenu.classList.toggle('animate');
});

// loop through all navItem and add event listener to each
for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', () => {
    dropDown.classList.toggle('show');
  });
}
