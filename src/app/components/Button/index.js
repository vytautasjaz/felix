import React from 'react';
import './index.scss';

function Button({ children, size, status }) {
  const sizeClass = { small: 'button--small', large: 'button--large' }[size];

  return (
    <button className={`Button ${sizeClass} ${status}`}>{children}</button>
  );
}

export default Button;
