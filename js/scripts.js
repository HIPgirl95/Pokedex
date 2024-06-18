let pokemonList = [
    {name: 'Bulbasaur', height: 70, canEvolve: true, types: ['grass', 'poison']},
    {name: 'Ivysaur', height: 100, canEvolve: true, types: ['grass', 'poison']},
    {name: 'Venusaur', height: 200, canEvolve: false, types: ['grass', 'poison']},
    {name: 'Farfetch\'d', height: 80, canEvolve: false, types: ['flying', 'normal']},
    {name: 'Lapras', height: 250, canEvolve: false, types: ['ice', 'water']}
]

// A loop that writes the pokemon's name and height
pokemonList.forEach(function(pokemon) {
    document.write("<p>" + pokemon.name + " (Height: " + pokemon.height + "cm)<br>");
    // Custom comments for varying pokemon heights
    if (pokemon.height >= 250) {
        document.write(" Wow, that's big!" + "</p>")
    } else if (pokemon.height < 80) {
        document.write(" Aww! This pokemon is so tiny!" + "</p>")
    } else {
        document.write("</p>")
    }
});