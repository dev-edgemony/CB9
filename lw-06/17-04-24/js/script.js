const person = {
    name: "Pippo",
    surname: "Pluto",
    age: "50",
    speak: () => {
        console.log("Sono Pippo!");
    },
};

const people = [
    {
     name: "Topolino",
     surname:"Tada",
     age:"54",
    },
    {
     name: "Pippo",
     surname: "Pluto",
     age: "50",

    },
    {
     name: "Juan",
     surname: "whiches",
     age: "69",
    },
];

 const quotes = [
    //Array da riempire con le citazioni di personaggi famosi

 ];

 const authorQuotes = quotes.map(quote => "Autore:" + quote.author);

//console.log(authorQuotes);

const firstTenQuotes = quotes.filter(quote => quote.id <=10);

//console.log(firstTenQuotes);

const firtsUmarQuotes = quotes.find((quote) => quote.author.includes("nome autore"));

//console.log(quotes.reverse());

/* const ourMap = (array, callback) => {
    const finalArr = [];

    for (let element of array) {
        finalArr.push(callback(element));
    }
    return finalArr;
};

const newArray = ourMap(quotes, (quote) => quote.id);

console.log(newArray); */

const todoListEl = document.querySelector('.todo-list');

const listItemEl = document.createElement("li");

listItemEl.textContent = "Comprare la frutta";
listItemEl.className = "todo-item";

todoListEl.append(listItemEl);

const todoItemGen = (content) => {
    const listItemEl = document.createElement("li");

    listItemEl.className = "todo-item";
    listItemEl.textContent = content;

    return listItemEl;
};

const todoItemFruits = todoItemGen("Comprare Frutta");
const todoItemMeat = todoItemGen("Comprare carne");

todoListEl.append(todoItemFruits, todoItemMeat);

