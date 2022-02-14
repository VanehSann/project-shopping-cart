const fetchItem = async (productItem) => {
  const resultResponse = await fetch(`https://api.mercadolibre.com/items/${productItem}`);
  const results = await resultResponse.json();
return results;
}

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
