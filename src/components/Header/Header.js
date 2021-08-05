import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
          <ul className='header__links'>
              <NavLink
                to='/movies'
                className='header__link'
                activeClassName='header__link_active'
              >
                Фильмы
              </NavLink>
              <NavLink
                to='/saved-movies'
                className='header__link'
                activeClassName='header__link_active'
              >
                Сохранённые фильмы
              </NavLink>
              <NavLink
                to='/profile'
                className='header__link header__link-profile'
                activeClassName='header__link_active'
              >
                <button className='header__profile-button'>Аккаунт</button>
              </NavLink>
          </ul>
          )}
        </>
      ) : (
        <ul className='header__links'>
            <Link to='/signup' className='header__link'>
              Регистрация
            </Link>
            <Link to='/signin' className='header__link'>
              <button className='header__signin-button'>Войти</button>
            </Link>
        </ul>
      )}
    </header>
  );
}

export default Header;
