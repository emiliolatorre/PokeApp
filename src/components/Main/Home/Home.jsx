import { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import ListaPokemon from "./ListaPokemon";
import { PokemonContext } from '../../../context/PokemonContext';


const Home = () => {

    //ESTADOS
    const [message, setMessage] = useState([]);
    console.log(message)

    const { pokemon, updatePokemon } = useContext(PokemonContext);
    console.log(pokemon)

    //FUNCIONES
    const resetPokemons = () => {
        updatePokemon('')
    }


    //RETURN

  return <section className="home">
    <div className="divBtnReset">
    <button onClick={resetPokemons} className="btnReset"><img className="iconReset" src="/icons8-cita-recurrente-64.png" alt="reset" /></button>
    </div>
    <Search setMessage={setMessage}/>
    {!pokemon?<ListaPokemon message={message}/> : <ListaPokemon/>}
  </section>;
};

export default Home;