import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import CardPokemon from "./CardPokemon"; //conectarlo

const ListaPokemon = ({ message }) => {
  console.log(message)

  //FUNCIONES
  const renderCards = () => {
    if (Array.isArray(message)) {
      return message.map((item, i) =>
    <CardPokemon key={uuidv4()} dataItem={item} />
  );
} else {
  return <p>No Pokemones found</p>
}
  }

  return <section>
    {renderCards()}
    
    <h3>ListaPokemon</h3>
    </section>;
};

export default ListaPokemon;
