const navEl = document.querySelector('#categories')

const category = navEl.querySelectorAll('.item')
console.log('');
console.log(`Number of categories: ${navEl.children.length}`);
console.log('');
const titles = [];
category.forEach(e => {
  console.log('Category: ', e.getElementsByTagName('h2')[0].textContent);
  console.log('Elements: ', e.getElementsByTagName('li').length);
  console.log('');
});


