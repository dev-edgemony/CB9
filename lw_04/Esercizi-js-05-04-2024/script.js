                                    // ##--Primo-esercizio--##

//  const MyBirthday = "13/10/2024";
//  let Today = "05/04/2024";

 //  ******mi sono accorto di un'errore nella data, nell'esercizio che avevo committato non potevano mai combaciare*******

// const MyBirthday = "05/04/2024";
// let Today = "05/04/2024";

// if (MyBirthday === Today) {
//      console.log("🎁");
//  }
//  else {
//      console.log("Mi dispiace non è il tuo compleanno");
//  }
// --------------------------------------------------------------------------------------------------
                                    // ##--Secondo-Esercizio--

// const MyDailyRoutine = ["mi sveglio", "10min Silat", "colazione", "mi lavo", "lavoro", "doccia", "studio/CB", "30/60min chitarra", "10min Silat", "letto"];

// for (let i = 0; i < MyDailyRoutine.length; i++) {
//     console.log(i + ". " + MyDailyRoutine[i]);
// }
// ------------------------------------------------------------------------------------------------
                                    // ##--Avanzato1--##

// const answer = prompt("Quando compi gli anni?");
// let currentDay = "05/04/2024";

// if (answer === currentDay) {
//     console.log("🎁");
// }
// else {
//     console.log("Non è il tuo comleanno!!!");
// }
// ---------------------------------------------------------------------------------------
                                    // ##--Avanzato2--##

let numero1 = prompt("inserisci primo numero");
let numero2 = prompt("inserisci secondo numero");
let operazioni = prompt("inserisci un operatore (+, -, *, /)");

switch (operazioni) {

    case "+" :
        alert((+numero1) + (+numero2));
    break;

    case "-" :
        alert((+numero1) - (+numero2));
    break;

    case "*" :
        alert((+numero1) * (+numero2));
    break;

    case "/" :
        alert((+numero1) / (numero2));
    break;
}
// -----------------------------------------------------------------------------------