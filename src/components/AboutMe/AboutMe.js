import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import photo from '../../images/myphoto.png';

function AboutMe() {
  return (
    <section className='aboutme section'>
      <div className='section__title-container aboutme__title-container'>
        <h3 className='section__title'>Студент</h3>
      </div>
      <div className='aboutme__content-container'>
        <div className='aboutme__info-container'>
          <h1 className='aboutme__name'>Адександр</h1>
          <p className='aboutme__info'>Фронтенд-разработчик, 35 лет</p>
          <p className='aboutme__about'>
            С ноября 2020г. проходил обучение по профессии Веб-разработчик.
            Программа курса была рассчитана на 10 мес. По итогам прохождения
            обучения, выполнения всех заданий и защиты дипломного проекта,
            получен Сертификат. Полученные на сегодняшний день навыки: HTML, CSS
            (семантика, методология БЭМ, Flexbox, Grid Layout, адаптивная
            верстка), Figma, JavaScript (es6), взаимодействие с DOM,
            Ajax-запросы, React JS, REST API, Babel, сборка Webpack, Git, Node.js,
            Express, MongoDB.
          </p>
          <ul className='aboutme__social-links'>
            <Link
              to={{ pathname: 'https://ru-ru.facebook.com/' }}
              target='_blank'
              rel='noopener noreferrer'
              className='aboutme__social-link'
            >
              Facebook
            </Link>
            <Link
              to={{ pathname: 'https://github.com/' }}
              target='_blank'
              rel='noopener noreferrer'
              className='aboutme__social-link'
            >
              Github
            </Link>
          </ul>
        </div>
        <img className='aboutme__photo' src={photo} alt='Фото студента' />
      </div>
    </section>
  );
}

export default AboutMe;
