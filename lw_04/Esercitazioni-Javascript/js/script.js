 //-----Esercizio 1 e 1 Avanzato-----// 

//const birthdayDate = prompt("When were you born?")

//  if (birthdayDate === "26/05/1986") {
//       console.log(" 🎁");
//} else {
//    console.log("It's not your birthday...Sorry!!");
//}



//------Esercizio 2----ARRAY-------//

//const dayRules = [
//    "Sveglia ore 6:20",
//    "Caffe'",
//    "Pausa di riflessione",
//    "Ore 7 inizio lavoro",
//    "Ore 13 fine tortura",
//    "Pranzo abbondante",
//    "Studio Programmazione",
//    "Lezione di programmazione",
//    "Cena mentre penso alla programmazione",
//    "Mi accorgo di avere una vita ma è tardi e muoio a letto",
//];

//for (index in dayRules) {
//    console.log(index + ") " + dayRules[index]);
//}

//------While-----//

//let counter = 0;

//while(counter < dayRules.length) {
//    console.log(counter + ") " + dayRules[counter]);
//    counter++;
//}


//----------Calcolatrice---------//

const firstNumber = parseInt(prompt("Insert number one"));
const operation = prompt("Insert / * - + ");
const secondNumber = parseInt(prompt("Insert number two"));

//console.log(firstNumber, operation, secondNumber)
 switch (operation) {
    case "/" :
      console.log(firstNumber / secondNumber);
      alert((firstNumber) / (secondNumber))
      break;
    case "*" :
      console.log(firstNumber * secondNumber);
      alert((firstNumber) * (secondNumber));
      break;
    case "-" :
        console.log(firstNumber - secondNumber);
        alert((firstNumber) - (secondNumber));
        break;
    case "+" :
        console.log(firstNumber + secondNumber);
        alert((firstNumber) + (secondNumber));
        break;
} 