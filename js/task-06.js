const validationInput = document.querySelector('#validation-input');
const validNumber = parseInt(validationInput.dataset.length);

const onInput = (event) => {
  const userValue = event.target.value.trim().length;
  validationInput.classList.add('invalid');

  if (userValue === validNumber) {
    return validationInput.classList.replace('invalid', 'valid');
  }
  return validationInput.classList.replace('valid', 'invalid');
};

validationInput.addEventListener('input', onInput);
