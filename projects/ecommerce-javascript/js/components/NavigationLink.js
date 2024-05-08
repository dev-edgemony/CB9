import { createEl } from '../helpers.js'

export const NavigationLink = ({ content, link } = {}) => {
  const el = createEl('li')
  const anchorEl = createEl('a')

  el.className = 'navigation--link'
  anchorEl.href = link
  anchorEl.textContent = content
  el.appendChild(anchorEl)
  return el
}
