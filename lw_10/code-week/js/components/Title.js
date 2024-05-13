import { createEl } from '../helpers.js'

const Title = ({ className = 'title', text }) => {
  const el = createEl('h3')
  el.className = className
  el.textContent = text
  return el
}

export default Title
