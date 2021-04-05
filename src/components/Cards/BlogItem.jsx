import React from 'react';

import './Cards.css';
 
 
 
 

function CardItem({src,text,label,link}) {
 let ReadMore=()=>{

  }
 
    return (
      <>
        <li className='cards__item'>
          <div className='cards__item__link'   >
            <figure className='cardsitempicwrap' data-category={label}>
              <img
                className='cards__item__img'
                alt='Travel Image'
                src={src}
              />
            </figure>
            <div className='cards__item__info'   >
               {text}
               <br/>
             
              
                  
            </div>
            
          </div>
        </li>
      </>
    );
  }
  
  
function BlogItem({text}) {

 
  return (
    <div className='cards'>
      <h1 className='color'>Blog-learn Something!</h1>
      <hr className='w-50 m-auto bg' />
       
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
                 src={require('../images/react.png').default}
              text='Why you should learn React.js. who is step follow as a beggn'
              label='React.js'
              link='https://ajhar17103.github.io/Online-Hotel-Booking/'
              
            />
            <CardItem
                src={require('../images/prog.png').default}
              text='Programming is not only memorizes, its all about logical things.'
              label='Programming'
              link='https://ajhar17103.github.io/Online-Hotel-Booking/'
              
            />
            
            <CardItem
               src={require('../images/prog1.png').default}
              text='Why harder to read code than to write it'
              label='Programming'
              link='https://ajhar17103.github.io/Online-Hotel-Booking/'
              
            />
             
          </ul>
           
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
