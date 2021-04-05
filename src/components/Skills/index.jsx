import React from 'react'
import skills from './styles.module.css'

function Skills() {
    return (
        <div className={skills.skilldiv}>
            <h1 className={skills.h1}>IT Skills</h1>
            <hr className='w-25 m-auto bg' />
            <div className={skills.programmingSkills} style={{marginTop:'80px'}}>
                <h3><i class="fas fa-code"><b className='text-dark'> Programming Language</b> </i>  </h3>
                <div className='d-flex' >
                    
                  
        <div className={skills.htmlSkills} > <i class="fab fa-html5"> HTML</i> </div>  
        <span className='p-2 '>90%</span>
                  
                </div>
                <div className='d-flex' >
                    
                   
        <div className={skills.htmlSkills} > <i class="fab fa-css3-alt"> CSS </i> </div> 
        <span className='p-2 '>80%</span> 
                  
                </div>
                <div className='d-flex' >
                    
                   
                    <div className={skills.htmlSkills} > <i class="fab fa-bootstrap">Bootstrap</i>      </div> 
                    <span className='p-2 '>90%</span> 
                
                            </div>
                            <div className='d-flex' >
                    
                   
                    <div className={skills.htmlSkills} ><i class="fab fa-js"> javaScript</i></div> 
                    <span className='p-2 '>80%</span> 
                              
                            </div>
                            <div className='d-flex' >
                    
                   
                    <div className={skills.htmlSkills} ><i class="fab fa-react"> React.js</i></div> 
                    <span className='p-2 '>70%</span> 
                              
                            </div>
                          
              
            </div>
 
            <div className={skills.programmingSkills} style={{marginTop:'40px'}}>
                <h3><i class="fas fa-server"> <b className='text-dark'> Database</b></i></h3>
                <div className='d-flex' >
                <div className={skills.htmlSkills} ><i class="fas fa-database"> MySQL</i></div> 
                <span className='p-2 '>60%</span>  
             </div>                 
            </div>
            <div className={skills.programmingSkills} style={{marginTop:'40px'}}>
                <h3><i class="far fa-sticky-note"> <b className='text-dark'> VSC</b></i></h3>
                <div className='d-flex' >
                <div className={skills.htmlSkills} ><i class="fab fa-git"></i> & <i class="fab fa-github-square"></i></div> 
                <span className='p-2 '>85%</span>  
             </div>                 
            </div>
            <div className={skills.programmingSkills} style={{marginTop:'40px'}}>
                <h3><i class="fas fa-camera"> <b className='text-dark'> Photoshop </b></i></h3>
                <div className='d-flex' >
                <div className={skills.htmlSkills} >Abobe Photoshop-2021</div> 
                <span className='p-2 '>50%</span>  
             </div>                 
            </div>
            <div className={skills.programmingSkills} style={{marginTop:'40px',paddingBottom:'100px'}}>
                <h3><i class="fas fa-globe">  <b className='text-dark'> Other's </b></i></h3>
                <div className='d-flex' >
                <div className={skills.htmlSkills} >Cisco Packet Tracer</div> 
                <span className='p-2 '>40%</span>  
             </div>   
             <div className='d-flex' >
                <div className={skills.htmlSkills} >Rest API</div> 
                <span className='p-2 '>70%</span>  
             </div>                
            </div>
 
     
      
    
    
             
        </div>
    )
}

export default Skills;
