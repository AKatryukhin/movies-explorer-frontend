import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { AppContext } from '../../contexts/AppContext';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({
  isSearch,
  isLoading,
  getMovies,
  onMovieLike,
  onMovieDelete,
  checkLikeStatus,
  savedMovieDelete,
  movies,
  savedMovies
}) {
  const value = React.useContext(AppContext);

  return (
    <>
      <main className='movies'>
        <Header />
        <SearchForm
          isSearch={isSearch}
          isLoading={isLoading}
          getMovies={getMovies}
        />
        {isLoading && <Preloader />}
        {movies.length !== 0 && (
          <MoviesCardList
            onMovieLike={onMovieLike}
            onMovieDelete={onMovieDelete}
            checkLikeStatus={checkLikeStatus}
            savedMovieDelete={savedMovieDelete}
            savedMovies={savedMovies}
          />
        )}
        <Footer />
      </main>
    </>
  );
}

export default Movies;
