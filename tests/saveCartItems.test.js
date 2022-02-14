const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const { it } = require('mocha');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  test('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado;', () => {
    const a = `${<ol><li></li></ol>}`;
    expect(saveCartItems(a)).toHaveBeenCalled(localStorage.setItem)

  });
  test('teste', () => {
    expect().toEqual()

  });
});
