const cE = (name) => document.createElement(name);
const find = (name) => document.querySelector(name);

const navGen = () => {
  const navEl = cE("nav");
  navEl.className = "navbar";

  return navEl;
};

const ulWrapperGen = () => {
  const ulWrapper = cE("div");
  const ulTitleEl = cE("h4");
  const ulEl = cE("ul");

  const liNatureEl = cE("li");
  const liCityEl = cE("li");
  const liTechEl = cE("li");

  ulWrapper.className = "nav--wrapper";
  ulEl.className = "navbar--list";
  ulTitleEl.className = "navbar--title";
  liNatureEl.className = "nature";
  liTechEl.className = "technology";
  liCityEl.className = "city";

  ulTitleEl.textContent = "Or try out our lists";
  liTechEl.textContent = "Technology";
  liCityEl.textContent = "City";
  liNatureEl.textContent = "Nature";

  ulEl.append(liNatureEl, liCityEl, liTechEl);
  ulWrapper.append(ulTitleEl, ulEl);
  return ulWrapper;
};

const searchGen = () => {
  const searchEl = cE("div");
  const searchTitle = cE("h3");
  const inputTextEl = cE("input");
  const buttonEl = cE("button");
  const navImageEl = cE("img");
  searchEl.className = "search--wrapper";
  searchTitle.className = "search--title";
  buttonEl.className = "button";
  inputTextEl.className = "search--field";
  navImageEl.className = "nav--image";
  searchTitle.textContent = "What are you searching for?";
  inputTextEl.placeholder = "search";
  buttonEl.textContent = "Go!";
  navImageEl.src = "./assets/imagellery.svg";
  navImageEl.alt = "imagellery logo";

  searchEl.append(navImageEl, searchTitle, inputTextEl, buttonEl);
  return searchEl;
};

const cardContainerGen = () => {
  const containerEl = cE("div");
  containerEl.className = "container";

  return containerEl;
};

const cardGen = (data) => {
  const cardwrapperEl = cE("div");
  const cardEl = cE("img");
  cardwrapperEl.className = "card--wrapper";
  cardEl.className = "card";
  cardEl.src = data.urls.full;
  cardEl.alt = data.alt_description;

  cardwrapperEl.append(cardEl);

  cardwrapperEl.addEventListener("click", () => {
    removeModal();
    document.body.appendChild(modalGen(data));
  });

  return cardwrapperEl;
};

const homePageGen = () => {
  const wrapperEl = cE("div");
  const imageEl = cE("img");
  const buttonEl = cE("button");
  const mainPhraseEl = cE("h1");
  const secondPhraseEl = cE("p");

  wrapperEl.className = "home--wrapper";
  imageEl.className = "home--image";
  buttonEl.className = "home--button";
  mainPhraseEl.className = "home--main";
  secondPhraseEl.className = "home--second";

  imageEl.src = "./assets/imagellery.svg";
  imageEl.alt = "imagellery logo";
  buttonEl.textContent = "Get Started";
  mainPhraseEl.textContent = "Capturing the Beauty of the World";
  secondPhraseEl.textContent = "Search for beautiful images for every day mood";

  wrapperEl.append(imageEl, mainPhraseEl, secondPhraseEl, buttonEl);

  buttonEl.addEventListener("click", () => {
    removeHome();
  });

  return wrapperEl;
};

const generalFetchRetrieve = () => {
  const BASE_URL = "https://api.unsplash.com/photos/";
  const ACCESS_KEY = "_l4d4gKtiqYe8b4QxnJCG445ktgvNGASVVK4IbQwTcY";

  fetch(`${BASE_URL}?client_id=${ACCESS_KEY}&per_page=20`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((data) => {
        cardContainerEl.append(cardGen(data));
      });
      rootEl.append(cardContainerEl);
    })
    .catch((error) => {
      const errorEl = errorGen();
      rootEl.append(errorEl);
    });
};

