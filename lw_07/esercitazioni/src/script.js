// https://api.unsplash.com/search/photos/?client_id=8wKit5s2VjUlIsi0WtYMPbJft8GeEiek6nORNm07quY&query=cat

const genImageCardEl = (imageData) => {
    const imageEl = document.createElement("img")

    imageEl.className = "card-image";
    imageEl.src = imageData.urls.small;
    imageEl.alt = imageData.alt_description;

    return imageEl
}

const genImageListEl = (listName) => {
    const wrapperEl = document.createElement("div");
    const titleEl = document.createElement("h4");
    
    wrapperEl.className = "card-list";
    titleEl.textContent = listName;

    wrapperEl.append(titleEl);
    return wrapperEl;
}

const BASE_URL = "https://api.unsplash.com/";
const API_TOKEN = "8wKit5s2VjUlIsi0WtYMPbJft8GeEiek6nORNm07quY";
const SEARCH_QUERY = 'baby';
const rootEl = document.querySelector(".root");

fetch(`${BASE_URL}/search/photos/?client_id=${API_TOKEN}&query=${SEARCH_QUERY}`)
    .then((res) => res.json())
    .then((data) => {
        const listData = data.results;
        const imageListEl = genImageListEl("The photos");
        
        listData.map(photo => {
            const imgCardEl = genImageCardEl(photo);

            imageListEl.append(imgCardEl)
        })
        
        rootEl.append(imageListEl);
    });