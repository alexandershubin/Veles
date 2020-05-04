'use strict'
const buttonBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector("body")

buttonBurger.addEventListener('click', () => {
  buttonBurger.classList.toggle('active')
  headerMenu.classList.toggle('active')
  body.classList.toggle('overflow')
})