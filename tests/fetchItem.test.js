require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  it('Teste se fetchItem é uma função;', () => {
    expect(typeof fetchItem).toBe('function')
  });
  it('Execute a função fetchItem com o argumento "MLB1615760527" e teste se fetch foi chamada;', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled();
  });
  it('Teste se, ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  });
  it('Teste se o retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
   const fecthItemResult = await fetchItem('MLB1615760527');
    expect(fecthItemResult).toEqual(item);
  });
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    await expect(Promise.reject(new Error('You must provide an url'))).rejects.toThrow('You must provide an url');
   });
});
