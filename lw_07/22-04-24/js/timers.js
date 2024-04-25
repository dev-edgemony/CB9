// Functions
const modalElGen = (modalData) => {
  const modalEl = document.createElement("section");
  const titleEl = document.createElement("h2");
  const descriptionEl = document.createElement("p");
  const buttonEl = document.createElement("button");

  modalEl.className = "modal";
  titleEl.className = "modal--title";
  descriptionEl.className = "modal--description";
  buttonEl.className = "modal--close";

  titleEl.textContent = modalData.title;
  descriptionEl.textContent = modalData.description;
  buttonEl.textContent = "x";

  buttonEl.addEventListener("click", () => (modalEl.style.display = "none"));

  modalEl.append(titleEl, descriptionEl, buttonEl);
  return modalEl;
};

const clockElGen = (hours, mins, secs) => {
  const clockEl = document.createElement("h1");

  clockEl.className = "clock";
  clockEl.textContent = `${hours}:${mins}:${secs}`;

  return clockEl;
};

// Logics
const modalContent = {
  title: "Titolo della modale",
  description:
    "Descrizione della modale o testo contenuto descrizione della modale o testo contenuto o testo contenuto descrizione della modale o testo contenuto o testo contenuto descrizione della modale o testo contenuto o testo contenuto descrizione della modale o testo contenuto o testo contenuto descrizione della modale o testo contenuto o testo contenuto descrizione della modale o testo contenuto o testo contenuto descrizione della modale o testo contenuto o testo contenuto descrizione della modale o testo contenuto o testo contenuto descrizione della modale o testo contenuto o testo contenuto descrizione della modale o testo contenuto o testo contenuto descrizione della modale o testo contenuto o testo contenuto descrizione della modale o testo contenuto o testo contenuto descrizione della modale o testo contenuto.",
};

const rootEl = document.querySelector(".root");
const modalEl = modalElGen(modalContent);

// Async
// setTimeout(() => {
//   rootEl.append(modalEl);
// }, 5000);

// setInterval(() => {
//   const clockEl = clockElGen(
//     new Date().getHours(),
//     new Date().getMinutes(),
//     new Date().getSeconds()
//   );

//   rootEl.append(clockEl);

//   setTimeout(() => {
//     clockEl.remove();
//   }, 1000);
// }, 1000);

// Animation
const squareEl = document.querySelector(".square");
let squarePosX = -200;
let squarePosY = 500;
let rotation = 0;

setInterval(() => {
  squarePosX++;
  rotation++;

  squareEl.style.transform = `translate(${squarePosX}px, ${squarePosY}px) rotate(${rotation}deg)`;

  if (squarePosX >= 200) {
    squarePosX = -200;
  }
}, 1000 / 60);
