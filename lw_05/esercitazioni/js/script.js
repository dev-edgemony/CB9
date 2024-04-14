//----------Esercizio 1----------//

/* function vocalCount(songText) {
    let vocalCounter = 0;
    const vocal = ["a", "e", "i", "o", "u"];
  
    for (let i = 0; i < songText.length; i++) {
        const onlyVocal = songText[i].toLowerCase();

     if (vocal.includes(onlyVocal)) {
        vocalCounter++;
      }
    }
    return vocalCounter;
  }

  const songText = "Who controls the past now controls the future";
  const totalOfVocal = vocalCount(songText);

  console.log(`Il numero totale delle vocali è : ${totalOfVocal}`); */

  //----Esercizio 2 -----////

/* function highNumber(numbers) {
    let maxNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
          maxNumber = numbers[i];
        }
    }
    return maxNumber
  };
const values = [40, 8, 5, 99, 66, 69, 0, 10, 25];
const maxValue = highNumber(values);

console.log(`Il numero più alto è : ${maxValue}`); 

function highNumber2(numbers) {
    let maxNumber = 0;
    for (let n of numbers) {
        if (n > maxNumber) {
          maxNumber = n;
        }
    }
    return maxNumber
  };

const maxValue2 = highNumber2(values);

console.log(`Il numero più alto è : ${maxValue}`);
console.log(`Il numero più alto usando Of è : ${maxValue2}`); */

//--------------ESERCIZIO 3 --------------//

const workers = [
  { nome: "Marco", salario: 2000 },
  { nome: "Luca", salario: 4000 },
  { nome: "Lia", salario: 2500 }
];
//const salary3k = workers.filter((worker) => worker.salario <= (3000));
const increasedSalary = workers.filter((worker) => worker.salario <= (3000))
.map((worker, i) => worker.salario * 1.1);

console.log(increasedSalary);


