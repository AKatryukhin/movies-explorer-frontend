import React from 'react';
import './SearchForm.css';
import useFormAndValidation from '../hooks/useFormAndValidation.js';

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
      <form
        className='search-form'
        onSubmit={handleSubmit}
        name='search_form'
        title='Поиск'
        isValid={isValid}
        isDisabled={!isValid || isSending}
      >
        <input
          type='text'
          className='search-input'
          id='search-input'
          name='name'
          placeholder='Фильм'
          required
          minLength='2'
          maxLength='30'
          onChange={handleChange}
          value={name || ''}
        />
        <span className='search__input-error'>{errors.email}</span>
        <button
          className='search__submit'
          type='submit'
          aria-label='Кнопка Поиск'
          disabled={isDisabled}
        >
          Поиск
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
