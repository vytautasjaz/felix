import React from 'react';
import './index.css';

function SocialLink({ children, src, link }) {
  return (
    <div className='SocialLink'>
      <a href={link} target='blank'>
        <img src={src} />
        {children}
      </a>
    </div>
  );
}

export default SocialLink;
