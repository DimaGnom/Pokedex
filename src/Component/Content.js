import { useEffect, useState } from 'react';
import '../App.css';
import PokemonCard from './PokemonCard';
import PokemonList from './PokemonList';

let pages = 0;

const Content = () => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const handleChangPokemon = (pokemon) => {
    setSelectedPokemon({
      ...pokemon,
      type: pokemon.types.reduce((prevState, currantValue) => `${prevState} ${currantValue}`, ''),
    });
  }

  const getPokemons = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${pages * 12}`);
    const responseJson = await response.json();
    pages++;
    const pokemons = [];
    for (let i = 0; i <= responseJson.results.length - 1; i++) {
      const pokemon = await getPokemon(responseJson.results[i].url)
      pokemons.push(pokemon);
    }
    setSelectedPokemons([...selectedPokemons, ...pokemons]);
  }

  useEffect(() => {
    getPokemons();
  }, [])

  const getPokemon = async (url) => {
    const response = await fetch(url);
    const responseJson = await response.json();

    return {
      img: responseJson.sprites.front_default,
      name: responseJson.name,
      types: responseJson.types.map((type) => type.type.name),
      hp: responseJson.stats[0].base_stat,
      attack: responseJson.stats[1].base_stat,
      defense: responseJson.stats[2].base_stat,
      spAttack: responseJson.stats[3].base_stat,
      spDefense: responseJson.stats[4].base_stat,
      speed: responseJson.stats[5].base_stat,
      weight: responseJson.weight,
      totalMoves: responseJson.moves.length
    }
  }

  const loadingMore = async () => {
    await getPokemons();
  }

  console.log(selectedPokemons);
  return (
    <div className='boxWithButton'>
      <h1 className='pokeDex'>Pokedex</h1>
    <div className='container'>
      <PokemonList
        loadingMore={loadingMore}
        selectedPokemons={selectedPokemons}
        handleChangPokemon={handleChangPokemon}
      />
      <PokemonCard
      selectedPokemon={selectedPokemon}
      />
    </div>
    </div>


  );
}


export default Content;