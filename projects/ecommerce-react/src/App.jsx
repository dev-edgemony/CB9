import { useState } from 'react'

import NavigationLink from './components/NavigationLink'

// Utilizzo di await a top-level
const initialCategories = await fetch(
  'https://fakestoreapi.com/products/categories'
).then((res) => res.json())

const App = () => {
  const useStatForCategoriesArray = useState(initialCategories)
  const categories = useStatForCategoriesArray[0]
  const changeCategories = useStatForCategoriesArray[1]

  return (
    <>
      <header className="site--bar">
        <h1>Edge-Commerce</h1>
        <ul className="navigation">
          {categories.map((category, index) => {
            return (
              <NavigationLink key={index} href={`#${index}`} text={category} />
            )
          })}
        </ul>
        {/* slice(2) per rimuovere i primi due elementi dell'Array */}
        <button onClick={() => changeCategories(categories.slice(2))}>
          Modifica Categories
        </button>
      </header>
    </>
  )
}

export default App
