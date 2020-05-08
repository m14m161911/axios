window.onload = () => {
    let button = document.querySelector('#go')
  
    function findPokemon (){
      let input = document.querySelector('#search').value
      
      axios
      .get(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((result) => {
        console.log(result.data)
        let root = document.querySelector('#root')
        let image = document.createElement('img')
        let poke = document.createElement('p')
  
        poke.innerHTML = result.data.name
        image.src = result.data.sprites.front_shiny
        root.appendChild(poke)
        root.appendChild(image)
      })
      .catch((error) => {
        let err = document.createElement('p')
        err.innerHTML = error.message
        root.appendChild(err)
      });
  
    }
  
    button.addEventListener('click', findPokemon)
    
  };