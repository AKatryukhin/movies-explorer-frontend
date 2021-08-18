import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { AppContext } from '../../contexts/AppContext';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies( { movies, isSearch, isLoading } ) {
  const value = React.useContext(AppContext);

  return (
    <>
      <Header />
      <SearchForm
        isSearch={isSearch}
        isLoading={isLoading}
      />
        {value.isLoading && <Preloader />}
      <MoviesCardList
      movies={movies}
      />
      <Footer />
    </>
  );
}

export default Movies;
