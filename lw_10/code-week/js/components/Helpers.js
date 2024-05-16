export const createEl = (el) => document.createElement(el)


export const find = (selector) => document.querySelector(selector)


export const log = (data) => console.log(data)


export const nul = () => {}


export const getIdFromUrl = ()  => {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}
