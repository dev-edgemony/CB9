import { createEl } from '../helpers.js'

const ProductName = ({ className = 'product--name', name } = {}) => {
  const el = createEl('h1')
  el.className = className
  el.textContent = name
  return el
}

export default ProductName
