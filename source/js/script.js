'use strict'
const buttonBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

buttonBurger.addEventListener('click', () => {
  buttonBurger.classList.toggle('active')
  headerMenu.classList.toggle('active')
})