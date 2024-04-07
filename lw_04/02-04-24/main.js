// console.log("Hello, Word!")

//const userValue = prompt("vuoi accedere al sito?");

//console.log("il tuo nome é:", answer);

//const userName = "Casi";
//let age = 30;
//const isDev = true;
//let emptyBox;
//const nullValue = null;

//console.log(userName) //stampa il valore della variabile
//console.log("userName") //stampa la stinga
//console.log("Sono", userName, "e ho", age, "anni.");
//age = 31;
//console.log("tra un anno faccio ", age, "anni.");

//console.log(userName, "è uno sviluppatore?", isDev);
//console.log(emptyBox);
//console.log(nullValue);

//console.log(2 + 10 * 20)
//console.log(2 * 3)
//console.log(10 )

const box = 1000;

console.log(77); //numer
console.log(String(box)); // string

console.log(2 === 2 && 4 > 2); // true - entrambe le condizioni sono vere
console.log(2 === 2 || 4 > 2); // OR

console.log(!2 == 2); //false--negazioone

const userAge = prompt("Inserisci la tua età");

if(userAge >= 18) {
    console.log("sei maggiorenne?");
} else if (parseInt(userAge) === 18){
    console.log("Ma allora sei diventato maggiorenne")
}
else {
    console.log("Sei minorenne?");
}