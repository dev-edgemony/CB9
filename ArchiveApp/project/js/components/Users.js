import { createEl } from "../helpers.js";

const userLink = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  const el = createEl("h1");

  el.className = "user--name";
  el.textContent = name;
  el.addEventListener("click", () => {
    openPopup(id, name, username, email, address, phone, website, company);
  });
  return el;
};

const userEl = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
} = {}) => {
  const usersWrapper = createEl("article");
  usersWrapper.classname = "user";

  usersWrapper.append(
    userLink({
      id,
      name,
      username,
      email,
      address,
      phone,
      website,
      company,
    })
  );
  return usersWrapper;
};

function openPopup(
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company
) {
  var contentPopup = "<h1>" + name + "</h1>";
  contentPopup += "<p>" + phone + "</p>";
  contentPopup += "<p>" + username + "</p>";
  contentPopup += "<p>" + address.street + " " + address.city + "</p>";
  contentPopup += "<p>" + email + "</p>";
  contentPopup += "<p>" + website + "</p>";
  contentPopup += "<p>" + company.name + " " + company.bs + "</p>";

  var popup = window.open("", "", "width=400,height=300");

  popup.document.body.innerHTML = contentPopup;
}

export default userEl;
