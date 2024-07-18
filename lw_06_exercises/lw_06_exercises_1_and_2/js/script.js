// ## 1. Calcolo della Media

// Creare una funzione che calcoli la media di un array di numeri.

// seleziono una stringa
// creo un contatore che inizia da 0
// iterazione sulla stringa
//     - prendo ogni singolo carattere
//     - sommo i numeri
//     - mi credo la media di tutti i numeri

const allNumb = [1, 4, 7, 12, 35, 54, 67, 92,15, 28, 120];

const getAverageNumb = (numArr) => {
    let totalSum = 0;
    for (let i= 0; i < numArr.length; i++) {
        totalSum += numArr[i];
    }
    const average = totalSum / numArr.length;
    return average;
}

const averageNumb = getAverageNumb(allNumb);
console.log(averageNumb);



// ## 2. Generatore di Immagine

// const imgDivEl = document.querySelector(".img-div");
// const imgItemEl = document.createElement("img");
//     imgItemEl.src = "./assets/tolopino.png";
//     imgItemEl.alt = "topolino image";
//     imgItemEl.className = "robot";
// imgDivEl.append(imgItemEl);

const robotImgGen = (src, alt) => {
    const imgItemEl = document.createElement("img");

    imgItemEl.src = src;
    imgItemEl.alt = alt;
    imgItemEl.className = "robot";

    return imgItemEl;
};

const imgDivEl = document.querySelector(".img-div");

// const imgItemElPippo= robotImgGen("assets/pippo.png", "pippo img");
imgDivEl.append(robotImgGen("https://robohash.org/katarina?set=set4", "katarina img"));
imgDivEl.append(robotImgGen("https://robohash.org/antonello?set=set4", "antonello img"));
imgDivEl.append(robotImgGen("https://robohash.org/jules?set=set4", "jules img"));
imgDivEl.append(robotImgGen("https://robohash.org/pluto?set=set4", "pluto img"));
imgDivEl.append(robotImgGen("https://robohash.org/pasqualino?set=set4", "pasqualino img"));

// Scrivere una funzione capace di generare delle immagini. La funzione deve restituire un nuovo elemento `<img />` 
//e deve importare gli attributi `src` e `alt` correttamente a questo elemento.