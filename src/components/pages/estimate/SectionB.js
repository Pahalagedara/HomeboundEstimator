import {React,useState} from 'react'
import { Button } from 'react-bootstrap'
import { incProgress } from '../../../store/actions/estimateAction';
import { connect } from 'react-redux'

const SectionB = (props) => {

    const {incProgress} = props;
    const [count, setCount] = useState(0);
    
    const clicked = () => {
        if (count === 0) {
            incProgress();
            setCount(1);
        }
    }

    const pre = () => {
        document.getElementById("sectionA").scrollIntoView();
    }

    return (
        <div className='quection'>
            <h2 id="sectionB" className='mb-5'>We'd love to learn more<br />about your project</h2>
            <p>Let's get started and see if Homebound is right for you.</p>
            
            <Button
                variant="dark"
                size="md"
                className="rounded-pill button"
                onClick={clicked}>
                    Next
            </Button>
            <label
                style={{ margin: '0 10px' }}
                className="mt-5"
                onClick={pre}>
                    Previous
            </label>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        incProgress: () => dispatch(incProgress()),
    };
}

export default connect(null, mapDispatchToProps)(SectionB)
