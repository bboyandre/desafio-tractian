import React from 'react';
import './App.css';
import Monitoramento from './components/Monitoramento';
import Header from './components/Header';
import SlideMarcas from './components/SlideMarcas';
import Because from './components/Because';
import ManutencaoPreventiva from './components/ManutencaoPreventiva';
import MaquinasSeguras from './components/MaquinasSeguras';
import Melhore from './components/Melhore';

const App = ()=> {
  return (
    <>
      <div>
        <Header />
        <Monitoramento />
        <SlideMarcas />
        <Because />
        {/* <ManutencaoPreventiva />
        <MaquinasSeguras />
        <Melhore /> */}
      </div>
    </>
  );
}

export default App;