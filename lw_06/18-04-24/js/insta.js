const postElGen = (data) => {
  const wrapperEl = document.createElement("li");
  const authorEl = document.createElement("h3");
  const imgEl = document.createElement("img");
  const likesEl = document.createElement("p");

  wrapperEl.className = "post";
  authorEl.textContent = data.authorName;
  imgEl.src = data.photo;
  imgEl.alt = data.authorName;
  likesEl.textContent = `Mi piace: ${data.likes}`;

  wrapperEl.append(authorEl, imgEl, likesEl);
  return wrapperEl;
};

const postListElGen = () => {
  const wrapperEl = document.createElement("ul");

  wrapperEl.className = "list";

  return wrapperEl;
};

const navbarElGen = () => {
  const wrapperEl = document.createElement("navbar");
  const logoEl = document.createElement("img");
  const searchEl = document.createElement("input");

  wrapperEl.className = "navbar";
  logoEl.className = "logo";
  searchEl.className = "search";
  logoEl.src =
    "https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png";
  logoEl.alt = "logo";
  searchEl.placeholder = "Search";

  wrapperEl.append(logoEl, searchEl);
  return wrapperEl;
};

const instagramPosts = [
  {
    id: 1,
    authorName: "Frodo Baggins",
    photo: "https://picsum.photos/800/800?1",
    likes: 1243,
  },
  {
    id: 2,
    authorName: "Gandalf the Grey",
    photo: "https://picsum.photos/800/800?2",
    likes: 2654,
  },
  {
    id: 3,
    authorName: "Aragorn",
    photo: "https://picsum.photos/800/800?3",
    likes: 3221,
  },
  {
    id: 4,
    authorName: "Legolas",
    photo: "https://picsum.photos/800/800?4",
    likes: 2890,
  },
  {
    id: 5,
    authorName: "Gimli",
    photo: "https://picsum.photos/800/800?5",
    likes: 1854,
  },
  {
    id: 6,
    authorName: "Samwise Gamgee",
    photo: "https://picsum.photos/800/800?6",
    likes: 1745,
  },
  {
    id: 7,
    authorName: "Gollum",
    photo: "https://picsum.photos/800/800?7",
    likes: 1432,
  },
  {
    id: 8,
    authorName: "Saruman",
    photo: "https://picsum.photos/800/800?8",
    likes: 960,
  },
  {
    id: 9,
    authorName: "Galadriel",
    photo: "https://picsum.photos/800/800?9",
    likes: 2531,
  },
  {
    id: 10,
    authorName: "Boromir",
    photo: "https://picsum.photos/800/800?10",
    likes: 1922,
  },
  {
    id: 11,
    authorName: "Elrond",
    photo: "https://picsum.photos/800/800?11",
    likes: 2210,
  },
  {
    id: 12,
    authorName: "Arwen",
    photo: "https://picsum.photos/800/800?12",
    likes: 2399,
  },
  {
    id: 13,
    authorName: "Théoden",
    photo: "https://picsum.photos/800/800?13",
    likes: 1405,
  },
  {
    id: 14,
    authorName: "Éowyn",
    photo: "https://picsum.photos/800/800?14",
    likes: 1573,
  },
  {
    id: 15,
    authorName: "Faramir",
    photo: "https://picsum.photos/800/800?15",
    likes: 1762,
  },
];

const rootEl = document.querySelector(".root");
const listEl = postListElGen();
const navbarEl = navbarElGen();

// for (let i = 0; i < instagramPosts.length; i++) {
//   const post = instagramPosts[i];

//   listEl.append(postElGen(post));
// }

instagramPosts.map((post) => listEl.append(postElGen(post)));

rootEl.append(navbarEl, listEl);
