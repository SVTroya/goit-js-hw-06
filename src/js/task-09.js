const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('button.change-color'),
  colorText: document.querySelector('span.color')
}

refs.button.addEventListener('click', changeBodyColor)

function changeBodyColor() {
  const randomColor = getRandomHexColor()
  refs.colorText.textContent = randomColor
  refs.body.style.backgroundColor = randomColor
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
