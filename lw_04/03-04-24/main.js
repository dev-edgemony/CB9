// const myAge = 32;

// if (myAge === 30) {
//   console.log("Sei per caso Casimiro?");
// } else {
//   console.log("Non puoi essere Casimiro!");
// }

// if (myAge < 18) {
//   // IF opera sulla condizione
//   console.log("Sei minorenne!");
// } else if (myAge > 18) {
//   console.log("Sei maggiorenne!");
// } else {
//   console.log("Sei appena diventato maggiorenne!");
// }

// ----------- Costrutto SWITCH ----------- opera su un valore dato
// switch (myAge) {
//   case 15:
//     console.log("Caso 15"); // Passa subito al caso successivo, senza break
//   case 16:
//     console.log("Sei minorenne!");
//     break;
//   case 18:
//     console.log("Sei appena diventato maggiorenne!");
//     break; // Indispensabile
//   case 20:
//     console.log("Sei maggiorenne!");
//     break;
//   default:
//     console.log("In ogni altro caso, eseguo questo!");
// }

// Esempio data odierna
// const today = prompt("Inserisci il giorno della settimana");
// let isAccessGranted = false;

// if (today === "lunedi") {
//   console.log("Si comincia a lavorare!");
// } else if (today === "martedi") {
//   console.log("Uff... siamo ancora al secondo giorno della settimana...");
// } else if (today === "mercoledi") {
//   console.log("Il giorno più brutto di tutti, siamo a metà");
// } else if (today === "giovedi") {
//   console.log("Forza mancano ancora 2 giornate");
// } else if (today === "venerdi") {
//   console.log("Il giorno più bello della settimana");
// } else if (today === "sabato") {
//   console.log("Oggi è il primo giorno di WE");
// } else if (today === "domenica") {
//   console.log("Oggi è il secondo giorno di WE");
// } else {
//   console.log(today + ": non è un giorno della settimana");
// }

// switch (today) {
//   case "lunedi":
//     console.log("Si comincia a lavorare!");
//     break;
//   case "martedi":
//     console.log("Uff... siamo ancora al secondo giorno della settimana...");
//     break;
//   case "mercoledi":
//     console.log("Il giorno più brutto di tutti, siamo a metà");
//     break;
//   case "giovedi":
//     console.log("Forza mancano ancora 2 giornate");
//     break;
//   case "venerdi":
//     console.log("Il giorno più bello della settimana");
//     break;
//   case "sabato":
//     console.log("Oggi è il primo giorno di WE");
//     isAccessGranted = true; // Da accesso all'utente
//     break;
//   case "domenica":
//     console.log("Oggi è il secondo giorno di WE");
//     break;
//   default:
//     console.log(today + ": non è un giorno della settimana!");
// }

// if (isAccessGranted) {
//   alert("Benvenuto nella pagina!");
// }

// ----------- OPERATORE TERNARIO ----------- versione compatta di if / else
// today === "lunedi" ? console.log("Vero") : console.log("Falso");

// ----------- ARRAY (tipo reference - contenitore di valori) -----------
const fruits = ["pear", "apple", "ananas"];
const meats = ["beef", "chicken", "pork"];

// console.log(fruits); // Mi stampa l'intero array
// console.log(fruits[1]); // Mi stampa apple, indice di riferimento 1

// fruits.push("orange"); // Aggiunge un elemento alla fine dell'array
// fruits.unshift("kiwi"); // Aggiunge un elemento all'inizio dell'array
// fruits.pop(); // Rimuove l'ultimo elemento dell'array
// fruits.shift(); // Rimuove il primo elemento dell'array

const food = fruits.concat(meats); // Concatena i frutti alle carni

// console.log(food.splice(2, 3)); // Stampa un range di valori selezionati
// console.log(food.length); // Stampa la quantità di elementi dentro l'array
// console.log(food.includes("beef")); // Ritorna true se l'elemento è presente
// console.log(food.reverse()); // Inverte l'ordine dell'array
// console.log(food.join(" ")); // Converte array in Stringa
