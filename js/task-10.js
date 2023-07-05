const control = document.querySelector('#controls');
const input = document.querySelector('#controls input');
const renderBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

// for (let i = 0; i < amount; i += 1) {
//   const basicSize = 30;
//   const biggestSize = basicSize + i * 10;
//   const box = document.createElement('div');
//   box.setAttribute(
//     'style',
//     `width: ${biggestSize}px; height: ${biggestSize}px; background: ${getRandomHexColor()}`
//   );
//   boxes.append(box);
// }

const createBoxes = (event, amount) => {
  amount = input.value;

  console.dir(event.target);

  const arr = [];
  arr.length = amount;

  arr.fill(amount).map((item, index) => {
    const baseSize = 30;
    const biggestSize = baseSize + index * 10;
    const box = document.createElement('div');
    box.setAttribute(
      'style',
      `width:${biggestSize}px ;height:${biggestSize}px; background-color:${getRandomHexColor()}`
    );

    boxes.append(box);
  });
};

const destroyBoxes = () => {
  input.value = '';
  boxes.innerHTML = '';
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

input.addEventListener('input', (event) => {
  console.log(event.target.value);
});
