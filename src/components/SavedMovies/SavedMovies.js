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
  onMovieDelete
}) {
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
        {/* {isLoading && <Preloader />}   */}
          <MoviesCardList
            checkLikeStatus={checkLikeStatus}
            onMovieDelete={onMovieDelete}
          />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
