import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList({ movies }) {
  
  console.log(movies)
  const [count, setCount] = useState(12);

  function increment() {
    setCount(count + 3);
  };

  //   function handleResize() {
//     const windowSize = window.innerWidth;
//     const sizePortion = getCount(windowSize);
//     setExtraPortion(sizePortion.extra);
//   }
//   function getCount(windowSize) {
//     if (windowSize > LARGE_SCREEN_RESOLUTION) {
//         return { first: MAX_NUMBER_MOVIES, extra: ADD_MAX_NUMBER_MOVIES };
//     } else if (
//         windowSize > MEDIUM_SCREEN_RESOLUTION &&
//         windowSize <= LARGE_SCREEN_RESOLUTION
//     ) {
//         return { first: MID_NUMBER_MOVIES, extra: ADD_MIN_NUMBER_MOVIES };
//     } else {
//         return { first: MIN_NUMBER_MOVIES, extra: ADD_MIN_NUMBER_MOVIES };
//     }
//   }
//   function handleMoreCards() {
//     renderExtraPortion();
//   }
  
//   function renderExtraPortion() {
//     const count = Math.min(movies.length, currentCount + extraPortion);
//     const extraMovies = movies.slice(currentCount, count);
//     setRenderMovies([...renderMovies, ...extraMovies]);
//     setCurrenCount(count);
// }
  return (
    <main className='movies'>
      <Route path='/movies'>
        <section className='movies-cardlist section-movies'>
          {movies.length > 12 &&
            movies.slice(0, count).map((movie) => (
           
              <MoviesCard key={movie._id} movie={movie} movies={movies} />
            ))}
          {movies.length <= 12 &&
            movies.map((movie) => (
           
            <MoviesCard key={movie._id} movie={movie} movies={movies}/>
          ))}
        </section>
        <div className='movies-cardlist__more-button-container'>
        <button
          className='movies-cardlist__more-button'
            aria-label='Показать еще'
            onClick={ increment }
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
