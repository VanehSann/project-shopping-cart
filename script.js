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
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}
const sec = document.querySelector('.cart__items');
function cartItemClickListener(event) {
  event.target.remove();
  saveCartItems(sec.innerHTML);
  // console.log(localStorage)
}
// apaga
const emptyCart = document.querySelector('.empty-cart');
function cartDelete() {
  const ol = document.querySelectorAll('.cart__item');
  if (ol.length > 0) {
    ol.forEach((o) => {
      o.remove();
    });
    localStorage.clear();
  }
}
// https://stackoverflow.com/questions/58789424/localstorage-is-saving-html-as-object-htmldivelement
emptyCart.addEventListener('click', cartDelete);
// fim apaga
function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
//
function getPriceFromProductItem(item) {
  return item.querySelector('span.i.salePrice').innerText;
}
//
async function searchItem(event) {
  // ReferĂȘncias: Resolvi com as dicas da mentorias de hoje e ontem, sendo indicado link sobre o event.target. 
  const sku = getSkuFromProductItem(event.target.parentNode);
  // console.log(sku)
  // const sec = document.querySelector('.cart__items');
  const data = await fetchItem(sku);
  // console.log(data)
  const i = {
    sku: data.id,
    name: data.title,
    salePrice: data.price };
    const produtItem = createCartItemElement(i);
    sec.appendChild(produtItem);
    saveCartItems(sec.innerHTML);
  }
  const li = document.querySelectorAll('.cart__item');
console.log(li);
//
async function searchProducts(product) {
  const secI = document.querySelector('.items');
  const data = await fetchProducts(product);
  data.results.forEach((item) => {
    const i = { sku: item.id, name: item.title, image: item.thumbnail };
    const produtItem = createProductItemElement(i);
    secI.appendChild(produtItem);
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerText = 'Carregando..';
    setTimeout(() => {
        loading.remove();
      }, 3000);
    produtItem.appendChild(loading);
    });
    const buttonCart = document.querySelectorAll('.item__add');
    buttonCart.forEach((button) => {
      button.addEventListener('click', searchItem);
    });
  }
//
window.onload = () => {
 searchProducts('computador');
 sec.innerHTML = getSavedCartItems();
 sec.addEventListener('click', cartItemClickListener);

 //
 };
