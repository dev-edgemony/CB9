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

function numFilter(array) {
    // uso filter così che restituisca solo numeri maggiori di 5
    return array.filter(number => number > 5); //funzione di callback che riceve ogni numero dell'array e restituisce true se è > 5 altrimenti false
}

const number = [3, 5, 7, 9, 2];
console.log(numFilter(number)); // Mi restituisce [7, 9], che sono maggiori di 5
