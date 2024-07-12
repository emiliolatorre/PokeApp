import React from "react";
import { Link } from "react-router-dom";

const CardPokemon = ({dataItem}) => {

  const image = dataItem.sprites.other.dream_world.front_default;
  const name = dataItem.name;
  const number = dataItem.order;
  const type = dataItem.types[0].type.name;
  const typeClass = `typeCard-${type}`
  const imgClass = `imgContainer-${type}`

  return <article className="card-container">
    <div className={imgClass}>
      {image? <img src={image} alt="image Pokemon" /> : <img src="src/assets/pokemon-undefined.png" alt="image Pokemon" />}
    </div>
    {number<10?<p className="numberCard">#00{number}</p> : <p className="numberCard">#{number}</p>}
  {/* <p>{number}</p> */}
  <div className="dataCard-container">
    <p className="titleCard"><Link to={`/pokemon/${dataItem.id}`} state={ dataItem }>{name} ➜</Link></p>
  {/* <h3>{name}</h3> */}
  <p className={typeClass}>{type}</p>
  </div>
</article>
};

export default CardPokemon;
