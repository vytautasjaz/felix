import React from 'react';
import SingleMovie from '../components/SingleMovie';
import HeaderPrivate from '../components/HeaderPrivate';

function App() {
  return (
    <div className='App'>
      <HeaderPrivate />
      <SingleMovie />
    </div>
  );
}

export default App;
