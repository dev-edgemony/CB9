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
