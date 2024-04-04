const threeMult = [3, 6, 9, 12, 15, 18];
const generalArr = [2, true, false, "Pippo", [2, 3, 4, 5]];
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(generalArr[4][1]); // Stampa il secondo elemento dell'array a posizione 4 dell'array generalArr
// console.log(matrix[matrix.length - 1]); // Ottiene l'ultimo elemento dell'array matrix

// ------------ CICLO FOR --------------
// schermata1.jpg
// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

// schermata2.jpg
// for (let index = 0; index < threeMult.length; index++) {
//   console.log(threeMult[index]);
// }

// ------------ CICLO FOR IN ------------ // Estrapola gli indici dell'array
// for (num in threeMult) {
//   console.log(num);
// }

// ------------ CICLO FOR OF ------------// Estrapola i valori dell'array
// for (num of threeMult) {
//   console.log(num);
// }

const movies = [
  "Harry Potter",
  "Il signore degli Anelli",
  "The Matrix",
  "Pulp Fiction",
];

// for (movieIndex in movies) {
//   console.log(movieIndex + ". " + movies[movieIndex]);
// }

// for (movie of movies) {
//   console.log(movie);
// }

// Classico FOR identico alla riga 40 e riga 54
// for (let i = 0; i < movies.length; i++) {
//   console.log(i + ") " + movies[i]);
// }

// ------------ CICLO WHILE ------------
let index = 0;

while (index < movies.length) {
  console.log(index + ") " + movies[index]);
  index++;
}
