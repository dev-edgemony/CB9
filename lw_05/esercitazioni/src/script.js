// Purtroppo non sono riuscita ad inserirli con il DOM. Se riesco riprovo domani, altrimenti spero di capire meglio l'argomento durante le esercitazioni della prossima settimana

// Esercizio 1 -------------------------------------------------------------------------------------------------------

function vowelsCount(){


    function getVowels(phrase) {
        let count = 0;
        let vowels = ["a", "à", "e", "è", "i", "ì", "o", "ò", "u", "ù"];

        for (let vowel of phrase) {
            if (vowels.includes(vowel)) {
                count++;
            }
        }
        return count;
    }

    let phrase = "Questo esercizio è stato un parto";
    let result = getVowels(phrase);
    console.log(result);

}

// Esercizio 2 -------------------------------------------------------------------------------------------------------
function getMax() {
    function getMaxNum(numbers) {
        let max = 0;
        for (let num of numbers) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(getMaxNum(numbers));
}

// Esercizio 3 -------------------------------------------------------------------------------------------------------
function filterMap() {
    let employees = [
        { name: "Marco", salary: 2000 },
        { name: "Luca", salary: 4000 },
        { name: "Lia", salary: 2500 },
        { name: "Dario", salary: 3000 },
        { name: "Giulia", salary: 6000 },
        { name: "Marta", salary: 1800 },
    ];
        
    let lowSalary = employees.filter((employee) => employee.salary < 3000 && employee.salary >= 0);
    console.log(lowSalary);
        
    let newSalary = lowSalary.map((employee) => {
        let salaryRise = parseInt(employee.salary * 1.10);
        return { name: employee.name, salaryRise: salaryRise };
    });
    console.log(newSalary);
}


// Esercizio 4 -------------------------------------------------------------------------------------------------------
function getCalc() {
    let firstNumber = prompt("Digita il primo numero");
    let operator = prompt("Scegli l'operazione");
    let secondNumber = prompt("Digita il secondo numero");
    let result;

    
    const sum = (num1, num2) => parseInt(num1) + parseInt(num2);
    const subtract = (num1, num2) => parseInt(num1) - parseInt(num2);
    const multiply = (num1, num2) => parseInt(num1) * parseInt(num2);
    const divide = (num1, num2) => parseInt(num1) / parseInt(num2);

    function calculate(op, num1, num2) {
        switch (op) {
            case "+":
                return sum(num1, num2);
            case "-":
                return subtract(num1, num2);
            case "*":
                return multiply(num1, num2);
            case "/":
                return divide(num1, num2);
            default:
                return "Error";
        }
    }

    result = calculate(operator, firstNumber, secondNumber);

    alert("Il risultato è: " + result);
}