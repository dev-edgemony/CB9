import { find } from './helpers.js'
import NavigationLink from './components/NavigationLink.js'

fetch('https://fakestoreapi.com/products/categories')
  .then((res) => res.json())
  .then((categories) => {
    // Per ogni categoria, crea un componente di navigazione con link
    const navLinks = categories.map((cat, idx) =>
      NavigationLink({ href: `#${idx}`, text: cat })
    )
    const NAV_EL = find('.navigation')
    NAV_EL.append(...navLinks)
  })
