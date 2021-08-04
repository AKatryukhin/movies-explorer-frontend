import React from 'react';
import unionyes from '../images/Union-yes.png';
import unionno from '../images/Union-no.png';
import { AppContext } from '../contexts/AppContext';
import './InfoTool';

function InfoTooltip({ isOpen, onClose, title, icon }) {
  const value = React.useContext(AppContext);

  return (
    <section
      className={`popup popup_type_infotool ${isOpen ? 'popup_opened' : ''}`}
    >
      <div className='popup__container-infotool'>
        <button
          type='button'
          className='popup__close popup__close_type_infotool'
          aria-label='Кнопка для закрытия'
          onClick={onClose}
        ></button>
        <img
          src={icon ? unionyes : unionno}
          className='popup__union-image'
          alt='Картинка Yes или No'
        />
        <h2 className='popup__title_type_infotool'>
        {title}
        </h2>
      </div>
    </section>
  );
}
export default InfoTooltip;
