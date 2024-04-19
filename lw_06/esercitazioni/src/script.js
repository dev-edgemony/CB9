// Esercizio 1
const averageEl = document.querySelector(".average");
averageEl.addEventListener("click", (event) => {

const calculateAverage = (arr) => {
    let sum = 0;
    for (let numArr of arr) {
        sum += numArr;
    }
    let average = sum / arr.length;
    return parseInt(average);
};

const arr = [1, 5, 10, 12, 21, 13, 55, 200, 17];
alert("La media dell'array è di: " + calculateAverage(arr));

});

// Esercizio 2
const imgWrapperEl = document.querySelector(".img-wrapper");
const imgGen = (src, alt) => {

    const imgEl = document.createElement("img");
    imgEl.className = "img";
    imgEl.src = src;
    imgEl.alt = alt;
    
    return imgEl;

};

const image1 = imgGen("https://picsum.photos/200/300?1", "Immagine 1 creata con Javascript");
const image2 = imgGen("https://picsum.photos/200/300?2", "Immagine 2 creata con Javascript");
const image3 = imgGen("https://picsum.photos/200/300?3", "Immagine 3 creata con Javascript");

imgWrapperEl.append(image1, image2, image3);

// Esercizio 3
const colorChange = document.querySelector(".color-change");

colorChange.addEventListener("click", (event) => {

    colorChange.style.backgroundColor = '#e43939';

});

// Esercizio 4
const cardWrapperEl = document.querySelector(".card-wrapper");
const cardGen = (data) => {

    const cardEl = document.createElement("li");
    const cardName = document.createElement("h3");
    const cardDay = document.createElement("h4");
    const cardIcon = document.createElement("img");
    const cardTemp = document.createElement("p");
    const cardWeather = document.createElement("p");

    cardEl.className = "card";
    cardName.textContent = data.name;
    cardDay.textContent = data.day;
    cardIcon.src = data.icon;
    cardTemp.textContent = data.temperature;
    cardWeather.textContent = data.weather;
    
    cardEl.append(cardName, cardDay, cardIcon, cardTemp, cardWeather);
    return cardEl;
};

const cardListGen = () => {
    const cardEl = document.createElement("ul");
    cardEl.className = "list";
  
    return cardEl;
};

const weatherCard = [
    {
    name: "Ferrara",
    day: "19/04/2024 12:00",
    icon: "media/sunny.svg",
    temperature: "20°C",
    weather: "Soleggiato"
    },
    {
    name: "Ravenna",
    day: "19/04/2024 12:00",
    icon: "media/cloudy.svg",
    temperature: "19°C",
    weather: "Nuvoloso"
    },
    {
    name: "Bologna",
    day: "19/04/2024 12:00",
    icon: "media/partially-cloud.svg",
    temperature: "22°C",
    weather: "Soleggiato con nuvole sparse"
    },
    {
    name: "Forlì",
    day: "19/04/2024 12:00",
    icon: "media/rainy.svg",
    temperature: "21°C",
    weather: "Piovoso"
    },
    {
    name: "Cesena",
    day: "19/04/2024 12:00",
    icon: "media/windy.svg",
    temperature: "18°C",
    weather: "Vento forte"
    },
    // {
    // name: "Rimini",
    // day: "19/04/2024 12:00",
    // icon: "media/rainy.svg",
    // temperature: "18°C",
    // weather: "Piovoso"
    // }
]

const cardList = cardListGen();
weatherCard.map((card) => cardList.append(cardGen(card)));

cardWrapperEl.append(cardList);