import React from 'react';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';

// import Button from '../components/Button';

function Login(props) {
  console.log(props);

  return (
    <div className='App'>
      <Header />
      <LoginForm />
    </div>
  );
}

export default Login;
