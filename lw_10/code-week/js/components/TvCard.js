import { createEl } from '../helpers.js'
import Image from './Image.js'
import Text from './Text.js'
import getGenresByIds from './Genres.js'

// Funzione per creare un elemento card basato sui dati della serie TV
const TvCard = ({ image, title, id, description, genreIds } = {}) => {
    const el = createEl('div');
    el.className = 'card';
  
    const imageEl = Image({ src: 'https://image.tmdb.org/t/p/original/' + image, className: 'card-image' });
    const titleEl = Text({ text: title, className: 'card-title' });
    const idEl = Text({ text: id.toString(), className: 'card-id' });
    const genreEl = Text({ text: '', className: 'card-genre' }); // Placeholder per i generi
    const descEl = Text({ text: description, className: 'card-description' });
  
    getGenresByIds(genreIds).then((genreNames) => {
      genreEl.textContent = genreNames.join(', '); // Imposta i nomi dei generi una volta disponibili
    });
  
    el.append(imageEl, titleEl, idEl, genreEl, descEl);
    return el;
  };
  
export default TvCard