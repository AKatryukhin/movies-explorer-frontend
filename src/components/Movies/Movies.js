import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { AppContext } from '../../contexts/AppContext';

function Movies({
  isSearch,
  isLoading,
  getMovies,
  onMovieLike,
  onMovieDelete,
  checkLikeStatus,
  setIsShortMovies
}) {
  const value = React.useContext(AppContext);
  const movies = value.movies;
  const savedMovies = value.savedMovies;

  return (
    <>
      <main className='movies'>
        <Header />
        <SearchForm
          isSearch={isSearch}
          isLoading={isLoading}
          getMovies={getMovies}
          setIsShortMovies={setIsShortMovies}
        />
        {isLoading && <Preloader />}
        {movies && 
          <MoviesCardList
            onMovieLike={onMovieLike}
            onMovieDelete={onMovieDelete}
            checkLikeStatus={checkLikeStatus}
          />
        }
        <Footer />
      </main>
    </>
  );
}

export default Movies;
