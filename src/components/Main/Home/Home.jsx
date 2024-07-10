import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import ListaPokemon from "./ListaPokemon";


const Home = () => {

    //ESTADOS
    const [message, setMessage] = useState([]);
    console.log(message)

    //FUNCIONES


    //RETURN

  return <section className="home">
    <Search setMessage={setMessage}/>
    <ListaPokemon message={message}/>
    {/* TEMPORAL - ESTE BOTON TENDRÍA QUE IR EN CARD para ir a Details */}
    <button>
        <li>
          <Link to="/pokemon/:id">Details</Link>
        </li></button>
  </section>;
};

export default Home;