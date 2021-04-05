import React from 'react'
import WorksExp from './styles.module.css'

function WorkExp() {
    return (
        <div className={WorksExp.div}>
            <h1 className={WorksExp.h1}>Workshop and Training</h1>
            <hr className='w-50 m-auto bg' />
            <div className={WorksExp.workTitle}>
                <h4 className='p-2'> <i class="fas fa-briefcase">  
                
                </i>  Solved more than 500 javaScript Problems in Different Online plartform.</h4>
                <h4 className='p-2'><i class="fas fa-briefcase">
                </i> Participated IUPC more than 7 times at IUBAT
                </h4>
                <h4 className='p-2'><i class="fas fa-briefcase">

                </i> Create overall 10 Website with Modern Design.

                </h4>
                <h4 className='p-2'><i class="fas fa-briefcase">

                </i>  Contribute to Open Source projects
                </h4>
                <h4 className='p-2'><i class="fas fa-briefcase">

                </i> Former Teacher of Higher Mathematics H.S.C level
                </h4>
            </div>
        </div>
    )
}

export default WorkExp
