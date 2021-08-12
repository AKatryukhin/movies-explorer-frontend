import React from 'react';
import { Route } from 'react-router-dom';
import './MoviesCardList.css';
import { movies, savedMovies } from '../../utils/constants.js';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList() {
  return (
    <section className='movies-cardlist section'>
      <Route path='/movies'>
        <div className='movies-cardlist__items'>
          {movies.map((movie) => (
            <MoviesCard key={movie._id} movie={movie} />
          ))}
        </div>
        <button
            className='movies-cardlist__more-button'
            aria-label='Показать еще'
          >
            Ещё
          </button>
      </Route>
      <Route path='/saved-movies'>
        <div className='movies-cardlist__items movies-cardlist__items_type_saved'>
          {savedMovies.map((movie) => (
            <MoviesCard key={movie._id} movie={movie} />
          ))}
        </div>
        <div className='movies-cardlist__empty'></div>
      </Route>
    </section>
  );
}

export default MoviesCardList;
