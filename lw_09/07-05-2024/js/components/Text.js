import { createEl } from '../helpers.js'

const Text = ({ className = 'text', text }) => {
  const el = createEl('p')
  el.className = className
  el.textContent = text
  return el
}

export default Text
