import React from 'react';
import './About.css';

function About(props) {
  return (
    <div className='about-us'>
      <div className='about-us__info'>
        <h1> SUNNY GARDEN</h1>
        <p>We bring the sun into every home</p>
        <a
          className='nav__link nav__link--btn btn--show-modal'
          href='#section--1'
        >
          Start today!
        </a>
      </div>
      <div className='about-us__img'></div>
    </div>
  );
}

export default About;
