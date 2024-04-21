//---------ESERCIZIO 1---Calcolo della media------------//

//const numsArr = [10, 25, 65, 2, 87, 19, 78, 54, 10, 6];
//let numberSum = 0;

//for(let i = 0;i < numsArr.length;i++) {
//    numberSum += numsArr[i];
//};

//const arithmeticAvg = numberSum / numsArr.length;
//console.log("La media è: " + arithmeticAvg);

//---------ESERCIZIO 2-------Generatore di Immagine --------//

//const rootEl = document.querySelector("#root");
//const imgEl = document.createElement("img");

//imgEl.className = "img";
//imgEl.src = "https://fastly.picsum.photos/id/511/200/300.jpg?hmac=3pjxomHmNfWivxE47hYNY3VdnJTTJtcRJmQ3ihqJcBA";
//imgEl.alt = "immagine";

//rootEl.append(imgEl);

//----------Esercizio 3 Cambio colore su click-------//

//const rootEl = document.querySelector("#root");
//const buttonEl = document.createElement("button");

// buttonEl.className = "button";

// buttonEl.addEventListener("click", () => {
//    buttonEl.style.backgroundColor = "red";

//    return buttonEl;
//});

//rootEl.append(buttonEl);


//------------------Esercizio 4 Funzione Generatrice di Card Meteo------//

const cityWeatherCard = (city, temperature, weather) => {
    const cityCardEl = document.createElement("div");
    const cityEl = document.createElement("h3");
    const temperatureEl = document.createElement("p");
    const weatherEl = document.createElement("p");
    
    cityEl.textContent = city;
    temperatureEl.textContent = temperature;
    weatherEl.textContent = weather;

    cityCardEl.append(cityEl, temperatureEl, weatherEl);
     
    return cityCardEl;
};

const rootEl = document.querySelector("#root");

const city1 = cityWeatherCard(
    "Milano",
    "12°",
    "Rain",
);
const city2 = cityWeatherCard(
    "Palermo",
    "22°",
    "Sun",
);
const city3 = cityWeatherCard(
    "Roma",
    "16°",
    "Cloudy",
);
 

rootEl.append(city1, city2, city3);
