const firstNum = 12;
const secondNum = 12;
const arrOfNums = [15, 5];

// console.log(firstNum + secondNum);
// console.log(arrOfNums[0] + arrOfNums[1]);

// SOLUZIONE AL PROBLEMA, MA IN MODO ERRATO
// const firstNum2 = 5;
// const secondNum2 = 8;
// console.log(firstNum2 + secondNum2);

// const firstNum3 = 2;
// const secondNum3 = 2;
// console.log(firstNum3 + secondNum3);

// ------------ FUNZIONI ------------
// FASE 1: inizializzazione => creazione della funzionalità
function sum(num1, num2) {
  // codice...
  // ........ codice...
  return num1 + num2;
  // let x = 1; // Non funzionerà mai, sotto al return non ci va niente!
}

// FASE 2: invocazione => utilizzo della funzionalità
const sum1 = sum(3, 5);

// FASE 1
function mul(num1, num2) {
  return num1 * num2;
}

const mul1 = mul(3, 5); // FASE 2

// console.log(mul1);

// Funzione senza parametri
function welcomeMsg() {
  const userName = prompt("Inserisci il tuo nome");

  return "Benvenuto " + userName + ". Sono pronto per cominciare la sessione.";
}

// Stessa funzione ma con parametro
// function welcomeMsg(name) {
//   return "Benvenuto " + name + ". Sono pronto per cominciare la sessione.";
// }

// console.log(welcomeMsg());

function calculator(num1, num2, operation) {
  if (operation === "somma") {
    return num1 + num2;
  } else if (operation === "moltiplicazione") {
    return num1 * num2;
  } else if (operation === "divisione") {
    return num1 / num2;
  } else {
    return operation + " non permessa!";
  }
}

const operation1 = calculator(5, 2, "somma");
const operation2 = calculator(3, 2, "moltiplicazione");
const operation3 = calculator(10, 2, "divisione");

// console.log(operation1);
// console.log(operation2);
// console.log(operation3);

function isAdult(age) {
  return age >= 18 ? true : false;
}

// Stessa di riga 72 ma con IF/ELSE
// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isAdult(51));

// Utilizzo di una funzione in ciclo for
// const ages = [12, 50, 42, 13, 9, 78, 55, 78];

// for (index in ages) {
//   console.log(index + ": " + isAdult(ages[index]));
// }

// ------------ OGGETTI ------------
const pizza1 = {
  name: "Margherita",
  nIngredients: 4,
  ingredients: ["oil", "tomato sauce", "basilics", "mozzarella"],
  size: "R",
  isClassic: true,
  "is-special": false,
  speak: function () {
    return "Io sono la pizza: " + this.name;
  },
};

const pizza2 = {
  name: "Capricciosa",
  nIngredients: 8,
  ingredients: [
    "oil",
    "tomato sauce",
    "basilics",
    "mozzarella",
    "olivs",
    "artichokes",
    "mushrooms",
    "ham",
  ],
  size: "R",
  isClassic: true,
  "is-special": false,
  speak: function () {
    return "Io sono la pizza: " + this.name;
  },
};

// console.log(pizza2.ingredients[6]);
// console.log(pizza1.ingredients); // Accesso al valore tramite nome di chiave, con il puntino .
// console.log(pizza1["ingredients"]); // Accesso al valore tramite nome di chiave, con parentesi quadra e stringa che identifica il nome della chiave stessa
// console.log(pizza2["is-special"]);
console.log(pizza1.speak());
console.log(pizza2.speak());

function enemyGenerator(name, lp, ap, dp) {
  return {
    name: name,
    lifePoints: lp,
    attackPoints: ap,
    defencePoints: dp,
  };
}

const enemy1 = enemyGenerator("Pluto", 100, 20, 50);
const enemy2 = enemyGenerator("Paperino", 200, 40, 40);

console.log(enemy1);
console.log(enemy2);
