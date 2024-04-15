// const welcomeMsg = "Benvenuto utente, come posso aiutarti oggi?";
// let counter = 0;

// for (let char of welcomeMsg) {
//   if (char === " ") {
//     counter++;
//   }
// }

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

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      evenNums.push(numArr[i]);
    }
  }

  return evenNums;
};

const isPalindrome = (string) => {
  const lowerCaseString = string.toLowerCase();
  let reversedWord = "";

  for (let i = lowerCaseString.length - 1; i >= 0; i--) {
    reversedWord += lowerCaseString[i];
  }

  return lowerCaseString === reversedWord ? true : false;
};

// const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(getEvenNums(numsArr));
// console.log(numsArr.filter((num) => num % 2 === 0));
console.log(isPalindrome("pippo"));
