// Esercizio 1
function calculateAverage(arr) {
    let sum = 0;
    for (let numArr of arr) {
        sum += numArr;
    }
    let average = sum / arr.length;
    return parseInt(average);
}

const arr = [1, 5, 10, 12, 21, 13, 55, 200, 17];
console.log("La media dell'array è di: " + calculateAverage(arr));


// Esercizio 2

const es2El = document.querySelector(".es2");
const imgGen = (src, alt) => {
    const imgEl = document.createElement("img");
    imgEl.className = "img";
    imgEl.src = src;
    imgEl.alt = alt;
    
    return imgEl;
};

const image1 = imgGen("https://picsum.photos/200/300?1", "Immagine 1 creata con Javascript");
const image2 = imgGen("https://picsum.photos/200/300?2", "Immagine 2 creata con Javascript");

es2El.append(image1, image2);