// https://fakestoreapi.com/products/1

const elementGen = (data) => {
  const contEl = document.createElement("div");

  contEl.className = "container";

  const titleEl = document.createElement("h1");

  titleEl.className = "main__title";
  titleEl.textContent = data.title;

  const imgEl = document.createElement("img");

  imgEl.className = "image";
  imgEl.src = data.image;
  imgEl.alt = data.alt;

  const textEl = document.createElement("p");

  textEl.className = "description";
  textEl.textContent = data.description;

  contEl.append(titleEl, imgEl, textEl);
  return contEl;
};

const ROOT_EL = document.querySelector(".root");

const BASE_URL = "https://fakestoreapi.com/products/8";
fetch(`${BASE_URL}`)
  .then((res) => res.json())
  .then((data) => {
    const wrapperEl = elementGen(data);
    ROOT_EL.append(wrapperEl);
  })
  .catch((error) => {
    ROOT_EL.append(error);
  });
