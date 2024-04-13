// const titleEl = document.querySelector(".mainTitle");

// titleEl.parentNode; // Cattura il nodo padre dell'elemento
// titleEl.previousElementSibling; // Cattura elemento fratello precedente
// // ... consultare slides

// -------------- CREAZIONE DEGLI ELEMENTI --------------
// const rootEl = document.querySelector("#root"); // Padre
// const titleEl = document.createElement("h1"); // Figlio
// const descriptionEl = document.createElement("p");

// titleEl.textContent = "Il DOM"; // aggiunge o modifica il text content
// titleEl.className = "title"; // aggiunge o modifica classe
// titleEl.classList.add("active"); // aggiunge classe a quella esistente

// descriptionEl.textContent = "Lorem ipsum dolor sit amet...";
// descriptionEl.classList.add("active");

// rootEl.append(titleEl, descriptionEl);

// ------------- CREAZIONE CARD DINAMICA -------------
// const rootEl = document.querySelector("#root");
// const cardEl = document.createElement("div");
// const imgEl = document.createElement("img");
// const textsEl = document.createElement("div");
// const titleEl = document.createElement("h3");
// const descriptionEl = document.createElement("p");

// cardEl.className = "card";
// imgEl.className = "cardImg";
// imgEl.src =
//   "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvc3YxMjEyNTAtaW1hZ2Uta3d2eDY1Y3EuanBn.jpg";
// imgEl.alt = "immagine";
// textsEl.className = "cardText";
// titleEl.textContent = "NOTEBOOK, troppo-bello";
// descriptionEl.textContent =
//   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente";

// textsEl.append(titleEl, descriptionEl);
// cardEl.append(imgEl, textsEl);
// rootEl.append(cardEl);

// ------------ FUNZIONE GENERATRICE DI CARD ------------
const cardGenerator = (imgUrl, title, description) => {
  const cardEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const textsEl = document.createElement("div");
  const titleEl = document.createElement("h3");
  const descriptionEl = document.createElement("p");

  cardEl.className = "card";
  imgEl.className = "cardImg";
  imgEl.src = imgUrl;
  imgEl.alt = title;
  textsEl.className = "cardText";
  titleEl.textContent = title;
  descriptionEl.textContent = description;

  textsEl.append(titleEl, descriptionEl);
  cardEl.append(imgEl, textsEl);

  return cardEl;
};

const rootEl = document.querySelector("#root");
const card1 = cardGenerator(
  "https://picsum.photos/200/180/?1",
  "Una foto meravigliosa",
  "Questa è la descrizione più inutile al mondo!"
);

const card2 = cardGenerator(
  "https://picsum.photos/200/180/?2",
  "Una immagine",
  "Questa è la descrizione più inutile al mondo! numero 2!"
);

rootEl.append(card1, card2);
