// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const menuIngredients = document.querySelector('#ingredients');

// const markup = (item) => {
//   const element = document.createElement('li');
//   element.textContent = item;
//   return element;
// };

// const createMarkup = ingredients.map(markup);

// menuIngredients.append(...createMarkup);

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const markup = ingredients.map((number) => {
  const IngItemFirstNew = document.createElement('li');
  IngItemFirstNew.textContent = number;
  IngItemFirstNew.classList.add('item');

  return IngItemFirstNew;
});

listIngredients.append(...markup);
