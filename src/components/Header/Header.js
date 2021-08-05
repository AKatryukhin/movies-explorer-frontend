import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/header-logo';
import { AppContext } from '../contexts/AppContext';

function Header() {
  const value = React.useContext(AppContext);
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='Логотип' />
      </Link>
      {value.loggedIn ? (
          <nav className='menu'>
        <>
            <NavLink
              to='/movies'
              className='menu__item'
              activeClassName='menu__item_active'
            >
              Фильмы
            </NavLink>
            <NavLink
              to='/saved-movies'
              className='menu__item'
              activeClassName='menu__item_active'
            >
              Сохранённые фильмы
            </NavLink>
            <NavLink
              to='/profile'
              className='menu__item header__link-profile'
              activeClassName='menu__item_active'
            >
              <button className='menu__profile-button'>Аккаунт</button>
          </NavLink>
                {/* <input className='menu-burger__toggle' type='checkbox' id='toggle' />
      <label className='menu-burger' htmlFor='toggle'>
        <span></span>
      </label> */}
          </>
          </nav>
      ) : (
        <nav className='menu'>
          <>
          <NavLink
            to='/signup'
            className='menu__item_active'
            activeClassName='menu__item_active'
            >
            Регистрация
          </NavLink>
          <NavLink
            to='/signin'
            className='menu__item_active'
            activeClassName='menu__item_active'
            >
            <button className='menu__signin-button'>Войти</button>
            </NavLink>
            </>
            </nav>
    )}
    </header>
  );
}

export default Header;
