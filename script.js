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

btnsOpenModal.forEach(btnCloseModal => {
  btnCloseModal.addEventListener('click', openModalWindow);
});
