const categoryUl = document.querySelector(`#categories`);
const items = document.querySelectorAll(`.item`)
const category = document.querySelectorAll(`h2`);
const totalItem = items.length;
console.log(`Number of categories: ${totalItem}`);

for(let i=0; i<items.length; i++) {
  console.log(items[i].firstElementChild.textContent);
  console.log(items[i].lastElementChild.childElementCount);
}