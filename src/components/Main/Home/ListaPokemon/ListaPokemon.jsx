import React, { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import CardPokemon from "./CardPokemon"; //conectarlo
import { ProgressBar } from 'react-loader-spinner';
import { PokemonContext } from '../../../../context/PokemonContext';


const ListaPokemon = ({ message }) => {
  console.log(message)

  const { pokemon, updatePokemon } = useContext(PokemonContext);

  //FUNCIONES
//   const renderCards = () => {
//     if (Array.isArray(message)) {
//       return message.map((item, i) =>
//     <CardPokemon key={uuidv4()} dataItem={item} />
//   );
// } else {
//   return <p>No Pokemones found</p>
// }
//   }

const renderCards = () => {
      if (!pokemon) {
        return message.map((item, i) =>
      <CardPokemon key={uuidv4()} dataItem={item} />
    );
  } else {
    return pokemon.map((item, i) =>
      <CardPokemon key={uuidv4()} dataItem={item} />
    );
  }
    }

  return <section className="listaPokemon">
    {/* {renderCards()} */}
    {message || pokemon ? renderCards() : <ProgressBar
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  barColor="#2b2b2e"
  borderColor="#2b2b2e"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />}
    
    {/* <h3>ListaPokemon</h3> */}
    </section>;
};

export default ListaPokemon;
