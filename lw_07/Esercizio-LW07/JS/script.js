// Scusate ma a causa di un lutto in famiglia mi sono dedicato poco allo svolgimento delle esercitazioni!!! Recupererò prima possibile.

const genInputSearchEl = () => {
  const boxInputElement = document.createElement("div");
  const inputEl = document.createElement("input");
  const buttonEl = document.createElement("button");

  boxInputElement.className = "boxInput";
  inputEl.placeholder = "Cerca immagine";
  inputEl.className = "inputSrc"; //inputEl.value
  buttonEl.textContent = "Cerca";
  buttonEl.className = "btnSrc";

  boxInputElement.append(inputEl, buttonEl);

  return boxInputElement;
};

const genImageEl = (imageData) => {
  const boxEl = document.createElement("form");
  const imageEl = document.createElement("img");

  boxEl.className = "boxCard";
  imageEl.className = "imgCard";
  imageEl.src = imageData.urls.small;
  imageEl.alt = imageData.alt_description;

  boxEl.append(imageEl);

  return boxEl;
};

const genImageListEl = (listName) => {
  const boxEl = document.createElement("div");
  const titleEl = document.createElement("h3");

  boxEl.className = "box-list";
  titleEl.className = "boxTitle";
  titleEl.textContent = listName;

  // boxEl.append(titleEl);
  return boxEl;
};

const BASE_URL = "https://api.unsplash.com";
const API_TOKEN = "6n3m-Iobhxqru8HL5nzkrmJlpPAAZjM64JUreRh6KMQ";
const SEARCH_QUERY = "cat";
const PER_PAGE = 20;
const rootEl = document.querySelector(".root");

const inputSearchEl = genInputSearchEl();
const imageListEl = genImageListEl("Best Photo!!!");

rootEl.append(inputSearchEl);

const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", () => {
  imageListEl.textContent = "";

  fetch(
    `${BASE_URL}/search/photos/?client_id=${API_TOKEN}&query=${inputEl.value}&per_page=${PER_PAGE}`
  )
    .then((res) => res.json())
    .then((data) => {
      const listData = data.results;

      listData.map((photo) => {
        const imageCardEl = genImageEl(photo);

        imageListEl.append(imageCardEl);
      });

      rootEl.append(imageListEl);
    });
});
