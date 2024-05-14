import { createEl } from '../helpers.js';
import { fetchMovies, createMovieList } from '../App.js';

export const setupSearchBar = () => {
    // container searchbar
    const container = createEl('div', { className: 'search-container' });
    // placeholder dell'input per la ricerca
    const input = createEl('input', { type: 'text', placeholder: 'Inserisci il titolo del film...' });
    // bottone ricerca
    const button = createEl('button', { textContent: 'Cerca' });

    // funzione async per la ricerca
    const performSearch = async (query) => {
        // se la query è vuota:
        if (!query) {
            console.log('Per favore, inserisci il titolo di un film.');
            return;
        }

        // rimozione degli spazi 
        const trimmedQuery = query.trim();
        if (!trimmedQuery) {
            console.log('Inserisci qualcosa!');
            return;
        }

        // console.log del titolo ricercato
        console.log(`Stai cercando: ${trimmedQuery}`);
        try {
            // endpoint dell'API
            const endpoint = `search/movie?query=${encodeURIComponent(trimmedQuery)}&language=en-US`;
            const data = await fetchMovies(endpoint);
            // risposte dell'API
            console.log('Risposta API:', data);
            // se ci sono risultati, visualizza:
            if (data && data.results && data.results.length > 0) {
                createMovieList(data.results);
            } else {
                // se non ci sono:
                console.log('Non ci sono risultati.');
            }
        } catch (error) {
            // errori:
            console.error('Errore nella ricerca del film:', error);
        }
    };

    // evento per il click sul bottone di ricerca
    button.addEventListener('click', () => performSearch(input.value));
    // evento per il click su Enter
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            performSearch(input.value);
        }
    });

    // append input e bottone della search bar
    container.appendChild(input);
    container.appendChild(button);

    // return contenitore
    return container;
};
