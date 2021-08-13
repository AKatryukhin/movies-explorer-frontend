import React from 'react';
import { Route } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/header-logo.svg';
import icon from '../../images/icon-acc.svg';
import MenuBurger from '../MenuBurger/MenuBurger';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <>
      <Route exact path='/'>
        <header className='header page__header'>
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
        </header>
      </Route>
      <Route path={['/movies', '/saved-movies', '/profile']}>
        <header className='header page__header header_loggedIn'>
          <Link to='/'>
            <img className='header__logo' src={logo} alt='Логотип' />
          </Link>
          <MenuBurger />
          <Navigation />
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
            </>
          </nav>
          <Link to='/profile' className='header__link header__link-profile'>
            <button className='header__profile-button'>
              <img className='header__icon' src={icon} alt='Иконка профиля' />
              Аккаунт
            </button>
          </Link>
        </header>
      </Route>
    </>
  );
}

export default Header;
