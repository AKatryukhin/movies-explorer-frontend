import React from 'react';
import { Route, Link, Redirect, useHistory } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='Логотип' />
      </Link>
      {/* <input className='menu-burger__toggle' type='checkbox' id='toggle' />
      <label className='menu-burger' htmlFor='toggle'>
        <span></span>
      </label> */}
      {value.loggedIn ? (
        <>
          <div className='header__film-container'>
            <Link className='header__link-film' to='/movies'>
              Фильмы
            </Link>
            <Link className='header__link-film' to='/saved-movies'>
              Сохранённые фильмы
            </Link>
          </div>
          <Link className='header__link' to='/profile'>
            <button>Аккаунт</button>
          </Link>
        </>
      ) : (
        <>
          <Link className='header__link' to='/signup'>
            Регистрация
          </Link>
          <Link className='header__link' to='/signin'>
            <button>Войти</button>
          </Link>
        </>
      )}
    </header>
  );
}

export default Header;
