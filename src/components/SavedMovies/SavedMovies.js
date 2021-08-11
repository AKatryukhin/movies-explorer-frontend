import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { AppContext } from '../contexts/AppContext';

function SavedMovies() {
  const value = React.useContext(AppContext);

  return (
    <main className='movies'>
      <SearchForm />
      {value.isLoading && <Preloader />}
      <MoviesCardList />
    </main>
  );
}

export default SavedMovies;
