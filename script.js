'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModalWindow = e => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = e => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btnCloseModal => {
  btnCloseModal.addEventListener('click', openModalWindow);
});

btnCloseModal.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalWindow();
  }
});
