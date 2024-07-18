const cE = (name) => document.createElement(name);

const containerGen = (data) => {
    const containerEl = cE("div");
    
    containerEl.className = "container"

    const titleEl = cE("h1")
    titleEl.className = "title"
    titleEl.textContent = data.title

    const imgEl = cE("img")
    imgEl.className = "image"
    imgEl.src = data.image

    const paragraphEl = cE("p")
    paragraphEl.className = "paragraph"
    paragraphEl.textContent = data.description
    
    containerEl.append(titleEl, imgEl, paragraphEl)
    return containerEl
}

const errorGen = () => {
    const errorEl = cE ("div")
    errorEl.textContent = "Page not found"

    return errorEl
}

const rootEl = document.querySelector(".root");


const BASE_URL = "https://fakestoreapi.com/products/1"
fetch(`${BASE_URL}`)
.then((res) => res.json())
.then((data) => {
    const wrapperEL = containerGen(data);
    rootEl.append(wrapperEL)
})
.catch ((error) => {
    const errorEl = errorGen()
    rootEl.append(errorEl)})







// const cE = (name) => document.createElement(name);

// const containerGen = () => {
//     const containerEl = cE("div");
    
//     containerEl.className = "container"
    
//     return containerEl
// }

// const titleGen = (data) => {

//     const titleEl = cE("h1")
//     titleEl.className = "title"
//     titleEl.textContent = data.title
//     return titleEl
// }

// const imageGen = (data) => {
//     const imgEl = cE("img")
//     imgEl.className = "image"
//     imgEl.src = data.image

//     return imgEl
// }

// const paragraphGen = (data) => {
//     const paragraphEl = cE("p")
//     paragraphEl.className = "paragraph"
//     paragraphEl.textContent = data.description

//     return paragraphEl

// }


// const rootEl = document.querySelector(".root");
// const wrapperEL = containerGen();

// const BASE_URL = "https://fakestoreapi.com/products/1"
// fetch(`${BASE_URL}`)
// .then((res) => res.json())
// .then((data) => {

//     const titleEl = titleGen(data);
//     const imageEl = imageGen(data);
//     const paragraphEl = paragraphGen(data);

//     wrapperEL.append(titleEl, imageEl, paragraphEl);
//     rootEl.append(wrapperEL)

// })
