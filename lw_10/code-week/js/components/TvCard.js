// IMPORT: importa i file js esterni che vengono richiamati in questo
import { createEl } from './Helpers.js';
import Image from './Image.js';
import Title from './Title.js';
import Text from './Text.js';
import getGenresByIds from './Genres.js';


// TV CARD: Definisce una funzione createTvCard che crea e restituisce un elemento card per una serie TV.
const createTvCard = (tv) => {
    const { poster_path, name, id, genre_ids, overview } = tv;
  
    // Crea il li "card" che conterrà gli elementi successivi
    const card = createEl('li');
    card.className = 'card';
  
    // Crea elementi per l'immagine, il titolo, l'ID, il genere e la descrizione della serie TV
    const imageEl = Image({ src: `https://image.tmdb.org/t/p/original/${poster_path}`, className: 'card-image' });
    const titleEl = Title({ text: name, className: 'card-title' });
    const idEl = Text({ text: id.toString(), className: 'card-id' });
    const genreEl = Text({ text: '', className: 'card-genre' });
    const descEl = Text({ text: overview, className: 'card-description' });
  
    // Ottiene i nomi dei generi corrispondenti agli ID specificati e li aggiunge all'elemento del genere
    getGenresByIds(genre_ids).then((genreNames) => {
      genreEl.textContent = genreNames.join(', '); // Imposta il testo dell'elemento del genere con i nomi dei generi separati da virgola
    });
  
    // Aggiunge gli elementi alla card e la restituisce
    card.append(imageEl, titleEl, idEl, genreEl, descEl);
    return card;
};
  

export default createTvCard;