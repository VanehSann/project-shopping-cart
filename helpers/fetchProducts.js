const fetchProducts = async (product) => {
  const resultResponse = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
  const results = await resultResponse.json();
return results;
};
// fetchProducts('computador');
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
