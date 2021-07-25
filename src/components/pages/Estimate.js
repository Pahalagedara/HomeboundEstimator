import { React } from 'react'
import { Row,Col } from 'react-bootstrap'
import CompanyLogo from '../CompanyLogo'
import Quections from './estimate/Quections'
import Progressbar from '../Progressbar'
import { connect } from 'react-redux'

 
const Estimate = (props) => {
    const { location, landAvailability, budget} = props;

    return (
        
            <Row>
                <Col sm={10}>
                    <Progressbar />
                    <CompanyLogo />
                    <Quections />
                </Col>
                <Col sm={2} className="right_container">    
                    <p>
                        <span className='spanFontColor'>Need help?</span>
                        <a style={{ color: 'black' }}
                            href='https://estimator.homebound.com/requestcall'>
                            Contact us
                        </a>
                    </p>
                
                    
                    {(location !== 0) ? <div className="middle">
                            <h6>What you've <br />told us</h6>
                            <p>
                                <span className='spanFontColor'>
                                    {location}
                                </span>
                            </p>
                        </div> :null }

                    <hr />
                
                    {(landAvailability !== 0) ? 
                        <div>
                            <p className='mb-1'>
                                <span className='spanFontColor'>
                                    Land
                                </span>
                            </p> 
                            <p>{landAvailability}</p>
                        </div>: null}
                
                    {(budget !== 0) ?
                        <div>
                            <p className='mb-1'>
                                <span className='spanFontColor'>Budget
                                </span>
                            </p>
                            <p>{budget}</p>
                        </div> : null}


                    <p className="watermark">
                        © 2021 Homebound Technologies
                        Inc.
                        CSLB #1043883
                    </p>
                </Col>
            </Row>
    )
}
const mapStateToProps = (state) => {
  return {
      location: state.estimate.location,
      landAvailability: state.estimate.landAvailability,
      budget: state.estimate.budget,
  };
};

export default connect(mapStateToProps)(Estimate);
