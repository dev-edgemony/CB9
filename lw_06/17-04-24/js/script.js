// const cE = (element) => document.createElement(element)
// const qS = (element) => document.querySelector(element)

const heroElGen = (titleContent, subTitleContent) => {
  const heroEl = document.createElement("div");
  const titleEl = document.createElement("h1");
  const subTitleEl = document.createElement("h3");

  heroEl.className = "hero";
  titleEl.className = "title";
  subTitleEl.className = "subtitle";
  titleEl.textContent = titleContent;
  subTitleEl.textContent = subTitleContent;
  heroEl.append(titleEl, subTitleEl);

  return heroEl;
};

const listElGen = () => {
  const listEl = document.createElement("ul");

  listEl.className = "todo-list";

  return listEl;
};

const listItemElGen = (itemContent) => {
  const listItemEl = document.createElement("li");

  listItemEl.className = "todo-item";
  listItemEl.textContent = itemContent;

  return listItemEl;
};

const addItemElGen = () => {
  const formEl = document.createElement("form");
  const inputTextEl = document.createElement("input");
  const inputSubmitEl = document.createElement("input");

  formEl.className = "add-item-form";
  inputTextEl.type = "text";
  inputSubmitEl.type = "submit";
  inputSubmitEl.value = "AGGIUNGI";
  formEl.append(inputTextEl, inputSubmitEl);

  return formEl;
};

const listTodosData = [];

const rootEl = document.querySelector("#root");
const heroEl = heroElGen(
  "TODO LIST APP",
  "La migliore applicazione per prendere nota delle tue importanti todos."
);
const addItemEl = addItemElGen();
const listEl = listElGen();

rootEl.append(heroEl, addItemEl, listEl);
listTodosData.map((todo) => listEl.append(listItemElGen(todo)));

addItemEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputElValue = event.target[0];

  listTodosData.push(inputElValue.value);
  listEl.textContent = "";
  // listEl.remove()
  listTodosData.forEach((todo) => listEl.append(listItemElGen(todo)));
  inputElValue.value = "";
  // rootEl.append(listEl);
});
