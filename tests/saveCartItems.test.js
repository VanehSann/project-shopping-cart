const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const { it } = require('mocha');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  test('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado;', () => {
    const valor = '<ol><li>Item</li></ol>'
    saveCartItems(valor);
    expect(localStorage.setItem).toHaveBeenCalled();

  });
  test('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems.', () => {
    const valor = '<ol><li>Item</li></ol>'
    saveCartItems(valor);
    expect(localStorage.setItem).toHaveBeenCalledWith( 'cartItems', '<ol><li>Item</li></ol>')

  });
});
