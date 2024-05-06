const genBoxEl = () => {
  const boxEl = document.createElement("div");

  boxEl.className = "box--product";

  return boxEl;
};

const genTitleEl = (content = "Product Shop") => {
  const titleEl = document.createElement("h1");

  titleEl.className = "titolo";
  titleEl.textContent = content;

  return titleEl;
};

const genImgEl = () => {
  const imgEl = document.createElement("img");
  imgEl.className = "immagine";
  imgEl.src = "";
  imgEl.alt = "";

  return imgEl;
};

const genParagEl = () => {
  const descriptionEl = document.createElement("p");

  descriptionEl.className = "paragrafo";
  descriptionEl.textContent = "";

  return descriptionEl;
};

// const wrapperEl = () => {
//   const containerEl = document.createElement("div");
//   const titleEl = document.createElement("h1");
//   const imgEl = document.createElement("img");
//   const descriptionEl = document.createElement("p");

//   containerEl.className = "box---products";
//   titleEl.className = "product---titolo";
//   titleEl.textcontent = "Prodotto";
//   imgEl.className = "product---image";
//   imgEl.src = "https://fakestoreapi.com/products/";
//   imgEl.alt = "";
//   descriptionEl.className = "product---description";
//   descriptionEl.textContent = "";

//   containerEl.append(titleEl, imgEl, descriptionEl);

//   return wrapperEl;
// };

// const ROOT__EL = document.querySelector(".ROOT");

// ROOT__EL.append(wrapperEl);
