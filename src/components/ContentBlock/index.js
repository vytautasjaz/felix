import React from 'react';
import './index.css';
import Separator from "../Separator";
import Title from '../Title'

function ContentBlock({ children, title, size }) {
    const classes = `ContentBlock ${size}`;
  
    return (
      <div className={classes}>
        <Title level="3">{title}</Title>
        <Separator />
        {children}
      </div>
    );
  }

export default ContentBlock;

