import React from 'react';
import './MoviesCardList.css';
import movies from '../../utils/constants.js'
import MoviesCard from '../MoviesCard/MoviesCard.js';

console.log(movies)


function MoviesCardList() {
  return (
    <section className="movies-cardist section">
      <div className="movies-cardlist__items">
        {/* {isSavedPage && */}
          
        {movies.map((movie) => (
          <MoviesCard
            key={movie._id}
            movie={movie}
          />
        ))}
      </div>
      {/* {!isSavedPage && currentCount < movies.length && ( */}
      <button
        className="movies-cardlist__more-button"
        aria-label="Показать еще"
      >
        Ещё
      </button>
      {/* } */}
    </section>
  );
}

export default MoviesCardList;
   
