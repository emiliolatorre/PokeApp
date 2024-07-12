import { BrowserRouter } from 'react-router-dom';
import { useContext, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
// Importamos el contexto
import { PokemonContext } from './context/PokemonContext'
import { FirstFetchContext } from './context/FirstFetchContext'


function App() {

  const [pokemon, setPokemon] = useState('');
  const [firstfetch, setFirstFetch] = useState(false);


  const updatePokemon = (newPokemon) => {
    setPokemon(newPokemon);
  };

  const pokemonData = { pokemon, updatePokemon }

  const updateFirstFetch = (newFetch) => {
    setFirstFetch(newFetch);
  };

  const fetchData = { firstfetch, updateFirstFetch }

  return (
    <>
    <PokemonContext.Provider value={pokemonData}>
    <FirstFetchContext.Provider value={fetchData}>
      <BrowserRouter >
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
      </FirstFetchContext.Provider>
      </PokemonContext.Provider>
    </>
  )
}

export default App
