import userEl from "./users.js";

const dataModule = (function () {
  let myArray = [];

  function addData(data) {
    myArray.push(data);
  }

  function getData() {
    return myArray;
  }

  return {
    addData,
    getData,
  };
})();

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

  formEl.className = "add-item-form";
  inputNameEl.type = "text";
  inputNameEl.placeholder = "Name";
  inputPhoneEl.type = "text";
  inputPhoneEl.placeholder = "Phone";
  inputAddressEl.type = "text";
  inputAddressEl.placeholder = "Address";
  inputSubmitEl.type = "submit";
  inputSubmitEl.value = "Add New Contact";
  formEl.append(inputNameEl, inputPhoneEl, inputAddressEl, inputSubmitEl);

  return formEl;
};

let listcontactsData = [];

//adding elements from fetch

const BASE_URL = "https://jsonplaceholder.typicode.com";
const urlSpec = "users";
await fetch(`${BASE_URL}/${urlSpec}`)
  .then((res) => res.json())
  .then((data) => {
    data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });

    data.map((user) => {
      dataModule.addData(user);
      listcontactsData.push(user.name + "  :  " + user.phone);
    });
  });

const rootEl = document.querySelector("#root");

const heroEl = heroElGen("Contact LIST APP", "Archive your contacts");
const addItemEl = addItemElGen();
const listEl = listElGen();

listcontactsData.map((contact) => listEl.append(listItemElGen(contact)));
rootEl.append(heroEl, addItemEl, listEl);

addItemEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputNameValue = event.target[0];
  const inputPhoneValue = event.target[1];
  const newUser = {
    id: "11",
    name: inputNameValue.value,
    phone: inputPhoneValue.value,
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };
  dataModule.addData(newUser);
  listEl.textContent = "";
  listcontactsData.push(inputNameValue.value + "  :  " + inputPhoneValue.value);
  listcontactsData.map((contact) => listEl.append(listItemElGen(contact)));
  inputNameValue.value = "";
  inputPhoneValue.value = "";
});

listEl.addEventListener("click", (event) => {
  const contactItemName = event.target.textContent;
  for (let e of dataModule.getData()) {
    console.log("@@@@" + e.name);
    if (contactItemName.startsWith(e.name)) {
      console.log("found ! " + contactItemName);

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

      console.log(popup);

      popup.document.body.innerHTML = contentPopup;

      return;
    }
  }
});
