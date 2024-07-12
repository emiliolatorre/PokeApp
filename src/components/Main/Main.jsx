import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Home'
import Formulario from './Formulario'
import Details from './Details'

const Main = () => {
  return <main className="main">
    <h1><img className="pokeball" src="../../../../src/assets/poke_ball_icon_155925.png" alt="pokeball" /> Pokédex</h1>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<Formulario />} />
      <Route path='/pokemon/:id' element={<Details />} />
      <Route path='/*' element={<Navigate to={'/'} />} />

    </Routes>

  </main>;
};

export default Main;
