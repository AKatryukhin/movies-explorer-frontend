import React from 'react';
import './InfoPopup.css';

function InfoPopup({
  isOpen,
  onClose,
  title,
  isError
}) {
  return (
    <section className={`popup-info ${isOpen ? 'popup-info_opened' : ''}`}>
      <div className={`popup-info__container' ${isError ? 'popup-info__container_type_error' : ''}`}>
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
