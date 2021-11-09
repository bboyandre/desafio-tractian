import React from 'react';
import './App.css';
import Comportamento from './components/Comportametno';
import Header from './components/Header';
import SlideMarcas from './components/SlideMarcas';

const App = ()=> {
  return (
    <>
      <div>
        <Header />
        <Comportamento />
        <SlideMarcas />
      </div>
    </>
  );
}

export default App;