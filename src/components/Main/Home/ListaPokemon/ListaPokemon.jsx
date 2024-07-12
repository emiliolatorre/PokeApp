import React, { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import CardPokemon from "./CardPokemon"; //conectarlo
import { ProgressBar } from 'react-loader-spinner';
import { PokemonContext } from '../../../../context/PokemonContext';


const ListaPokemon = ({ message }) => {
  console.log(message)

  const { pokemon, updatePokemon } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aquí puedes actualizar el estado de carga cuando se reciben los datos
    if (message || pokemon) {
      setLoading(false);
    }
  }, [message, pokemon]);

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
    {!loading ? renderCards() : <ProgressBar
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
