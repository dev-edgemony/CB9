// Importa le funzioni createEl e find dal file helpers.js
import { createEl, find } from './helpers.js';

// Importa il componente Image dal file Image.js
import Image from './components/Image.js';

// Importa il componente Text dal file Text.js
import Text from './components/Text.js';
import Title from './components/Title.js';

// Costanti per le richieste API
const BASE_URL = 'https://api.themoviedb.org/3'; // URL di base per le richieste API
const API_TOKEN = '54ba07b69851b27c129da3059e6156a7'; // Chiave API per l'autenticazione
const TYPE = 'tv'; // Tipo di risorse (serie TV)
const TIME_FRAME = 'week'; // Intervallo di tempo (settimana)
const SEARCH_QUERY = ''; // Query di ricerca (vuota)

// Trova l'elemento con classe '.card-gallery' nel documento HTML
const cardGallery = find('.card-gallery');

// Funzione per ottenere i generi delle serie TV
const fetchGenres = () => {
  // Effettua una richiesta API per ottenere i generi delle serie TV
  return fetch(`${BASE_URL}/genre/${TYPE}/list?api_key=${API_TOKEN}`)
    .then((res) => res.json()) // Converte la risposta in formato JSON
    .then((data) => data.genres); // Restituisce solo l'array dei generi dalla risposta
};

// Funzione per ottenere i nomi dei generi in base agli ID dei generi
const getGenresByIds = (genreIds) => {
  // Chiama la funzione fetchGenres per ottenere tutti i generi
  return fetchGenres().then((genres) => {
    // Mappa gli ID dei generi con i rispettivi nomi
    return genreIds.map((id) => {
      // Trova il genere corrispondente all'ID
      const genre = genres.find((genre) => genre.id === id);
      // Restituisce il nome del genere se trovato, altrimenti 'Unknown'
      return genre ? genre.name : 'Unknown';
    });
  });
};

// Funzione per creare un elemento card basato sui dati della serie TV
const TvCard = ({ image, title, id, description, genreIds } = {}) => {
  // Crea un nuovo elemento div per la card
  const el = createEl('div');
  // Imposta la classe della card come 'card'
  el.className = 'card';

  // Crea un elemento immagine con l'URL fornito e la classe 'card-image'
  const imageEl = Image({ src: 'https://image.tmdb.org/t/p/original/' + image, className: 'card-image' });
  // Crea un elemento testo con il titolo fornito e la classe 'card-title'
  const titleEl = Title({ text: title, className: 'card-title' });
  // Crea un elemento testo con l'ID convertito in stringa e la classe 'card-id'
  const idEl = Text({ text: id.toString(), className: 'card-id' });
  // Crea un elemento testo vuoto con la classe 'card-genre' come segnaposto per i generi
  const genreEl = Text({ text: '', className: 'card-genre' });
  // Crea un elemento testo con la descrizione fornita e la classe 'card-description'
  const descEl = Text({ text: description, className: 'card-description' });

  // Ottiene i nomi dei generi in base agli ID dei generi e li imposta nell'elemento dei generi una volta disponibili
  getGenresByIds(genreIds).then((genreNames) => {
    genreEl.textContent = genreNames.join(', '); // Imposta i nomi dei generi separati da virgole
  });

  // Aggiunge tutti gli elementi all'elemento della card
  el.append(imageEl, titleEl, idEl, genreEl, descEl);
  // Restituisce l'elemento della card completo
  return el;
};

// Funzione per creare un elemento card basato sui dati della serie TV in tendenza
const trendingTVEl = (tv) => {
  // Parametri della card per la serie TV
  const cardParams = {
    image: tv.poster_path, // URL dell'immagine di anteprima
    title: tv.name, // Titolo della serie TV
    id: tv.id, // ID della serie TV
    genreIds: tv.genre_ids, // Array degli ID dei generi della serie TV
    description: tv.overview, // Descrizione della serie TV
  };
  // Crea un nuovo elemento li per la card
  const listEl = createEl('li');
  // Crea la card utilizzando la funzione TvCard
  const card = TvCard(cardParams);

  // Aggiunge la card all'elemento li
  listEl.append(card);
  // Restituisce l'elemento li completo con la card
  return listEl;
};

// Funzione per gestire la ricerca
const handleSearch = () => {
  const searchInput = find('.search-input');
  const query = searchInput.value.trim();

  if (query.length === 0) {
    return;
  }

  fetch(`${BASE_URL}/search/${TYPE}?api_key=${API_TOKEN}&query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      cardGallery.innerHTML = ''; // Clear previous search results
      
      const results = data.results;

      results.forEach((tv) => {
        const card = trendingTVEl(tv); // Utilizza la funzione trendingTVEl per creare le card di ricerca
        cardGallery.appendChild(card);
      });
    })
    .catch((error) => {
      console.error('Error during search:', error);
    });
};

// Aggiunge un event listener per l'evento input all'input di ricerca, in modo che la funzione handleSearch venga chiamata ogni volta che l'utente inserisce del testo.
const searchInput = find('.search-input');
searchInput.addEventListener('input', handleSearch);

// Effettua la richiesta API per ottenere le serie TV in tendenza
fetch(`${BASE_URL}/trending/${TYPE}/${TIME_FRAME}?api_key=${API_TOKEN}`)
  .then((res) => res.json()) // Converte la risposta in formato JSON
  .then((data) => {
    const cards = data.results; // Ottiene i risultati delle serie TV
    // Mappa i risultati delle serie TV utilizzando la funzione trendingTVEl per creare una lista di card
    const cardList = cards.map(trendingTVEl);
    // Aggiunge tutte le card alla galleria
    cardGallery.append(...cardList);
  });
