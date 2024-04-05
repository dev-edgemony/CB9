//Primo Esercizio 🎁
//let currentDate = '04/04/2024';
//let birthday = '30/04/1998';



//if (currentDate === birthday) {

  //console.log('🎁');
//} else {

 // console.log('Oggi non è il tuo compleanno.');
//}


//Secondo Esercizio

//const dailySteps = [
    //'mi sveglio',
    //'faccio colazione',
    //'faccio esercizi',
    //'faccio la doccia',
   // 'porto a spasso il cane',
   // 'pranzo',
   // 'lavoro/studio',
   // 'ceno',
   // 'gioco al PC',
   // 'vado a letto'
 // ];

 // for (let i = 0; i < dailySteps.length; i++) {
   // console.log(dailySteps[i]);
 // }

 //Terzo Esercizio Avanzato 1

 //let userBirthday = prompt("Inserisci la data del tuo compleanno");

 //let currentDate = '04/04/2024';


//if (currentDate === userBirthday) {

  //console.log('🎁');
//} else {

  //console.log('Oggi non è il tuo compleanno.');
//}


// Quarto Esercizio Avanzato 2


let firstNumber = prompt("Inserisci il primo numero:");

let mathOperator = prompt("Inserisci l'operazione da eseguire (+, -, *, /):");

let secondNumber = prompt("Inserisci il secondo numero:");

let result;

if (mathOperator == "+") {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
} else if (mathOperator == "-") {
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
} else if (mathOperator == "*") {
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
} else if (mathOperator == "/") {
    if (secondNumber == "0") {
        alert("Errore: Divisione per zero non consentita.");
    } else {
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
    }
} else {
    alert("Operazione non valida.");
}


if (result !== undefined) {
    alert("Risultato: " + result);
}

