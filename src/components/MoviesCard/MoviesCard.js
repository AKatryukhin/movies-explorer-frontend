import React from 'react';
import { Route } from 'react-router-dom';
import './MoviesCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCard({
  movie,
  onMovieLike,
  onMovieDelete,
  checkLikeStatus,
  savedMovieDelete
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const isLiked = checkLikeStatus(movie);

  const converterDuration = (data) => {
    const hours = Math.floor(data / 60);
    const minutes = data % 60;
    return `${hours ? hours + 'ч' : ''} ${minutes}м`;
  };

  function handleLikeClick() {
    onMovieLike(movie);
  }

  function handleDeleteClick() {
    onMovieDelete(movie);
  }

  function handleSavedMovieDelete() {
    savedMovieDelete(movie);
  }


  return (
    <article className='movie'>
      <div className='movie__info-container'>
        <div className='movie__header-container'>
          <div className='movie__info'>
            <h3 className='movie__name'>{movie.nameRU}</h3>
            <p className='movie__lenght'>{converterDuration(movie.duration)}</p>
          </div>
          <Route path='/movies'>
            <button
              className={
                isLiked
                  ? 'movie__like-button movie__like-button_active'
                  : 'movie__like-button'
              }
              type='button'
              aria-label='Кнопка для лайков'
              onClick={isLiked ? handleDeleteClick : handleLikeClick}
            ></button>
          </Route>
          <Route path='/saved-movies'>
            <button
              className='movie__remove-button'
              type='button'
              aria-label='Кнопка для удаления'
              onClick={handleSavedMovieDelete}
            ></button>
          </Route>
        </div>
      </div>
      <a href={movie.trailerLink} target='_blank' rel='noopener noreferrer'>
        <Route path='/movies'>
          <img
            className='movie__image'
            src={`https://api.nomoreparties.co${movie.image.url}`}
            alt={movie.name}
          />
        </Route>
        <Route path='/saved-movies'>
          <img className='movie__image' src={movie.image} alt={movie.name} />
        </Route>
      </a>
    </article>
  );
}

export default MoviesCard;
