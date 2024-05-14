// IMPORT
import { createEl, find } from './helpers.js'; 
import createTvCard from './components/tvCard.js'
// import searchEl from './components/Search.js'


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


// FETCH API
// Effettua una richiesta API per ottenere le serie TV in tendenza e aggiunge le relative card alla galleria.
// https://api.themoviedb.org/3/tv/top_rated
fetch(`${BASE_URL}/${TYPE}/top_rated?api_key=${API_TOKEN}`)
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
