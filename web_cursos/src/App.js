import React, { Fragment } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Barra from './components/Barra/Barra';
import Cursos from './components/Cursos/Cursos';
import Footer from './components/Footer/Footer';
import './css/app.css';

function App() {
  return (
    <Fragment>
      <Header/>
      <Hero/>
      <Barra/>
      <Cursos/>
      <Footer/>
    </Fragment>
  );
}

export default App;
