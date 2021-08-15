import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer page__footer'>
      <p className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__links-container'>
        <p className='footer__copyright'>&copy; {new Date().getFullYear()}</p>
        <ul className='footer__links'>
          <Link to={{ pathname: 'https://practicum.yandex.ru/' }} target='_blank' rel='noopener noreferrer' className='footer__link'>
            Яндекс.Практикум
          </Link>
          <Link to={{ pathname: 'https://github.com/' }}  target='_blank' rel='noopener noreferrer' className='footer__link'>
            Github
          </Link>
          <Link to={{ pathname: 'https://ru-ru.facebook.com/' }} target='_blank' rel='noopener noreferrer' className='footer__link'>
            Facebook
          </Link>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
