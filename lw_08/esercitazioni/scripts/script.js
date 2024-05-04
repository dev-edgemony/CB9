// Creo un container (div)
function Container() {
    const div = document.createElement('div');
    div.className = 'container';
    return div;
}

// Creo un titolo (h1)
function TitleGen(text) {
    const h1 = document.createElement('h1');
    h1.textContent = text;
    h1.className = 'title';
    return h1;
}

// Creo componente img
function ImgGen(src) {
    const image = document.createElement('img');
    image.src = src;
    image.className = 'img';
    return image;
}

// Creo un paragrafo (p)
function ParagraphGen(text) {
    const desc = document.createElement('p');
    desc.textContent = text;
    desc.className = 'paragraph';
    return desc;
}

// Mostra un messaggio direttamente sulla pagina
function showMessage(message, isSuccess = true) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = 'message';
    messageDiv.classList.add(isSuccess ? 'success' : 'error');
    document.body.appendChild(messageDiv);
}

// Funzione per creare un nuovo Prodotto
function NewProduct(title, imageSrc, description) {
    // Creo un container esterno per il prodotto
    const productContainer = Container();

    // Creo gli elementi del prodotto
    const titleElement = TitleGen(title);
    const imgElement = ImgGen(imageSrc);
    const paragraphElement = ParagraphGen(description);

    // Aggiungiamo gli elementi al container del prodotto
    productContainer.appendChild(titleElement);
    productContainer.appendChild(imgElement);
    productContainer.appendChild(paragraphElement);

    // Prodotto completo
    return productContainer;
}

// Carico i dati dell'API e creo i prodotti sulla pagina
function loadAllProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => {
            // Controllo la risposta
            if (!response.ok) {
                throw new Error('Il Network non risponde: ' + response.statusText);
            }
            return response.json();
        })
        .then(products => {
            // Messaggio di successo
            showMessage(`Successo: Caricati ${products.length} prodotti.`);

            // forEach per ogni nuovo prodotto
            products.forEach(product => {
                const productElement = NewProduct(product.title, product.image, product.description);
                document.body.appendChild(productElement);
            });
        })
        .catch(error => {
            // In caso di errore
            showMessage(`Errore: ${error.message}`, false);
        });
}

// Avvio della funzione per caricare i dati
loadAllProducts();
