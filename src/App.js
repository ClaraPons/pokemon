import './App.css';
import { useEffect, useState } from 'react'

const App = () => {

  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetchData()
    }, [])

  const fetchData = async () => {
      const request = await fetch("https://pokeapi.co/api/v2/pokemon/1")
      const response = await request.json()
      setPokemon(response)
  }

  if(!pokemon){
    return <div>chargement...</div>
  }
  return (
    <div className="App">
      <img src={pokemon.sprites.front_shiny}></img>
      <h1>{pokemon.name}</h1>
      <p>Height : {pokemon.height}</p>
      <p>Weight : {pokemon.weight}</p>
    </div>
  );
}

export default App;