const filteredFetchRetrive = (inputValue) => {
  const BASE_URL = "https://api.unsplash.com/search/photos/";
  const ACCESS_KEY = "_l4d4gKtiqYe8b4QxnJCG445ktgvNGASVVK4IbQwTcY";
  const QUERY = inputValue;
  const PER_PAGE = "&per_page=20";

  fetch(`${BASE_URL}?client_id=${ACCESS_KEY}&query=${QUERY}${PER_PAGE}`)
    .then((res) => res.json())
    .then((data) => {
      const listData = data.results;
      listData.forEach((data) => {
        cardContainerEl.append(cardGen(data));
      });
      rootEl.append(cardContainerEl);
    })
    .catch((error) => {
      const errorEl = errorGen();
      rootEl.append(errorEl);
    });
};

function button() {
  const inputEl = find("input");
  const buttonEl = find("button");
  buttonEl.addEventListener("click", () => {
    if (cardContainerEl) {
      cardContainerEl.innerHTML = "";
      const inputValue = inputEl.value;
      filteredFetchRetrive(inputValue);
      rootEl.append(cardContainerEl);
      inputEl.value = "";
    }
  });
  inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      buttonEl.click();
    }
  });
}

function city() {
  const cityEl = find(".city");
  cityEl.addEventListener("click", () => {
    if (cardContainerEl) {
      cardContainerEl.innerHTML = "";
      const inputValue = "city";
      filteredFetchRetrive(inputValue);
      rootEl.append(cardContainerEl);
      inputEl.value = "";
    }
  });
}

function nature() {
  const natureEl = find(".nature");
  natureEl.addEventListener("click", () => {
    if (cardContainerEl) {
      cardContainerEl.innerHTML = "";
      const inputValue = "nature";
      filteredFetchRetrive(inputValue);
      rootEl.append(cardContainerEl);
      inputEl.value = "";
    }
  });
}

function technology() {
  const technologyEl = find(".technology");
  technologyEl.addEventListener("click", () => {
    if (cardContainerEl) {
      cardContainerEl.innerHTML = "";
      const inputValue = "technology";
      filteredFetchRetrive(inputValue);
      rootEl.append(cardContainerEl);
      inputEl.value = "";
    }
  });
}

const modalGen = (data) => {
  const modalWrapEl = cE("div");
  const modalImgEl = cE("img");
  const modalDescriptionEl = cE("p");
  const modalAuthorEl = cE("p");
  const modalButtonEl = cE("button");

  modalWrapEl.className = "modal--wrapper";
  modalImgEl.className = "modal--image";
  modalDescriptionEl.className = "modal--description";
  modalAuthorEl.className = "modal--author";
  modalButtonEl.className = "modal--button";

  modalImgEl.src = data.urls.full;
  modalImgEl.alt = data.alt_description;

  modalDescriptionEl.textContent = `Title: "${data.alt_description}"`;
  modalAuthorEl.textContent = `Instagram: ${data.user.instagram_username}`;
  modalButtonEl.textContent = "Close";

  modalWrapEl.append(
    modalImgEl,
    modalAuthorEl,
    modalDescriptionEl,
    modalButtonEl
  );

  modalButtonEl.addEventListener("click", () => removeModal());

  return modalWrapEl;
};

const errorGen = () => {
  const errorEl = cE("div");
  errorEl.textContent = "Page not found";

  return errorEl;
};

// remove functions

function removeHome() {
  const existingHome = find(".home--wrapper");
  if (existingHome) {
    existingHome.remove();
    navEl.append(searchEl, ulWrapper);
    rootEl.append(navEl, cardContainerEl);
    generalFetchRetrieve();
    button();
    city();
    nature();
    technology();
  }
}

function removeModal() {
  const existingModal = find(".modal--wrapper");
  if (existingModal) {
    existingModal.remove();
  }
}

// Consts

const homePageEl = homePageGen();
const rootEl = find("#root");
const navEl = navGen();
const ulWrapper = ulWrapperGen();
const searchEl = searchGen();
const cardContainerEl = cardContainerGen();

rootEl.append(homePageEl);
