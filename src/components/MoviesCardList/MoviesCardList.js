import React from 'react';
import './MoviesCardList.css';
import { movies, savedMovies } from '../../utils/constants.js';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList({ isSavedMovies = false }) {
  return (
    <section className='movies-cardlist section'>
      <div className='movies-cardlist__items'>
        {!isSavedMovies
          ? movies.map((movie) => <MoviesCard key={movie._id} movie={movie} />)
          : savedMovies.map((movie) => (
              <MoviesCard key={movie._id} movie={movie} />
            ))}
      </div>
      {!isSavedMovies ? (
        <button
          className='movies-cardlist__more-button'
          aria-label='Показать еще'
        >
          Ещё
        </button>
      ) : (
        <div className='movies-cardlist__empty'></div>
      )}
    </section>
  );
}

export default MoviesCardList;
