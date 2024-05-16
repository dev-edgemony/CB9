// IMPORT: importa i file js esterni che vengono richiamati in questo
import { find } from './components/Helpers.js';
import searchEl from './components/Search.js';
import createTvCard from './components/TvCard.js';


// API: legenda per la composizione dell'url dell'API
const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = '54ba07b69851b27c129da3059e6156a7';
const TYPE = 'tv';
const TIME_FRAME = 'week';


// SELECT FROM DOM: individua gli elementi dal DOM
const cardGallery = find('.card-gallery');
const searchInput = find('.search-input');
// Aggiunge un event listener per l'evento alla digitazione nell'input di ricerca 
searchInput.addEventListener('input', (e) => searchEl(e.target.value, cardGallery)); // La funzione handleSearch viene chiamata ogni volta che l'utente inserisce del testo


// FETCH API: Effettua una richiesta API per ottenere le serie TV in tendenza e aggiunge le relative card alla galleria.
fetch(`${BASE_URL}/trending/${TYPE}/${TIME_FRAME}?api_key=${API_TOKEN}`)
.then((res) => res.json())
.then((data) => {
  const cards = data.results; 
  cards.forEach((tv) => { 
    const card = createTvCard(tv);
    card.addEventListener('click', () => openDetailsPage(tv)); // Aggiungi l'event listener per il click
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