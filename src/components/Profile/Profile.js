import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ logout, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  const { values, handleChange, resetForm, errors, isValid } =
    useFormAndValidation();
  const { name, email } = values;

  function handleSubmit(e) {
    e.preventDefault();
    isValid &&
      onUpdateUser(
        {
          name: name,
          email: email,
        },
        () => {
          resetForm();
        }
      );
  }

  function handleLogout() {
    logout();
  }
  return (
    <>
      <Header />
      <section className='profile'>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <form
          className='profile__form'
          onSubmit={handleSubmit}
          name='profile__form'
          noValidate
        >
          <label className='profile__label'>
            Имя
            <input
              className='profile__input'
              name='name'
              type='text'
              placeholder={currentUser.name}
              required
              minLength='2'
              maxLength='38'
              value={name || ''}
              onChange={handleChange}
            />
          </label>
          <span className='profile__input-error'>{errors.name}</span>
          <label className='profile__label'>
            Email
            <input
              className='profile__input'
              name='email'
              type='email'
              placeholder={currentUser.email}
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
