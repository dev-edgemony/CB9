//DOM
const rootEl = document.querySelector(".root"); //mi collego al documento html, partendo dall'elemento con classe root



//creazione della card singola con l'immagine
const genImageCardEl = (imageData) => { 
    const wrapperEl = document.createElement("div"); //creo il wrapper, div contenitore della card
    const imageEl = document.createElement("img"); //creo la img

    wrapperEl.className = "card-wrapper"; //assegno una classe al wrapper
    imageEl.className = "card-image"; //assegno una classe all'img
    imageEl.src = imageData.urls.small; //prendo l'immagine più piccola dalla fetch
    imageEl.alt = imageData.alt_description; //prendo l'alt dell'immagine dalla fetch

    imageEl.addEventListener("click", () => {
        openModal(imageData); //passo l'oggetto imageData alla funzione openModal per popolare la modale
    });

    wrapperEl.append(imageEl); //appendo l'immagine al contenitore della card
    return wrapperEl; //ritorno la card completa
};



//creazione della sezione che contiene le card
const genImageListEl = (listName) => {
    const wrapperEl = document.createElement("div"); //creo il contenitore della sezione delle card
    const titleEl = document.createElement("h2"); //creo il titolo
    
    wrapperEl.className = "card-list"; //assegno una classe al contenitore 
    titleEl.textContent = listName; //rendo variabile il titolo del contenitore
    titleEl.className = "card-title"; //assegno una classe al titolo del contenitore

    wrapperEl.append(titleEl); //appendo il titolo al contenitore della card
    return wrapperEl; //ritorno la sezione della card
}



//creo una funzione per la modal con l'immagine e i relativi dati
const openModal = (imageData) => {
    const modalImage = document.createElement('img'); //creo un elemento immagine per la modal
    const authorImg = document.createElement('img'); //creo un elemento immagine per l'autore
    const authorName = document.createElement('h4'); //creo un elemento h4 per il nome dell'autore
    const imgDescription = document.createElement('p'); //creo un elemento p con la descrizione dell'immagine
    const imgLocation = document.createElement('p'); //creo un elemento p con la location dell'immagine
    
    modalImage.src = imageData.urls.full; //prendo l'immagine più grande dalla fetch
    modalImage.alt = imageData.alt_description; //prendo l'alt dell'immagine dalla fetch
    modalImage.className = "img-full"; //assegno una classe all'immagine della modal
    authorImg.src = imageData.user.profile_image.large; //prendo la foto dell'autore dalla fetch
    authorImg.alt = imageData.user.name; //prendo l'alt dell'immagine dalla fetch
    authorImg.className = "img-author"; //assegno una classe alla foto dell'autore 
    authorName.textContent = imageData.user.name; //prendo il nome dell'autore dalla fetch
    imgDescription.textContent = imageData.description || imageData.alt_description; //prendo la description dalla fetch e, in sua assenza l'alt
    imgDescription.className = "img-description"; //assegno una classe alla descrizione
    imgLocation.textContent = imageData.user.location; //prendo la location dalla fetch
    imgLocation.className = "img-location"; //assegno una classe alla location

    const modal = document.createElement('div'); //creo la modal
    modal.classList.add('modal'); //assegno una classe alla modal
    const modalAuthor = document.createElement('div'); //creo un div per i dati dell'autore della foto
    modalAuthor.classList.add('modal-author'); //assegno una classe al div dell'autore
    const modalContent = document.createElement('div'); //creo un div per i dettagli della foto
    modalContent.classList.add('modal-content'); //assegno una classe al div dei dettagli

    modalAuthor.append(authorImg, authorName); //appendo la foto e il nome dell'autore al suo div
    modalContent.append(modalAuthor, imgDescription, imgLocation); //appendo il div dell'autore, la descrizione e la location al div dei dettagli
    modal.append(modalImage, modalContent); //appendo l'immagine e il div dei dettagli alla modal
    rootEl.append(modal); //appendo la modal alla root

    modal.addEventListener('click', function(event) { //imposto una funzione che chiude la modal al click sulla modal (ad eccezione degli elementi che contiene)
        if (event.target === modal) { 
            modal.remove(); //rimuovo la modal
        }
    });
};



//Generazione delle immagini per popolare la card
//1. Creo i componenti dinamici dell'url dell'API di Unsplash, utilizzando il mio token e le query
const BASE_URL = "https://api.unsplash.com/"; //base dell'url
const API_TOKEN = "8wKit5s2VjUlIsi0WtYMPbJft8GeEiek6nORNm07quY"; //mio token fornito qui https://unsplash.com/oauth/applications/594673
const SEARCH_QUERY = "baby"; //query di ricerca: cercherò immagini di bambini

//2. Stabilisco un collegamento all'API con l'url completo e pesco gli elementi del json
fetch(`${BASE_URL}/search/photos/?client_id=${API_TOKEN}&page=1&per_page=12&query=${SEARCH_QUERY}`) //inizio la fetch collegandomi all'url completo dell'API
    .then((res) => res.json()) //risolvo la response e la converto in json
    .then((data) => { //prendo i dati della response
        const listData = data.results; //assegno alla variabile listData il percorso iniziale degli elementi del json
        const imageListEl = genImageListEl("Immagini di bimbi"); //assegno un titolo dinamico alla gallery delle immagini
        
        listData.map(photo => { //itero su ogni elemento del json
            const imgCardEl = genImageCardEl(photo); //utilizzo la funzione genImageCardEl per creare una card per l'immagine corrente
            imageListEl.append(imgCardEl); // appendo la card alla gallery delle immagini
        })
        
        rootEl.append(imageListEl); //appendo la gallery delle immagini alla root
});
