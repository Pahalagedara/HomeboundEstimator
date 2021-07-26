import {React,useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'
import RadioButton from '../../RadioButton'
import { connect } from 'react-redux';
import { addLocation,incProgress } from '../../../store/actions/estimateAction';

const SectionC = (props) => {
    const { incProgress, addLocation } = props;
    const [value, setValue] = useState(null);
    const [buttonDisable, setbuttonDisable] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        addLocation(value);
        if (value != null) {
            setbuttonDisable(false);
        }
    }, [value,buttonDisable,addLocation])
    
    
    const clicked = () => {
        if (count === 0) {
            incProgress();
            setCount(1);
        }
    }

    const pre = () => {
        document.getElementById("sectionB").scrollIntoView();
    }

    return (
        <div className='quection'>
            <h2 id="sectionC" className='mb-5'>Where would you<br />like to build?</h2>
            <p>Let's see if you're in our operating markets.</p>

            <fieldset className='radio_filed'>
                <RadioButton value={"North Bay Area"} sValue={"North Bay Area"} name={"sectionC"} setValue={setValue}/>
                <RadioButton value={"South Bay Area"} sValue={"South Bay Area"} name={"sectionC"} setValue={setValue}/>
                <RadioButton value={"East Bay"} sValue={"East Bay"} name={"sectionC"} setValue={setValue}/>
                <RadioButton value={"Los Angeles Metro Area"} sValue={"Los Angeles Metro Area"} name={"sectionC"} setValue={setValue}/>
                <RadioButton value={"Bahamas"} sValue={"Bahamas"} name={"sectionC"} setValue={setValue}/>
                <RadioButton value={"Austin Metro Area"} sValue={"Austin Metro Area"} name={"sectionC"} setValue={setValue}/>
                <RadioButton value={"Other"} sValue={"Other"} name={"sectionC"} setValue={setValue}/>
            </fieldset>

            <Button
                variant="dark"
                size="md"
                className="rounded-pill button"
                onClick={clicked}
                disabled={buttonDisable}
            >
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
        addLocation: (value) => dispatch(addLocation(value)),
        incProgress: () => dispatch(incProgress())
    }
}
export default connect(null, mapDispatchToProps)(SectionC);
