const postElGen = (author, img, likes) => {
    const wrapperEl = document.createElement('div')
    const authorEl = document.createElement('h3')
    const imgEl = document.createElement('img')
    const likesEl = document.createElement('p')

    wrapperEl.className = 'post';
    authorEl.textContent = data.authorName;
    imgEl.src = img;
    imgEl.alt = data.author;
    likesEl.textContent =`data.likes` ;

    wrapperEl.append(authorEl, imgEl, likesEl);
    return wrapperEl
};

const navbarElGen = () => {
    const wrapperEl = document.createElement("navbar");
    const logoEl = document.createElement("img");
    const searchEl = document.createElement("input");

    wrapperEl.className = "navbar";
    logoEl.className = "logo";
    searchEl.className = "search";
    logoEl.src = " ";
    logoEl.alt ="logo";
    searchEl.placeholder = "search";

    wrapperEl.append(logoEl, searchEl);
    return wrapperEl;
};

const instagramPosts = [
      

]


const rootEl = document.querySelector(".root");



const firstPost = {
    id: 1,
    photo: '...',
    authorName: 'Pippo',
    nLikes: 100
};

const instaList = [
    {
        id: 1,
        photo: '...',
        authorName: 'Pippo',
        nLikes: 100 
    },{
        id: 2,
        photo: '...',
        authorName: 'Pluto',
        nLikes: 1 
    },{
        id: 3,
        photo: '...',
        authorName: 'Paperino',
        nLikes: 10 
    },
];

//rootEl.append(postElGen(instagramPosts[0]));