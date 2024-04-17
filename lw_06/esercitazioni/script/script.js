//## 1. Calcolo della Media

/* function mediaOp(arrNums) {
    if (arrNums.length === 0) {
        return 0; 
    }

    let somma = 0;

    for (let i = 0; i < arrNums.length; i++) {
        somma += arrNums[i];
    }


    const media = somma / arrNums.length;

    return media;
}

const arrNums = [10, 15, 23, 45, 80];
let mediaResult = mediaOp(arrNums);
console.log('La media è:', mediaResult); */

//## 2. Generatore di Immagine

function ImgGenerator(src, alt) {   
    const imgEl = document.createElement('img');
    imgEl.src = src;
    imgEl.alt = alt;
    return imgEl;
}

    const containerEl = document.getElementById('container');
    const newImage = ImgGenerator('https://picsum.photos/200/300');
    containerEl.appendChild(newImage);

    //# 3. Cambio colore su Click

    const titleEl = document.querySelector('#container h1'); 
    const colorsEl = ['red', 'yellow', 'green', 'blue', 'black']; 
    let colorIndex = 0; 

    titleEl.addEventListener('click', function() {
        titleEl.style.color = colorsEl[colorIndex]; 
        colorIndex += 1;
        if (colorIndex >= colorsEl.length) {
            colorIndex = 0;
        }
    });

    //## Avanzato 1 - Generatore di Card Meteo

    function createWeatherCard(cityName, temperature, weatherCondition, container) {
        const cardEl = document.createElement('div');
        cardEl.className = 'weather-card';
        const cityEl = document.createElement('h3');
        cityEl.textContent = cityName;
        cardEl.appendChild(cityEl);
        const tempEl = document.createElement('p');
        tempEl.textContent = `Temperatura: ${temperature}°C`;
        cardEl.appendChild(tempEl);
        const conditionEl = document.createElement('p');
        conditionEl.textContent = `Condizioni meteo: ${weatherCondition}`;
        cardEl.appendChild(conditionEl);
        container.appendChild(cardEl);
    }
 
    createWeatherCard('Los Santos', 23, 'Nuvoloso ☁️', containerEl);
    createWeatherCard('Cayo Perico', 41, 'Soleggiato ☀️', containerEl);