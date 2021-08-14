import React from 'react';
import { AppContext } from '../contexts/AppContext';
import './InfoTool.css';

function InfoTooltip({ isOpen, onClose, title="Что-то пошло не так" }) {
  const value = React.useContext(AppContext);

  return (
    <section
      className={`popup 'popup_opened' ${isOpen ? 'popup_opened' : ''}`}
    >
      <div className='popup__container-infotool'>
        <button
          type='button'
          className='popup__close popup__close_type_infotool'
          aria-label='Кнопка для закрытия'
          onClick={onClose}
        ></button>
        <h2 className='popup__title_type_infotool'>
        {title}
        </h2>
      </div>
    </section>
  );
}
export default InfoTooltip;
