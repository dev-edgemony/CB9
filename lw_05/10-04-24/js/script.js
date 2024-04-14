const people = ['Jhon', 'Frank', 'Victor'];
const detailedPeopleList =[
    {
        id: 1,
        name: 'Jhon',
        age: 30,
    },
    {
        id: 2,
        name: 'Frank',
        age: 32,
    },
    {
        id: 3,
        name: 'Victor',
        age: 29,
    },
    ];
const temperatures = [-40, -30, -20, -10, 0, 10, 20, 30, 40, 50];
/* for ( i in people) {
    console.log(`${1}: ${people[i]}`);
} */

// people.forEach((person, i, arr) => console.log(`${i}: ${people[i]}`))


/* [Cat, Dog, 25, Apple].forEach((element, index, array) => console.log(element, index,array)) */

/* detailedPeopleList.forEach((person) =>
  console.log(`io sono ${person.name}, e ho ${person.age} anni!`)
); */

/* const orderedPeople = people.map((person, i) => `${i} - ${person}`);

console.log(people);
console.log(orderedPeople);
 */

// conversione gradi da C a F

const temperatureF = temperatures.map((temp) => temp * 9 / 5 + 32);
const temperatureC = temperatureF.map((temp) =>  parseInt((temp -32 * 5 )/ 9));

// console.log(temperatureF);
// console.log(temperatureC);


// filter

const safeTemps = temperatures.filter((temp) => temp <= 40 && temp >= 0);

// console.log(safeTemps);

const detailedPeopleWithJ = detailedPeopleList.filter((person) => 
  person.name.includes("J"));

//console.log(detailedPeopleList);


const filteredPeople = people
.filter((person) => person.includes("h"))
.map((person) => person + " .I.");

console.log(filteredPeople);