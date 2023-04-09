// URLs
let API_URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
//Variables
let pokemonsList = document.getElementById("pokemonSelect");
let pokemonInfo = document.getElementById("pokemon-detail");
let searchInput = document.getElementById('search-input');


fetch(API_URL)
  .then((response) => response.json())
  .then((Pokemons) => {
    for (let i = 0; i < Pokemons.results.length; i++) {
      pokemonsList.insertAdjacentHTML(
        "afterbegin",
        `<option value="${i + 1}">${Pokemons.results[i].name}</option>`);
    }
  })
pokemonsList.addEventListener('change', function () {
  const pokemonId = pokemonSelect.value;
  if (pokemonId === '') {
    pokemonInfo.innerHTML = '';
    return;
  }

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  fetchPokemon(apiUrl);
});

searchInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    const pokemonName = searchInput.value.toLowerCase().trim();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    fetchPokemon(apiUrl);
  }
});

function fetchPokemon(apiUrl) {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const pokemonName = data.name;
      const pokemonImage = data.sprites.front_default;
      const pokemonHeight = data.height;
      const pokemonWeight = data.weight;
      const pokemonAbilities = data.abilities.map(ability => ability.ability.name);
      const pokemonStats = data.stats.map(stat => {
        return { name: stat.stat.name, base_stat: stat.base_stat };
      });

      const html = `
          <h2 class="infoTitle">Información del Pokemon</h2>
          <img class="pokeImg" src="${pokemonImage}">
          <h3>${pokemonName}</h3>
          <p><span>Altura:</span> ${pokemonHeight} dm</p>
          <p><span>Peso:</span> ${pokemonWeight} hg</p>
          <p><span>Habilidades:</span> ${pokemonAbilities.join(', ')}</p>
          <h4><span>Estadísticas</span></h4>
          <ul>
            ${pokemonStats.map(stat => `<li><span>${stat.name}</span>: ${stat.base_stat}</li>`).join('')}
          </ul>
        `;

      pokemonInfo.innerHTML = html;
    })
    .catch(error => {
      console.error(error);
      pokemonInfo.innerHTML = '<p>No se encontró el Pokemon</p>';
    });
}