import React, { useState, useEffect, useCallback } from 'react';
import './index.scss';
import Loading from '../../../images/loading.gif';
import MovieCard from '../MovieCard';

const Main = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
  }, [setData]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className='Main'>
      {isLoading ? (
        <img className='Loading' alt='Loading' src={Loading} />
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
              />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Main;
