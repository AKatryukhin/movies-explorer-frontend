import React from 'react';
import './SearchForm.css';
import useFormAndValidation from '../hooks/useFormAndValidation.js';
import initialCards from '../../utils/constants.js';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js'

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
    <section className='search section'>
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
          minLength='2'
          maxLength='30'
          onChange={handleChange}
          value={name || ''}
        />
        <button
          className='search__submit'
          type='submit'
          aria-label='Кнопка Поиск'
          disabled={isDisabled}
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
