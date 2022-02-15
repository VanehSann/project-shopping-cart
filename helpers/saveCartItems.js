const saveCartItems = (ol) => localStorage.setItem('cartItems', ol);

// console.log(saveCartItems());
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
