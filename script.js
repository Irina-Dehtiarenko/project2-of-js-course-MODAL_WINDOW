'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(modal, overlay, btnCloseModal, btnsOpenModal);

const openModalWindow = e => {
  console.log(e.target.textContent);
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
