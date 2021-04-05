import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({src,text,label,link}) {
 
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'   >
          <figure className='cardsitempicwrap' data-category={label}>
            <img
              className='cards__item__img'
              alt='project image'
              src={src}
            />
          </figure>
          <div className='cards__item__info'   >
             {text}
             <br/>
              <button className='btn btn-success my-2 w-100 decoration'   >  <a href={link} target='_blank'> View Project</a>   </button> 
            
                
          </div>
          
        </div>
      </li>
    </>
  );
}

export default CardItem;
