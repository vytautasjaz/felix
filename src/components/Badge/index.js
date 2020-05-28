import React from 'react';
import './index.css';

function Badge({ children, color }) {
  const classes = `Badge ${color}`;

  return <p className={classes}>{children}</p>;
}

export default Badge;
