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
      <main className='movies'>
        <SearchForm />
        {value.isLoading && <Preloader />}
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
