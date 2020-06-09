import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import './index.scss';
import Title from '../Title';
import Button from '../Button';
import Loading from '../../../images/loading.gif';
// import MovieCard from '../MovieCard';

const SingleMovie = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const getMovie = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://academy-video-api.herokuapp.com/content/items/${id}`,
      {
        method: 'GET',
        headers: {
          'Contnent-Type': 'application/json',
          authorization: window.localStorage.getItem('token'),
        },
      }
    );
    if (!response.ok) throw response;
    setMovie(await response.json());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className='SingleMovie'>
      {isLoading ? (
        <img className='Loading' src={Loading} />
      ) : (
        !!movie && (
          <div>
            <img src={movie.image} alt={movie.title} className='MovieImage' />
            <div>
              <Title level='2'>{movie.title}</Title>
              <div>{movie.description}</div>
              <Button size='small' mode='regular'>
                Watch
              </Button>
              <Button size='small' mode='regular'>
                Favorite
              </Button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SingleMovie;
