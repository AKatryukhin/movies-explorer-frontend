import React from 'react';
import './SearchForm.css';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm({ isLoading , isSearch, getMovies }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormAndValidation();
  const { name } = values;

  function handleSearch() {
    isSearch();
  }

  function handleSubmit(e) {
    e.preventDefault();
    isValid && !isLoading &&
      getMovies();
    handleSearch();
    resetForm();
}


  return (
    <section className='search section-movies'>
      <div className='search__content-container'>
        <form
          className='search__form'
          onSubmit={handleSubmit}
          name='search_form'
          title='Поиск'
          noValidate
          disabled={!isValid || isLoading}
        >
          <input
            type='text'
            className='search__input'
            id='search__input'
            name='name'
            placeholder='Фильм'
            required
            minLength='1'
            maxLength='60'
            onChange={handleChange}
            value={name || ''}
          />
          <button
            type='submit'
            aria-label='Кнопка Поиск'
            disabled={!isValid}
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
