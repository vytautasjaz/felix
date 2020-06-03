import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

function Button({ children, size, status, onClick, mode, ...props }) {
  const sizeClass = { small: 'button--small', large: 'button--large' }[size];
  const Tag = props.to ? Link : props.href ? 'a' : 'button';
  const modeClass = mode === 'outline' ? 'Button favorite' : 'Button ';

  return (
    <Tag
      className={`${sizeClass} ${modeClass} ${status}`}
      {...props}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
}

export default Button;
