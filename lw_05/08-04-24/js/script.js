const firstNum = 12;
const secondNum = 12;
const arrOfNum = [15, 5];

// console.log(firstNum + secondNum);
// console.log(arrOfNum[0] + arrOfNum[1]);

//-----Funzioni-------//

function sum(num1, num2) {
    
    return num1 + num2;
}


const sum1 = sum(3, 5);

function mul(num1, num2) {
    
    return num1 * num2;
}

const mul1 = mul(3, 5);

//console.log(mul1);

function welcomeMsg() {
    const userName = prompt("inserisci il tuo nome");
    return "Benvenuto" + userName + "sono pronto a cominciare";
}

//function welcomeMsg(name) {
//    return "Benvenuto " + name + ". Sono pronto per cominciare";
//}

//console.log(welcomeMsg());


function calculator(num1, num2, operation) {
    if(operation === 'somma') {
        return num1 + num2;
    } else if (operation === "moltiplicazione") {
        return num1 * num2;
    } else if (operation ==="divisione") {
        return num1 / num2;
    } 
    else {
        return operation + "non permessa";
    }
}

const operation1 = calculator(5, 2, "somma");
const operation2 = calculator(3, 2, "moltiplicazione");
const operation3 = calculator(10, 2, "divisione");

/* console.log(operation1);
console.log(operation2);
console.log(operation3); */


function isAdult(age) {
    return age >= 18 ? true : false;
}


//console.log(isAdult(51));

//-----oggetti----////

const pizza1 = {
    name: 'Margherita',
    nIngredients: '4',
    ingrendients: ["oil", "tomato sauce", "basilic", "mozzarella"],
    size: "R",
    isClassic: true,
    speak: function(name) {
        return "Io sono la pizza: " + this.name;
    } 
};



//console.log(pizza1.ingrendients[3]);

console.log(pizza1.speak());


function enemyGenerator(name, lp, ap, dp) {
    return{
        name:name,
    }
}


const enemy1 = enemyGenerator("pluto", 100, 20, 50);

console.log(enemy1);