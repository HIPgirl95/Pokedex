let pokemonRepository = (function () {
  let pokemons = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=36";

  function showDetails(pokemon) {
    loadDetails(pokemon).then(() => {
      showModal(
        pokemon.name,
        "Height: " + pokemon.height * 10 + "cm",
        pokemon.imageUrl
      );
    });
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemon-info", "btn", "btn-primary", "col-12");
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#detailsModal");
    button.classList.add("list-group-item");
    listItem.classList.add("col-lg-4", "col-sm-6");

    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    listItem.addEventListener("click", function (event) {
      pokemonRepository.showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        json.results.forEach((pok) => {
          let pokemon = {
            name: pok.name,
            detailsUrl: pok.url,
          };
          pokemons.push(pokemon);
        });
        return pokemons;
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  }

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then((response) => response.json())
      .then((pokemonDetails) => {
        pokemon.imageUrl = pokemonDetails.sprites.front_default;
        pokemon.height = pokemonDetails.height;
        pokemon.types = pokemonDetails.types;
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  }
  function showModal(title, text, img) {
    let modalTitle = document.querySelector(".modal-title");
    let modalText = document.querySelector("#pokemon-height");
    let modalImage = document.querySelector("#pokemon-image");

    modalTitle.innerText = title;
    modalText.innerText = text;
    modalImage.src = img;
  }

  return {
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then((pokemons) => {
  pokemons.forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon);
  });
});
// A loop that writes the pokemon's name and height
