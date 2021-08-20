import React from 'react';
import { Route } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie, onMovieLike, onMovieDelete, isLiked }) {
  console.log(movie);

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
              onClick={handleDeleteClick}
            ></button>
          </Route>
        </div>
      </div>
      <a href={movie.trailerLink} target='_blank' rel='noopener noreferrer'>
        <img
          className='movie__image'
          src={`https://api.nomoreparties.co${movie.image.url}`}
          alt={movie.name}
        />
      </a>
    </article>
  );
}

export default MoviesCard;
