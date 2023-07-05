// const nameInput = document.querySelector('#name-input');
// const nameOutput = document.querySelector('#name-output');

// const onInput = (event) => {
//   const value = event.target.value.trim();

//   // if (!value) return (nameOutput.textContent = 'Anonymous');
//   // return (nameOutput.textContent = value);

//   return (nameOutput.textContent = !value ? 'Anonymous' : value);
// };

// nameInput.addEventListener('input', onInput);

// const inputEl = document.querySelector('#name-input');
// const outputEl = document.querySelector('#name-output');

// console.log(inputEl, outputEl);
// inputEl.addEventListener('input', getNewName);

// function getNewName(event) {
//   const value = event.target.value.trim();
//   return (outputEl.textContent = !value ? 'Anonymous' : value);
// }

const inputNameEl = document.getElementById('name-input');
const outputNameEl = document.getElementById('name-output');

inputNameEl.addEventListener('input', onInputChange);

function onInputChange() {
  if (inputNameEl.value.trim().length === 0) {
    outputNameEl.textContent = 'Anonymous';
  } else {
    outputNameEl.textContent = inputNameEl.value;
  }
}
