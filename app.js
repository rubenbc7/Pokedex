const pokemonName = document.getElementById('pokemon-name');
pokemonName.innerText = 'El nombre de mi pokémon es: ';

const pokemonHeight = document.getElementById('pokemon-height');
pokemonHeight.innerText = 'La altura de mi pokémon es: ';

const pokemonApiUrl = 'https://pokeapi.co/api/v2/';

let getPokemonData = async()=>{
    const response = await fetch(`${pokemonApiUrl}pokemon/6/`);
    const pokemon = await response.json();
    console.log(pokemon);
    const {name , height} = pokemon;
    pokemonName.innerText = name;
    pokemonHeight.innerText = height;
}
getPokemonData();