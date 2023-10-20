const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientNodes = ingredients.map(ingredient => {
  const ingredientNode = document.createElement('li')
  ingredientNode.textContent = ingredient
  ingredientNode.classList.add('item')
  return ingredientNode
})

document.querySelector('ul#ingredients').append(...ingredientNodes)