import React from 'react';
import Button from '../Button';

import './index.scss';

function Header() {
  return (
    <div className='Header'>
      <div className='Header__logo'>FELIX</div>
      <Button>Sign In</Button>
    </div>
  );
}

export default Header;
