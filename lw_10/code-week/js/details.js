// IMPORT: importa i file js esterni che vengono richiamati in questo
import { getIdFromUrl } from './components/Helpers.js';
import createTvDetails from './components/TvDetails.js';


// API: legenda per la composizione dell'url dell'API
const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = '54ba07b69851b27c129da3059e6156a7';
const TYPE = 'tv';
const TV_ID = getIdFromUrl(); // Recupera l'ID dall'URL


// API: Chiamata per avere i dettagli sulla serie tv
fetch(`${BASE_URL}/${TYPE}/${TV_ID}?api_key=${API_TOKEN}`) // Effettua una richiesta API
  .then((response) => response.json()) // Converte la risposta in formato JSON
  .then((data) => {
    createTvDetails(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });