import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import icon from '../../images/icon-link.svg';

function Portfolio() {
  return (
    <section className='portfolio section'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__project-links'>
        <li className='portfolio__project-li'>
          <Link to='/' className='portfolio__project-link'>
            Статичный сайт{' '}
            <img
              className='portfolio__project-link-icon'
              src={icon}
              alt='Иконка ссылки'
            />
          </Link>
        </li>
        <li className='portfolio__project-li'>
          <Link to='/' className='portfolio__project-link'>
            Адаптивный сайт{' '}
            <img
              className='portfolio__project-link-icon'
              src={icon}
              alt='Иконка ссылки'
            />
          </Link>
        </li>
        <li className='portfolio__project-li'>
          <Link to='/' className='portfolio__project-link'>
            Одностраничное приложение{' '}
            <img
              className='portfolio__project-link-icon'
              src={icon}
              alt='Иконка ссылки'
            />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
