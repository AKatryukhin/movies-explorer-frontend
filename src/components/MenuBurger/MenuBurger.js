
import React from 'react';
import './MenuBurger.css';

function MenuBurger() {
  return (
    <>
      <input className='menu-burger__toggle' type='checkbox' id='toggle' />
      <label className='menu-burger' htmlFor='toggle'>
        <span></span>
      </label>
    </>
  )
}

export default MenuBurger;

 