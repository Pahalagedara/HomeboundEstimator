import { Button } from 'react-bootstrap'
import {React,useState, useEffect} from 'react'
import { setProgress } from '../../../store/actions/estimateAction'
import { connect } from 'react-redux'
import RadioButton from '../../RadioButton'

const SectionG = (props) => {

    const { setProgress } = props;
    const [buttonDisable, setbuttonDisable] = useState(true);
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(null);
    

    const clicked = () => {
        if (count == 0) {
            setProgress();
            setCount(1)
        }
    }

    useEffect(() => {
        if (value != null) {
            setbuttonDisable(false);
        }
    },[value])
    
    return (
        <div className='quection'>
            <h2 className='mb-5'>Were you affected by<br/>a natural disaster?</h2>
            <p className='mb-5'>Homebound's rebuild specialists have helped many homeowners navigate the challenges of rebuilding.</p>

            <fieldset className='radio_filed'>
                <RadioButton value={"I was affected by a disaster."} name={"sectionG"} setValue={setValue}/>
                <RadioButton value={"I was not affected by any disaster."} name={"sectionG"} setValue={setValue}/>
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
        setProgress: () => dispatch(setProgress()),
    }
}

export default connect(null, mapDispatchToProps)(SectionG);
