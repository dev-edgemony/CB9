import { createEl, find, findAll, log } from './helpers.js'
import NavigationLink from './components/NavigationLink.js'
import Product from './components/Product.js'

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

const createProductElement = (p) => {
  const productParams = {
    // category
    description: p.description,
    image: p.image,
    // ****
    name: p.title,
    // ****
    price: p.price,
  }
  const listEl = createEl('li')
  const product = Product(productParams)

  listEl.append(product)
  return listEl
}

const filterProductsByCategory = (productsArray, category) => {
  if (!category) {
    return productsArray
  }
  return productsArray.filter((product) => product.category === category)
}

const appendProducts = (productsArray) => {
  const productsList = productsArray.map(createProductElement)
  const PRODUCTS_LIST_EL = find('.products--list')
  PRODUCTS_LIST_EL.append(...productsList)
}

const removeAllProducts = () => {
  const PRODUCTS_LIST_EL = find('.products--list')
  PRODUCTS_LIST_EL.innerHTML = ''
}

const fetchProducts = (category) => {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((products) => {
      return filterProductsByCategory(products, category)
    })
    .then(appendProducts)
}

const NAV_EL = find('.navigation')
NAV_EL.addEventListener('click', (event) => {
  const textContent = event.target.textContent
  removeAllProducts()
  fetchProducts(textContent)
})

fetchProducts()
