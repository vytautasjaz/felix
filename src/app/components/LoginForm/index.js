import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.scss';
import Eye from '../../../images/eye.svg';

const LoginForm = ({ setToken }) => {
  let emailInput = React.createRef();
  let passwordInput = React.createRef();

  // const [error, setError] = useState(false);

  const history = useHistory();
  // const getToken = () => setToken(token);

  const signIn = (e) => {
    e.preventDefault();
    fetch('https://academy-video-api.herokuapp.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: emailInput.value,
        password: passwordInput.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        // console.log(this.state.loginError);
        if (res.ok) {
          return res.json();
        }
        // this.setState.loginError = true;
        // console.log(this.state.loginError);
        throw res.json();
      })
      .then((response) => {
        localStorage.setItem('token', response.token);
        setToken(response.token);
        history.replace('/content');
      })
      .catch(console.log);
  };

  return (
    <div className='LoginWindow'>
      <form className='LoginForm' onSubmit={signIn}>
        <div className='FormUnit'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            placeholder='Username'
            id='username'
            ref={(input) => {
              emailInput = input;
            }}
          />
        </div>
        <div className='FormUnit'>
          <label htmlFor='password'>Password </label>
          <div className='InputContainer'>
            <input
              type='password'
              placeholder='Password'
              id='password'
              ref={(input) => {
                passwordInput = input;
              }}
            />
            <img
              src={Eye}
              className='Eye'
              alt='Show / Hide Password'
              // onClick={togglePassword}
            />
            <div className='ErrorMessage'>
              {/* {error && 'Failure: please check the login details'} */}
              {/* Failure: please check the login details */}
            </div>
          </div>
        </div>
        <Button type='submit'>Login</Button>
      </form>
    </div>
  );
};

// function mapStateToProps({ token }) {
//   return {
//     allFavorites: favorites,
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    setToken: (token) => dispatch({ type: 'SET_TOKEN', token }),
  };
}

export default connect(null, mapDispatchToProps)(withRouter(LoginForm));
