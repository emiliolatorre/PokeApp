import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const Search = ({ setMessage }) => {
  // ESTADOS

  const [pokemons, setPokemons] = useState([]); // por defecto los primeros 20 pokemon
  const [value, setValue] = useState('');

  // FUNCIONES

  // UseEffect por defecto
  useEffect(() => {
    const getPokemons = async () => {
      try {
        const resp = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const json = resp.data;
        const listaPokemons = json.results;

        const fetchDetails = async (url) => {
          const resp2 = await axios.get(url);
          return resp2.data;

        }
        const pokemonDetails = await Promise.all(listaPokemons.map(pokemon => fetchDetails(pokemon.url)));

        // LE PASAMOS pokemons AL PADRE Home
        setMessage(pokemonDetails);
      } catch (error) {
        // setPokemons([])
        setMessage([])
      }
    }
    getPokemons();
  }, []);

  // USEFECT al hacer submit
  useEffect(() => {
    const getSearchedPokemon = async () => {
      if (value.trim() !== '') {
      try {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const newPokemon = resp.data;
        setPokemons(() => {
          if (pokemons.length > 0) {
            return [...pokemons, newPokemon];
          } else {
            return [newPokemon];
          }
        });
        // LE PASAMOS pokemons AL PADRE Home
        setMessage(() => {
          if (pokemons.length > 0) {
            return [...pokemons, newPokemon];
          } else {
            return [newPokemon];
          }
        });
      } catch (error) {
        console.error('Fetch error in Search')
      }
    }
  }
    getSearchedPokemon();
  }, [value]);

  // aqui guardamos
  const handleSubmit = e => {
    e.preventDefault();
    const search = e.target.name.value;
    const searchedPokemon = search.toLowerCase()
    console.log(searchedPokemon);
    setValue(searchedPokemon);
    console.log(value)
    e.target.reset();
  };


  // RETURN
  return <section className="formulario">

    <form onSubmit={handleSubmit} className="formSearch">
      <div>
        <input type="text" name="name" placeholder="Nombre del Pokemon" />
      </div>
      <button type="submit">Buscar</button>
    </form>
  </section>
};

export default Search;
