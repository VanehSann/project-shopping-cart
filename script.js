function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}
//
function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}
//
function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}
//
function getSkuFromProductItem(thiss) {
  return thiss;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

function cartItemClickListener(event) {
  this.remove();
}
// apaga
const emptyCart = document.querySelector('.empty-cart');
function cartDelete() {
  const ol = document.querySelectorAll('.cart__item');
  if (ol.length > 0) {
    ol.forEach((o) => {
      o.remove();
    });
  }  
}
emptyCart.addEventListener('click', cartDelete);

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
//
// const buttonCart = document.querySelectorAll('.item__add');
// const data = fetchProducts('computador');
// const buttonCart = document.querySelectorAll('.item__add');
// // console.log(buttonCart)
// buttonCart.forEach((button) => { 
// button.onclick = function teste() {
//   const idItem = getSkuFromProductItem(this);
// };
// console.log(idItem)
// });
//
async function searchItem() {
  const sec = document.querySelector('.cart__items');
  const data = await fetchItem('MLB1341706310');
 
  // console.log(data)
    const i = {
      sku: data.id,
      name: data.title,
      salePrice: data.price };
      const produtItem = createCartItemElement(i);
      sec.appendChild(produtItem);
  }
//
async function searchProducts(product) {
  const sec = document.querySelector('.items');
  const data = await fetchProducts(product);
  // console.log(data)
  data.results.forEach((item) => {
    const i = {
      sku: item.site_id,
      name: item.title,
      image: item.thumbnail };
      const produtItem = createProductItemElement(i);
      sec.appendChild(produtItem);
    });
    const buttonCart = document.querySelectorAll('.item__add');
    buttonCart.forEach((button) => {
      button.addEventListener('click', searchItem);
    }); 
  }

window.onload = () => {
 searchProducts('computador');
// searchItem()
 };
