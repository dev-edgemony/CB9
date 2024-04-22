// Hero
const heroElGen = (titleContent, subTitleContent) => {
    const heroEl = document.createElement("div");
    const titleEl = document.createElement("h1");
    const subTitleEl = document.createElement("h3");
  
    // Classi
    heroEl.className = "hero";
    titleEl.className = "title";
    subTitleEl.className = "subtitle";
  
    // Contenuti
    titleEl.textContent = titleContent;
    subTitleEl.textContent = subTitleContent;
  
    // Elementi Hero
    heroEl.append(titleEl, subTitleEl);
  
    return heroEl;
};

// Generatore della ul del TODO
const listElGen = () => {
    const listEl = document.createElement("ul");
    
    // Id  
    listEl.id = "tasks-list"; 
    
    return listEl;
};

// Generatore degli item nella lista
const listItemElGen = (itemContent) => {
    const listItemEl = document.createElement("li");
  
    // Impostazione della classe e del contenuto
    listItemEl.className = "todo-item";
    listItemEl.textContent = itemContent;
  
    // Evento di rimozione al clic
    listItemEl.onclick = function() {
        const index = listTodosData.indexOf(itemContent);
        if (index !== -1) {
            listTodosData.splice(index, 1); 
        }
        this.remove(); 
    };
  
    return listItemEl;
};

// Generatore del form per aggiungere item
const addItemElGen = () => {
    const formEl = document.createElement("form");
    const inputTextEl = document.createElement("input");
    const inputSubmitEl = document.createElement("input");
  
    formEl.className = "add-item-form"; 
    inputTextEl.type = "text"; 
    inputTextEl.placeholder = "Aggiungi un nuovo compito..."; 
    inputTextEl.id = "new-task"; 
    inputSubmitEl.type = "submit"; 
    inputSubmitEl.value = "Aggiungi"; 
  
    formEl.append(inputTextEl, inputSubmitEl);
  
    return formEl;
};

// Generatore del pulsante per eliminare tutta la lista
const deleteAllButtonElGen = () => {
    const deleteButtonEl = document.createElement("button");
  
    // Impostazione della classe e del testo
    deleteButtonEl.className = "delete-all-button";
    deleteButtonEl.textContent = "Elimina Tutto"; 
  
    return deleteButtonEl;
};

// Dati della lista TODO
const listTodosData = [];

// Root principale
const rootEl = document.querySelector("#root");

// Elemento titolo, input per l'aggiunta e il pulsante per eliminare tutto
const heroEl = heroElGen("TODO LIST APP", "Le task della tua giornata!");
const addItemEl = addItemElGen();
const listEl = listElGen();
const deleteAllButtonEl = deleteAllButtonElGen();

// Aggiungo gli elementi al root
rootEl.append(heroEl, addItemEl, listEl, deleteAllButtonEl);

// Aggiungere Task alla lista
addItemEl.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const inputText = event.target[0]; 
    const newTask = inputText.value.trim(); 
    
    // Elimino ripetizioni
    if (listTodosData.includes(newTask)) { 
        alert("Non puoi farlo!");
        return; 
    }
    
    if (newTask) { 
        listTodosData.push(newTask); 
        listEl.append(listItemElGen(newTask)); 
        inputText.value = ""; 
    }
});

// Elimino tutto quanto 
deleteAllButtonEl.addEventListener("click", () => {
    listTodosData.length = 0; 
    listEl.innerHTML = ""; 
});
