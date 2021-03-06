import './App.css';
import freeCodeCampLogo from './imagenes/freecode.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import { useState } from 'react';

function App() {
  const [numClicks, setNumClicks] =  useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
    console.log('Click');
  };
  const reiniciarContador = () => {
    setNumClicks(0);
    console.log('Reiniciar');
  };
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-contador'>
        <Contador numClicks={numClicks} />
        <Boton 
          texto= 'Click'
          esBotonDeClick= {true}
          manejarClick= {manejarClick} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick= {false}
          manejarClick= {reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
