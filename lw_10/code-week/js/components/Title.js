import { createEl } from './Helpers.js'

const Title = ({ className = 'title', text }) => {
  const el = createEl('h3')
  el.className = className
  el.textContent = text
  return el
}

export default Title
