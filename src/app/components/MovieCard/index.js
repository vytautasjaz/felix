import React from 'react';
import './index.scss';

import Button from '../Button';
// import Favorite from '../Favorite';

function MovieCard({ title, description, image, alt, btnText, onClick }) {
  return (
    <div>
      <div className='MovieCard'>
        <div className='MoveCard__imageBox'>
          <img src={image} alt={alt} className='MovieCard__image' />
        </div>
        <div className='MovieCard__info'>
          <div className='MovieCard__info__title'> {title}</div>
          <div className='MovieCard__info__description'>{description}</div>
          <Button size='small' onClick={onClick}> {btnText} </Button>
          {/* <Favorite /> */}
          {/* <Button size='small'> Favorite </Button> */}
          {/* <Button size='small' status='favorite'>Favorite</Button> */}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
