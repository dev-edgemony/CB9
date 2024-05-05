import { NavigationLink } from './components/NavigationLink.js'
import { Product } from './components/Product.js'

const createNavigation = (routes) => {
  const NAV_EL = document.querySelector('.navigation')
  const els = routes.map((route, id) =>
    NavigationLink({ content: route, link: `#${id}` })
  )
  NAV_EL.append(...els)
  return NAV_EL
}

const createProduct = ({ id, image, price, title }) =>
  Product({ link: `#${id}`, name: title, price: `$ ${price}`, src: image })

const createProductList = (products) => products.map(createProduct)

fetch('https://fakestoreapi.com/products/')
  .then((res) => res.json())
  .then(createProductList)
  .then((result) => {
    const PROD_LIST_EL = document.querySelector('.products--list')
    PROD_LIST_EL.append(...result)
  })

fetch('https://fakestoreapi.com/products/categories')
  .then((res) => res.json())
  .then(createNavigation)
