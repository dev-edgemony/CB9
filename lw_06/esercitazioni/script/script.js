//## 1. Calcolo della Media

function mediaOp(arrNums) {
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
console.log('La media è:', mediaResult);