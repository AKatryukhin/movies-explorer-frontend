import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='project content__container'>
      <div className="project__title-container">
      <h2 className="project__title">
      О проекте
      </h2>
      </div>
      <div className='project__item-container'>
      <article className='project__item'>
        <h3 className='project__subtitle'>
          Дипломный проект включал 5 этапов
        </h3>
        <p className='project__description'>
        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </p>
      </article>
        <article className='project__item'>
        <h3 className='project__subtitle'>
        На выполнение диплома ушло 5 недель
        </h3>
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