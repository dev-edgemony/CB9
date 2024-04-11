


// ## 2 Trova il numero massimo

const num = [1, 2, 5, 8, 23, 54, 89, 102, 150, 200];
const maxNumber = Math.max(...num);
console.log(maxNumber);




// ## Avanzato 1 - Filtra e Mappa

// Dato un array di oggetti che rappresentano persone con nome e salario, scrivi una funzione che aumenti il salario del 10% 
//solo per le persone che guadagnano meno di 3000 e poi restituisca un nuovo array di oggetti con solo i nomi di queste persone e il loro nuovo salario.

// ```
// [
//   { nome: "Marco", salario: 2000 },
//   { nome: "Luca", salario: 4000 },
//   { nome: "Lia", salario: 2500 }
// ]


const people =[
    { name: 'Marco', salary: 2000},
    { name: 'Luca', salary: 4000},
    { name: 'Lia', salary: 2500},
    { name: 'Giacoma', salary: 4700},
    { name: 'Guendalina', salary: 1800}
];


const salaryFilt = people.filter((element) => element.salary < 4000);
const newSalary = salaryFilt.map(element => {
    const updatedSalary = (element.salary +((element.salary / 100) * 10));
    return { name: element.name, Salary: updatedSalary}
});

//console.log(salaryFilt);
console.log(newSalary);