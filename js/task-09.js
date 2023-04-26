const body = document.body;
const spanColor = document.querySelector('.color')
const btnChange = document.querySelector('.change-color')

btnChange.addEventListener("click", () => {
  const color = getRandomHexColor();

  spanColor.textContent = color;
  body.style.backgroundColor = color;
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
