//-----ESERCITAZIONE Unsplash e selettore immagini----////

const imgGen = (imgData) => {
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");

  wrapperEl.className = "img--wrapper";
  imgEl.className = "imgEl";
  imgEl.src = imgData.urls.small;
  imgEl.alt = imgData.alt_description;

  wrapperEl.addEventListener("click", () => {
    window.open(imgData.urls.full, "_blank");
  });

  wrapperEl.append(imgEl);
  return wrapperEl;
};

const ImgListEl = (imgList) => {
  const wrapperList = document.createElement("div");
  const listTitle = document.createElement("h3");

  wrapperList.className = "imgList";
  listTitle.textContent = imgList;

  wrapperList.append(listTitle);
  return wrapperList;
};

const BASE_URL = "https://api.unsplash.com";
const API_TOKEN = "usEey9f7mX9cID_VGyfjztK8YeIYTKaA5CRB8aQjgiY";
const SEARCH_QUERY = "Tattoo";
const PAGE = 2;
const PER_PAGE = 20;
const ROOT_EL = document.querySelector(".root");

fetch(
  `${BASE_URL}/search/photos/?client_id=${API_TOKEN}&query=${SEARCH_QUERY}&per_page=${PER_PAGE}&page=${PAGE}`
)
  .then((res) => res.json())
  .then((data) => {
    const wrapperList = ImgListEl("Tattoo Images");

    data.results.forEach((photo) => {
      wrapperList.append(imgGen(photo));
    });

    ROOT_EL.append(wrapperList);
  });
