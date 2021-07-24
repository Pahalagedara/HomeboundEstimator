import React from 'react'
import CompanyLogo from '../CompanyLogo'
import Quections from './estimate/Quections'
import Progressbar from '../Progressbar'
//import { ProgressBar } from 'react-bootstrap';
 
const Estimate = () => {

    return (
        <div className='container'>
            <div className="left_container ">
                <Progressbar />
                <CompanyLogo />
                <Quections />
            </div>
            <div className="right_container">
                
                <p><span>Need help?</span><a style={{color:'black'}} href='https://estimator.homebound.com/requestcall'>Contact us</a></p>
                
                <div className="middle">
                    {/*change with state */}
                    <h6>What you've told us</h6> 
                    <p>Austin</p>
                </div>

                <hr />

                {/*visibility change */}
                <p><span>Land</span></p> 
                {/*change with state */}
                <p>I have land </p>
            </div>
        </div>
    )
}

export default Estimate;
