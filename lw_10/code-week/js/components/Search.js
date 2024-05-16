// import createTvCard from '../trending.js';
import createTvCard from './TvCard.js';


// API: legenda per la composizione dell'url dell'API
const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = '54ba07b69851b27c129da3059e6156a7';
const TYPE = 'tv';
const TIME_FRAME = 'week';


// FUNZIONE DI RICERCA: digitando sulla searchbar (autocomplete), restituisce i risultati filtrati per la query impostata
const searchEl = (searchText, cardGallery) => {

    const query = searchText.trim(); // Taglia gli spazi all'inizio e fine
    if (!query) {return;} // Se la query non è definita, esce dalla funzione
  
    fetch(`${BASE_URL}/search/${TYPE}?api_key=${API_TOKEN}&query=${query}`)
      .then((response) => response.json()) 
      .then((data) => {
        console.log(query)
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


  export default searchEl