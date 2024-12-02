const mainNav = document.querySelector('.main-nav');
const burger = document.querySelector('.button-toggle');
const body = document.querySelector('.page__body');

body.classList.remove('nojs');
mainNav.classList.remove('main-nav--opened');
mainNav.classList.add('main-nav--closed');

burger.addEventListener('click', ()=> {
  if (mainNav.classList.contains('main-nav--opened')) {
    burger.classList.remove('button-toggle--opened');
    burger.classList.add('button-toggle--closed');
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
  } else {
    burger.classList.add('button-toggle--opened');
    burger.classList.remove('button-toggle--closed');
    mainNav.classList.add('main-nav--opened');
    mainNav.classList.remove('main-nav--closed');
  }
});
