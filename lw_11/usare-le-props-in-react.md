# Usare le props in React

Le **props** (abbreviazione di "properties") sono uno dei concetti fondamentali
in React e sono utilizzate per passare dati **da un componente genitore a un
componente figlio**. Le `props` permettono ai componenti di essere
riutilizzabili e dinamici, consentendo il passaggio di informazioni in un modo
che rende le applicazioni React modulari di più semplice manutenzione.

### Cos'è una Prop?

Una `prop` è un **oggetto che contiene valori** passati al componente figlio dal
suo esterno. Questi valori possono essere di qualsiasi tipo: stringhe, numeri,
array, oggetti, funzioni, componenti React, ecc.

Le `props` sono **immutabili**, il che significa che un componente figlio non
dovrebbe mai modificarle.

### Come Usare le Props

Ecco un esempio per capire come funzionano le `props` in React.

#### 1. Creazione del Componente Figlio

Creiamo un semplice componente che utilizza le `props` per visualizzare un
messaggio di benvenuto.

```jsx
// src/Greeting.jsx

import React from 'react'

// Il componente accetta un parametro 'props'
const Greeting = (props) => {
  return <h1>Ciao, {props.name}!</h1>
}

export default Greeting
```

In questo esempio,

- Il componente `Greeting` è una funzione che accetta un parametro `props`.
- `props.name` è utilizzato per visualizzare il nome passato al componente.

Un altro modo, più comune, di accedere alle `props` è tramite il
[destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

```jsx
// src/Greeting.jsx

import React from 'react'

// Il componente accetta un parametro 'props', "destrutturato"
const Greeting = ({ name }) => {
  return <h1>Ciao, {name}!</h1>
}

export default Greeting
```

#### 2. Passaggio delle Props dal Componente Genitore

Ora utilizziamo il componente `Greeting` in un componente genitore, passandogli
una `prop`.

```jsx
// src/App.jsx

import React from 'react'
import './App.css'
import Greeting from './Greeting' // Importa il componente Greeting

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Passa la prop 'name' al componente Greeting */}
        <Greeting name="Mario" />
      </header>
    </div>
  )
}

export default App
```

In questo esempio:

- Il componente `App` utilizza il componente `Greeting`.
- Viene passata una prop `name` al componente `Greeting` con il valore `"Mario`.

Sul browser, dovresti vedere il messaggio "Ciao, Mario!".

### Props di Default

Puoi anche definire valori di default per le props nel caso in cui non vengano
passate.

```jsx
// src/Greeting.jsx

import React from 'react'
import PropTypes from 'prop-types'

const Greeting = ({ name = 'Guest' }) => {
  return <h1>Ciao, {name}!</h1>
}

export default Greeting
```

In questo esempio:

- la `prop` `name` definisce "Guest" come valore di default per `name`.

### Props come Funzioni

Le props possono anche essere funzioni, il che è utile per gestire eventi o
eseguire logica nel componente figlio.

1. **Componente figlio che Esegue una funziona passata come prop:**

   ```jsx
   // src/Button.jsx

   import React from 'react'

   const Button = ({ handleClick }) => {
     return <button onClick={handleClick}>Click here!</button>
   }

   export default Button
   ```

2. **Componente genitore che passa una funzione al figlio:**

   ```jsx
   // src/App.jsx

   import React from 'react'
   import './App.css'
   import Button from './Button' // Importa il componente Button

   function App() {
     const handleClick = () => {
       console.log('Clicked!')
     }

     return (
       <div className="App">
         <header className="App-header">
           {/* Passa la funzione 'handleClick' come prop */}
           <Button handleClick={handleClick} />{' '}
         </header>
       </div>
     )
   }

   export default App
   ```

In questo esempio:

- Il componente `Button` accetta una prop `handleClick`, che è una funzione.
- Quando il bottone viene cliccato, la funzione `handleClick` viene eseguita,
  mostrando un messaggio in `cosnsole`.

### Conclusione

Le `props` in React sono un concetto potente che permette ai componenti di
essere riutilizzabili e dinamici. Capire come passare e utilizzare le `props` è
fondamentale per creare applicazioni React modulari e ben strutturate.
