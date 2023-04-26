
const categoriesList = document.getElementById("categories");

const newArrayCategories = categoriesList.children;

console.log(`Number of categories: ${newArrayCategories.length}`)


const listItem = document.querySelectorAll('.item');

listItem.forEach(el => {
    
    const listItemName = el.querySelector('h2').textContent;
    const listItemElement = el.querySelectorAll('li');

    console.log(`Category: ${listItemName}`)
    console.log(`Elements: ${listItemElement.length}`)

});

