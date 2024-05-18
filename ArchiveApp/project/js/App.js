import userEl from "./components/Users.js";
import { createEl, querySe, log } from "./helpers.js";

let items;
const rootEl = querySe(".root");
const buttonEl = createEl("button");
buttonEl.className = "button";
buttonEl.textContent = " + ";
buttonEl.addEventListener("click", function () {
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const urlSpec = "users";
  fetch(`${BASE_URL}/${urlSpec}`)
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
      items = data;
      let newItem = userEl("11");
      newItem.id = "11";
      log(newItem);
      items.push(newItem);
      items.map((user) => {
        const userCard = userEl(user);

        rootEl.append(userCard);
      });
    });
});
rootEl.append(buttonEl);
// Logics e Api
//API: https://jsonplaceholder.typicode.com/users
const BASE_URL = "https://jsonplaceholder.typicode.com";
const urlSpec = "users";

fetch(`${BASE_URL}/${urlSpec}`)
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
    items = data;
    items.map((user) => {
      const userCard = userEl(user);

      rootEl.append(userCard);
    });
  });
