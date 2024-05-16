// IMPORT: importa i file js esterni che vengono richiamati in questo
import { createEl, find, getIdFromUrl } from './Helpers.js';
import Image from './Image.js';
import Title from './Title.js';
import Text from './Text.js';


// API: legenda per la composizione dell'url dell'API
const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = '54ba07b69851b27c129da3059e6156a7';
const TYPE = 'tv';
const TV_ID = getIdFromUrl();


// SELECT FROM DOM: individua gli elementi dal DOM
const detailsList = find('.details-list');
const detailsSeries = find('.details-series');
const detailsGeneral = find('.details-general');
const detailsSeasons = find('.details-season-box');
const detailsCast = find('.details-cast-box');

const seasonEl = createEl('div');
seasonEl.className = 'season-details';


// PAGINA DETTAGLIO: funzione che restituisce i dettagli della serie tv
const createTvDetails = ({ poster_path, name, genres, vote_average, languages, networks, number_of_seasons, number_of_episodes, overview, seasons } = {}) => {
  
  // Crea gli elementi base della pagina dettaglio
  const imageEl = Image({ src: `https://image.tmdb.org/t/p/w500${poster_path}`, className: 'details-image', alt: 'TV Show Poster' });
  const titleEl = Title({ text: name, className: 'details-title' });
  const genreEl = Text({ text: `Genres: ${genres.map(genre => genre.name).join(', ')}`, className: 'details-genre' });
  const voteEl = Text({ text: `Rating: ${Math.round(vote_average * 10) / 10}/10`, className: 'details-rating' });
  const languageEl = Text({ text: `Languages: ${languages.join(', ')}`, className: 'details-language' });
  const networkEl = Text({ text: `Streaming: ${networks.map(network => network.name).join(', ')}`, className: 'details-network' });
  const seasonsEl = Text({ text: `Seasons: ${number_of_seasons}`, className: 'details-season' });
  const episodesEl = Text({ text: `Episodes: ${number_of_episodes}`, className: 'details-episodes' });
  const descriptionEl = Text({ text: overview, className: 'details-description' });

  // Aggiunge le informazioni sulle stagioni e le appende
  seasons.forEach(season => {
    const seasonImageEl = Image({ src: `https://image.tmdb.org/t/p/w500${season.poster_path}`, className: 'season-image', alt: `Season ${season.season_number} Poster` });
    const seasonTitleEl = Title({ text: `Season: ${season.name}`, className: 'season-title' });
    const episodeCountEl = Text({ text: `Episodes: ${season.episode_count}`, className: 'season-episode' });
    seasonEl.append(seasonImageEl, seasonTitleEl, episodeCountEl);
    detailsSeasons.append(seasonEl);
  });

  // Aggiunge il cast e lo appende
  fetch(`${BASE_URL}/${TYPE}/${TV_ID}/credits?api_key=${API_TOKEN}`)
    .then((response) => response.json())
    .then((data) => {
      const castEl = Text({ text: `Cast: ${data.cast.map((member) => member.name).join(', ')}`, className: 'details-cast' });
      detailsCast.append(castEl);
    })
    .catch((error) => {
      console.error('Error fetching cast details:', error);
    });

  // Appende tutto nell'ordine corretto
  detailsGeneral.append(titleEl, genreEl, voteEl, languageEl, networkEl, seasonsEl, episodesEl, descriptionEl, detailsCast);
  detailsSeries.append(imageEl, detailsGeneral);
  detailsList.append(detailsSeries, detailsSeasons);
  return detailsList;
};


export default createTvDetails;