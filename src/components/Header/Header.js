import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/header-logo.svg';
import icon from '../../images/icon-acc.svg';
import { AppContext } from '../contexts/AppContext';

function Header() {
  const value = React.useContext(AppContext);
  return (
    <header className={value.loggedIn ? 'header page__header header_loggedIn' : 'header page__header'}>
      {value.loggedIn ? (
        <>
          <Link to='/'>
            <img className='header__logo' src={logo} alt='Логотип' />
          </Link>
          <nav className='header__links'>
            <>
              <NavLink
                to='/movies'
                className='header__link-films'
                activeClassName='.header__link-films_active'
              >
                Фильмы
              </NavLink>
              <NavLink
                to='/saved-movies'
                className='header__link-films'
                activeClassName='header__link-films_active'
              >
                Сохранённые фильмы
              </NavLink>

              {/* <input className='menu-burger__toggle' type='checkbox' id='toggle' />
      <label className='menu-burger' htmlFor='toggle'>
        <span></span>
      </label> */}
            </>
          </nav>
          <Link to='/profile' className='header__link header__link-profile'>
            <button className='header__profile-button'>
              <img className='header__icon' src={icon} alt='Иконка профиля' />
              Аккаунт
            </button>
          </Link>
        </>
      ) : (
        <>
          <Link to='/'>
            <img className='header__logo' src={logo} alt='Логотип' />
          </Link>
          <nav className='header__links'>
            <>
              <NavLink
                to='/signup'
                className='header__link'
                activeClassName='header__link_active'
              >
                Регистрация
              </NavLink>
              <NavLink
                to='/signin'
                className='header__link'
                activeClassName='header__link_active'
              >
                <button className='header__signin-button'>Войти</button>
              </NavLink>
            </>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
