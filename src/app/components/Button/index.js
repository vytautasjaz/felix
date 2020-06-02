import React from 'react';
import { Link } from "react-router-dom";

import './index.scss';

function Button({ children, size, status, onClick, ...props }) {
  const sizeClass = { small: 'button--small', large: 'button--large' }[size];
  const Tag = props.to ? Link : props.href ? "a" : "button";

  return (
    <Tag className={`Button ${sizeClass} ${status}`} {...props} onClick={onClick}>
      {children}
    </Tag>
  );
}

export default Button;


