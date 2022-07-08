/* 
fetch(url)
fetch("asdlfkashdfsalkdjhh;l")
.then(response => response.json())
.then(response => console.log(response))
*/
let container = document.getElementById("container");

const getCharacters = async () => {
  let response = await axios("https://rickandmortyapi.com/api/character");
  const characters = response.data.results;

  const filtro = prompt("Ingrese el status del personaje");
  const filtrados = characters.filter(character => character.status === filtro);

  filtrados.forEach(character => {
    const item = document.createElement("div");

    item.innerHTML = `
      <h1>${character.name}</h1>
      <p>${character.status}</p>
      <p>${character.gender}</p>
      <img src="${character.image}">
      <hr/>
    `;

    container.append(item);
  });
}

getCharacters();

/* const getCharacter = async () => {
  let response = await axios("https://rickandmortyapi.com/api/character/?name=rick&status=alive");
  const character = response.data.results;
  console.log(character);
}

getCharacter(); */