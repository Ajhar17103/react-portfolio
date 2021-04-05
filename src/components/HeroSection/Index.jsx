import React from 'react';
import '../../App.css';
import {Button} from '../Button/Index'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>

      <h1 className=' m-1 w-auto'>Muhammad Azharul Islam</h1>
      <p> Front-End Developer</p>
      <div class="arrow">
            <i class="fas fa-arrow-down"></i>
        </div>
      <div className='hero-btns'>
        <Button
        to='/hire'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         HIRE ME
        </Button>
         
      </div>
    </div>
  );
}

export default HeroSection;
