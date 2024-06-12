let pokemonList = [
    {name: 'Bulbasaur', height: 70, canEvolve: true, types: ['grass', 'poison']},
    {name: 'Ivysaur', height: 100, canEvolve: true, types: ['grass', 'poison']},
    {name: 'Venusaur', height: 200, canEvolve: false, types: ['grass', 'poison']},
    {name: 'Farfetch\'d', height: 80, canEvolve: false, types: ['flying', 'normal']},
    {name: 'Lapras', height: 250, canEvolve: false, types: ['ice', 'water']}
]

// A loop that writes the pokemon's name and height
for (let i=0 ; i < pokemonList.length ; i++) {
    document.write(pokemonList[i].name + "(Height: " + pokemonList[i].height + ")")
    // Custom comments for varying pokemon heights
    if (pokemonList[i].height > 150) {
        document.write(" Wow! This pokemon is huge!" + "<br>")
    } else if (pokemonList[i].height <= 80) {
        document.write(" Aww! This pokemon is so tiny!" + "<br>")
    } else {
        document.write(" This pokemon is a pretty average size." + "<br>")
    }
}