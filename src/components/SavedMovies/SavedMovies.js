import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { AppContext } from '../../contexts/AppContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({
  isSearch,
  isLoading,
  getMovies,
  checkLikeStatus,
  onMovieDelete,
  setIsShortMovies
}) {
  const value = React.useContext(AppContext);
  const movies = value.movies;
  const savedMovies = value.savedMovies;

  return (
    <>
      <Header />
      <main className='movies'>
      <SearchForm
          isSearch={isSearch}
          isLoading={isLoading}
          getMovies={getMovies}
          setIsShortMovies={setIsShortMovies}
        />
        {isLoading && <Preloader />}  
        {savedMovies &&
          <MoviesCardList
            checkLikeStatus={checkLikeStatus}
            onMovieDelete={onMovieDelete}
          />
        }
         <Footer />
      </main>
    </>
  );
}

export default SavedMovies;
