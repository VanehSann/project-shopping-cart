const fetchItem = (product) => fetch(`https://api.mercadolibre.com/items/${product}`)
.then((data) => data.json())
.catch((error) => error);

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
