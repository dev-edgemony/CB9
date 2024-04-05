

//--------------- EXERCISE 1 and 3 - birtday and prompt -----------------//

// const birthDay = prompt("Quando fai il compleanno?")

// if(birthDay === "04/04/2024") {
//     console.log(" 🎁 Happy Birthday 🎁 ");
// }

// else {
//     console.log("Oggi non è il tuo compleanno, buon NON compleanno!");
// }



//--------------- EXERCISE 2 - Array -----------------//

// const dailyRout = ["Mi alzo", "Preparo la colazione", "Faccio colazione", "Vado a lavarmi", "Accendo il pc", 
//                     "Controllo le mail", "Controllo i bug", "Controllo il calendario", "Inizio i mille meeting quotidiani", "Chiudo felicemente il pc"];


//--------------- for -----------------//
// for(let index = 0; index < dailyRout.length; index++){
//     console.log(dailyRout[index]);
// }


//--------------- for in -----------------//
// for(index in dailyRout) {
//     console.log(index + ") " + dailyRout[index]);
// }



//--------------- EXERCISE 3 - Calculator -----------------//

const numOne = parseInt(prompt("Inserisci il primo numero"));
const mathSym = prompt("Inserisci / + - o *");
const numTwo = parseInt(prompt("Inserisci il secondo numero"));

// console.log(numOne, numTwo, mathSym);

switch(mathSym){
    case "+":
        console.log(numOne + numTwo)
        break;
    case "/":
        console.log(numOne / numTwo)
        break;
    case "-":
        console.log(numOne - numTwo)
        break;
    case "*":
        console.log(numOne * numTwo)
        break;
}