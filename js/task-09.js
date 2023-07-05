const body = document.body;
const colorValue = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const handleChangeColor = () => {
  const currentColor = getRandomHexColor();
  body.setAttribute("style", `background:${currentColor} `);
  colorValue.textContent = currentColor;
};

changeColorBtn.addEventListener("click", handleChangeColor);

// const refs = {
//   body: document.querySelector('body'),
//   btnChangeColor: document.querySelector('.change-color'),
//   textChangeColor: document.querySelector('.color'),
// };

// refs.btnChangeColor.addEventListener('click', getNewColor);

// function getNewColor(event) {
//   event.currentTarget.value = color;

//   function color(fnColor) {
//     const currentColor = fnColor;

//     refs.body.style.backgroundColor = currentColor;
//     refs.textChangeColor.textContent = currentColor;
//   }

//   color(getRandomHexColor());
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
