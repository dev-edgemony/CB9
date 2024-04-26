// https://api.unsplash.com/search/photos/?client_id=8wKit5s2VjUlIsi0WtYMPbJft8GeEiek6nORNm07quY&query=cat

const genImageCardEl = (imageData) => {
    const wrapperEl = document.createElement("div");
    const imageEl = document.createElement("img")

    wrapperEl.className = "card-wrapper";
    imageEl.className = "card-image";
    imageEl.src = imageData.urls.small;
    imageEl.alt = imageData.alt_description;

    imageEl.addEventListener("click", () => {
        openModal(imageData.urls.full);
    })

    wrapperEl.append(imageEl); 
    return imageEl
}

// // Funzione per aprire la modal con l'immagine
// const openModal = (imageUrl) => {
//     // Crea un elemento immagine per la modal
//     const modalImage = document.createElement('img');
//     modalImage.src = imageUrl;

//     // Crea un elemento per la modal
//     const modal = document.createElement('div');
//     modal.classList.add('modal');
//     modal.append(modalImage);

//     // Aggiungi la modal al body del documento
//     document.body.append(modal);

//     // Aggiungi un event listener per chiudere la modal quando si clicca fuori da essa
//     modal.addEventListener('click', function(event) {
//         if (event.target === modal) {
//             modal.remove(); // Rimuovi la modal
//         }
//     });
// }


const genImageListEl = (listName) => {
    const wrapperEl = document.createElement("div");
    const titleEl = document.createElement("h2");
    
    wrapperEl.className = "card-list";
    titleEl.textContent = listName;
    titleEl.className = "card-title";

    wrapperEl.append(titleEl);
    return wrapperEl;
}

const BASE_URL = "https://api.unsplash.com/";
const API_TOKEN = "8wKit5s2VjUlIsi0WtYMPbJft8GeEiek6nORNm07quY";
const SEARCH_QUERY = 'babies';
const rootEl = document.querySelector(".root");

fetch(`${BASE_URL}/search/photos/?client_id=${API_TOKEN}&query=${SEARCH_QUERY}`)
    .then((res) => res.json())
    .then((data) => {
        const listData = data.results;
        const imageListEl = genImageListEl("Immagini di bimbi");
        
        listData.map(photo => {
            const imgCardEl = genImageCardEl(photo);

            imageListEl.append(imgCardEl)
        })
        
        rootEl.append(imageListEl);
    });