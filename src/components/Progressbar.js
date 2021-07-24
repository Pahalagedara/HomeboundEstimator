import React from 'react'
import { ProgressBar } from 'react-bootstrap';

const Progressbar = () => {

    const progressValue = 80;
    
    return (
        <div className='progressShower'>
            <h6>{progressValue}%</h6>
            <ProgressBar now={progressValue} className='progressbar'/>
        </div>
    )
}

export default Progressbar
