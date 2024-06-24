// ## 1. Conta le Vocali

// Scrivere una funzione che prenda in input una stringa e restituisca il numero totale di vocali (a, e, i, o, u) presenti nella stringa. Create voi la stringa, a piacere vostro.

// > Aiuto: considerare l'utilizzo dei cicli for.

function countVowels(sentence) {
    const vowels= ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let vowelsCounter = 0;

    for(let i=0; i < sentence.length; i++){
        if(vowels.includes(sentence[i])) {
            vowelsCounter++;
        }
    }

    return vowelsCounter;
}

let phrase = "Questo esercizio non e' stato per nulla facile ma ci sono riuscita";
console.log("Numero di vocali:", countVowels(phrase));



// ## 2 Trova il numero massimo

// const num = [1, 2, 5, 8, 23, 54, 89, 102, 150, 200];
// const maxNumber = Math.max(...num);
// console.log(maxNumber);




// ## Avanzato 1 - Filtra e Mappa

// Dato un array di oggetti che rappresentano persone con nome e salario, scrivi una funzione che aumenti il salario del 10% 
//solo per le persone che guadagnano meno di 3000 e poi restituisca un nuovo array di oggetti con solo i nomi di queste persone e il loro nuovo salario.

// ```
// [
//   { nome: "Marco", salario: 2000 },
//   { nome: "Luca", salario: 4000 },
//   { nome: "Lia", salario: 2500 }
// ]


// const people =[
//     { name: 'Marco', salary: 2000},
//     { name: 'Luca', salary: 4000},
//     { name: 'Lia', salary: 2500},
//     { name: 'Giacoma', salary: 4700},
//     { name: 'Guendalina', salary: 1800}
// ];


// const salaryFilt = people.filter((element) => element.salary < 4000);
// const newSalary = salaryFilt.map(element => {
//     const updatedSalary = (element.salary +((element.salary / 100) * 10));
//     return { name: element.name, Salary: updatedSalary}
// });

// //console.log(salaryFilt);
// console.log(newSalary);