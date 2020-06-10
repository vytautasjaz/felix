import React from 'react';
import './index.scss';
import FavoriteButton from '../FavoriteButton';
import { Link } from 'react-router-dom';

function MovieCard({ title, description, image, alt, id }) {
  return (
    <div>
      <div className='MovieCard'>
        <div className='MoveCard__imageBox'>
          <Link to={`/movie/${id}`}>
            <img src={image} alt={alt} className='MovieCard__image' />
          </Link>
        </div>
        <div className='MovieCard__info'>
          <div className='MovieCard__info__title'>
            <Link to={`/movie/${id}`}> {title}</Link>
          </div>
          <div className='MovieCard__info__description'>{description}</div>
          <FavoriteButton movieId={id}></FavoriteButton>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
