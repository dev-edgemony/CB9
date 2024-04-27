// Genero la modale
const createImageModal = (imageData) => {
  const modal = document.createElement("div");
  const modalContent = document.createElement("div");
  const closeModal = document.createElement("span");
  const highResImage = document.createElement("img");
  const description = document.createElement("p");
  const userInfo = document.createElement("p");

  modal.className = "image-modal";
  modalContent.className = "modal-content";
  closeModal.className = "close-modal";
  closeModal.textContent = "×"; 

  highResImage.className = "high-res-image";
  highResImage.src = imageData.urls.full; 
  highResImage.alt = imageData.alt_description;

  description.textContent = imageData.alt_description || "Nessuna descrizione";
  userInfo.textContent = `Fotografo: ${imageData.user?.name || "Sconosciuto"}, Luogo: ${imageData.user?.location || "Sconosciuto"}`;

  closeModal.addEventListener("click", () => {
    modal.style.display = "none"; 
  });

  modalContent.appendChild(closeModal);
  modalContent.appendChild(highResImage);
  modalContent.appendChild(description);
  modalContent.appendChild(userInfo);

  modal.appendChild(modalContent);

  return modal;
};

const createImageCard = (imgData) => {
  const cardContainer = document.createElement("div");
  const imgElement = document.createElement("img");
  const descriptionEl = document.createElement("div");

  cardContainer.className = "image-card";
  imgElement.className = "thumbnail-image";
  imgElement.src = imgData.urls.small;
  imgElement.alt = imgData.alt_description;

  descriptionEl.className = "image-description";
  
  // autore in hover
  const photographer = imgData.user ? imgData.user.name || "Sconosciuto" : "Sconosciuto";
  descriptionEl.textContent = `Fotografo: ${photographer}`;

  cardContainer.addEventListener("click", () => {
    const modal = createImageModal(imgData);
    document.body.appendChild(modal);
    modal.style.display = "block"; 
  });

  cardContainer.appendChild(imgElement);
  cardContainer.appendChild(descriptionEl);

  return cardContainer;
};

const createImageList = () => {
  const listContainer = document.createElement("div");
  listContainer.className = "image-list";

  return listContainer;
};
// la barra di ricerca
const createSearchBar = () => {
  const searchBarContainer = document.createElement("div");
  const searchField = document.createElement("input");
  const searchButton = document.createElement("button");

  searchBarContainer.className = "search-bar";
  searchField.placeholder = "Cerca immagini";
  searchButton.textContent = "Cerca";

  searchBarContainer.appendChild(searchField);
  searchBarContainer.appendChild(searchButton);
  return searchBarContainer;
};

// le const principali per la fetch
const API_BASE = "https://api.unsplash.com";
const CLIENT_ID = "R6tVX665_I0nWzo6YMwTWffoOMBaWWPb68-W4s75hMM";
const RESULTS_PER_PAGE = 24;
let currentPage = 1;

// creo la barra di ricerca
const ROOT_ELEMENT = document.querySelector(".root");
const searchBar = createSearchBar();
const imageList = createImageList();

ROOT_ELEMENT.appendChild(searchBar);

// Eventi di selezione del campo di input
const searchField = document.querySelector("input");
const searchButton = document.querySelector("button");

//ricerca delle immagini tramite API con richiesta fetch
const fetchImages = (searchTerm, page) => {
  imageList.textContent = "";

  fetch(
    `${API_BASE}/search/photos/?client_id=${CLIENT_ID}&query=${searchTerm}&per_page=${RESULTS_PER_PAGE}&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => {
      const searchResults = data.results;

      searchResults.forEach((item) => {
        const imgCard = createImageCard(item);
        imageList.appendChild(imgCard);
      });

      if (!ROOT_ELEMENT.querySelector(".image-list")) {
        ROOT_ELEMENT.appendChild(imageList);
      }

      updatePaginationControls();
    })
    .catch((error) => console.error("Errore nel fetch delle immagini:", error)); //in caso, gestisce l'errore
};
//Impaginazione
const updatePaginationControls = () => {
  const paginationContainer = document.querySelector(".pagination");

  if (!paginationContainer) { //se non esiste
    createPaginationControls(); //lo crea
  } else { //se esiste
    const [prevButton, nextButton] = paginationContainer.children; //pulsanti della paginazione

    prevButton.disabled = currentPage === 1; //non c'è pagina prima della pagina 1
//funzione dei pulsanti precedente - successivo
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        fetchImages(searchField.value, currentPage);
      }
    });

    nextButton.addEventListener("click", () => {
      currentPage++;
      fetchImages(searchField.value, currentPage);
    });
  }
};
//contenitore di impaginazione
const createPaginationControls = () => {
  const paginationContainer = document.createElement("div");
  paginationContainer.className = "pagination";

  const prevButton = document.createElement("button");
  prevButton.textContent = "Precedente";

  const nextButton = document.createElement("button");
  nextButton.textContent = "Successivo";

  paginationContainer.appendChild(prevButton);
  paginationContainer.appendChild(nextButton);
//appendo l'impaginazione al ROOT principale
  ROOT_ELEMENT.appendChild(paginationContainer);
  updatePaginationControls();
};

//logica di ricerca
searchButton.addEventListener("click", () => {
  const searchTerm = searchField.value;
  currentPage = 1;

  fetchImages(searchTerm, currentPage);
});
