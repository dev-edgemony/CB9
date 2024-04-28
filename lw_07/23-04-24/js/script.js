const productCardGen = (productData) => {
  const productEl = document.createElement("div");
  const imageEl = document.createElement("img");
  const priceEl = document.createElement("p");

  productEl.className = "product--card";
  imageEl.src = productData.thumbnail;
  imageEl.arl = productData.title;
  priceEl.textContent = productData.price;

  productEl.append(imageEl, priceEl);
  return productEl;
};

const rootEl = document.querySelector(".root");

let productsData = [];

// Le promise si risolvono coi then - una fetch di solito ha 2 then
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    // Solo qui dentro ho data, il risultato in JSON delle informazioni
    // contenute all'indirizzo dummyjson.com/products
    data.products.map((product) => {
      const productCard = productCardGen(product);

      rootEl.append(productCard);
    });
  });
