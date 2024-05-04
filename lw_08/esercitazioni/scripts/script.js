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
    const p = document.createElement('p');
    p.textContent = text;
    p.className = 'paragraph';
    return p;
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
function Prodotto(title, imageSrc, description) {
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

// Carico i dati dell'API e creo gli elementi sulla pagina
function loadProductData() {
    fetch('https://fakestoreapi.com/products/1')
        .then(response => {
            // Se c'è una risposta
            if (!response.ok) {
                throw new Error('Il Network non risponde: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Messaggio di successo
            showMessage(`Successo: Il prodotto è ${data.title}.`);

            // Creo il componente Prodotto usando i dati ricevuti
            const product = Prodotto(data.title, data.image, data.description);

            // Aggiunto il prodotto al documento
            document.body.appendChild(product);
        })
        .catch(error => {
            // Se non c'è: messaggio di errore
            showMessage(`Errore: ${error.message}`, false);
        });
}

// Avvio della funzione per caricare i dati
loadProductData();
