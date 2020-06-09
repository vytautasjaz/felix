import React, { useState, useEffect, useCallback } from 'react';
import './index.scss';
import MovieCard from '../MovieCard';
import Loading from '../../../images/loading.gif';

const Content = () => {
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
      'https://academy-video-api.herokuapp.com/content/items',
      {
        method: 'GET',
        headers: {
          'Contnent-Type': 'application/json',
          authorization: window.localStorage.getItem('token'),
        },
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
      {isLoading ? (
        <img className='Loading' src={Loading} />
      ) : (
        data.length > 0 && (
          <div className='Main__movies'>
            {data.map((elem) => (
              <MovieCard
                title={elem.title}
                description={elem.description}
                image={elem.image}
                id={elem.id}
                alt={elem.title}
                btnText={favorites.includes(elem.id) ? 'Remove' : 'Favorite'}
                isFavorite={favorites.includes(elem.id)}
                onClick={() => changeButton(elem.id)}
              />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Content;
