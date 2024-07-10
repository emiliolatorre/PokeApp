import React from "react";

const CardPokemon = ({dataItem}) => {
  const image = dataItem.sprites.other.dream_world.front_default;
  const name = dataItem.name;
  const number = dataItem.order;
  const type = dataItem.types[0].type.name;
  return <article className="card-container">
    <img src={image} alt="image Pokemon" />
  <h3>{name}</h3>
  <p>{number}</p>
  <p>Type: {type}</p>
  <div>CardPokemon</div>;
</article>
};

export default CardPokemon;
