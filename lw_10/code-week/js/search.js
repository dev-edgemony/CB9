import { createEl, find } from './helpers.js';
import Image from './components/Image.js';
import Text from './components/Text.js';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = '54ba07b69851b27c129da3059e6156a7';
const TYPE = 'tv';
const TIME_FRAME = 'week';
const SEARCH_QUERY = '';


const cardGallery = find('.card-gallery');

const searchInput = find('.search-input');

// Definisce una funzione handleSearch che viene chiamata quando viene inserito del testo nell'input di ricerca. La funzione effettua una richiesta API per ottenere i risultati della ricerca in base alla query inserita dall'utente, e poi visualizza i risultati nella galleria di card.

const handleSearch = () => {
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
        const card = createTvCard(tv);
        cardGallery.appendChild(card);
      });
    })
    .catch((error) => {
      console.error('Error during search:', error);
    });
};

searchInput.addEventListener('input', handleSearch); //Aggiunge un event listener per l'evento input all'input di ricerca, in modo che la funzione handleSearch venga chiamata ogni volta che l'utente inserisce del testo.



//////////////////////////////////

const fetchGenres = () => {
  return fetch(`${BASE_URL}/genre/${TYPE}/list?api_key=${API_TOKEN}`)
    .then((res) => res.json())
    .then((data) => data.genres);
};

const getGenresByIds = (genreIds) => {
    return fetchGenres().then((genres) => {
      return genreIds.map((id) => {
        const genre = genres.find((genre) => genre.id === id);
        return genre ? genre.name : 'Unknown';
      });
    });
  };




  const createTvCard = (tv) => {
    const { poster_path, name, id, genre_ids, overview } = tv;
  
    const card = createEl('li');
    card.className = 'card';
  
    const imageEl = Image({ src: `https://image.tmdb.org/t/p/original/${poster_path}`, className: 'card-image' });
    const titleEl = Text({ text: name, className: 'card-title' });
    const idEl = Text({ text: id.toString(), className: 'card-id' });
    const genreEl = Text({ text: '', className: 'card-genre' });
    const descEl = Text({ text: overview, className: 'card-description' });
  
    getGenresByIds(genre_ids).then((genreNames) => {
      genreEl.textContent = genreNames.join(', '); // Cambiato "|" in ","
    });
  
    card.append(imageEl, titleEl, idEl, genreEl, descEl);
    return card;
};

fetch(`${BASE_URL}/trending/${TYPE}/${TIME_FRAME}?api_key=${API_TOKEN}`)
  .then((res) => res.json())
  .then((data) => {
    const cards = data.results;
    cards.forEach((tv) => {
      const card = createTvCard(tv);
      cardGallery.appendChild(card);
    });
  });
