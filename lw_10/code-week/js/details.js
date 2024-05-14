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
  
  
  







document.addEventListener('DOMContentLoaded', function () {
    // Ottiene i parametri dalla query string
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const title = decodeURIComponent(params.get('title'));
    const image = decodeURIComponent(params.get('image'));
    const description = decodeURIComponent(params.get('description'));
    const genres = JSON.parse(decodeURIComponent(params.get('genres')));
  
    // Popola la pagina con i dettagli della serie TV
    const titleEl = document.querySelector('.details-title');
    const imageEl = document.querySelector('.details-image');
    const descEl = document.querySelector('.details-description');
    const genreEl = document.querySelector('.details-genre');
  
    titleEl.textContent = title;
    imageEl.src = `https://image.tmdb.org/t/p/original/${image}`;
    descEl.textContent = description;
  
    getGenresByIds(genres).then((genreNames) => {
      genreEl.textContent = `Genres: ${genreNames.join(', ')}`;
    });
  });
  
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