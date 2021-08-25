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
  savedMovieDelete,
  // savedMovies
) {
  const value = React.useContext(AppContext);
  function checkLike(movie) {
    return movie;
  }

  // function onMovieDelete (movie) {
  //   console.log(movie)
  // }


  return (
    <>
      <Header />
      <main className='movies'>
      <SearchForm
          isSearch={isSearch}
          isLoading={isLoading}
          getMovies={getMovies}
        />
        {/* {isLoading && <Preloader />} */}
        {value.savedMovies.length !== 0 && (
          <MoviesCardList
          // onMovieDelete={onSaveMovieDelete}
            checkLikeStatus={checkLike}
            savedMovieDelete={savedMovieDelete}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
