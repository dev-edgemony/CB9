// ---------- INTRO A JS ----------
// console.log("Hello, World!");
// const answer = prompt("Come ti chiami?");
// console.log("Il tuo nome è:", answer);

// ---------- TIPI PRIMITIVI IN JAVASCRIPT ----------
// const userName = "Casi";
// let age = 30;
// const isDev = true;
// let emptyBox;
// const nullValue = null;

// console.log(userName); // stampa il valore della variabile
// console.log("userName"); // stampa la stringa
// console.log("Sono", userName, "e ho", age, "anni.");
// age = 31;
// console.log("Tra un anno faccio ", age, "anni.");
// // box = "Pippo"; // ERRORE! Non si può riassegnare il valore di una var.
// // console.log(box);
// console.log(userName, "è uno sviluppatore?", isDev);
// console.log(emptyBox);
// console.log(nullValue);

// ---------- OPERAZIONI MATEMATICHE ----------
// console.log("Ciao, oggi è una bella giornata d'Aprile");
// console.log("Addizione:", 2 + 3); // 5
// console.log("Moltiplicazione:", 2 * 3); // 6
// console.log("Sottrazione:", 10 - 3); // 7
// console.log("Divisione:", 10 / 3); // 3
// console.log("Modulo:", 10 % 3); // 1 => Operazione Modulo, resto divisione
// console.log(parseInt(10 / 3)); // Trasforma valore in virgola in intero

// ---------- Conversioni di tipo ----------
// console.log(String(77)); // number to string
// console.log(parseInt("2")); // string to number
// console.log(parseInt("c")); // string to not a number
// console.log(Number("2")); // string to number - Number è uguale a parseInt
// console.log(!true); // true to false - negazione
// console.log(!false); // false to true - negazione
// console.log(!!true); // true to false to true - doppia negazione
// console.log(!!false); // false to true to false - doppia negazione

// ---------- Operatori di confronto ----------
// console.log(2 == 2); // true - confronto
// console.log(2 == "2"); // true - confronto
// console.log(2 === "2"); // false - confronto stretto (preferibile)
// console.log(2 != 5); // true
// console.log(2 != "2"); // false - diseguaglianza
// console.log(2 !== "2"); // false - diseguaglianza stretta
// console.log(2 > 3); // false
// console.log(2 < 3); // true
// console.log(2 > 2); // false - confronto esclusivo
// console.log(2 >= 2); // true - confronto inclusivo
// console.log(4 < 4); // false - confronto esclusivo
// console.log(4 <= 4); // true - confronto inclusivo

// ---------- AND (&&) - OR (||) - NOT (!) ----------
// console.log(2 === 2 && 4 > 2); // true - entrambe le condizioni sono vere
// console.log(2 === 2 && 4 > 5); // false - solo la prima condizione è vera
// console.log(2 === 3 && 4 > 5); // false - entrambe sono false
// console.log(2 === 2 || 4 > 2); // true - entrambe le condizioni sono vere
// console.log(2 === 2 || 4 < 2); // true - almeno una delle condizioni è vere
// console.log(2 === 3 || 4 < 2); // false - nessuna delle due è vera
// console.log(!2 === 2); // false - negazione del confronto

// ---------- COSTRUTTO IF ----------
const userAge = prompt("Inserisci la tua età"); // trasforma qualunque valore inserito in stringa, anche i numeri, attenzione!!

if (userAge > 18) {
  console.log("Sei maggiorenne!");
} else if (Number(userAge) === 18) {
  console.log("Ma allora sei appena diventato maggiorenne!");
} else {
  console.log("Sei minorenne!");
}
