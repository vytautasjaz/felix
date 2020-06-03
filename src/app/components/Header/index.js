import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import './index.scss';

// function LoginButton() {
//   const token = window.localStorage.getItem('token');
//   if (token) {
//     console.log(token);
//     return <Button to='/login'>Logout</Button>;
//   } else {
//     return <Button to='/login'>Sign In</Button>;
//   }
// }

// function Header() {
//   return (
//     <div className='Header'>
//       <Link className='Header__logo' to='/'>
//         FELIX
//       </Link>
//       {LoginButton()}
//     </div>
//   );
// }
// export default Header;

// PRIDĖTI ROUTER SWITCH, KAD RODYTŲ SKIRTINGUS HEADERIUS SKIRTINGOSE VIETOSE

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: false,
    };
  }

  componentDidMount() {
    if (this.state.token !== !!window.localStorage.getItem('token')) {
      this.setState({ token: !!window.localStorage.getItem('token') });
    }
  }

  componentDidUpdate() {
    if (this.state.token !== !!window.localStorage.getItem('token')) {
      this.setState({ token: !!window.localStorage.getItem('token') });
    }
  }

  async Logout() {
    this.setState({ isLoading: true });
    const response = await fetch(
      'https://academy-video-api.herokuapp.com/auth/logout',
      {
        method: 'POST',
        headers: {
          'Contnent-Type': 'application/json',
        },
        body: JSON.stringify({
          authorization: window.localStorage.getItem('token'),
        }),
      }
    );
    if (response.ok) {
      localStorage.removeItem('token');
    } else {
      console.log(window.localStorage.getItem('token'));
      throw response;
    }
  }

  // LoginButton(token) {
  //   if (token) {
  //     return <Button>Logout</Button>;
  //   } else {
  //     return <Button to='/login'>Sign In</Button>;
  //   }
  // }

  render() {
    return (
      <div className='Header'>
        <Link className='Header__logo' to='/'>
          FELIX
        </Link>
        {/* {this.LoginButton(window.localStorage.getItem('token'))} */}
        {this.state.token ? (
          <Button onClick={() => this.Logout()}>Logout</Button>
        ) : (
          <Button to='/login'>Sign In</Button>
        )}
      </div>
    );
  }
}

export default Header;
