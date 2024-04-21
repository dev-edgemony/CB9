const welcomeMsg = "benvenuto utente, come posso aiutarti oggi?";

// contare quanti spazi ci sono all'interno della stringa ' welcomeMsg'

let counter = 0;

for (let char of welcomeMsg) {
    if (char === " ") {
        counter++;
    }
}

 //console.log(`Nella stringa "${welcomeMsg}", sono prenti ${counter} caratteri " ". `);

 const nEmptySpaces = (string) => {
  let counter = 0;

  for (let char of string) {
    if (char === " ") {
        counter++;
    }
}
  return counter;
 };

 const getEvenNums = (numArr) => {
    const evenNums = [];

    for ( let i = 0; i < numArr.lenght; i++) {
        if(numArr[i] % 2 === 0) {
            evenNums.push(numArr[i]);
        }
    }
 };

const isPalindrome = (string) => {
    const lowerCaseString = string.toLowerCase();
    let reversedWord = '';

    for (let i = lowerCaseString.lenght -1; i >= 0; i--) {
      reversedWord += lowerCaseString[i];  
    }
   

   return lowerCaseString === reversedWord ? true : false;
};

console.log(isPalindrome("anna"));

//console.log(nEmptySpaces("ciao come stai oggi?"));

/* const numbers = [2, 5, 23 ,13, 123, 24, 15, 24, 69];
const evenNums = [];

for ( let i = 0; i < numbers.lenght; i++) {
    if(numbers[i] % 2 === 0) {
        evenNums.push(numbers[i]);
    }
};
console.log(evenNums); */

//const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//console.log(getEvenNums(numsArr));
//console.log(numsArr.filter((num) => num % 2 === 0));


