import {React,useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { changeLandAvailability, incProgress, decProgressTo } from '../../../store/actions/estimateAction'
import { connect } from 'react-redux'
import RadioButton from '../../RadioButton'

const SectionD = (props) => {

    const {changeLandAvailability,incProgress,decProgressTo,visibleLevel} = props;
    const [value, setValue] = useState(null);
    const [buttonDisable, setbuttonDisable] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (value !== null) {
            setbuttonDisable(false);
        }
        if (count !== 0) {
            decProgressTo(visibleLevel);
            setCount(0);
        }
        changeLandAvailability(value);
    },[value,visibleLevel])
    

    const clicked = () => {
        if (count === 0) {
            incProgress();
            setCount(1);
        }
    }
    const pre = () => {
        document.getElementById("sectionC").scrollIntoView();
    }
    
    return (
        <div className='quection'>
            <h2 id="sectionD" className='mb-5'>Do you already have<br/>land to build on?</h2>
            <p className='mb-5'>We can help you find a lot if you don't already have one.</p>

            <fieldset className='radio_filed'>
                <RadioButton value={"I need to buy land."} sValue={"Need to buy land"} name={"sectionD"} setValue={setValue} />
                <RadioButton value={"I already have existing land to build on."} sValue={"I have land"} name={"sectionD"} setValue={setValue}/>
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
                className="mt-5"
                onClick={pre}>
                Previous
            </label>
       
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLandAvailability: (value) => dispatch(changeLandAvailability(value)),
        incProgress: () => dispatch(incProgress()),
        decProgressTo: (value) => dispatch(decProgressTo(value)),
    }
}

export default connect(null, mapDispatchToProps)(SectionD)
