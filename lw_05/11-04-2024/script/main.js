// Esercizio 1 - Conta le Vocali

//definisco la funzione 
//function vowCounter(str) {
    //inizializzo la variabile count a 0
    //let count = 0;
    // inizio il ciclo che parte da i = 0 e continua finchè i è minore della lunghezza della stringa incrementando i di 1 ad ogni interazione
         //for(let i = 0; i < str.length; i++) {
      //Viene controllato nel ciclo, tramite istruzione if, se il carattere corrente ottenuto da str[i] è una vocale
        //if ('aeiou'.includes(str[i].toLowerCase())) {  // .toLowerCase è un metodo che serve a sintetizzare la stringa in minuscolo ed ignorare maiuscole
            //count++; //se è una vocale, farà l'incremento di 1 per ogni vocale trovata nella mia stringa
        //}
    //}
    //return count; //alla fine del ciclo for, conteggio tutte le vocali presenti in str
//}


//console.log("Conteggio vocali: " + vowCounter("Ciao sto cercando le mie vocali"));


//Esercizio 2 - Trova il Massimo

/* function higthNum(totValue) {
    let maxNumber = totValue[0]; 
  
    for (let i = 1; i < totValue.length; i++) { 
      if (totValue[i] > maxNumber) { 
        maxNumber = totValue[i]; 
      }
    }
  
    return maxNumber; 
  }
  
  const value1 = prompt("Inserisci un numero");
  const value2 = prompt("Inserisci un numero");
  const value3 = prompt("Inserisci un numero");
  const totValue = [value1, value2, value3];
  
  console.log("Il numero più alto è:", higthNum(totValue)); */

  //Esercizio Avanzato 1 - Filtra e Mappa
  let team = [
    { nome: "Marco", salario: 2000 },
    { nome: "Luca", salario: 4000 },
    { nome: "Lia", salario: 2500 }
  ];
  
  const underPaid = team.filter(member => member.salario < 3000);
  
  
  underPaid.forEach(member => {
    const addSalary = member.salario * 0.1;
    member.salario += addSalary;
    console.log(`${member.nome} ha uno stipendio di ${member.salario}`);
  });
  