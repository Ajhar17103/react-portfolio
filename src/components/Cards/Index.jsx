import React from 'react';
import './Cards.css';
import CardItem from './Cardtem'



function Cards() {

 
  return (
    <div className='cards'>
      <h1 className='color'>Check out the recent work!</h1>
      <hr className='w-50 m-auto bg' />
       
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/hotel.png').default}
              text='This is Online Hotel Booking System.Customer can book their room any perpose'
              label='javaScript'
              link='https://ajhar17103.github.io/Online-Hotel-Booking/'
              
            />
            <CardItem
              src={require('../images/nccBank.jpg').default}
              text='This project is based on Bank Management system, this Applicatoin only fot employee use '
              label='javaScript & Bootstrap'
              link='https://ajhar17103.github.io/NCC-Bank/'
               
            />
             <CardItem
              src={require('../images/bill.png').default}
              text='This Application is bill calculator, User can calculate their bill by this Application'
              label='javaScript'
              link='https://ajhar17103.github.io/Bill-Calculator/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/dailyneeds.png').default}
              text='This Application use for daily purpose. user can noted their important note here '
              label='JavaScipt'
            link='https://ajhar17103.github.io/Daily-Needs/'
            />
            <CardItem
               src={require('../images/poll.png').default}
              text='Experience Football on Top of the Himilayan Mountains'
              label='React.js'
               link='https://ajhar17103.github.io/Reactjs-Poll-App/'
            />
            <CardItem
            src={require('../images/todo.png').default}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='React.js'
              link='https://ajhar17103.github.io/Reactjs-ToDo-App/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;