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
const imgGen = (image) => {
    const image = document.createElement("img");
  
    image.className = "img-js";
    image.src = foto.jpg;
    image.alt = "Immagine creata con Javascript";
  
    return image;
};

body.append(imgGen);
