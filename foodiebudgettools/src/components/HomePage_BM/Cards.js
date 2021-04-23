import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem // https://www.thenaturalfoodies.com/wp-content/uploads/2019/08/welove_foodies_t.png

              src='../images/Foods.jpeg' 
              text='Explore the various of food in we love foodies that you can purchase'
              label='List of Foods'
              path='/services'
            />
            <CardItem

              src='../images/download.png'
              text='Get direction from Google maps'
              label='Map'

              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../images/app-store.png'
              text='Foodies Buget App'
              label='App'
              path='/services'
            />
            <CardItem
              src='../images/Calculator.png'
              text='Calculator Budget'
              label='Budget'
              path='/calculate'
            />
            <CardItem
              src='../images/ChatSupport.jpeg'
              text='Contact Customer Service/Chat Support'
              label='Chat'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
