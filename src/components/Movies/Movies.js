import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { AppContext } from '../../contexts/AppContext';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies, isSearch, isLoading, getMovies }) {
  const value = React.useContext(AppContext);

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
        {movies.length !== 0 && <MoviesCardList movies={movies} />}
      </main>
      <Footer />
    </>
  )
}

  
export default Movies;
