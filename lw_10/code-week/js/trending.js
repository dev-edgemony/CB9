// IMPORT
import { createEl, find } from './helpers.js';
import TvCard from './components/TvCard.js';

// API
const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = '54ba07b69851b27c129da3059e6156a7';
const TYPE = 'tv';
const TIME_FRAME = 'week';
const SEARCH_QUERY = '';

// Funzione per creare un elemento card basato sui dati della serie TV in tendenza
const trendingTVEl = (tv) => {
  const cardParams = {
    image: tv.poster_path,
    title: tv.name,
    id: tv.id,
    genreIds: tv.genre_ids,
    description: tv.overview,
  };
  const listEl = createEl('li');
  const card = TvCard(cardParams);

  listEl.append(card);
  return listEl;
};

// Effettua la richiesta per ottenere le serie TV in tendenza
fetch(`${BASE_URL}/trending/${TYPE}/${TIME_FRAME}?api_key=${API_TOKEN}`)
  .then((res) => res.json())
  .then((data) => {
    const cards = data.results;
    const cardList = cards.map(trendingTVEl);
    const CARD_LIST_EL = find('.card-gallery');
    CARD_LIST_EL.append(...cardList);
  });
