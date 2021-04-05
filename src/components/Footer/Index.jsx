import React from 'react';
import './Footer.css';
import { Button } from '../Button/Index';
import { Link } from 'react-router-dom';
 

function Footer() {
  return (
    <div className='footer-container'>
     <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Connect With Me, 
        </p>
        <p className='footer-subscription-text'>
          You can  unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline' >Subscribe</Button>
          </form>
        </div>
      </section>
       
        
          
         
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            
            
              <h1 className='h1'>Follow</h1>
              
               <p ><a href='https://www.facebook.com/aislam.azhar/' target='_blank' style={{textDecoration:'none', color:'#7E7979'}}>
                 <i class='fab fa-facebook-f ' >  Facebook 
                
                 </i></a> 
              </p>   
              <p> <a href='https://www.linkedin.com/in/azharislam/' target='_blank' style={{textDecoration:'none', color:'#7E7979'}}> <i class='fab fa-instagram' > Instagram
              </i>
                </a> 
                </p>
              <p > <a href='linkedin.com/in/azharislam' target='_blank' style={{textDecoration:'none', color:'#7E7979'}}><i class='fab fa-linkedin' /> LinkedIn
              </a>
              </p>
             
           
          </div>
          <div class='footer-logo'>
            
            
              <h1 className='h1'>Address</h1>
              
              <p><i class="fas fa-map-marker-alt"> Sataish Road, Tongi, Gazipur-1710</i></p>
              <p><i class="fas fa-mobile"> +8801787223642 (Whatsapp Only)</i></p>
              <p><i class="fas fa-envelope"> contact.ajharislam@gmail.com</i></p>
             
           
          </div>
          <div class='footer-logo'>
            
            
            <h1 className='h1'>Information</h1>
            
           <p className='text-dark'>
           <Link
              class='social-icon-link twitter'
              to='/blog'
              target='_blank'
              aria-label='LinkedIn'
            >
                  My Blog 
            </Link>
            </p> 
            <p className='text-dark'>
            <Link
              class='social-icon-link twitter'
              to='/about'
              target='_blank'
              aria-label='LinkedIn'
            >
                 About 
            </Link>
            </p>
             
            
             
           
         
        </div>
           
        
        </div>
      </section>
    </div>
    
  );
}

export default Footer;
