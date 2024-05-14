import { createEl } from '../helpers.js'

const Image = ({ alt = 'This is an image', className = 'image', src } = {}) => {
  const el = createEl('img')
  el.alt = alt
  el.src = src
  el.className = className
  return el
}

export default Image
