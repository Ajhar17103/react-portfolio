import React from 'react';
import '../../App.css';
import Footer from '../Footer/Index';
import aboutImg from '../../images/aboutProfile.jpeg'
 
 
let  About=()=> {
   
  return  (
    <div className='m-5'>
      <div  style={{minHeight:'1000px'}} >
         <div className='imgId'>
           <img src={aboutImg}  alt="" />

           <h1 className='text-info m-2' > 
           
           Muhammad Azharul Islam
           </h1>
           <span>
             Front-End Developer

           </span>
       
         </div>


        <hr className='m-auto w-50 bg' />
         <br/>
         <br/>


         <div className='w-75 m-auto '>
           <p>
            <b>ASSALAMULAIKUM</b> ;
             This is Muhammad Azharul Islam.Elder son of Mr. Mominul Islam & Mrs. Lipi Akther. He is Born into a Bengali Muslim family hailing from Gazipur district.He completed his primary education from Sataish School.and he completed his  secondary school since-2014  and his Higher Secondary was Milestone Collage-Uttara since-2016.
             Now his is final year student, Department of  Computer Science & Engineering (CSE) at IUBAT-International University of Business Agriculture and Technology.
            
           </p>
      
 
           <div className='w-25 m-auto'>
           <span>Here is Portfolio </span>
           <div className="arrows">

            <i class="fas fa-arrow-down"></i>
            
            </div>
           <a href='images/prog.png' download>

          <button class="btn btn-primary w-auto">
            <i class="fa fa-download"></i> Download
            
            </button>

            </a> 
         </div>

        </div>
  





      </div>
     
      <Footer/>
    </div>
  );
}
export default About;