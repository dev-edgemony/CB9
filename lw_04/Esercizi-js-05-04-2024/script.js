                                    // ##--Primo-esercizio--##

const MyBirthday = "13/10/1984";
let Today = "05/04/2024";

// const MyBirthday = "05/04/2024";
// let Today = "05/04/2024";

if (MyBirthday === Today) {
    console.log("🎁");
}
else {
    console.log("Mi dispiace non è il tuo compleanno");
}
// --------------------------------------------------------------------------------------------------
                                    // ##--Secondo-Esercizio--

const MyDailyRoutine = ["mi sveglio", "10min Silat", "colazione", "mi lavo", "lavoro", "doccia", "studio/CB", "30/60min chitarra", "10min Silat", "letto"];

for (let i = 0; i < MyDailyRoutine.length; i++) {
    console.log(i + ". " + MyDailyRoutine[i]);
}