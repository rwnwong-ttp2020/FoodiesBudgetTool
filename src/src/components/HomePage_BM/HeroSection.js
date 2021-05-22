import React from 'react';
import './App_BM.css';
import { Button } from './Button';
import './HeroSection.css';
import Cards from './Cards';
import CardItem from './CardItem';
function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>Foodies Budget </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src='../images/Foods.jpeg' 
              text='Plan your food adventures'
              label=''
              path='/services'
            />
            <CardItem
              src='../images/download.png'
              text='Find a restaurant for you'
              label='Map'
              path='/map'
            />
            <CardItem
              src='../images/Calculator.png'
              text='track your spending'
              label='Budget'
              path='/calculate'
            />
            <CardItem
              src='../images/ChatSupport.jpeg'
              text='connect with other Foodie'
              label='Chat'
              path='/chat'
            />
          </ul>
        </div>
      </div>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
