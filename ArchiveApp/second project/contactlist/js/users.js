import { createEl } from "./helpers.js";

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


  export function openPopup(
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
    contentPopup += "<p>" + " Phone: " + phone + "</p>";
    contentPopup += "<p>" + " Username: " + username + "</p>";
    contentPopup +=
      "<p>" + " Addess: " + address + "</p>";
    contentPopup += "<p>" + " Mail: " + email + "</p>";
    contentPopup += "<p>" + " Website: " + website + "</p>";
    contentPopup +=
      "<p>" + " Company: " + company + "</p>";
  
    var popup = window.open("", "", "width=400,height=300");
  
    popup.document.body.innerHTML = contentPopup;
  }

  export default userEl;