let pokemonRepository = (function () {

    let pokemons = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=24';

    function add(pokemon) {
        pokemons.push(pokemon)
    }

    function getAll() {
        return pokemons;
    }
    
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            showModal(
            pokemon.name, 
            'Height: ' + pokemon.height*10 + 'cm',
            pokemon.imageUrl
           );
        });
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-info', 'btn', 'btn-primary', 'col-12');
        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target','#detailsModal');
        button.classList.add('list-group-item');
        listItem.classList.add('col-lg-4', 'col-sm-6')

        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        listItem.addEventListener('click', function(event) {
        pokemonRepository.showDetails(pokemon)
        });
        
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        })
    }
    function showModal(title, text, img) {
        let modalTitle = document.querySelector('.modal-title');
        let modalBody = document.querySelector('.modal-body');
        let modalText = document.querySelector('#pokemon-height');
        let modalImage = document.querySelector('#pokemon-image');

        modalTitle.innerText = title;
        modalText.innerText = text;
        modalImage.src = img;
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon)
    });
});
// A loop that writes the pokemon's name and height
