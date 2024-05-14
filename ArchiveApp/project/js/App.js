import userEl from "./components/Users.js";
import { createEl, querySe, log } from "./helpers.js";

const rootEl = querySe(".root");

// Logics e Api
//API: https://jsonplaceholder.typicode.com/users
const BASE_URL = "https://jsonplaceholder.typicode.com";
const urlSpec = "users";

fetch(`${BASE_URL}/${urlSpec}`)
  .then((res) => res.json())
  .then((data) => {
    log(data);
    const sortedData = data.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    data.map((user) => {
      const userCard = userEl(user);

      rootEl.append(userCard);
    });
  });
