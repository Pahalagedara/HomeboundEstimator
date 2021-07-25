import {React,useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { changeLandAvailability, setProgress } from '../../../store/actions/estimateAction'
import { connect } from 'react-redux'
import RadioButton from '../../RadioButton'

const SectionD = (props) => {

    const {changeLandAvailability,setProgress} = props;
    const [value, setValue] = useState(null);
    const [buttonDisable, setbuttonDisable] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        changeLandAvailability(value)
        if (value != null) {
            setbuttonDisable(false);
        }
    }, [value])
    

    const clicked = () => {
        if (count == 0) {
            setProgress();
            setCount(1)
        }
    }
    
    return (
        <div className='quection'>
            <h2 className='mb-5'>Do you already have<br/>land to build on?</h2>
            <p className='mb-5'>We can help you find a lot if you don't already have one.</p>

            <fieldset className='radio_filed'>
                <RadioButton value={"I need to buy land."} name={"sectionD"} setValue={setValue} />
                <RadioButton value={"I already have existing land to build on."} name={"sectionD"} setValue={setValue}/>
            </fieldset>

            <Button
                variant="dark"
                size="md"
                className="rounded-pill button"
                onClick={clicked}
                disabled={ buttonDisable}>
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
        changeLandAvailability: (value) => dispatch(changeLandAvailability(value)),
        setProgress: () => dispatch(setProgress())
    }
}

export default connect(null, mapDispatchToProps)(SectionD)
