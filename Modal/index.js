const modal = document.querySelector('#modal');
const closeButton = document.querySelector('#close-modal');
const openButton = document.querySelector('#open-modal');
const hideOpen = document.querySelector('#hide-open');

modal.style.display = 'none';

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
  hideOpen.style.display = 'block';
});

openButton.addEventListener('click', () => {
  modal.style.display = 'block';
  hideOpen.style.display = 'none';
});
