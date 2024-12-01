/* в этот файл добавляет скрипты*/
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

const slider = document.querySelector('.slider');
const curtain = slider.querySelector('.slider__button-wrapper');
const sliderStyles = getComputedStyle(slider);
let curtainPlaceStart;
let clientX;

window.addEventListener('pointerup', stopTheCurtainShifting);
curtain.addEventListener('pointerdown', startTheCurtainShifting);

function startTheCurtainShifting (event) {
  curtainPlaceStart = Number(sliderStyles.getPropertyValue('--curtain-place'));
  clientX = event.clientX;
  window.addEventListener('pointermove', shiftТheСurtain);
}

function shiftТheСurtain (event) {
  const deltaX = event.clientX - clientX;
  const cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth;
  const curtainPlace = Math.min(Math.max(cursorPlace, 0), 1);
  slider.style.setProperty('--curtain-place', `${curtainPlace}`);
}

function stopTheCurtainShifting () {
  window.removeEventListener('pointermove', shiftТheСurtain);
}
