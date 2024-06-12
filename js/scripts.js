let pokemonList = [
    {name: 'Bulbasaur', height: 70, canEvolve: true, types: ['grass', 'poison']},
    {name: 'Ivysaur', height: 100, canEvolve: true, types: ['grass', 'poison']},
    {name: 'Venusaur', height: 200, canEvolve: false, types: ['grass', 'poison']},
    {name: 'Farfetch\'d', height: 80, canEvolve: false, types: ['flying', 'normal']},
    {name: 'Lapras', height: 250, canEvolve: false, types: ['ice', 'water']}
]

for (let i=0 ; i < pokemonList.length ; i++) {
    document.write(pokemonList[i].name + "(Height: " + pokemonList[i].height + ")")
}