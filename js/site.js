const hamburgerMenu = document.querySelector('#hamburgerMenu');
const nav = document.querySelector('.nav');

hamburgerMenu.addEventListener('click', () => {
  nav.classList.toggle('show');

  // hamburgerMenu toggle animation
  hamburgerMenu.classList.toggle('animate');
});

const items = [...document.querySelectorAll('li.nav__item')];

items.forEach((item) => {
  item.addEventListener('click', (e) => {
    const clickedItem = e.target.closest('li');
    const itemDetail = clickedItem.querySelector('.dropdown__nav');
    const clickedItemActive = clickedItem.classList.contains('active');
    clickedItem.classList.toggle('active');
    if (clickedItemActive) {
      itemDetail.style.maxHeight = null;
    } else {
      const scrollHeight = itemDetail.scrollHeight;
      itemDetail.style.maxHeight = `${scrollHeight}px`;
    }
  });
});
