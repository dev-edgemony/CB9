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

// Consts

// image gen
const imageElGen = (imageURL) => {
  const imageContainerEL = document.createElement("div");
  const imgEl = document.createElement("img");

  imageContainerEL.className = "image--wrapper";
  imgEl.className = "image";

  imgEl.src = imageURL.urls.small;
  imgEl.alt = imageURL.alt_description;

  //   imageContainerEL.addEventListener("click", () => {
  //     const modalContent = modalEventGen(imageURL, authorID); // Call modalEventGen and pass imageURL and authorID
  //     document.body.append(modalContent); // Append modal content to body
  //   });

  imageContainerEL.append(imgEl);
  return imageContainerEL;
};

// image wrapper gen
const imageWrapElGen = () => {
  const wrapperEl = document.createElement("div");

  wrapperEl.className = "main--wrapper";

  return wrapperEl;
};

// modal gen
const modalEventGen = (imageURL, authorID) => {
  const imgModDivEl = document.createElement("div");
  const imgModEl = document.createElement("img");
  const authorEl = document.createElement("p");

  imgModDivEl.className = "modal";
  imgModEl.className = "modal-image";
  authorEl.className = "modal-author";

  imgModEl.src = imageURL.urls.full;
  imgModEl.alt = imageURL.alt_description;
  authorEl.textContent = authorID.user.id;

  imgModDivEl.append(imgModEl, authorEl);

  return imgModDivEl;
};

const wrapEl = imageWrapElGen();

// LOGIC
const BASE_URL = "https://api.unsplash.com/";
const ACCESS_KEY = "1-kmfTqzTwaICcapH2xU58_9kdHS_E5aPrRY7AivV6I";
const SEARCH_KEY = "cat";
const PAGE = 1;
const PER_PAGE = 20;
const rootEl = document.querySelector("#root");

fetch(
  `${BASE_URL}search/photos/?client_id=${ACCESS_KEY}&query=${SEARCH_KEY}&page=${PAGE}&per_page=${PER_PAGE}`
)
  .then((res) => res.json())
  .then((data) => {
    const resultEl = data.results;
    console.log(resultEl);

    resultEl.map((photo) => {
      const imageList = imageElGen(photo);

      wrapEl.append(imageList);
    });

    rootEl.append(wrapEl);
  });
