# Come Creare un Progetto React con Vite

Vite è un moderno build tool che offre un'alternativa leggera e performante a
Create React App per la creazione di applicazioni React. Ecco una guida
passo-passo su come iniziare un progetto React con Vite.

### 1. Prerequisiti

Assicurati di avere Node.js e npm installati sul tuo computer. Puoi scaricarli
da [Nodejs.org](https://nodejs.org/).

### 2. Creazione del Progetto

Apri il terminale e segui questi passaggi:

1. **Crea il progetto con Vite:**

   ```bash
   npm create vite@latest edge-commerce -- --template react
   ```

   Questo comando crea un nuovo progetto Vite utilizzando il template per React.

2. **Naviga nella directory del progetto:**

   ```bash
   cd edge-commerce
   ```

3. **Installa le dipendenze:**

   ```bash
   npm install
   ```

4. **Avvia il server di sviluppo:**

   ```bash
   npm run dev
   ```

   Dopo aver eseguito questo comando, Vite avvierà un server di sviluppo e ti
   fornirà un URL (tipicamente `http://localhost:5173`) dove potrai vedere la
   tua applicazione in esecuzione.

### 3. Struttura del Progetto

Dopo aver creato il progetto, vedrai una struttura di cartelle simile a questa:

```
my-react-app/
  ├── node_modules/
  ├── public/
  └── src/
      ├── App.css
      ├── App.jsx
      ├── index.css
      ├── main.jsx
  ├── index.html
  ├── package.json
  ├── vite.config.js
```

### 4. Creazione di un Componente

Vediamo come creare un nuovo componente React all'interno del progetto Vite.

1. **Crea un file per il componente:**

   Crea un nuovo file chiamato `HelloWorld.jsx` nella cartella `src/`.

   ```jsx
   // src/HelloWorld.jsx

   import React from 'react'

   const HelloWorld = () => {
     return <h1>Ciao, mondo!</h1>
   }

   export default HelloWorld
   ```

2. **Usa il componente nel progetto:**

   Apri `App.jsx` e importa e usa il componente `HelloWorld`:

   ```jsx
   // src/App.jsx

   import React from 'react'
   import './App.css'
   import HelloWorld from './HelloWorld' // Importa il componente HelloWorld

   function App() {
     return (
       <div className="App">
         <header className="App-header">
           <HelloWorld /> {/* Usa il componente HelloWorld */}
         </header>
       </div>
     )
   }

   export default App
   ```

3. **Avvia il server di sviluppo:**

   Se il server di sviluppo non è già in esecuzione, avvialo di nuovo con:

   ```bash
   npm run dev
   ```

   Ora, quando apri il browser e vai a `http://localhost:5173`, dovresti vedere
   il messaggio "Ciao, mondo!" visualizzato nella pagina.

### Conclusione

Hai appena creato un progetto React utilizzando Vite e aggiunto un semplice
componente. Vite offre una configurazione molto più rapida e un'ottima
esperienza di sviluppo rispetto agli strumenti di build tradizionali come Create
React App, specialmente per progetti di dimensioni medio-piccole.

Buon divertimento con React e Vite!

### Link per approfondire

1. Guida per l'uso di [Vite](https://vitejs.dev/guide/) (in inglese)
1. Virtual DOM nella
   [documentazione React](https://legacy.reactjs.org/docs/faq-internals.html)
   (in inglese)
