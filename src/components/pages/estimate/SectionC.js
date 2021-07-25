import {React,useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'
import RadioButton from '../../RadioButton'
import { connect } from 'react-redux';
import { addLocation,setProgress } from '../../../store/actions/estimateAction';

const SectionC = (props) => {
    const { setProgress, addLocation } = props;
    const [value, setValue] = useState(null);
    const [buttonDisable, setbuttonDisable] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        addLocation(value);
        if (value != null) {
            setbuttonDisable(false);
        }
    }, [value,buttonDisable])
    
    
    const clicked = () => {
        if (count == 0) {
            console.log(count)
            setProgress();
            setCount(1);
        }
    }

    return (
        <div className='quection'>
            <h2 className='mb-5'>Where would you<br />like to build?</h2>
            <p>Let's see if you're in our operating markets.</p>

            <fieldset className='radio_filed'>
                <RadioButton value={"North Bay Area"} name={"sectionC"} setValue={setValue}/>
                <RadioButton value={"South Bay Area"} name={"sectionC"} setValue={setValue}/>
                <RadioButton value={"East Bay"} name={"sectionC"} setValue={setValue}/>
                <RadioButton value={"Los Angeles Metro Area"} name={"sectionC"} setValue={setValue}/>
                <RadioButton value={"Bahamas"} name={"sectionC"} setValue={setValue}/>
                <RadioButton value={"Austin Metro Area"} name={"sectionC"} setValue={setValue}/>
                <RadioButton value={"Other"} name={"sectionC"} setValue={setValue}/>
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
                className="mt-5">
                
                Previous
            </label>
        
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLocation: (value) => dispatch(addLocation(value)),
        setProgress: () => dispatch(setProgress())
    }
}
export default connect(null, mapDispatchToProps)(SectionC);
