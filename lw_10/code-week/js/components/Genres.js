// API
const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = '54ba07b69851b27c129da3059e6156a7';
const TYPE = 'tv';

// Funzione per ottenere i generi
const fetchGenres = () => {
  return fetch(`${BASE_URL}/genre/${TYPE}/list?api_key=${API_TOKEN}`)
    .then((res) => res.json())
    .then((data) => data.genres);
};

// Funzione per ottenere i nomi dei generi in base agli ID
const getGenresByIds = (genreIds) => {
  return fetchGenres().then((genres) => {
    return genreIds.map((id) => {
      const genre = genres.find((genre) => genre.id === id);
      return genre ? genre.name : 'Unknown';
    });
  });
};

export default getGenresByIds