import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import useWindowSize from '../../hooks/useWindowSize';

function MoviesCardList({ movies, onMovieLike, onMovieDelete, isLiked }) {
  const size = useWindowSize();
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  function increment() {
    setCount(count + value);
  }

  useEffect(() => {
    function getSize() {
      if (size >= 1280) {
        setCount(12);
        setValue(3);
      }
      if (size < 1280 && size > 767) {
        setCount(8);
        setValue(2);
      }
      if (size <= 767) {
        setCount(5);
        setValue(2);
      }
    }
    getSize();
  }, [size]);

  return (
    <main className='movies'>
      <Route path='/movies'>
        <section className='movies-cardlist section-movies'>
          {movies.length > count &&
            movies
              .slice(0, count)
              .map((movie) => (
                <MoviesCard
                  key={movie._id}
                  movie={movie}
                  movies={movies}
                  onMovieLike={onMovieLike}
                  onMovieDelete={onMovieDelete}
                  isLiked={isLiked}
                />
              ))}
          {movies.length <= count &&
            movies.map((movie) => (
              <MoviesCard
                key={movie._id}
                movie={movie}
                movies={movies}
                onMovieLike={onMovieLike}
                onMovieDelete={onMovieDelete}
                isLiked={isLiked}
              />
            ))}
        </section>
        <div
          className={
            count >= movies.length
              ? 'movies-cardlist__more-button-container_type_none'
              : 'movies-cardlist__more-button-container'
          }
        >
          <button
            className='movies-cardlist__more-button'
            aria-label='Показать еще'
            onClick={increment}
          >
            Ещё
          </button>
        </div>
      </Route>
      <Route path='/saved-movies'>
        <section className='movies-cardlist section-movies movies-cardlist_type_saved'>
          {movies.map((movie) => (
            <MoviesCard key={movie._id} movie={movie} />
          ))}
        </section>
        <div className='movies-cardlist__empty'></div>
      </Route>
    </main>
  );
}

export default MoviesCardList;
