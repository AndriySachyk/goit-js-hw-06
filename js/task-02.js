const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const createNewElUl = document.createElement("ul");

for (const ingredient of ingredients) {
  const createNewElLi = document.createElement("li");
  createNewElLi.textContent = ingredient;
  createNewElUl.append(createNewElLi)
}

console.log(createNewElUl)

document.body.prepend(createNewElUl)