import React from 'react';
import Monitoramento from '../components/Monitoramento';
import Header from '../components/Header';
import SlideMarcas from '../components/SlideMarcas';
import Porque from '../components/Porque';
import ManutencaoPreventiva from '../components/ManutencaoPreventiva';
import MaquinasSeguras from '../components/MaquinasSeguras';
import Melhore from '../components/Melhore';
import Footer from '../components/Footer';

const App = () => (
  <>
    <Header />
    <Monitoramento />
    <SlideMarcas />
    <Porque />
    <ManutencaoPreventiva />
    <MaquinasSeguras />
    <Melhore />
    <Footer />
  </>
);

export default App;
