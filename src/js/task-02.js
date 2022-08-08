const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 const ingredientsList = document.querySelector(`#ingredients`);
ingredients.forEach((ingredient => {
  const ingredientitem = document.createElement(`li`)
  ingredientitem.classList.add(`item`);
ingredientitem.textContent = ingredient;
  ingredientsList.appendChild(ingredientitem);
}))
