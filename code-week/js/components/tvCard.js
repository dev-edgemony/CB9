// IMPORT
import { createEl, find } from '../helpers.js'; 
import Image from './Image.js';
import Text from './Text.js';
import getGenresByIds from './Genres.js'


// API
const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = '54ba07b69851b27c129da3059e6156a7';
const TYPE = 'tv';

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
  
    // Aggiunge gli elementi alla card e la restituisce
    card.append(imageEl, titleEl, idEl, genreEl, descEl);
    return card;
};

export default createTvCard
