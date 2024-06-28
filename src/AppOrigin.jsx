import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//RUTAS
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SubirFotos from './components/Subirfotos/subirfotos';
import InfoPubli from './components/InfoPublicacion/Infopublicacion';
import InfoPubli2 from './components/InfoPublicacion2/Infopublicacion2';
import Caracters1 from './components/CaracteristicasIzquierda/CarateristicasIzquierda';
import Caracters2 from './components/CaracteristicasDerecha/CarateristicasDerecha';
import Publicar from './components/CarateristicasPublicar/Publicar'
import PrecioTotal from './components/CaracteristicasPrecio/PrecioTotal';
import SolicitudesCitas from './components/SolicitudesCitas/SolicitudesCitas';
import ChatCliente from './components/ChatCliente/ChatCliente';
import LADING from './components/LADING/lading';
import OfrecerReserva from './components/OfrecerYReserva/OfrecerReserva';
import UbicaAlojamiento from './components/UbicacionAlojamiento/UbicaconAlojamiento';
function App() {
  return (

    <>
    <LADING />
    <SubirFotos />
    <InfoPubli />
    <InfoPubli2 />
    <Caracters1 />
    <Caracters2 />
    <Publicar />
    <PrecioTotal />
    <SolicitudesCitas />
    <ChatCliente />
    <OfrecerReserva />
    <UbicaAlojamiento />





    
  
    <BrowserRouter>
        <nav>
          <ul>
            <li>
              
            </li>
          </ul>
        </nav>  
      


      <Routes>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;