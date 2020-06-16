import React from 'react';
// import { Link } from 'react-router-dom';

import HeaderPrivate from '../components/HeaderPrivate'
import Content from '../components/Content';

// function PrivateRoute(props) {
//   const token = window.localStorage.getItem("token");
//   const location = useLocation();

function App() {
  return (
    <div className='App'>
      <HeaderPrivate />
      <Content />
    </div>
  );
}

export default App;
