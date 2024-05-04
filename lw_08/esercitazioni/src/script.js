const rootEl = document.querySelector(".root");

const createContainer = () => {
    const container = document.createElement('div');
    container.className = 'container';
    return container;
}

const createTitle = (data) => {
    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = data.title;
    return title;
};

const createImg = (data) => {
    const image = document.createElement("img");
    image.className = "img";
    image.src = data.image;
    return image;
};

const createParagraph = (data) => {
    const paragraph = document.createElement("p");
    paragraph.className = "paragraph";
    paragraph.textContent = data.description;
    return paragraph;
};

const createProduct = (productData) => {
    const productContainer = createContainer();

    const titleContainer = createContainer();
    const title = createTitle(productData);
    titleContainer.append(title);

    const imgContainer = createContainer();
    const img = createImg(productData);
    imgContainer.append(img);

    const descriptionContainer = createContainer();
    const description = createParagraph(productData);
    descriptionContainer.append(description);
    
    productContainer.append(titleContainer, imgContainer, descriptionContainer);
    return productContainer;
};

const errorEl = () => {
    const errorText = document.createElement('h1');
    errorText.textContent = "Questo è un errore!";
    return errorText;
}

const header = createContainer();
const errorAlert = errorEl();

fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then((data) => {
        const productEl = createProduct(data);
        rootEl.append(productEl);
    })
    .catch((error) => {
        rootEl.append(errorAlert);
    });
