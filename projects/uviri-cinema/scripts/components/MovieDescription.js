import { createEl } from '../helpers.js'; 
import { apiKey } from '../env.js';

document.addEventListener('DOMContentLoaded', function() {
    // parametri dall'URL
    const params = new URLSearchParams(window.location.search);
    // id dei film
    const movieId = params.get('id');
    if (movieId) {
        // descrizione del film tramite id
        fetchMovieDetails(movieId);
    } else {
        // senza id, errore:
        document.getElementById('movie-container').innerHTML = '<p>Error: ID del film mancante nell URL.</p>';
    }
    // pulsante home
    setupBackButton();
});

// funzione per ricevere i dettagli dei film
function fetchMovieDetails(id) {
    // URL base
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    // richiesta della fetch
    fetch(url)
        .then(function(response) {
            // conversione JSON
            return response.json();
        })
        .then(function(movie) {
            // dettagli film
            displayMovieDetails(movie);
        })
        .catch(function(error) {
            // log errori
            console.error('Errore recupero dettagli:', error);
        });
}

// funzione per mostrare i dettagli del film
function displayMovieDetails(movie) {
    // contenitore dove mostrare i dettagli del film
    const container = document.getElementById('movie-container');
    // svuota il contenitore
    container.innerHTML = '';

    //  titolo del film
    const title = createEl('h1', { textContent: movie.title });
    // immagine del film
    const image = createEl('img', { src: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`, alt: movie.title });
    // genere del film
    const genre = createEl('p', { textContent: `Genere: ${movie.genres.map(g => g.name).join(', ')}` });
    // descrizione del film
    const description = createEl('p', { textContent: movie.overview });

    // appendo tutti gli elementi al contenitore
    container.appendChild(title);
    container.appendChild(image);
    container.appendChild(genre);
    container.appendChild(description);
}

// funzione per configurare il pulsante di ritorno alla homepage
function setupBackButton() {
    // creazione del pulsante
    const backButton = document.createElement('button');
    backButton.className = "backButton";
    backButton.textContent = 'Back to Home';
    // click eventi per tornare alla home
    backButton.addEventListener('click', function() {
        window.location.href = '../index.html';
    });
    // bottone all'inizio del body
    document.body.insertBefore(backButton, document.body.firstChild);
}
