const form = document.querySelector('.login-form');

const onSubmit = (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value)
    return alert('Все поля должны быть заполнены!');

  const formData = new FormData(event.currentTarget);
  formData.forEach((email, password) => console.log(`${email} : ${password}`));

  // const email = form.elements.email.value;
  // const password = form.elements.password.value;

  // if (!email || !password) return alert('Все поля должны быть заполнены!');

  // console.log({
  //   email,
  //   password,
  // });

  event.target.reset();
};

form.addEventListener('submit', onSubmit);
