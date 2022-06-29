const inputBox = document.querySelector('.search-input');
const searchBtn = document.querySelector('.navbar__search-button');

inputBox.addEventListener('focus', () => {
  searchBtn.style.display = 'block';
})

searchBtn.addEventListener('click', () => {
  if (inputBox.value) {
    inputBox.value = '';
    inputBox.focus();
  }
})

inputBox.addEventListener('blur', () => {
  searchBtn.style.display = 'none';
})