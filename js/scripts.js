let pokemonRepository = (function () {

    let pokemons = [
        {name: 'Bulbasaur', height: 70, canEvolve: true, types: ['grass', 'poison']},
        {name: 'Ivysaur', height: 100, canEvolve: true, types: ['grass', 'poison']},
        {name: 'Venusaur', height: 200, canEvolve: false, types: ['grass', 'poison']},
        {name: 'Farfetch\'d', height: 80, canEvolve: false, types: ['flying', 'normal']},
        {name: 'Lapras', height: 250, canEvolve: false, types: ['ice', 'water']}
    ]

    function add(pokemon) {
        pokemons.push(pokemon)
    }

    function getAll() {
        return pokemons;
    }

    return {
        add: add,
        getAll: getAll,
    };
})();

// A loop that writes the pokemon's name and height
pokemonRepository.getAll().forEach(function(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('get-pokemon-info');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
});