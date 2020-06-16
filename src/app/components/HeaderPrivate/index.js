import React from 'react';
import Button from '../Button';
import { Link, useHistory } from 'react-router-dom';
import './index.scss';
import { connect } from 'react-redux';

// PRIDĖTI ROUTER SWITCH, KAD RODYTŲ SKIRTINGUS HEADERIUS SKIRTINGOSE VIETOSE

const Header = ({ userToken, removeToken }) => {
  // console.log(token);
  // const [token, setToken] = useState(false);
  const token = userToken;

  const history = useHistory();

  const Logout = async () => {
    // console.log(store.getState().authentication.token);
    // const token = userToken;


    const response = await fetch(
      'https://academy-video-api.herokuapp.com/auth/logout',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: token,
        }),
      }
    );
    if (!response.ok) throw response;
    history.replace('/');
    removeToken(token);
    localStorage.removeItem('token');
  };

  return (
    <div className='HeaderPrivate'>
      <Link className='Header__logo' to='/content'>
        FELIX
      </Link>

      <Button onClick={() => Logout()}>Logout</Button>

    </div>
  );
};

function mapStateToProps({ authentication: {token} }) {
  return {
    userToken: token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeToken: (token) => dispatch({ type: 'REMOVE_TOKEN', token }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
