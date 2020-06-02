import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

function PrivateRoute(props) {
  const token = window.localStorage.getItem('token');
  const location = useLocation();

  if (token) {
    console.log('Proceed');
    return <Route {...props} />;
  }
  return (
    <Redirect to={{ pathname: '/login', state: { referrer: location } }} />
  );
}

export default PrivateRoute;
