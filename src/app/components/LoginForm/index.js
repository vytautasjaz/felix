import React from 'react';
import Button from '../Button';
import { withRouter } from 'react-router-dom'

import './index.scss';
import Eye from '../../../images/eye.svg';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      passwordInput: '',
    };
  }
  signIn = (e) => {
    e.preventDefault();
    fetch('https://academy-video-api.herokuapp.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.emailInput,
        password: this.state.passwordInput,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((response) => {
        localStorage.setItem('token', response.token);
        console.log(response);
        this.props.history.replace('/content');
      })
      .catch(console.log);
  };
  setEmail = (e) => {
    this.setState({ emailInput: e.target.value });
  };
  setPassword = (e) => {
    this.setState({ passwordInput: e.target.value });
  };

  togglePassword = () => {
    const password = document.querySelector('#password');
    const type =
      password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
  };

  render() {
    return (
      <div className='LoginWindow'>
        <form className='LoginForm' onSubmit={this.signIn}>
          <div className='FormUnit'>
            <label>Username</label>
            <input
              type='text'
              placeholder='Username'
              id='username'
              onChange={this.setEmail}
            />
          </div>
          <div className='FormUnit'>
            <label>Password </label>
            <div className='InputContainer'>
              <input
                type='password'
                placeholder='Password'
                id='password'
                onChange={this.setPassword}
              />
              <img
                src={Eye}
                className='Eye'
                alt='Show / Hide Password'
                onClick={this.togglePassword}
              />
            </div>
          </div>
          <Button type='submit'>Login</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
