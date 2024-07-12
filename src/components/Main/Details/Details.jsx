import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';

const Details = () => {
  const location = useLocation();
  const dataItem = location.state;
  console.log(dataItem)

  const image = dataItem.sprites.other.dream_world.front_default;
  const name = dataItem.name;
  const number = dataItem.order;
  const type = dataItem.types[0].type.name;
  const typeClass = `typeCard-${type}`
  const imgClass = `detailsImgContainer-${type}`
  const moves = `${dataItem.moves[0].move.name}, ${dataItem.moves[1].move.name}`

  const stats = dataItem.stats
  console.log(stats)
  const hp = stats[0].base_stat
  const hpBar = stats[0].base_stat * 100 / 255

  const attack = stats[1].base_stat
  const attackBar = stats[1].base_stat * 100 / 255

  const defense = stats[2].base_stat
  const defenseBar = stats[2].base_stat * 100 / 255

  const special_attack = stats[3].base_stat
  const special_attackBar = stats[3].base_stat * 100 / 255

  const special_defense = stats[4].base_stat
  const special_defenseBar = stats[4].base_stat * 100 / 255

  const speed = stats[5].base_stat
  const speedBar = stats[5].base_stat * 100 / 255


  return <section className="sectionDetails">
  <article className="details-container">
    <div className={imgClass}>
      {image ? <img src={image} alt="image Pokemon" /> : <img src="../../../src/assets/pokemon-undefined.png" alt="image Pokemon" />}
    </div>
    {number < 10 ? <p className="details-numberCard">#00{number}</p> : <p className="details-numberCard">#{number}</p>}
    {/* <p>{number}</p> */}
    <div className="details-dataCard-container">
      {/* <p className="details-titleCard">⬅ {name}</p> */}
      <p className="details-titleCard"><Link to="/">⬅ {name}</Link></p>
      <p className={typeClass}>{type}</p>
    </div>

    <p className="details-about">About</p>
    <div className="details-aboutContent">

      <div className="details-aboutDiv">
        <p className="details-aboutP">{dataItem.weight} Kg</p>
        <p className="details-aboutTitle">Weight</p>
      </div>

      <div className="details-aboutDiv">
        <p className="details-aboutP">{dataItem.height} m</p>
        <p className="details-aboutTitle">Height</p>
      </div>

      <div className="details-aboutDivMoves">
        <p className="details-aboutP">{moves}</p>
        <p className="details-aboutTitle">Moves</p>
      </div>

    </div>

    <p className="details-stats">Base Stats</p>

    <div className="details-stat">
      <p className="statTitle">HP</p>
      <p className="statNumber">{hp}</p>
      <div className="progress"><LinearProgress variant="determinate" value={hpBar} sx={{ height: 9, borderRadius:20}}/></div>
    </div>

    <div className="details-stat">
      <p className="statTitle">ATK</p>
      <p className="statNumber">{attack}</p>
      <div className="progress"><LinearProgress variant="determinate" value={attackBar} sx={{ height: 9, borderRadius:20}}/></div>
    </div>

    <div className="details-stat">
      <p className="statTitle">DEF</p>
      <p className="statNumber">{defense}</p>
      <div className="progress"><LinearProgress variant="determinate" value={defenseBar} sx={{ height: 9, borderRadius:20}}/></div>
    </div>

    <div className="details-stat">
      <p className="statTitle">SATK</p>
      <p className="statNumber">{special_attack}</p>
      <div className="progress"><LinearProgress variant="determinate" value={special_attackBar} sx={{ height: 9, borderRadius:20}}/></div>
    </div>

    <div className="details-stat">
      <p className="statTitle">SDEF</p>
      <p className="statNumber">{special_defense}</p>
      <div className="progress"><LinearProgress variant="determinate" value={special_defenseBar} sx={{ height: 9, borderRadius:20}}/></div>
    </div>

    <div className="details-statLast">
      <p className="statTitle">SPD</p>
      <p className="statNumber">{speed}</p>
      <div className="progress"><LinearProgress variant="determinate" value={speedBar} sx={{ height: 9, borderRadius:20}}/></div>
    </div>



  </article >
  </section>
};

export default Details;