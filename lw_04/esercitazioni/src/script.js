function getBirthday () {

    const userBirthday = prompt("Quand'è il tuo compleanno?");
    const today = ("05/04/2024");
       
    if (userBirthday === today) {
        console.log("Oggi è il tuo compleanno!! 🎁");
    } else {
        console.log("Oggi non è il tuo compleanno");
    }

}

// Volevo provare ad impostare la data prendendola dal sistema, ma si rompe l'if perchè l'utente inserisce una stringa 

    // let today = new Date();
    // let dd = today.getDate();
    // let mm = today.getMonth() + 1;
    // let yyyy = today.getFullYear();
    // if (dd < 10) {
    //     dd = '0' + dd;
    // } 
    // if (mm < 10) {
    //     mm = '0' + mm;
    // } 
    // today = (dd + '/' + mm + '/' + yyyy);
    // console.log(today);

// -----------------------------------------------------------------------------------------------------------------------

function getDay () {

    const day = [
        "si alza mio figlio", 
        "mi alzo", 
        "preparo la colazione per tutta la famiglia", 
        "gioco con mio figlio", 
        "inizio a lavorare", 
        "preparo da mangiare per la famiglia", 
        "torno al lavoro", 
        "faccio una passeggiata con la famiglia", 
        "seguo il corso FE", 
        "addormento mio figlio", 
        "vado a letto"
    ]

    for (activities in day) {
        console.log(activities + ". " + day[activities]);
    }

}

// -----------------------------------------------------------------------------------------------------------------------

function getCalculator () {
    
}