import { createEl } from '../helpers.js'

const Image = ({ src }) => {
  const el = createEl('img')

  el.className = 'product--image'
  el.src = src
  return el
}

const Price = ({ price }) => {
  const el = createEl('div')

  el.className = 'product--price'
  el.textContent = price
  return el
}

const Title = ({ link, text }) => {
  const el = createEl('h1')
  const anchorEl = createEl('a')

  el.className = 'product--title'
  anchorEl.className = 'product--link'
  anchorEl.href = link
  anchorEl.textContent = text
  el.append(anchorEl)
  return el
}

export const Product = ({ link, name, price, src }) => {
  const el = createEl('article')
  const imgEl = Image({ src })
  const priceEl = Price({ price })
  const titleEl = Title({ link, text: name })

  el.className = 'product'
  el.append(imgEl, titleEl, priceEl)
  return el
}
