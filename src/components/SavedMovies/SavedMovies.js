import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { AppContext } from '../../contexts/AppContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(
  isSearch,
  isLoading,
  getMovies,
  onMovieDelete
) {
  const value = React.useContext(AppContext);
  function checkLike() {
    console.log('ok')
  }

  return (
    <>
      <Header />
      <main className='movies'>
      <SearchForm
          isSearch={isSearch}
          isLoading={isLoading}
          getMovies={getMovies}
        />
        {value.isLoading && <Preloader />}
        {value.savedMovies.length !== 0 && (
          <MoviesCardList
            onMovieDelete={onMovieDelete}
            checkLikeStatus={checkLike}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
