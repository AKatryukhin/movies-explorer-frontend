import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import icon from '../../images/icon-acc.svg';

function Navigation() {
  return (
    <div className='navigation'>
      <nav className='navigation__menu'>
        <ul className='navigation__links'>
          <NavLink
            to='/'
            className='navigation__link'
            activeClassName='navigation__link_active'
          >
            Главная
          </NavLink>
          <NavLink
            to='/movies'
            className='navigation__link'
            activeClassName='navigation__link_active'
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className='navigation__link'
            activeClassName='navigation__link_active'
          >
            Сохранённые фильмы
          </NavLink>
        </ul>
        <NavLink
          to='/profile'
          className='navigation__link navigation__link-profile'
          activeClassName='navigation__link_active'
        >
          <button className='navigation__profile-button'>
            <img className='profile__icon' src={icon} alt='Иконка профиля' />
            Аккаунт
          </button>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
