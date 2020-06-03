import React, { useState, useEffect, useCallback } from 'react';
import './index.scss';

import MovieCard from '../MovieCard';

const Main = () => {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const changeButton = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((el) => el !== id));
    } else {
      setFavorites(favorites.concat(id));
    }
  };

  const getData = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(
      'https://academy-video-api.herokuapp.com/content/free-items',
      {
        method: 'GET',
        headers: { 'Contnent-Type': 'application/json' },
      }
    );
    if (!response.ok) throw response;
    setData(await response.json());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='Main'>
      {data.length > 0 && (
        <div className='Main__movies'>
          {data.map((elem) => (
            <MovieCard
              title={elem.title}
              description={elem.description}
              image={elem.image}
              key={elem.id}
              alt={elem.title}
              btnText={favorites.includes(elem.id) ? 'Remove' : 'Favorite'}
              isFavorite={favorites.includes(elem.id)}
              onClick={() => changeButton(elem.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
