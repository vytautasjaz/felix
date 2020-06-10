import React, { useEffect, useState } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './index.scss';
import { connect } from 'react-redux';

// PRIDĖTI ROUTER SWITCH, KAD RODYTŲ SKIRTINGUS HEADERIUS SKIRTINGOSE VIETOSE

const Header = () => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (token !== !!window.localStorage.getItem('token')) {
      setToken(!!window.localStorage.getItem('token'));
    }
  }, [token]);

  const Logout = async () => {
    const response = await fetch(
      'https://academy-video-api.herokuapp.com/auth/logout',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: window.localStorage.getItem('token'),
        }),
      }
    );
    if (!response.ok) throw response;
    localStorage.removeItem('token');
  };

  return (
    <div className='Header'>
      <Link className='Header__logo' to='/'>
        FELIX
      </Link>
      {token ? (
        <Button onClick={() => Logout()}>Logout</Button>
      ) : (
        <Button to='/login'>Sign In</Button>
      )}
    </div>
  );
};

function mapStateToProps({ token }) {
  return {
    userToken: token,
  };
}

export default connect(mapStateToProps, null)(Header);
