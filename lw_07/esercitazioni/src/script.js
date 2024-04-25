// https://api.unsplash.com/search/photos/?client_id=8wKit5s2VjUlIsi0WtYMPbJft8GeEiek6nORNm07quY&query=cat

const genImageCardEl = (imageData) => {
    const imageEl = document.createElement("img")

    imageEl.className = "image-card";
    imageEl.src = imageData.urls.small;
    imageEl.alt = imageData.alt_description;

    return imageEl
}

const genImageListEl = (listName) => {
    const wrapperEl = document
}

const BASE_URL = "https://api.unsplash.com/";
const API_TOKEN = "8wKit5s2VjUlIsi0WtYMPbJft8GeEiek6nORNm07quY";
const SEARCH_QUERY = 'dog';

fetch(`${BASE_URL}/search/photos/?client_id=${API_TOKEN}&query=${SEARCH_QUERY}`)
    .then((res) => res.json())
    .then((data) => console.log(data.results[0].urls.small));