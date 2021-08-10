import React from 'react';
import { Link } from 'react-router-dom';
import './Promo.css';
import banner from '../../images/banner.png';

function Promo() {
  return (
    <section className='promo section'>
      <div className='promo__title-container'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.
        </h1>
        <p className='promo__subtitle'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <Link to='/' className='promo__link'>
          <button className='promo__knowmore-button'>Узнать больше</button>
        </Link>
      </div>
      <img
        className='promo__banner'
        src={banner}
        alt='баннер страницы «О проекте»'
      />
    </section>
  );
}

export default Promo;
