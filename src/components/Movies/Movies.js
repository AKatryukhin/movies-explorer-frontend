import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { AppContext } from '../contexts/AppContext';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import MoviesCard from '../MoviesCard/MoviesCard';

function Movies() {

  const value = React.useContext(AppContext);

  return (
    <main className='movies'>
      <SearchForm />
      {value.isLoading && <Preloader />}
      <MoviesCardList />
      {/* <MoviesCard /> */}
    </main>
  );
}

export default Movies; 