import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import useFormAndValidation from '../hooks/useFormAndValidation.js';

function Profile({ logout }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormAndValidation();
  const { name, email } = values;

  function handleSubmit(e) {
    e.preventDefault();
    isValid &&
      console.log('Ok', () => {
        resetForm();
      });
  }

  function handleLogout() {
    logout();
  }
  return (
    <>
      <Header />
      <section className='profile'>
        <h2 className='profile__title'>Привет, Александр!</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
          <label className='profile__label'>
            Имя
            <input
              className='profile__input'
              name='name'
              type='text'
              placeholder='Имя'
              required
              value={name || ''}
              onChange={handleChange}
            />
          </label>
          <span className='profile__input-error'>{errors.name}</span>
          <label className='profile__label'>
            Почта
            <input
              className='profile__input'
              name='email'
              type='email'
              placeholder='Email'
              required
              value={email || ''}
              onChange={handleChange}
            />
          </label>
          <span className='profile__input-error'>{errors.email}</span>
        </form>
        <ul className='profile__buttons'>
          <button
            type='submit'
            className={
              isValid
                ? 'profile__button'
                : 'profile__button profile__button_type_disable'
            }
            onClick={handleSubmit}
            disabled={!isValid}
          >
            Редактировать
          </button>
          <button
            type='button'
            className='profile__button profile__button-logout'
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </button>
        </ul>
      </section>
    </>
  );
}

export default Profile;
