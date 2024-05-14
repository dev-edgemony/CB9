// API
const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = '54ba07b69851b27c129da3059e6156a7';
const TYPE = 'tv';

// Definisce una funzione fetchGenres che effettua una richiesta API per ottenere i generi dei contenuti.
const fetchGenres = () => {
  return fetch(`${BASE_URL}/genre/${TYPE}/list?api_key=${API_TOKEN}`) // Effettua una richiesta API per ottenere i generi
    .then((res) => res.json()) // Converte la risposta in formato JSON
    .then((data) => data.genres); // Restituisce solo l'array dei generi
};

// Definisce una funzione getGenresByIds che restituisce i nomi dei generi corrispondenti agli ID specificati.
const getGenresByIds = (genreIds) => {
    return fetchGenres().then((genres) => { // Ottiene i generi disponibili
      return genreIds.map((id) => { // Per ogni ID
        const genre = genres.find((genre) => genre.id === id); // Trova il genere corrispondente all'ID
        return genre ? genre.name : 'Unknown'; // Restituisce il nome del genere, se trovato, altrimenti restituisce 'Unknown'
      });
    });
  };



export default getGenresByIds