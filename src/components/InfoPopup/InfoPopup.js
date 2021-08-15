import React from 'react';
// import { AppContext } from '../contexts/AppContext';
import './InfoPopup.css';

function InfoPopup({
  isOpen = true,
  onClose,
  title = 'Вы успешно зарегистрировались!',
}) {
  // const value = React.useContext(AppContext);

  return (
    <section className={`popup-info ${isOpen ? 'popup-info_opened' : ''}`}>
      <div className='popup-info__container'>
        <button
          type='button'
          className='popup-info__close'
          aria-label='Кнопка для закрытия'
          onClick={onClose}
        ></button>
        <h2 className='popup-info__title'>{title}</h2>
      </div>
    </section>
  );
}
export default InfoPopup;
