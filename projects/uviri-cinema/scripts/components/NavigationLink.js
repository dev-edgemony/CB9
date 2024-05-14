import { createEl } from '../helpers.js';
import { fetchMovies, createMovieList } from '../App.js';


export const NavigationLink = ({ content, genreId, children = [], isDropdown = false } = {}) => {
    //contenitore dei link
    const navItem = createEl('li', { className: 'nav-item' });
    const anchorEl = createEl('a', { href: '#' }); //senza navigazione
    //contenuto dei link con il testo
    anchorEl.textContent = content;

    // click event per il film
    anchorEl.addEventListener('click', (eventObj) => {
        eventObj.preventDefault();
        if (!isDropdown) {
            fetchMovies(`discover/movie?with_genres=${genreId}`)
                .then(data => createMovieList(data.results))
                .catch(console.error);
        }
    });

    navItem.appendChild(anchorEl);

    // arrow submenu
    if (children.length || isDropdown) {
        const arrowEl = createEl('span', { className: 'arrow', textContent: '▼' });
        anchorEl.appendChild(arrowEl);
        const subMenu = createEl('ul', { className: 'submenu', style: 'display: none;' });
        children.forEach(child => {
            const childLink = NavigationLink(child);
            subMenu.appendChild(childLink);
        });
        navItem.appendChild(subMenu);

        //submenu
        arrowEl.addEventListener('click', function(eventObj) {
            eventObj.stopPropagation();  
            const isVisible = subMenu.style.display === 'block';
            subMenu.style.display = isVisible ? 'none' : 'block';
            arrowEl.textContent = isVisible ? '▼' : '▲';
        });
    }

    return navItem;
};
