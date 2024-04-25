// Functions
const genImageCardEl = (imageData) => {
  const wrapperEl = document.createElement("div");
  const imageEl = document.createElement("img");

  wrapperEl.className = "card--wrapper";
  imageEl.className = "card--image";
  imageEl.src = imageData.urls.small;
  imageEl.alt = imageData.alt_description;

  wrapperEl.addEventListener("click", () => {
    window.open(imageData.urls.full, "_blank").focus();
  });

  wrapperEl.append(imageEl);
  return wrapperEl;
};

const genImageListEl = () => {
  const wrapperEL = document.createElement("div");

  wrapperEL.className = "card--list";

  return wrapperEL;
};

const genInputSearchEl = () => {
  const wrapperInputEl = document.createElement("div");
  const inputEl = document.createElement("input");
  const buttonEl = document.createElement("button");

  wrapperInputEl.className = "input--elements";
  inputEl.placeholder = "Cerca immagine";
  buttonEl.textContent = "Cerca";

  wrapperInputEl.append(inputEl, buttonEl);
  return wrapperInputEl;
};

// Logic
const BASE_URL = "https://api.unsplash.com";
const API_TOKEN = "_8UK605rPGobs_oRRT7u2jYR_JUSyFYWC05yeHSHeao";
const SEARCH_QUERY = "butterfly";
const PAGE = 2;
const PER_PAGE = 30;
const ROOT_EL = document.querySelector(".root");

// Input Logic
const inputSearchEl = genInputSearchEl();
const imageListEl = genImageListEl();

ROOT_EL.append(inputSearchEl);

// EVENTS logic
const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", () => {
  const inputValue = inputEl.value;

  imageListEl.textContent = "";

  // ASYNC logic
  fetch(
    `${BASE_URL}/search/photos/?client_id=${API_TOKEN}&query=${inputValue}&per_page=${PER_PAGE}&page=${PAGE}`
  )
    .then((res) => res.json())
    .then((data) => {
      const listData = data.results;

      listData.map((photo) => {
        const imageCardEl = genImageCardEl(photo);

        imageListEl.append(imageCardEl);
      });

      ROOT_EL.append(imageListEl);
    });
});
