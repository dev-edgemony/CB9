import { createEl } from '../helpers.js';



export const MovieCard = ({ id, title, image }) => {
    //div come container principale delle card dei film
    const card = createEl('div', { className: 'movie-card' });
    //immagine delle card per ogni film
    const img = createEl('img', {
        src: `https://image.tmdb.org/t/p/w500${image}`,          //https://developer.themoviedb.org/docs/image-basics
        alt: title,
        className: 'movie-image'
    });
    //titolo dei film
    const titleEl = createEl('h3', {
        textContent: title,
        className: 'movie-title'
    });

    // evento di click sulle card
    card.addEventListener('click', () => {
        window.location.href = `html/movie.html?id=${id}`; 
    });

    // append delle card
    card.appendChild(img);
    card.appendChild(titleEl);

    return card;
};
