import React from 'react';
import './index.scss';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
    </div>
  );
}

export default App;
