//DOM
const rootEl = document.querySelector(".root"); //mi collego al documento html, partendo dall'elemento con classe root




//Creazione card singola
const genImageCardEl = (imageData) => {
    const wrapperEl = document.createElement("div"); //creo il wrapper, div contenitore della card
    const imageEl = document.createElement("img"); //creo la img

    wrapperEl.className = "card-wrapper"; //assegno una classe al wrapper
    imageEl.className = "card-image"; //assegno una classe all'img
    imageEl.src = imageData.urls.small; //prendo l'immagine più piccola dalla fetch
    imageEl.alt = imageData.alt_description; //aggiungo un alt

    imageEl.addEventListener("click", () => {
        openModal(imageData); //passo l'oggetto imageData alla funzione openModal per popolare la modale
    });

    wrapperEl.append(imageEl); 
    return wrapperEl; //
};

//Creazione carousel delle card
const genImageListEl = (listName) => {
    const wrapperEl = document.createElement("div");
    const titleEl = document.createElement("h2");
    
    wrapperEl.className = "card-list";
    titleEl.textContent = listName;
    titleEl.className = "card-title";

    wrapperEl.append(titleEl);
    return wrapperEl;
}



//Funzione per aprire la modal con l'immagine
const openModal = (imageData) => {
    //Crea un elemento immagine per la modal
    const modalImage = document.createElement('img');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('h4');
    const imgDescription = document.createElement('p');
    const imgLocation = document.createElement('p');
    
    modalImage.src = imageData.urls.full;
    modalImage.alt = imageData.alt_description;
    modalImage.className = "img-full";
    authorImg.src = imageData.user.profile_image.medium;
    authorImg.alt = imageData.user.name;
    authorImg.className = "img-author";
    authorName.textContent = imageData.user.name; //Corretto il nome della proprietà textContent
    imgDescription.textContent = imageData.description || imageData.alt_description;
    imgDescription.className = "img-description";
    imgLocation.textContent = imageData.user.location;
    imgLocation.className = "img-location";

    // Crea un elemento per la modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalButton = document.createElement('div');
    modalButton.className = "close";
    const modalAuthor = document.createElement('div');
    modalAuthor.classList.add('modal-author');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    modalAuthor.append(authorImg, authorName);
    modalContent.append(modalAuthor, imgDescription, imgLocation);
    modal.append(modalButton, modalImage, modalContent);
    rootEl.append(modal);

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.remove(); // Rimuovi la modal
        }
    });
};

//Generazione delle immagini per popolare la card
//1. Creo i componenti dinamici dell'url dell'API di Unsplash, utilizzando il mio token e le query
const BASE_URL = "https://api.unsplash.com/"; //base dell'url
const API_TOKEN = "8wKit5s2VjUlIsi0WtYMPbJft8GeEiek6nORNm07quY"; //mio token fornito qui https://unsplash.com/oauth/applications/594673
const SEARCH_QUERY = "baby"; //query di ricerca: cercherò immagini di bambini

//2. Stabilisco un collegamento all'API con l'url completo e pesco gli elementi del json
fetch(`${BASE_URL}/search/photos/?client_id=${API_TOKEN}&query=${SEARCH_QUERY}`) //inizio la fetch collegandomi all'url completo dell'API
    .then((res) => res.json()) 
    .then((data) => {
        const listData = data.results;
        const imageListEl = genImageListEl("Immagini di bimbi");
        
        listData.map(photo => {
            const imgCardEl = genImageCardEl(photo);
            imageListEl.append(imgCardEl);
        })
        
        rootEl.append(imageListEl);
});
