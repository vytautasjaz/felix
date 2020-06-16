import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Main from '../components/Main';
import './style.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Main />
    </div>
  );
}

export default App;
