// IMPORT: importa i file js esterni che vengono richiamati in questo
import { createEl, find } from './components/Helpers.js';
import Image from './components/Image.js';
import Title from './components/Title.js';
import Text from './components/Text.js';
import getGenresByIds from './components/Genres.js';


// SELECT FROM DOM: individua gli elementi dal DOM
const cardGallery = find('.card-gallery');
const searchInput = find('.search-input');


// API: legenda per la composizione dell'url dell'API
const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = '54ba07b69851b27c129da3059e6156a7';
const TYPE = 'tv';
const TIME_FRAME = 'week';


// SEARCH: Modulo di ricerca 
const searchEl = () => {

  const query = searchInput.value.trim();
  if (!query) {return;} // Se la query non è definita, esce dalla funzione

  fetch(`${BASE_URL}/search/${TYPE}?api_key=${API_TOKEN}&query=${query}`)
    .then((response) => response.json()) 
    .then((data) => {
      cardGallery.innerHTML = ''; // Cancella i risultati di ricerca precedenti
      const results = data.results; // Ottiene i risultati della ricerca

      results.forEach((tv) => { // Per ogni risultato crea una card TV e l'aggiunge alla gallery
        const card = createTvCard(tv);
        cardGallery.append(card);
      });
    })

    .catch((error) => { // Gestisce eventuali errori
      console.error('Error:', error);
    });
};

searchInput.addEventListener('input', searchEl); // Aggiunge un event listener per l'evento input all'input di ricerca, in modo che la funzione handleSearch venga chiamata ogni volta che l'utente inserisce del testo.


// TV CARD: Definisce una funzione createTvCard che crea e restituisce un elemento card per una serie TV.
const createTvCard = (tv) => {
  const { poster_path, name, id, genre_ids, overview } = tv;

  // Crea il li "card" che conterrà gli elementi successivi
  const card = createEl('li');
  card.className = 'card';

  // Crea elementi per l'immagine, il titolo, l'ID, il genere e la descrizione della serie TV
  const imageEl = Image({ src: `https://image.tmdb.org/t/p/original/${poster_path}`, className: 'card-image' });
  const titleEl = Title({ text: name, className: 'card-title' });
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



// FETCH API: Effettua una richiesta API per ottenere le serie TV in tendenza e aggiunge le relative card alla galleria.
fetch(`${BASE_URL}/trending/${TYPE}/${TIME_FRAME}?api_key=${API_TOKEN}`)
.then((res) => res.json())
.then((data) => {
  const cards = data.results; 
  cards.forEach((tv) => { 
    const card = createTvCard(tv);
    cardGallery.append(card); 
  });
})
.catch((error) => {
  console.error('Error:', error);
});


// OPEN DETAIL: Funzione per aprire la pagina dei dettagli con i dettagli della serie TV selezionata
const openDetailsPage = (tv) => {
  window.location.href = `details.html?id=${tv.id}`;
};