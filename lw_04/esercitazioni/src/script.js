function getBirthday () {

    const userBirthday = prompt("Quand'è il tuo compleanno? (formato DD/MM/YYYY)");
    const today = ("05/04/2024");
       
    if (userBirthday === today) {
        console.log("Oggi è il tuo compleanno!! 🎁");
    } else {
        console.log("Oggi non è il tuo compleanno");
    }

}

// -----------------------------------------------------------------------------------------------------------------------

function getDay () {

    const day = [
        "Si alza Gabriele", 
        "Mi alzo", 
        "Preparo la colazione per tutta la famiglia", 
        "Gioco con Gabriele", 
        "Inizio a lavorare", 
        "Preparo da mangiare per la famiglia", 
        "Torno al lavoro", 
        "Faccio una passeggiata con tutta la famiglia", 
        "Seguo il corso FE", 
        "Addormento Gabriele", 
        "Vado a letto"
    ]

    for (activities in day) {
        console.log(activities + ". " + day[activities]);
    }

}

// -----------------------------------------------------------------------------------------------------------------------

function getCalc () {

    let number1 = prompt("Digita il primo numero");
    let operator = prompt("Scegli l'operazione");
    let number2 = prompt("Digita il secondo numero");
    let result;

    switch (operator) {
        case "+":
            result = parseInt(number1) + parseInt(number2);
            break;
        case "-":
            result = parseInt(number1) - parseInt(number2);
            break;
        case "*":
            result = parseInt(number1) * parseInt(number2);
            break;
        case "/":
            result = parseInt(number1) / parseInt(number2);
            break;
        default:
            result = "Error"
    }
    
    alert("Il risultato è: " + result)
}
