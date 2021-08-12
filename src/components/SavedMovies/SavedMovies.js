import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { AppContext } from '../contexts/AppContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies() {
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

export default SavedMovies;
