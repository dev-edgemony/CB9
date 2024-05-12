import { createEl } from '../helpers.js';
import { fetchMovies, createMovieList } from '../App.js';


export const setupSearchBar = () => {
    //contenitore barra di ricerca
    const container = createEl('div', { className: 'search-container' });
    const input = createEl('input', { type: 'text', placeholder: 'Cerca film...' });
    const button = createEl('button', { textContent: 'Cerca' });

    const performSearch = async (query) => {
        const trimmedQuery = query.trim(); //senza spazi
        if (!trimmedQuery) {
            console.log('Per favore, inserisci il nome di un film.');
            return;
        }
    
        console.log(`Stai cercando: ${trimmedQuery}`); 
        try {
            const data = await fetchMovies(`search/movie?query=${encodeURIComponent(trimmedQuery)}`);
            if (data && data.results.length > 0) {
                createMovieList(data.results);
            } else {
                console.log('Non ci sono risultati.');
            }
        } catch (error) {
            console.error('Errore:', error);
        }
    };

    button.addEventListener('click', () => performSearch(input.value));
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch(input.value);
        }
    });

    container.appendChild(input);
    container.appendChild(button);

    return container;
};
