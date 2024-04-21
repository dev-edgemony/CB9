// # 3. Cambio colore su Click

// Utilizzare gli eventi DOM per cambiare il colore di un elemento HTML quando viene cliccato. Create il vostro elemento pure in statico via HTML.

// ## Avanzato 1 - Generatore di Card Meteo

// Scrivere una funzione JavaScript che accetta parametri quali nome della città, temperatura, e condizioni meteorologiche (sole, pioggia, nuvole, etc.), e genera una card HTML con queste informazioni.




// weather exercise 4 //

const heroElGen = (title, subtitle) => {
    const heroEl = document.createElement("div");
    const titleEl = document.createElement("h1");
    const subtitleEl = document.createElement("h2");

    heroEl.className = "hero";
    titleEl.className = "title";
    subtitleEl.className = "subtitle";
    titleEl.textContent = title;
    subtitleEl.textContent = subtitle;

    heroEl.append(titleEl,subtitleEl);
    return heroEl;
};

const formElGen = (button) => {
    const formEl = document.createElement("form");
    const inputTextEl = document.createElement("input");
    const buttonEl = document.createElement("input");

    inputTextEl.placeholder = "Type: Palermo, Milan or Bratislava";
    buttonEl.type = "submit";
    //inputTextEl.value = text;
    buttonEl.value = button;
    inputTextEl.className = "input-text";
    buttonEl.className = "button-city";

    formEl.append(inputTextEl, buttonEl);

    return formEl;
};

const cardElGen = (city, degree, src, alt) => {
    const weatherCardEl = document.createElement("div");
    const cityEl = document.createElement("h3");
    const degreeEl = document.createElement("p");
    const weatherEl = document.createElement("img");

    weatherCardEl.className = "card-item";
    cityEl.className = "city";
    degreeEl.className = "degree";
    weatherEl.className = "image";

    cityEl.textContent = city;
    degreeEl.textContent = degree;
    weatherEl.src = src;
    weatherEl.alt = alt;

    weatherCardEl.append(cityEl, degreeEl, weatherEl);

    return weatherCardEl;

};

// const citiesArr = [
//     {
//         city: "Palermo",
//         degree: "25 degrees",
//         image: "./assets/sun.svg",
//         alt: "sun"
//     },
//     {
//         city: "Milan",
//         degree: "12 degrees",
//         image: "./assets/cloudy.svg",
//         alt: "cloudy"
//     },
//     {
//         city: "Bratislava",
//         degree: "0 degrees",
//         image: "./assets/snowman.svg",
//         alt: "snowman"
//     }
// ];

const rootEl = document.querySelector("#root");
const hero = heroElGen("Your weather app", "Which city are you traveling to?");
const inputEl = formElGen("Check the weather");
rootEl.append(hero, inputEl);

inputEl.addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.target[0].value === "Palermo") {
        const cardEl = cardElGen("Palermo", "25 degrees", "./assets/sun.svg", "sun");
        rootEl.append(cardEl);
    }
    else if (event.target[0].value === "Milan") {
        const cardEl = cardElGen("Milan", "12 degrees", "./assets/cloudy.svg", "cloudy");
        rootEl.append(cardEl);
    }
    else if (event.target[0].value === "Bratislava") {
        const cardEl = cardElGen("Bratislava", "0 degrees", "./assets/snowman.svg", "snowman");
        rootEl.append(cardEl);
    }
    else {
        const noCityEl = document.createElement("p");
        noCityEl.textContent = "This is not a valid city";
        rootEl.append(noCityEl)
    }
});


// DARK MODE exercise 3 //

const darkModeEl = document.querySelector(".dark-mode");

const darkModeChange = (background, color, htmlEl, imgSrc) => {
    htmlEl.style.color = color;
    htmlEl.style.background = background;
    const img = htmlEl.querySelector("img");
    img.src = imgSrc;
};

let isDarkMode = false;

darkModeEl.addEventListener("click", () => {
    if (isDarkMode === false) {
        darkModeChange("#2570D1", "#DEE0E2", document.body, "/lw_06_exercises/lw_06_exercises_3_and_4/assets/sun.svg");
        isDarkMode = true;
    }
    else {
        darkModeChange("#DAE9FC", "#000000", document.body, "/lw_06_exercises/lw_06_exercises_3_and_4/assets/moon.svg");
        isDarkMode = false;
    }
});