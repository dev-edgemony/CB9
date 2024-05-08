import { createEl } from '../helpers.js'
import Image from './Image.js'
import Text from './Text.js'
import ProductName from './ProductName.js'

const Product = ({ category = '', description, image, name, price } = {}) => {
  const el = createEl('div')
  el.className = 'product'

  const nameEl = ProductName({ name: name })
  const imageEl = Image({ className: 'product--image', src: image })
  const priceEl = Text({ className: 'product--price', text: price })
  const descEl = Text({ className: 'product--description', text: description })

  el.append(imageEl, nameEl, descEl, priceEl)
  return el
}

export default Product
