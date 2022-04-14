// Hamburger Mobile Button

const hamburgerMenu = document.querySelector('#hamburgerMenu');
const nav = document.querySelector('.nav');

hamburgerMenu.addEventListener('click', () => {
  nav.classList.toggle('show');

  // hamburgerMenu toggle animation
  hamburgerMenu.classList.toggle('animate');
});

// Navbar
//1. Grab our items
const items = [...document.querySelectorAll('li.nav__item')];
//2. Add event listeners to our items that handle an item click.
//3. handleItemClick function ->
//3.1 Grab the clicked item
//3.2 Grab the itemDetail as we need to add maxHeight
//3.3 Check if item has .active class
//3.4 If it does, remove the maxHeight and remove the .active class
//3.5 If it doesn't, add the maxHeight and add the .active class

const clearItem = (itemDetail) => {
  itemDetail.style.maxHeight = null;
};

const activateItem = (itemDetail) => {
  const scrollHeight = itemDetail.scrollHeight;
  itemDetail.style.maxHeight = `${scrollHeight}px`;
};

// 12-Apr-2022: Added lines 22 -> 30 for Ken to close all other faq-items.
const closeOpenItems = (clickedItem) => {
  items.forEach((item) => {
    if (item !== clickedItem) {
      item.classList.remove('active');
      const itemDetail = item.querySelector('.dropdown__nav');
      clearItem(itemDetail);
    }
  });
};

const handleItemClick = (e) => {
  const clickedItem = e.target.closest('li');
  // 12-Apr-2022: Added line 34 for Ken to close all other faq-items.
  closeOpenItems(clickedItem);
  const itemDetail = clickedItem.querySelector('.dropdown__nav');
  const clickedItemActive = clickedItem.classList.contains('active');
  clickedItem.classList.toggle('active');
  if (clickedItemActive) {
    clearItem(itemDetail);
  } else {
    activateItem(itemDetail);
  }
};

const addListenersToItems = (array, callback) => {
  array.forEach((item) => {
    item.addEventListener('click', (e) => {
      callback(e);
    });
  });
};

addListenersToItems(items, handleItemClick);
