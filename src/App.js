import { useEffect, useState } from 'react'
import "./App.css"

const App = () => {

  const [pokemon, setPokemon] = useState(null)
  const [pokemonRandom, setPokemonRandom] = useState("https://pokeapi.co/api/v2/pokemon/1")

  useEffect(() => {
    fetchData()
    }, [pokemonRandom])

  const fetchData = async () => {
      const request = await fetch(pokemonRandom)
      const response = await request.json()
      setPokemon(response)
  }

  const handleRandomPokemon = () => {
    const random = Math.floor(Math.random() * 151) + 1
    setPokemonRandom(`https://pokeapi.co/api/v2/pokemon/${random}`)
  }

  if(pokemon === null){
    return <div>chargement...</div>
  }
  return (
    <div className="App">
      <div className='card-pokemon'>
      <img className="pokemon" src={pokemon.sprites.front_default} alt='pokemon'></img>
      <div className='text-pokemon'>
      <h1 className='title'>{pokemon.name}</h1>
      <p><strong>Height :</strong> {pokemon.height}</p>
      <p><strong>Weight :</strong> {pokemon.weight}</p>
      <p><strong>Types :</strong></p>
      {pokemon.types.map((type) => {
      return(
        <ul>
          <li>{type.type.name}</li>
        </ul>
        )
      })}
      </div>
      </div>
      <button className='button-random' onClick={handleRandomPokemon}>Show random pokemon</button>
    </div>
  );
}


export default App;
