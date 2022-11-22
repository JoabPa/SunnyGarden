import React from 'react';
import './Navbar.css';

function Header(props) {
  return (
    <nav className='nav'>
      <img
        src='img/logo.png'
        alt='DobleJ logo'
        className='nav__logo'
        id='logo'
        designer='Joab'
      />
      <ul className='nav__links'>
        <li className='nav__item'>
          <a className='nav__link' href='#section--1'>
            Products
          </a>
        </li>
        <li className='nav__item'>
          <a className='nav__link' href='#section--2'>
            Order
          </a>
        </li>
        <li className='nav__item'>
          <a className='nav__link' href='#section--3'>
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
