import React from 'react';
import './index.scss';

import Button from '../Button';
// import Favorite from '../Favorite';

function MovieCard({
  title,
  description,
  image,
  alt,
  btnText,
  onClick,
  isFavorite,
  id
}) {
  return (
    <div>
      <div className='MovieCard'>
      {console.log(id)}
        <div className='MoveCard__imageBox'>
          <img src={image} alt={alt} className='MovieCard__image' />
        </div>
        <div className='MovieCard__info'>
          <div className='MovieCard__info__title'> <a href = {`/movie/${id}`} > {title}</a></div>
          <div className='MovieCard__info__description'>{description}</div>
          <Button
            size='small'
            onClick={onClick}
            mode={isFavorite ? 'outline' : 'regular'}
          >
            {' '}
            {btnText}{' '}
          </Button>
          {/* <Favorite /> */}
          {/* <Button size='small'> Favorite </Button> */}
          {/* <Button size='small' status='favorite'>Favorite</Button> */}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
