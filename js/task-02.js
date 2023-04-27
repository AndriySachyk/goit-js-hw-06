const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.getElementById('ingredients');

const liElements = ingredients.map((ingredient) => {
  let liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  
  return liEl
})

ulList.append(...liElements);

