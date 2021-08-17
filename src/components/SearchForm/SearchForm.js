import React from 'react';
import './SearchForm.css';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm({ isSending = true, isDisabled = false }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormAndValidation();
  const { name } = values;

  function handleSubmit(e) {
    e.preventDefault();
    isValid &&
      console.log('Ok', () => {
        resetForm();
      });
  }

  return (
    <section className='search section-movies'>
      <div className='search__content-container'>
        <form
          className='search__form'
          onSubmit={handleSubmit}
          name='search__form'
          title='Поиск'
          isValid={isValid}
          isDisabled={!isValid || isSending}
        >
          <input
            type='text'
            className='search__input'
            id='search__input'
            name='name'
            placeholder='Фильм'
            required
            onChange={handleChange}
            value={name || ''}
          />
          <button
            type='submit'
            aria-label='Кнопка Поиск'
            disabled={isDisabled}
            className={`search__submit ${!isValid ? 'search__submit_type_disabled' : ''}`}
          >
            Поиск
          </button>
        </form>
        <span className='search__input-error'>{errors.email}</span>

        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
