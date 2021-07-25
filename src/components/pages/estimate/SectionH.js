import { Button, Figure} from 'react-bootstrap'
import {React,useState} from 'react'
import { setProgress } from '../../../store/actions/estimateAction'
import { connect } from 'react-redux'


const SectionH = (props) => {

    const { setProgress } = props;
    const [count, setCount] = useState(0);

    const clicked = () => {
        if (count == 0) {
            setProgress()
            setCount(1)
        }
       
    }
    
    return (
        <div className='quection'>
            <h2 className='mb-5'>We're sorry to hear<br/>about your loss.</h2>
            <p className='mb-5'><span className='spanFontColor'>Let's get you home.</span></p>
            <p className='mb-5'>
                When the Tubbs Fire destroyed over 5,600 buildings, including the home of one of our cofounders, he was moved to help people navigate this overwhelming process. He brought together a team of construction, real estate, and technology experts to create a better way to rebuild.
                Our teams personally advocate for our homeowners at every step of the process, bringing together everything under one roof and leveraging modern technology to make building a home dramatically simpler, more transparent, and human.  
            </p>
            <Figure>
                <Figure.Image
                    width={300}
                    height={180}
                    alt="171x180"
                    src="https://estimator.homebound.com/img/rebuild.jpg"
                />
                <Figure.Caption>
                    Homebound Project Manager meeting with one of our first fire rebuild clients.
                </Figure.Caption>
            </Figure>
            <br />


            <Button
                variant="dark"
                size="md"
                className="rounded-pill button"
                onClick={clicked}>
                    Next
            </Button>
            <label
                style={{ margin: '0 10px' }}
                className="mt-5">
                Previous
            </label>
       
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProgress: () => dispatch(setProgress()),
    }
}

export default connect(null, mapDispatchToProps)(SectionH);

