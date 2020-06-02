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

  Logout() {

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
          <Button>Logout</Button>
        ) : (
          <Button to='/login'>Sign In</Button>
        )}
      </div>
    );
  }
}

export default Header;
