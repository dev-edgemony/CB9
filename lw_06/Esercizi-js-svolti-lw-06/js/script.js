
// --------------------------Primo esercizio------------------------------------------------------------------

// function mediaCount(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//     return sum / array.length;
//   }

//   const numeri = [15, 25, 30, 55, 70,];

//  console.log(mediaCount(media));

// // Non ricordavo vome sommare gli elementi dentro l'array e ho controlato in rete

// -------------------------------------------Secondo esercizio----------------------------------------------

//  const imgGenerator = (imgUrl, title) => {
//  const cardEl = document.createElement("div");
//  const imgEl = document.createElement("img");

//  cardEl.className = "immagine";
//  imgEl.className = "cardImg";
//  imgEl.src = imgUrl;
//  imgEl.alt = title;

//  cardEl.append(imgEl);
//  return cardEl;
//  };

//  const rootEl = document.querySelector(".root");

//  const img1 = imgGenerator("https://picsum.photos/id/26/200/300",
//  "prima immagine");
//  rootEl.append(img1);

// Questo esercizio grazie agli appunti è stato chiaro, ma se non guardo gli appunti non riesco ad essere autonomo.

// --------------------------------------------------Terzo esercizio-----------------------------------------------

 const divEl = document.querySelector(".divCont");
 const btn = document.querySelector("button");

 btn.addEventListener("click", () => {
   divEl.style.backgroundColor = "purple"
 });

// ---------------------------------------------------Esercizio avanzato-------------------------------------------

// const cardGenerator = (città, imgUrl, imgInfo, temp, cdzMeteo) => {

//   const cardEl = document.createElement("div");
//   const cityEl = document.createElement("h3");
//   const imgEl = document.createElement("img");
//   const tempEl = document.createElement("p");
//   const descriptionEl = document.createElement("p");

//   cardEl.className = "card";
//   cityEl.className = città;
//   imgEl.src = imgUrl;
//   imgEl.alt = imgInfo;
//   tempEl.textContent = temp;
//   descriptionEl.textContent = cdzMeteo;

// cardEl.append(cityEl, imgEl, tempEl, descriptionEl);

// return cardEl;

// }

// const rootEl = document.querySelector(".root");

// const card1 = cardGenerator(
//   "Palermo",
//   "https://it.pngtree.com/freepng/sun-cartoon-illust-sunny-weather_6212436.html",
//   "sole",
//   "35° C",
//   "Tempo sereno, caldo oltre la media stagionale!"
// );

// const card2 = cardGenerator(
//   "Nara",
//   "https://it.pngtree.com/freepng/weather-forecast_4490294.html",
//   "Nuvoloso",
//   "15° C",
//   "Tempo parzialmente nuvoloso con temperarure sotto la media stagionale!"
// );

// const card3 = cardGenerator(
//   "Edimburgo",
//   "https://it.pngtree.com/freepng/thunderstorm-weather-lightning-yellow-abstract_6863703.html",
//   "Temporale",
//   "9° C",
//   "Temporali sparsi e intensi, possibili picchi di temperature che scenderanno durante la notte!"
// );

// rootEl.append(card1, card2, card3);

// ------------------------------------------------------------------------------------------------------------------