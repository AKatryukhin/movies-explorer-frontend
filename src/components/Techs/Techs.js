import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs content__container'>
      <div className="techs__title-container">
      <h3 className="techs__title">
      Технологии
      </h3>
      </div>
      <div className="techs__content-container">
        <h2 className="techs__subtitle">7 технологий</h2>
        <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__skills">
          <li className="techs__skills-li">
            <p className="techs__skills-item">HTML</p>
          </li>
          <li className="techs__skills-li">
            <p className="techs__skills-item">CSS</p>
          </li>
          <li className="techs__skills-li">
            <p className="techs__skills-item">JS</p>
          </li>
          <li className="techs__skills-li">
            <p className="techs__skills-item">React</p>
          </li>
          <li className="techs__skills-li">
            <p className="techs__skills-item">Git</p>
          </li>
          <li className="techs__skills-li">
            <p className="techs__skills-item">Express.js</p>
          </li>
          <li className="techs__skills-li">
            <p className="techs__skills-item">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
    
  );
}

export default Techs; 