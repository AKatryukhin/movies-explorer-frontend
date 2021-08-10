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
        <div className='aboutme__title-container'>
          <h1 className='aboutme__title'>Адександр</h1>
          <p className='aboutme__subtitle'>Фронтенд-разработчик, 35 лет</p>
          <p className='aboutme__description'>
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
    </section>
  );
}

export default AboutMe;
