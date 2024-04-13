
// primo esercizio
function contaVocali(stringa) {
const vocali = ["a", "e", "i", "o", "u"] ;
let conteggioVocali = 0;

for (let carattere of stringa) { 
    if (vocali.includes(carattere)) {
        conteggioVocali++;
    }
}
return conteggioVocali;
}
const phrase = "Tra provare paura e scegliere come agire, esiste uno spazio. È in questo spazio che le nostre azioni possono essere o semplici reazioni alla paura o scelte deliberate alimentate da coraggio e determinazione." ;
const numeroVocali = contaVocali(phrase);

// console.log("Num. vocali", numeroVocali)

// // // // Ho preso spunto dalla rete ma ancora non mi è chiaro come costruire le funzioni e applicarle, (almeno in questo caso)

// secodo esercizio
function cercaMax(num) {
    let max = -Infinity;
    num.map(function(num) {
        if (num > max) {
            max = num;
        }
    })
    return max;
}
const numeri = [3, 5, 7, 13, 19, 34, 46, 59, 75, 100];
const max = cercaMax(numeri);

// stessa cosa  dell'esercizio precedente, anche per questo esercizio mi sono aiutato con appunti e con la rete ma non ho chiaro come crere e mettere in atto le funzioni. Spero sia una questione di tempo perché quando l'insegnante spiega mi è chiaro poi quando mi trovo davanti al problema...il panico!!!

// console.log("il valore massimo è:", max);

// esercizio avanzato 1

function aumentaSalario(persone) {
    const nuovoStipendio = persone.map(persona => {
      const nuovoSalario = persona.salario * 1.1;
      if (persona.salario < 3000) {
        return { nome: persona.nome, salario: nuovoSalario };
      } else {
        return persona;
      }
    });
  
    return nuovoStipendio.filter(persona => persona.salario > 3000);
  }

const persone = [
    { nome: "Ciccio", salario: 2500 },
    { nome: "Paolo", salario: 3700 },
    { nome: "Sofia", salario: 3500 },
    { nome: "Maria", salario: 2650 },
  ];

const nuovoStipendio = aumentaSalario(persone);
// console.log(nuovoStipendio);
// questo per assurdo è stato più semplice! Ho impiegato meno tempo

// esercizio avanzato 2 non riesco a metterlo in pratica, copiarlo non ha senso! 