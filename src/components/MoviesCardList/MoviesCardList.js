import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import useWindowSize from '../../hooks/useWindowSize';
import { AppContext } from '../../contexts/AppContext';
import {
  LARGE_SCREEN,
  NARROW_SCREEN,
  LARGE_SCREEN_MOVIES,
  LARGE_SCREEN_MOVIES_MORE,
  MEDIUM_SCREEN_MOVIES,
  MEDIUM_SCREEN_MOVIES_MORE,
  NARROW_SCREEN_MOVIES,
  NARROW_SCREEN_MOVIES_MORE,
} from '../../utils/constants';

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
      if (size >= LARGE_SCREEN) {
        setCount(LARGE_SCREEN_MOVIES);
        setCards(LARGE_SCREEN_MOVIES_MORE);
      }
      if (size < LARGE_SCREEN && size > NARROW_SCREEN) {
        setCount(MEDIUM_SCREEN_MOVIES);
        setCards(MEDIUM_SCREEN_MOVIES_MORE);
      }
      if (size <= NARROW_SCREEN) {
        setCount(NARROW_SCREEN_MOVIES);
        setCards(NARROW_SCREEN_MOVIES_MORE);
      }
    }
    getSize();
  }, [size]);

  return (
    <main className='movies'>
      {movies && (
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
      )}
      {savedMovies.length > 0 && (
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
          {savedMovies && <div className='movies-cardlist__empty'></div>}
        </Route>
      )}
    </main>
  );
}

export default MoviesCardList;
