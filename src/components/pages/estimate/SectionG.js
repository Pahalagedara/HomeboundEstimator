import { Button } from 'react-bootstrap'
import {React,useState, useEffect} from 'react'
import { incProgress, decProgressTo, isNaturalDisaster } from '../../../store/actions/estimateAction'
import { connect } from 'react-redux'
import RadioButton from '../../RadioButton'

const SectionG = (props) => {

    const { incProgress,decProgress, decProgressTo, isNaturalDisaster,visibleLevel} = props;
    const [buttonDisable, setbuttonDisable] = useState(true);
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(null);

    

    const clicked = () => {
        if (count === 0) {
            incProgress();
            setCount(1);
        }
        isNaturalDisaster(value);
    }
    const pre = () => {
        document.getElementById("sectionF").scrollIntoView();
    }

    useEffect(() => {
        if (value !== null) {
            setbuttonDisable(false);
        }
        if (count !== 0) {
            decProgressTo(visibleLevel);
            setCount(0);
        }
    },[value,visibleLevel])
    
    return (
        <div className='quection'>
            <h2 id="sectionG" className='mb-5'>Were you affected by<br/>a natural disaster?</h2>
            <p className='mb-5'>Homebound's rebuild specialists have helped many homeowners navigate the challenges of rebuilding.</p>

            <fieldset className='radio_filed'>
                <RadioButton value={"I was affected by a disaster."} sValue={true} name={"sectionG"} setValue={setValue}/>
                <RadioButton value={"I was not affected by any disaster."} sValue={false} name={"sectionG"} setValue={setValue}/>
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
        incProgress: () => dispatch(incProgress()),
        isNaturalDisaster: (value) => dispatch(isNaturalDisaster(value)),
        decProgressTo: (value) => dispatch(decProgressTo(value))
    }
}
export default connect(null, mapDispatchToProps)(SectionG);
