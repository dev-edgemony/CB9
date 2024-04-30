// Rick e Morty Endpoint: https://rickandmortyapi.com/api

// Functions
const modalElGen = (charData) => {
  const wrapper = document.createElement('section');
  const img = document.createElement('img');

  const infos = document.createElement('ul');
  const status = document.createElement('li');
  const gender = document.createElement('li');
  const species = document.createElement('li');

  const name = document.createElement('h3');
  const description = document.createElement('p');
  const button = document.createElement('button');

  const listEl = document.querySelector('.characters');

  wrapper.className = 'modal';
  img.src = charData.image;
  img.alt = charData.name;
  infos.className = 'modal__list';
  status.textContent = charData.status;
  status.id = 'status';
  gender.textContent = charData.gender;
  gender.id = 'gender';
  species.textContent = charData.species;
  species.id = 'species';
  name.textContent = charData.name;
  description.textContent =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi aut quibusdam commodi earum amet suscipit dicta hic ducimus laudantium quam.';
  button.textContent = 'Torna alla Home';

  button.addEventListener('click', () => location.reload());

  infos.addEventListener('click', (e) => {
    const category = e.target.id;

    listEl.textContent = '';
    // Nel caso clicchiamo sulla categoria `Male`
    // https://rickandmortyapi.com/api/characters?gender=male
    fetch(`${BASE_URL}/${urlSpec}?${category}=${charData[category]}`)
      .then((res) => res.json())
      .then((data) => {
        data.results.map((character) => {
          const characterEl = characterElGen(character);

          charactersEl.append(characterEl);
        });
      });
  });

  infos.append(status, gender, species);
  wrapper.append(img, infos, name, description, button);

  return wrapper;
};

const characterElGen = (charData) => {
  const wrapper = document.createElement('li');
  const img = document.createElement('img');
  const name = document.createElement('h3');
  const listEl = document.querySelector('.characters');

  wrapper.className = 'characters--item';
  img.src = charData.image;
  img.alt = charData.name;
  name.textContent = charData.name;

  wrapper.append(img, name);

  wrapper.addEventListener('click', () => {
    const modalEl = modalElGen(charData);

    listEl.textContent = '';
    listEl.append(modalEl);
  });
  return wrapper;
};

// Logics
const BASE_URL = 'https://rickandmortyapi.com/api';
const urlSpec = 'character';

// Elements
const charactersEl = document.querySelector('.characters');

// ASYNC
fetch(`${BASE_URL}/${urlSpec}`)
  .then((res) => res.json())
  .then((data) => {
    data.results.map((character) => {
      const characterEl = characterElGen(character);

      charactersEl.append(characterEl);
    });
  });
