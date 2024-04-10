// function sum(num1, num2) {
//   console.log(new Date());
//   return num1 + num2;
// }

// const sum4and12 = sum(4, 12);

// console.log(sum4and12);

// function myFavourite() {
//   const userFav = prompt("Inserisci il tuo animale preferito");

//   if (animals.includes(userFav)) {
//     console.log("Conosco questo animale!");
//   } else {
//     console.log("Non ho idea di cosa tu stia parlando!");
//   }
// }

// const animals = ["cat", "dog", "cow", "sheep", "monkey", "horse"];

// myFavourite();

// --------------- ARROW FUNCTION ---------------
// Stessa identica cosa della classica funzione a riga 1.
// const sum = (num1, num2) => num1 + num2;

// const sum = (num1, num2) => {
//   console.log(new Date())
//   return num1 + num2;
// };

// Stessa identica cosa della classica funzione a riga 10.
// const myFavourite = () => {
//   const userFav = prompt("Inserisci il tuo animale preferito");

//   if (animals.includes(userFav)) {
//     console.log("Conosco questo animale!");
//   } else {
//     console.log("Non ho idea di cosa tu stia parlando!");
//   }
// };

// --------------- CALLBACK ---------------
// const sum = (num1, num2) => num1 + num2;
// const sub = (num1, num2) => num1 - num2;
// const mult = (num1, num2) => num1 * num2;
// const div = (num1, num2) => num1 / num2;

// const calculator = (operationFn) => {
//   return operationFn;
// };

// console.log(calculator(sum(1, 5)));

// const sum = (num1, num2) => num1 + num2;
// const sub = (num1, num2) => num1 - num2;
// const mult = (num1, num2) => num1 * num2;
// const div = (num1, num2) => num1 / num2;

// const calculator = (operationFn, num1, num2) => {
//   return operationFn(num1, num2);
// };

// console.log(calculator(sum, 1, 5));

// Esempi di funzione: 1. Fattoria
// function animalCount(cows, sheeps, pigs) {
//   return `Nella fattoria ci sono ${cows} mucche, ${sheeps} pecorelle e ben ${pigs} maialini!`;
// }

// const animalCount = (cows, sheeps, pigs) =>
//   `Nella fattoria ci sono ${cows} mucche, ${sheeps} pecorelle e ben ${pigs} maialini!`;

// console.log(animalCount(10, 50, 3));

// Esempi di funzione: 2. Welcome User
const welcomeUser = (name) => {
  const hour = new Date().getHours();

  if (hour < 12) {
    console.log(`Buongiorno ${name}!`);
  } else if (hour < 18) {
    console.log(`Buon pomeriggio, ${name}!`);
  } else {
    console.log(`Buona sera ${name}!`);
  }
};

// welcomeUser("Pippo");

// Esempi di funzione: 3. timeTravel
const timeTravel = (dis, vel) => {
  const time = dis / vel;

  return `Il tempo di viaggio è di ${time} ore`;
};

// console.log(timeTravel(500, 80));

// Esempi di funzione: 4. detGamerType
const detGamerType = (hourPerWeek) => {
  if (hourPerWeek < 5) {
    return `Casual...`;
  } else if (hourPerWeek >= 5 && hourPerWeek < 20) {
    return "Enthusiast :)";
  } else if (hourPerWeek >= 20 && hourPerWeek < 40) {
    return "Hardcore!";
  } else {
    return "!Legendary!";
  }
};

console.log(detGamerType(80));
