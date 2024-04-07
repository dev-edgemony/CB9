const threeMult = [3, 6, 9, 12, 15, 18];
const generalArr =[2, true, false,"Pippo", [2, 3, 4, 5]];
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log(matrix[matrix.length - 1]);



/* for(let index = 0; index < 10; index += 1) {
    console.log(7 * index);

} */

/* for (let index = 0; index < threeMult.length; index++) {
    console.log(threeMult[index]);
} */

//-----ciclo for in --//
for (num in threeMult){
    console.log(num);
}
//----ciclo for of--//
for (num of threeMult) {
    console.log(num);
}


const movies = [
    "harry Potter",
    "Il signore degli anelli",
    "The Matrix",
    "Pulp fiction",
];

/* for (movieIndex in movies) {
    console.log(movieIndex + ". " + movies[movieIndex]);
}

for (movie of movies) {
    console.log(movie);
} */

/* for(let i = 0; i < movies.length; i++) {
    console.log(i + ") " + movies[i]);
} */


/* ciclo while */
let counter = 0;

while(counter < movies.length) {
    console.log(counter + ") " + movies[counter]);
    counter++;
}