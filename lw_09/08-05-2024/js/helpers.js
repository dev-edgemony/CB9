export const createEl = (el) => document.createElement(el)

export const find = (selector) => document.querySelector(selector)

export const findAll = (selector) => document.querySelectorAll(selector)

export const log = (data) => console.log(data)

export const nul = () => {
  return undefined
}
