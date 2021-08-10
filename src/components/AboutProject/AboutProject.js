import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='project section'>
      <div className="section__title-container project__title-container">
      <h3 className="section__title">
      О проекте
      </h3>
      </div>
      <div className='project__item-container'>
      <article className='project__item'>
        <h4 className='project__subtitle'>
          Дипломный проект включал 5 этапов
        </h4>
        <p className='project__description'>
        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </p>
      </article>
        <article className='project__item'>
        <h4 className='project__subtitle'>
        На выполнение диплома ушло 5 недель
        </h4>
        <p className='project__description'>
        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </article>
      </div>
      <div className='project__graph'>
      <p className="project__graph-text project__graph-green">1 неделя</p>
      <p className="project__graph-text project__graph-grey">4 недели</p>
      <span className="project__graph-text">Back-end</span>
      <span className="project__graph-text">Front-end</span>
      </div>
    </section>
    
  );
}

export default AboutProject; 