const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 const ingredientsList = document.querySelector(`#ingredients`);
const elements=ingredients.map((ingredient => {
  const ingredientitem = document.createElement(`li`)
  ingredientitem.classList.add(`item`);
ingredientitem.textContent = ingredient;
  return ingredientitem;
}))
console.log(elements);
ingredientsList.append(...elements);