// IMPORT
import { createEl, find } from '../helpers.js'; 
import createTvCard from './components/tvCard.js'


// SELECT FROM DOM
const cardGallery = find('.card-gallery');
const searchInput = find('.search-input');


// API
const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = '54ba07b69851b27c129da3059e6156a7';
const TYPE = 'tv';


const searchEl = () => {
  
  const query = searchInput.value.trim();

  if (query.length === 0) {
    return;
  }

  fetch(`${BASE_URL}/search/${TYPE}?api_key=${API_TOKEN}&query=${query}`)
    .then((res) => res.json())
    .then((data) => {
      cardGallery.innerHTML = '';

      const results = data.results;

      results.forEach((tv) => {
        const card = createTvCard(tv);
        cardGallery.append(card);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });

   return searchEl 
};

export default searchEl
