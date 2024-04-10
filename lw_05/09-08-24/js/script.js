/* function sum(num1, num2) {
    console.log(new Date());
    return num1 + num2;
}

const sum4and12 = sym(4, 12);

console.log(sum4and1 2); */

/* function myFavourite() {
    const userFav = prompt("Inserisci il tuo animale preferito");

   if(animals.includes(userFav)) {
    console.log("conosco questo animale");
   } else {
    console.log("non ho idea di quale animale sia");
   }
} */

/* const animals =["cat", "dog", "cow", "monkey", "horse"];

//myFavourite();

const myFavourite = () => myFavourite() {
    const userFav = prompt("Inserisci il tuo animale preferito");

   if(animals.includes(userFav)) {
    console.log("conosco questo animale");
   } else {
    console.log("non ho idea di quale animale sia");
   }
}; */

//-------Callback--------//

/* const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

//console.log(div(10, 2));

const calculator = (operationFn) => {
    return operationFn

};

console.log(calculator(sum(1, 5))); */

// esempi di funzione
/* function animalCount(cows, sheeps, pigs) {
    return `nella fattoria ci sono ${cows} mucche, ${sheeps} pecorelle e ben ${pigs} maialini!`;
}

const animalCount = (cows, sheep, pigs) =>
      `nella fattoria ci sono ${cows} mucche, ${sheeps} pecorelle e ben ${pigs} maialini!`;
 */
// console.log(animalCount(10, 5, 90));

// esempio 2 
const welcomeUser = (name) => {
    const hour = new Date().getHours();

    if(hour < 12) {
        console.log(`Buongiorno ${name}!`);
    } else if (hour < 18) {
        console.log(`Buon Pomeriggio ${name}!`);
    } else {
        console.log(`Buona Sera ${name}!`);
    }
}

//welcomeUser("Pippo");

// esempio di funzione 3

const timeTravel =(dis, vel) => {
    const time = dis / vel;

    return `Il tempo di viaggio è di ${time} ore`;
}

//console.log(timeTravel(500, 80));


// esempio 4 di funzione 

const detGamerType = (hourPerWeek) => {
    if(hourPerWeek < 5) {
        return `Casual Gamer!`
    } else if(hourPerWeek >= 5 && hourPerWeek < 20){
        return `Entusiastic Gamer!`;
    } else if(hourPerWeek > 20 && hourPerWeek < 40) {
        return `Hardcore!`;
    } else {
        return `Legendary`;
    }
}

console.log(detGamerType(15));