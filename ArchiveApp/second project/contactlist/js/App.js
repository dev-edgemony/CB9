import userEl from "./users.js";
import { createEl, querySe, log } from "./helpers.js";

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

const searchBarEl = () => {
  const searchEl = createEl("form");
  const searchInput = createEl("input");
  const searchBtn = createEl("button");

  searchEl.className = "search-element";
  searchInput.type = "text";
  searchInput.placeholder = "Search..";
  searchBtn.type = "submit";
  searchBtn.className = "button";
  searchBtn.value =
    " https://fontawesome.com/icons/magnifying-glass?f=classic&s=solid ";

  searchEl.append(searchInput, searchBtn);
  searchInput.addEventListener("keyup", (event) => {
    const searchUser = event.target.value.toLowerCase();
    filterContacts(searchUser);
  });
  return searchEl;
};

const listElGen = () => {
  const listEl = document.createElement("ul");

  listEl.className = "contact-list";

  return listEl;
};

const listItemElGen = (itemContent) => {
  const listItemEl = document.createElement("li");

  listItemEl.className = "contact-item";
  listItemEl.textContent = itemContent;

  return listItemEl;
};

const addItemElGen = () => {
  const formEl = document.createElement("form");
  const inputNameEl = document.createElement("input");
  const inputPhoneEl = document.createElement("input");
  const inputAddressEl = document.createElement("input");
  const inputSubmitEl = document.createElement("input");
  const checkboxActiveEl = createEl("input");

  formEl.className = "add-item-form";
  inputNameEl.type = "text";
  inputNameEl.placeholder = "Name";
  inputPhoneEl.type = "text";
  inputPhoneEl.placeholder = "Phone";
  inputAddressEl.type = "text";
  inputAddressEl.placeholder = "Address";
  inputSubmitEl.type = "submit";
  inputSubmitEl.value = "Add New Contact";
  checkboxActiveEl.type = "checkbox";
  checkboxActiveEl.id = "activeCheckbox";
  checkboxActiveEl.label = "Active";

  formEl.append(
    inputNameEl,
    inputPhoneEl,
    inputAddressEl,
    inputSubmitEl,
    checkboxActiveEl
  );

  return formEl;
};

const rootEl = document.querySelector("#root");

const heroEl = heroElGen("Contact LIST APP", "Archive your contacts");
const addItemEl = addItemElGen();
const listEl = listElGen();
const searchEl = searchBarEl();

const contactsList = (function () {
  let _contacts = [];

  function push(data) {
    _contacts.push(data);
  }

  function get() {
    return _contacts;
  }

  function sort() {
    _contacts.sort(compareContacts);
  }

  function compareContacts(a, b) {
    const aname = a.name.toLowerCase();
    const bname = b.name.toLowerCase();
    if (aname < bname) return -1;
    if (aname > bname) return 1;
    return 0;
  }

  return {
    push,
    get,
    sort,
  };
})();

//adding elements from fetch

const BASE_URL = "https://jsonplaceholder.typicode.com";
const urlSpec = "users";
fetch(`${BASE_URL}/${urlSpec}`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
      contactsList.push(user);
    });
    contactsList.sort();
    listEl.dispatchEvent(contactsUpdatedEvent);
  });

rootEl.append(heroEl, addItemEl, listEl, searchEl);
const contactsUpdatedEvent = new Event("contactsUpdated");
listEl.addEventListener("contactsUpdated", () => {
  listEl.textContent = "";
  const sortedContacts = contactsList.get();
  sortedContacts.forEach((contact) =>
    listEl.append(listItemElGen(contact.name + "  :  " + contact.phone))
  );
});

function filterContacts(searchUser, activeStatus) {
  const sortedContacts = contactsList.get();
  let filteredContacts = sortedContacts.filter((contact) => {
    const nameMatch = contact.name.toLowerCase().includes(searchUser);
    const activeMatch =
      activeStatus === null || contact.isActive === activeStatus;
    return nameMatch && activeMatch;
  });

  listEl.textContent = "";

  filteredContacts.forEach((contact) =>
    listEl.append(listItemElGen(contact.name + "  :  " + contact.phone))
  );
}

addItemEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputNameValue = event.target[0];
  const inputPhoneValue = event.target[1];
  const inputAddressValue = event.target[2];
  const newUser = {
    id: "11",
    name: inputNameValue.value,
    phone: inputPhoneValue.value,
    address: {
      street: inputAddressValue.value,
      suite: "_",
      city: "_",
      zipcode: "_",
      geo: {
        lat: "_",
        lng: "_",
      },
    },
    website: "_",
    company: {
      name: "_",
      catchPhrase: "_",
      bs: "_",
    },
  };
  contactsList.push(newUser);
  contactsList.sort();
  listEl.textContent = "";
  contactsList
    .get()
    .forEach((contact) =>
      listEl.append(listItemElGen(contact.name + "  :  " + contact.phone))
    );
  inputNameValue.value = "";
  inputPhoneValue.value = "";
  inputAddressValue.value = "";
});

listEl.addEventListener("click", (event) => {
  const contactItemName = event.target.textContent;
  for (let e of contactsList.get()) {
    if (contactItemName.startsWith(e.name)) {
      var contentPopup = "<h1>" + e.name + "</h1>";
      contentPopup += "<p>" + " Phone: " + e.phone + "</p>";
      contentPopup += "<p>" + " Username: " + e.username + "</p>";
      contentPopup +=
        "<p>" +
        " Addess: " +
        e.address.street +
        " , " +
        e.address.city +
        "</p>";
      contentPopup += "<p>" + " Mail: " + e.email + "</p>";
      contentPopup += "<p>" + " Website: " + e.website + "</p>";
      contentPopup +=
        "<p>" + " Company: " + e.company.name + " , " + e.company.bs + "</p>";

      var popup = window.open("", "", "width=400,height=300");

      popup.document.body.className = "popup";

      popup.document.body.innerHTML = contentPopup;

      return;
    }
  }
});

contactsList
  .get()
  .forEach((contact) =>
    listEl.append(listItemElGen(contact.name + "  :  " + contact.phone))
  );
