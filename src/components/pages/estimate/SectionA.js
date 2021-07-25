import {React,useState} from 'react'
import { connect } from 'react-redux'
import { Button,ButtonGroup } from 'react-bootstrap'
import { incProgress } from '../../../store/actions/estimateAction';

const SectionA = (props) => {
    const { incProgress} = props;
    const [count, setCount] = useState(0);
    
    const clicked = () => {
        if (count === 0) {
            incProgress();
            setCount(1)
        }
    }

    return (
        <div className='quection'>
            <h2 className='mb-5'>What brings you <br />to our site</h2>
            
            <p>Are you looking at building your own home, or helping us build for others?</p>
            <br />
            <ButtonGroup vertical className="gap-2 rounded-pill">

                <Button
                    variant="dark"
                    size="md"
                    className="rounded-pill button mb-3"
                    onClick={clicked}>
                    I'm exploring building a home
                </Button>
                
                <Button
                    variant="dark"
                    size="md" className="rounded-pill button">
                    I'd like to partner with homebound
                </Button>

            </ButtonGroup>
        </div>
    )
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        incProgress: () => dispatch(incProgress()),
    };
}

 export default connect(null, mapDispatchToProps)(SectionA);
