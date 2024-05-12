import { createEl } from '../helpers.js';
import { fetchMovies } from '../App.js';

// hero
export const setupMovieHero = () => {
    // dati della fetch per i film più popolari
    fetchMovies('tv/popular', 1)
        .then(data => {
            // se presenti:
            if (data.results.length > 0) {
                updateHeroSection(data.results[0]);
            }
        })
        .catch(error => {
            // se ci sono errori:
            console.error('Errore durante il recupero dei film popolari:', error);
        });
};

// aggiornamento hero
const updateHeroSection = (series) => {
    // elemento della sezione hero del DOM
    const heroSection = document.getElementById('hero');
    // svuotamento del contenitore della sezione hero
    heroSection.innerHTML = '';

    // url immagine di sfondo della hero direttamente ricevuto dall'API
    const bgImage = series.backdrop_path ? `https://image.tmdb.org/t/p/original${series.backdrop_path}` : '';
    // immagine di sfondo della hero impostata
    heroSection.style.backgroundImage = `url('${bgImage}')`;
    // stile centrale della hero
    heroSection.style.backgroundSize = 'cover';
    heroSection.style.backgroundPosition = 'center';

    // titolo della serie
    const title = createEl('h2', { textContent: series.name });
    // voto della serie
    const rating = createEl('p', { textContent: `Voto: ${series.vote_average}/10` });
    // descrizione della serie
    const description = createEl('p', { textContent: series.overview });

    // append degli elementi della hero
    heroSection.appendChild(title);
    heroSection.appendChild(rating);
    heroSection.appendChild(description);
};
