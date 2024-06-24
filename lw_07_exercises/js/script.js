// # CB9-LW7 – Esercitazioni

// ## 1. Unsplash

// Sulla base della lezione del giorno, creare un account da developer su Unsplash, seguire la documentazione fino alla generazione di una `Access Key`.

// > https://unsplash.com/documentation

// ## 2. Lista di immagini

// A partire dall'esercizio 1 bisogna generare una lista di imaggini, il cui stile viene scelto dallo studente. La lista deve poter effettuare una chiamata di tipo fetch `GET` all'indirizzo completo. Ricordate importantissima l'aggiunta della Access Key per ottenere i permessi.

// ## Avanzato - Una modale per le immagini

// A partire dall'esercizio 2, al click su ogni singola immagine deve potersi posizionare in sovraimpressione nello schermo un modale che contiene tutte le informazioni su quella specifica immagine. Nello specifico la modale deve possedere:

// 1. una immagine con risoluzione più alta rispetto all'imagine cliccata;
// 2. una descrizione della foto
// 3. il nome dell'utente della foto se presente e il luogo

// Tutte le informazioni le trovate sempre dentro l'oggetto che arriva dalla chiamata API.

// > Eventualmente, per chi vuole magari andare oltre la modale provando qualche elemento customizzato a piacere, siate liberi di sostituire la logica della modale con qualcosa di vostro gradimento, purchè porti la logica dell'applicazione ad un livello più avanzato.

// Elements Creation

const cE = (name) => document.createElement(name);

const imageCardGen = (imageURL) => {
  const imgWrapEl = cE("div");
  imgWrapEl.className = "image-wrapper";

  const imgEl = cE("img");
  imgEl.className = "image";
  imgEl.src = imageURL.urls.small;
  imgEl.alt = imageURL.alt_description;

  imgWrapEl.append(imgEl);

  imgWrapEl.addEventListener("click", () => {
    removeModal();
    document.body.appendChild(modalGen(imageURL));
  });

  return imgWrapEl;
};

const imagesWrapperElGen = () => {
  const mainWrapperEl = cE("div");
  mainWrapperEl.className = "main-wrapper";

  return mainWrapperEl;
};

const modalGen = (imageURL) => {
  const modalWrapEl = cE("div");
  modalWrapEl.className = "modal-wrapper";

  const modalImgEl = cE("img");
  modalImgEl.className = "modal-image";
  modalImgEl.src = imageURL.urls.full;
  modalImgEl.alt = imageURL.alt_description;

  const modalDescriptionEl = cE("p");
  modalDescriptionEl.className = "description";
  modalDescriptionEl.textContent = `Title: ${imageURL.user.instagram_username}`;

  const modalAuthorEl = cE("p");
  modalAuthorEl.className = "author";
  modalAuthorEl.textContent = `Instagram: ${imageURL.user.instagram_username}`;

  const modalBtnEl = cE("button");
  modalBtnEl.className = "modal-close";
  modalBtnEl.textContent = "Close";

  modalWrapEl.append(modalImgEl, modalDescriptionEl, modalAuthorEl, modalBtnEl);

  modalBtnEl.addEventListener("click", () => removeModal());

  return modalWrapEl;
};

// Remove Modal

function removeModal() {
  const existingModal = document.querySelector(".modal-wrapper");
  if (existingModal) {
    existingModal.remove();
  }
}

// LOGIC
const BASE_URL = "https://api.unsplash.com/";
const ACCESS_KEY = "1-kmfTqzTwaICcapH2xU58_9kdHS_E5aPrRY7AivV6I";
const SEARCH_KEY = "cat";
const PAGE = 1;
const PER_PAGE = 20;
const rootEl = document.querySelector("#root");
const wrapperEl = imagesWrapperElGen();

fetch(
  `${BASE_URL}search/photos/?client_id=${ACCESS_KEY}&query=${SEARCH_KEY}&page=${PAGE}&per_page=${PER_PAGE}`
)
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((photo) => {
      wrapperEl.append(imageCardGen(photo));
    });
    rootEl.appendChild(wrapperEl);
  });
