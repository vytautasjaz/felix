import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

import './index.scss';

function Header() {
  return (
    <div className='Header'>
      <Link className='Header__logo' to='/'>
        FELIX
      </Link>
      <Button to='/login'>Sign In</Button>
    </div>
  );
}

export default Header;
