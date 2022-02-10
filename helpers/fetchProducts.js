
const fetchProducts =  async (nomeDoProduto)  => {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${nomeDoProduto}`);
  const data = await result.json();
  console.log(data)
};
fetchProducts(`computador`);

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
