const bodyEl = document.querySelector('body')
console.log('bodyEl', bodyEl);

const backgroundColor = document.querySelector('.color')
console.log('backgroundColor',backgroundColor);

const magicBtnEl = document.querySelector('.change-color')
console.log('magicBtnEl',magicBtnEl);


magicBtnEl.addEventListener('click', () => {
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
  backgroundColor.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = backgroundColor.textContent
  
})




