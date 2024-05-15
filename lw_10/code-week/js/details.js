// IMPORT: importa i file js esterni che vengono richiamati in questo
import { createEl, find } from './components/Helpers.js';
import Image from './components/Image.js';
import Title from './components/Title.js';
import Text from './components/Text.js';

// ID: Funzione per ottenere il parametro ID dall'URL
function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// SELECT FROM DOM: individua gli elementi dal DOM
const detailsList = find('.details-list');
const detailsSeries = find('.details-series'); // Creazione di detailsSeries
const detailsGeneral = find('.details-general');
const detailsSeasons = find('.details-season-box');
const detailsCast = find('.details-cast-box');

// API: legenda per la composizione dell'url dell'API
const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = '54ba07b69851b27c129da3059e6156a7';
const TYPE = 'tv';
const TV_ID = getIdFromUrl(); // Recupera l'ID dall'URL

// CAST: Funzione per ottenere il cast e aggiungere i nomi dei membri alla costante castEl
function getCastDetails() {
  fetch(`${BASE_URL}/${TYPE}/${TV_ID}/credits?api_key=${API_TOKEN}`)
    .then((response) => response.json())
    .then((data) => {
      const castEl = Text({ text: `Cast: ${data.cast.map((member) => member.name).join(', ')}`, className: 'details-cast' }); // Crea un elemento di testo con i nomi del cast
      detailsCast.append(castEl); // Aggiungi l'elemento di testo al dettaglio del cast
    })
    .catch((error) => {
      console.error('Error fetching cast details:', error);
    });
}

// CREATETVDETAILS: crea una funzione contenente tutte le informazioni dettaglio
const createTvDetails = ({ poster_path, name, genres, vote_average, languages, networks, number_of_seasons, number_of_episodes, overview, seasons } = {}) => {
  const imageEl = Image({ src: `https://image.tmdb.org/t/p/w500${poster_path}`, className: 'details-image', alt: 'TV Show Poster' });
  const titleEl = Title({ text: name, className: 'details-title' }); // Corretto il nome della classe
  const genreEl = Text({ text: `Genres: ${genres.map(genre => genre.name).join(', ')}`, className: 'details-genre' }); // Corretto il nome della classe
  const voteEl = Text({ text: `Rating: ${Math.round(vote_average * 10) / 10}/10`, className: 'details-rating' }); // Corretto il nome della classe
  const languageEl = Text({ text: `Languages: ${languages.join(', ')}`, className: 'details-language' }); // Corretto il nome della classe
  const networkEl = Text({ text: `Streaming: ${networks.map(network => network.name).join(', ')}`, className: 'details-network' }); // Corretto il nome della classe
  const seasonsEl = Text({ text: `Seasons: ${number_of_seasons}`, className: 'details-season' });
  const episodesEl = Text({ text: `Episodes: ${number_of_episodes}`, className: 'details-episodes' });
  const descriptionEl = Text({ text: overview, className: 'details-description' });

  // Aggiunge le informazioni sulle stagioni
  seasons.forEach(season => {
    const seasonEl = createEl('div');
    seasonEl.className = 'season-details';

    const seasonImageEl = Image({ src: `https://image.tmdb.org/t/p/w500${season.poster_path}`, className: 'season-image', alt: `Season ${season.season_number} Poster` });
    const seasonTitleEl = Title({ text: `Season: ${season.name}`, className: 'season-title' }); // Corretto il nome della classe
    const episodeCountEl = Text({ text: `Episodes: ${season.episode_count}`, className: 'season-episode' });

    seasonEl.append(seasonImageEl, seasonTitleEl, episodeCountEl);
    detailsSeasons.append(seasonEl);
  });

  // Appende tutto nell'ordine corretto
  detailsGeneral.append(titleEl, genreEl, voteEl, languageEl, networkEl, seasonsEl, episodesEl, descriptionEl, detailsCast);
  detailsSeries.append(imageEl, detailsGeneral);
  detailsList.append(detailsSeries, detailsSeasons);
  return detailsList;
};

// API: Chiamata per avere i dettagli sulla serie tv
fetch(`${BASE_URL}/${TYPE}/${TV_ID}?api_key=${API_TOKEN}`) // Effettua una richiesta API
  .then((response) => response.json()) // Converte la risposta in formato JSON
  .then((data) => {
    createTvDetails(data);
    getCastDetails(); // Ottieni e inserisci i dettagli del cast
  })
  .catch((error) => {
    console.error('Error:', error);
  });