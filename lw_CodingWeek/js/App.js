import { createEl } from "./utility.js";
import { find } from "./utility.js";

const genInputAuthorEl = () => {
  const authorEl = createEl("div");
  const inputEl = createEl("input");
  const buttonEl = createEl("button");

  authorEl.className = "inputAuthor";
  inputEl.className = "inputAuthorSrc";
  inputEl.placeholder = "Author";
  buttonEl.className = "btnAuthorSrc";
  buttonEl.textContent = "Cerca";

  authorEl.append(inputEl, buttonEl);

  return authorEl;
};

const genInputTagEl = () => {
  const tagEl = createEl("div");
  const inputEl = createEl("input");
  const buttonEl = createEl("button");

  tagEl.className = "inputTag";
  inputEl.className = "inputTagSrc";
  inputEl.placeholder = "Category";
  buttonEl.className = "btnTagSrc";
  buttonEl.textContent = "Cerca";

  tagEl.append(inputEl, buttonEl);

  return tagEl;
};

const srcAuthorEl = genInputAuthorEl();
const srcTagEl = genInputTagEl();
const navEl = find(".quote--src");

navEl.append(srcAuthorEl, srcTagEl);

const inputSrcAuthor = find(".inputAuthorSrc");
const buttonSrcAuthor = find(".btnAuthorSrc");
const inputSrcTag = find(".inputTagSrc");
const buttonSrcTag = find(".btnTagSrc");

const genQuoteEl = (quoteResults) => {
  const quoteEl = createEl("ul");
  const authorEl = createEl("li");
  const contentEl = createEl("p");
  const categoryEl = createEl("li");

  quoteEl.className = "quote--info";
  authorEl.textContent = quoteResults.author;
  contentEl.textContent = quoteResults.content;
  categoryEl.textContent = quoteResults.tags;

  quoteEl.append(contentEl, authorEl, categoryEl);
  return quoteEl;
};

const BASE_URL = "https://api.quotable.io/quotes?";
const listEl = find(".quote--list");

fetch("https://api.quotable.io/quotes/random?limit=15")
  .then((res) => res.json())
  .then((results) => {
    results.map((quotes) => {
      const quoteEl = genQuoteEl(quotes);

      listEl.append(quoteEl);
    });
  });

buttonSrcAuthor.addEventListener("click", () => {
  listEl.textContent = "";

  fetch(`${BASE_URL}author=${inputSrcAuthor.value}`)
    .then((res) => res.json())
    .then((data) => {
      const listAuthor = data.results;

      listAuthor.map((content, author, tags) => {
        const quoteEl = genQuoteEl(content, author, tags);
        listEl.append(quoteEl);
      });
    });
});

buttonSrcTag.addEventListener("click", () => {
  listEl.textContent = "";

  fetch(`${BASE_URL}tags=${inputSrcTag.value}`)
    .then((res) => res.json())
    .then((data) => {
      const listTags = data.results;

      listTags.map((content, author, tags) => {
        const quoteEl = genQuoteEl(content, author, tags);
        listEl.append(quoteEl);
      });
    });
});
