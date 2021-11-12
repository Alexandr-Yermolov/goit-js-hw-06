const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')
console.log(ingredientsList);

// const products = ingredients.map(product => {
//   const itemEl = document.createElement('li')
//   itemEl.classList.add('item')
//   //console.log(itemEl);
//   itemEl.textContent = product;
//   return itemEl
// })
// ingredientsList.append(...products);

//---------------------------------------------------
  
  
const createIngridientsFa = products => {
  return products.map(product => {
    const itemEl = document.createElement('li')
    itemEl.classList.add('item')
    //console.log(itemEl);
    itemEl.textContent = product;
    
    return itemEl
  });
}
const elements = createIngridientsFa(ingredients)
ingredientsList.append(...elements);