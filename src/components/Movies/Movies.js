import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import MoviesCard from '../MoviesCard/MoviesCard';

function Movies(isLoading=true) {
  return (
    <section className='movies'>
      <SearchForm />
      {isLoading && <Preloader />}
      {/* <MoviesCardList />
      <MoviesCard /> */}
    </section>
  );
}

export default Movies; 