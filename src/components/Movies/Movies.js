import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { AppContext } from '../contexts/AppContext';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  const value = React.useContext(AppContext);

  return (
    <>
      <Header />
        <SearchForm />
        {value.isLoading && <Preloader />}
        <MoviesCardList />
      <Footer />
    </>
  );
}

export default Movies;
