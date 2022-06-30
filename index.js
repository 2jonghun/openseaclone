const inputBox = document.querySelector('.search-input');
const searchBtn = document.querySelector('.navbar__search-xbutton');
const inputBox2 = document.querySelector('.search-input2');
const searchBtn2 = document.querySelector('.navbar__search-xbutton2');

searchBtn.addEventListener('click', () => {
  if (inputBox.value) {
    inputBox.value = '';
    inputBox.focus();
    searchBtn.style.display = 'none';
  }
})

inputBox.addEventListener('keyup', () => {
  if (inputBox.value) {
    searchBtn.style.display = 'block';
  } else {
    searchBtn.style.display = 'none';
  }
})

searchBtn2.addEventListener('click', () => {
  if (inputBox2.value) {
    inputBox2.value = '';
    inputBox2.focus();
    searchBtn2.style.display = 'none';
  }
})

inputBox2.addEventListener('keyup', () => {
  if (inputBox2.value) {
    searchBtn2.style.display = 'block';
  } else {
    searchBtn2.style.display = 'none';
  }
})

const showInputBtn = document.querySelector('.navbar__search-icon-box2-button');
const navbarLogo = document.querySelector('.navbar__logo');
const navbarToogle = document.querySelector('.navbar__toogle');
const targetInputbox = document.querySelector('.navbar__input-box');
const angleBtn = document.querySelector('.angle-btn');

showInputBtn.addEventListener('click', () => {
  navbarLogo.style.display = 'none';
  navbarToogle.style.display = 'none';
  showInputBtn.style.display = 'none';
  targetInputbox.style.display = 'block'
})

angleBtn.addEventListener('click', () => {
  targetInputbox.style.display = 'none';
  navbarLogo.style.display = 'flex';
  navbarToogle.style.display = 'block';
  showInputBtn.style.display = 'block';
})

const searchInput1 = document.querySelector('.navbar__input-box1');

window.addEventListener('resize', () => {
  const browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (browserWidth >= 600) {
    navbarLogo.style.display = 'flex';
    navbarToogle.style.display = 'block';
    showInputBtn.style.display = 'block';
    if (targetInputbox.style.display == 'block') {
      targetInputbox.style.display = 'none'
    }
  }
});