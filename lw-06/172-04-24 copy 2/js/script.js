//const cE = (element) => document.createElement(element)
//const qS = (element) => document.querySelector(element)


const heroElgen = (titleConten, subTitleContent) => {
    const heroEl = document.createElement("div");
    const titleEl = document.createElement("h1");
    const subTitleEl = document.createElement("h3");

    heroEl.className = "hero";
    titleEl,className = "title";
    subTitleEl.className = "subtitle";
    titleEl.textContent = titleConten;
    subTitleEl.textContent =subTitleContent;
    heroEl.append(titleEl, subTitleEl);

    return heroEl;

}

const listElGen = () => {
    const listEl = document.createElement('url');

    listEl.className = "todo-list";

    return listEl;
}

const listItemElGen = (itemContent) => {
    const itemElGen = document.createElement('');

    itemElGen.className = "todo-item";
};

const addItemElGen = () => {
    const formEl = document.createElement("form");
    const inputTextEl = document.createElement("input");
    const inputSubmitEl = document.createElement("input");

    
}

let listTodosData = []; //**  */

const rootEl = document.querySelector("#root");   // root   *
const heroEl = heroElgen('todo list app',    ///genera la hero 
   "La migliore app per prendere nota "
);


const addItemEl = addItemElGen();   ////genero gli elementi nella form
const listEl = listElGen();      // vado a generare la lista 

listTodosData.map((todo) => listEl.append(listItemElGen(todo)));

rootEl.append(heroEl, addItemEl, listEl); /// * elementi appesi nella root

addItemEl.addEventListener('submit', (event) => {  // aspetta lo scatenarsi dell'evento come il push o l'inserimento del testo
    event.preventDefault();  // previene il reload della pagina
    const inputElValue = event.target[0];  // corrisponde all'input
    
   listTodosData.push(inputElValue.value); // viene pushato nell'array iniziale delle cose da fare **
   listEl.textContent = ""; // qua svuoto la lista degli elementi
   listTodosData.map((todo) => listEl.append(listItemElGen(todo))); // uso il forEach per ritornare la string con il valore aggiunto 
   inputElValue.value = "";
   //rootEl.append(listEl);
});

listEl.addEventListener("click", (event) => {
    const todoItemValue = event.target.textContent; // recupera il valore della singola item(della lista)
    
    
    listTodosData = listTodosData.filter((todo) => todo !== todoItemValue); /// filtra e restituisce l'array senza l'elemnto cliccato
    
    listEl.textContent = ""; // qua svuoto la lista degli elementi
    listTodosData.map((todo) => listEl.append(listItemElGen(todo))); // ripopola la lista cancellata precedentemente
});


  