import React from 'react';
import { Route } from 'react-router-dom';
import './MoviesCardList.css';
import { movies, savedMovies } from '../../utils/constants.js';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList() {
  return (
    <main className='movies'>
      <Route path='/movies'>
        <section className='movies-cardlist section-movies'>
          {movies.map((movie) => (
            <MoviesCard key={movie._id} movie={movie} />
          ))}
        </section>
        <div className='movies-cardlist__more-button-container'>
        <button
          className='movies-cardlist__more-button'
          aria-label='Показать еще'
        >
          Ещё
        </button>
      </div>
      </Route>
      <Route path='/saved-movies'>
      <section className='movies-cardlist section-movies movies-cardlist_type_saved'>
          {savedMovies.map((movie) => (
            <MoviesCard key={movie._id} movie={movie} />
          ))}
          <div className='movies-cardlist__empty'></div>
          </section>
      </Route>
    </main>
  );
}

export default MoviesCardList;
