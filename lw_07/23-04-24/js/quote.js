const getMonth = () => {
  const actualMonth = new Date().getUTCMonth();

  switch (actualMonth) {
    case 0:
      return "Gennaio";
    case 1:
      return "Febbraio";
    case 2:
      return "Marzo";
    case 3:
      return "Aprile";
    case 4:
      return "Maggio";
    case 5:
      return "Giugno";
    case 6:
      return "Luglio";
    case 7:
      return "Agosto";
    case 8:
      return "Settembre";
    case 9:
      return "Ottobre";
    case 10:
      return "Novembre";
    default:
      return "Dicembre";
  }
};

const dateGenEl = () => {
  const dateEl = document.createElement("h3");

  dateEl.className = "date";
  dateEl.textContent = new Date().getUTCDate() + " " + getMonth();

  return dateEl;
};

const quoteGenEl = (quoteData) => {
  const quoteEL = document.createElement("div");
  const contentEl = document.createElement("h1");
  const authorEl = document.createElement("p");

  quoteEL.className = "quote";
  contentEl.textContent = quoteData.content;
  authorEl.textContent = quoteData.author;

  quoteEL.append(contentEl, authorEl);
  return quoteEL;
};

const rootEl = document.querySelector("#root");

rootEl.append(dateGenEl());

// Async
fetch("https://api.quotable.io/quotes/random")
  .then((res) => res.json())
  .then((data) => {
    const quoteEl = quoteGenEl(data[0]);

    rootEl.append(quoteEl);
  });
