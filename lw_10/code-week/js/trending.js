// // IMPORT
// import { createEl, find } from './helpers.js'; 
// import createTvCard from './components/tvCard.js'
// // import searchEl from './components/Search.js'


// // SELECT FROM DOM
// const cardGallery = find('.card-gallery');
// const searchInput = find('.search-input');


// // API
// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_TOKEN = '54ba07b69851b27c129da3059e6156a7';
// const TYPE = 'tv';
// const TIME_FRAME = 'week';


// // SEARCH




// // Definisce una funzione handleSearch che viene chiamata quando viene inserito del testo nell'input di ricerca.
// // La funzione effettua una richiesta API per ottenere i risultati della ricerca in base alla query inserita dall'utente e poi visualizza i risultati nella galleria di card.
// const searchEl = () => {
//   const query = searchInput.value.trim(); // Ottiene il valore dell'input di ricerca senza spazi vuoti ai margini

//  // Se la query non è definita, esce dalla funzione
//   if (!query) {
//     return;
//   }

//   fetch(`${BASE_URL}/search/${TYPE}?api_key=${API_TOKEN}&query=${query}`) // Effettua una richiesta API di ricerca
//     .then((response) => response.json()) // Converte la risposta in formato JSON
//     .then((data) => {
//       cardGallery.innerHTML = ''; // Cancella i risultati di ricerca precedenti

//       const results = data.results; // Ottiene i risultati della ricerca

//       results.forEach((tv) => { // Per ogni risultato
//         const card = createTvCard(tv); // Crea una card TV
//         cardGallery.append(card); // Aggiunge la card alla galleria
//       });
//     })
//     .catch((error) => { // Gestisce eventuali errori
//       console.error('Error:', error);
//     });

//     searchInput.addEventListener('input', searchEl);
// };

// // Aggiunge un event listener per l'evento input all'input di ricerca, in modo che la funzione handleSearch venga chiamata ogni volta che l'utente inserisce del testo.
// searchInput.addEventListener('input', searchEl);

// //////////////////////////////////


// // FETCH API
// // Effettua una richiesta API per ottenere le serie TV in tendenza e aggiunge le relative card alla galleria.
// fetch(`${BASE_URL}/trending/${TYPE}/${TIME_FRAME}?api_key=${API_TOKEN}`)
//   .then((res) => res.json()) // Converte la risposta in formato JSON
//   .then((data) => {
//     const cards = data.results; // Ottiene le serie TV in tendenza
//     cards.forEach((tv) => { // Per ogni serie TV
//       const card = createTvCard(tv); // Crea una card TV
//       cardGallery.append(card); // Aggiunge la card alla galleria
//     });
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });


//   // Funzione per gestire il click sulla card e visualizzare i dettagli
// cardGallery.addEventListener('click', (event) => {
//   const card = event.target.closest('.card');
//   if (card) {
//     const tvId = card.dataset.tvId;
//     window.location.href = `details.html?id=${id}`; // Reindirizza alla pagina dei dettagli con l'ID della serie TV
//   }
// });







///////////////////////////////////////////////////

// IMPORT
import { createEl, find } from './helpers.js'; 
// import searchEl from './components/Search.js'
import Image from './components/Image.js';
import Text from './components/Text.js';
import getGenresByIds from './components/Genres.js'


// SELECT FROM DOM
const cardGallery = find('.card-gallery');
const searchInput = find('.search-input');


// API
const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = '54ba07b69851b27c129da3059e6156a7';
const TYPE = 'tv';
const TIME_FRAME = 'week';


// SEARCH

// Definisce una funzione handleSearch che viene chiamata quando viene inserito del testo nell'input di ricerca.
// La funzione effettua una richiesta API per ottenere i risultati della ricerca in base alla query inserita dall'utente e poi visualizza i risultati nella galleria di card.
const searchEl = () => {
  const query = searchInput.value.trim(); // Ottiene il valore dell'input di ricerca senza spazi vuoti ai margini

 // Se la query non è definita, esce dalla funzione
  if (!query) {
    return;
  }

  fetch(`${BASE_URL}/search/${TYPE}?api_key=${API_TOKEN}&query=${query}`) // Effettua una richiesta API di ricerca
    .then((response) => response.json()) // Converte la risposta in formato JSON
    .then((data) => {
      cardGallery.innerHTML = ''; // Cancella i risultati di ricerca precedenti

      const results = data.results; // Ottiene i risultati della ricerca

      results.forEach((tv) => { // Per ogni risultato
        const card = createTvCard(tv); // Crea una card TV
        cardGallery.append(card); // Aggiunge la card alla galleria
      });
    })
    .catch((error) => { // Gestisce eventuali errori
      console.error('Error:', error);
    });

    searchInput.addEventListener('input', searchEl);
};

// Aggiunge un event listener per l'evento input all'input di ricerca, in modo che la funzione handleSearch venga chiamata ogni volta che l'utente inserisce del testo.
searchInput.addEventListener('input', searchEl);

//////////////////////////////////


// TV CARD
// Definisce una funzione createTvCard che crea e restituisce un elemento card per una serie TV.
const createTvCard = (tv) => {
  const { poster_path, name, id, genre_ids, overview } = tv; // Destruttura le proprietà dell'oggetto tv

  const card = createEl('li'); // Crea un elemento <li> per la card
  card.className = 'card'; // Aggiunge la classe 'card' all'elemento

  // Crea elementi per l'immagine, il titolo, l'ID, il genere e la descrizione della serie TV
  const imageEl = Image({ src: `https://image.tmdb.org/t/p/original/${poster_path}`, className: 'card-image' });
  const titleEl = Text({ text: name, className: 'card-title' });
  const idEl = Text({ text: id.toString(), className: 'card-id' });
  const genreEl = Text({ text: '', className: 'card-genre' });
  const descEl = Text({ text: overview, className: 'card-description' });

  // Ottiene i nomi dei generi corrispondenti agli ID specificati e li aggiunge all'elemento del genere
  getGenresByIds(genre_ids).then((genreNames) => {
    genreEl.textContent = genreNames.join(', '); // Imposta il testo dell'elemento del genere con i nomi dei generi separati da virgola
  });

  card.addEventListener('click', () => openDetailsPage(tv)); // Aggiungi l'event listener per il click

  // Aggiunge gli elementi alla card e la restituisce
  card.append(imageEl, titleEl, idEl, genreEl, descEl);
  return card;
};



// FETCH API
// Effettua una richiesta API per ottenere le serie TV in tendenza e aggiunge le relative card alla galleria.
fetch(`${BASE_URL}/trending/${TYPE}/${TIME_FRAME}?api_key=${API_TOKEN}`)
  .then((res) => res.json()) // Converte la risposta in formato JSON
  .then((data) => {
    const cards = data.results; // Ottiene le serie TV in tendenza
    cards.forEach((tv) => { // Per ogni serie TV
      const card = createTvCard(tv); // Crea una card TV
      cardGallery.append(card); // Aggiunge la card alla galleria
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });


  // Funzione per aprire la pagina dei dettagli con i dettagli della serie TV selezionata
const openDetailsPage = (tv) => {
  // Salva i dettagli della serie TV nel localStorage
  localStorage.setItem('selectedTvDetails', JSON.stringify(tv));

  // Reindirizza l'utente alla pagina dei dettagli
  window.location.href = 'details.html';
};