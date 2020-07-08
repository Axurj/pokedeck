
let pokeArray = [
    {name: 'bulbasaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {name: 'ivysaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
    {name: 'charmander', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
    {name: 'charizard', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
    {name: 'squirtle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
  ];

let index = 0; 
document.getElementById('myButton').addEventListener('click', pokeCounting);

function pokeCounting () {
    // Gets the name of a Pokemon based on it's position in the array.
    let nameElement = document.getElementById('pokeNames');
    nameElement.innerHTML = pokeArray[index].name;
    // Gets a picture of a Pokemon based on it's position in the array.
    let picElement = document.getElementById('pokePics');
    picElement.src = pokeArray[index].image;
    // Below is used to test what index number we are at
    // let numElement = document.getElementById('iNum');
    // numElement.innerHTML = index;
    index += 1;
    if (index == pokeArray.length) {
        index = 0;
    }
}
