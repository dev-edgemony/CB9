export const createEl = (type, props = {}) => {
    const element = document.createElement(type);
    Object.keys(props).forEach(key => {
        if (key === 'textContent') {
            element.textContent = props[key];
        } else {
            element[key] = props[key];
        }
    });
    return element;
};


/* A differenza di export const createEl = (...args) => document.createElement(...args); la funzione sopra fa passare oggetti props che contengono valori
corrispondenti alle proprietà sull'elemento (tipo 'textContent', 'className' etc) e applica automaticamente le proprietà all'elemento creato*/