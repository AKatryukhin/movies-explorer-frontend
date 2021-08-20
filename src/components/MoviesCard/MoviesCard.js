import React from 'react';
import { Route } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie, isLiked = true }) {

  return (
    <article className='movie'>
      <div className='movie__info-container'>
        <div className='movie__header-container'>
          <div className='movie__info'>
            <h3 className='movie__name'>{movie.name}</h3>
            <p className='movie__lenght'>1ч 47м</p>
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
          ></button>
          </Route>
          <Route path='/saved-movies'>
          <button
            className='movie__remove-button'
            type='button'
            aria-label='Кнопка для удаления'
          ></button>
            </Route>
        </div>
      </div>
      <a href='*' target='_blank' rel='noopener noreferrer'>
        <img className='movie__image' src={movie.link} alt={movie.name} />
      </a>
    </article>
  );
}

export default MoviesCard;
