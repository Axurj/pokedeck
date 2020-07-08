
let pokeArray = [
    {name: 'bulbasaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {name: 'ivysaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
    {name: 'charmander', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
    {name: 'charizard', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
    {name: 'squirtle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
  ];

   let counter = document.getElementId("button").addEventListener("click", pokeCounting);

  function pokeCounting (
    for ( let i = 0; i < index; i++) {
        document.getElementById("pokeNames").pokeFile.js = pokeArray[i].image;
        document.getElementById("pokePics").pokeFile.js = pokeArray[i].name;
    }
  )