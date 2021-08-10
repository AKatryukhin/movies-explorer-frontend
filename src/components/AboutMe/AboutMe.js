import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import photo from '../../images/myphoto.png';
import icon from '../../images/icon-link.svg';

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
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className='aboutme__social-links'>
            <Link to='/' className='aboutme__social-link'>
              Facebook
            </Link>
            <Link to='/' className='aboutme__social-link'>
              Github
            </Link>
          </ul>
          <Link to='/' className='aboutme__link-portfolio'>
            Портфолио
          </Link>
        </div>
        <img className='aboutme__photo' src={photo} alt='Фото студента' />
      </div>
      <ul className='aboutme__project-links'>
        <li className='aboutme__project-li'>
          <Link to='/' className='aboutme__project-link'>
          Статичный сайт <img className='aboutme__project-link-icon' src={icon} alt='Иконка ссылки' />
          </Link>
        </li>
        <li className='aboutme__project-li'>
          <Link to='/' className='aboutme__project-link'>
          Адаптивный сайт <img className='aboutme__project-link-icon' src={icon} alt='Иконка ссылки' />
          </Link>
        </li>
        <li className='aboutme__project-li'>
          <Link to='/' className='aboutme__project-link'>
          Одностраничное приложение <img className='aboutme__project-link-icon' src={icon} alt='Иконка ссылки' />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
