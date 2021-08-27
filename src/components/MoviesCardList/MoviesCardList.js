import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import useWindowSize from '../../hooks/useWindowSize';
import { AppContext } from '../../contexts/AppContext';

function MoviesCardList({ onMovieLike, onMovieDelete, checkLikeStatus }) {
  const value = React.useContext(AppContext);
  const movies = value.movies;
  const savedMovies = value.savedMovies;
  const size = useWindowSize();
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState(0);

  function increment() {
    setCount(count + cards);
  }

  useEffect(() => {
    function getSize() {
      if (size >= 1280) {
        setCount(12);
        setCards(3);
      }
      if (size < 1280 && size > 767) {
        setCount(8);
        setCards(2);
      }
      if (size <= 767) {
        setCount(5);
        setCards(2);
      }
    }
    getSize();
  }, [size]);

  return (
    <main className='movies'>
     {movies &&
      <Route path='/movies'>
        <section className='movies-cardlist section-movies'>
          {movies.length > count &&
            movies
              .slice(0, count)
              .map((movie) => (
                <MoviesCard
                  key={movie.id}
                  movie={movie}
                  onMovieLike={onMovieLike}
                  onMovieDelete={onMovieDelete}
                  checkLikeStatus={checkLikeStatus}
                />
              ))}
          {movies.length <= count &&
            movies.map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                onMovieLike={onMovieLike}
                onMovieDelete={onMovieDelete}
                checkLikeStatus={checkLikeStatus}
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
      }
      {savedMovies.length > 0 &&
        <Route path='/saved-movies'>
          <section className='movies-cardlist section-movies movies-cardlist_type_saved'>
            {savedMovies.length > count &&
              savedMovies
                .slice(0, count)
                .map((movie) => (
                  <MoviesCard
                    key={movie.movieId}
                    movie={movie}
                    onMovieDelete={onMovieDelete}
                    checkLikeStatus={checkLikeStatus}
                  />
                ))}
            {savedMovies.length <= count &&
              savedMovies.map((movie) => (
                <MoviesCard
                  key={movie.movieId}
                  movie={movie}
                  onMovieDelete={onMovieDelete}
                  checkLikeStatus={checkLikeStatus}
                />
              ))}
          </section>
          {savedMovies && (
            <div className='movies-cardlist__empty'></div>
          )}
        </Route>
      }
    </main>
  );
}

export default MoviesCardList;
