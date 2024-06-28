
import './App.css'

//RUTAS
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SubirFotos from './components/Subirfotos/subirfotos';
import Caracters1 from './components/CaracteristicasIzquierda/CarateristicasIzquierda';
import Caracters2 from './components/CaracteristicasDerecha/CarateristicasDerecha';
import Publicar from './components/CarateristicasPublicar/Publicar'
import PrecioTotal from './components/CaracteristicasPrecio/PrecioTotal';
import Regresar from './components/Regresar/Regreasar';
function App() {
  return (

    <>
    <Regresar />
    <SubirFotos />
    <Caracters1 />
    <Caracters2 />
    <Publicar />
    <PrecioTotal />
    






    
  
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