import React from 'react';
import LoginForm from '../components/LoginForm';
// import Button from '../components/Button';

function Login(props) {
  console.log(props);

  return (
    <div className='App'>
      <LoginForm />
    </div>
  );
}

export default Login;
