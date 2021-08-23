import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Login({ handleLogin }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormAndValidation();
  const { email, password } = values;

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    isValid &&
    handleLogin({ email, password }, () => {
      resetForm();
    });
  }
  return (
    <section className='sign'>
      <Link to='/' className='sign__home'>
        <img className='sign__logo' src={logo} alt='Логотип' />
      </Link>
      <h2 className='sign__title'>Рады видеть!</h2>
      <form
        className='sign__form'
        onSubmit={handleSubmit}
        name='sign_form'
        noValidate
      >
        <label className='sign__label'>
          E-mail
          <input
            className='sign__input'
            name='email'
            id='email'
            type='email'
            placeholder='Email'
            minLength='2'
            maxLength='20'
            required
            title='Доменная часть адреса электронной почты указана неверно (часть после @).'
            pattern='^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$'
            autoComplete='on'
            onChange={handleChange}
            value={email || ''}
          />
          <span className='sign__input-error'>{errors.email}</span>
        </label>
        <label className='sign__label'>
          Пароль
          <input
            type='password'
            className='sign__input'
            id='password'
            name='password'
            autoComplete='off'
            required
            minLength='6'
            maxLength='20'
            placeholder='Пароль'
            pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$'
            title='Пожалуйста, укажите по крайней мере 1 заглавный символ, 1 строчный символ и 1 число.'
            value={password || ''}
            onChange={handleChange}
          />
          <span className='sign__input-error'>{errors.password}</span>
        </label>
        <div className='sign__empty'></div>
        <button
          className='sign__submit'
          type='submit'
          aria-label='Кнопка отправить'
          disabled={!isValid}
        >
          Войти
        </button>
        <div className='sign__link-container'>
          <p className='sign__question'>Ещё не зарегистрированы?</p>
          <Link className='sign__link' to='/signup'>
          Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}
export default Login;