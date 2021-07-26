import { Button } from 'react-bootstrap'
import {React,useState,useEffect} from 'react'
import { setBudget, incProgress } from '../../../store/actions/estimateAction'
import { connect } from 'react-redux'
import RadioButton from '../../RadioButton'

const SectionE = (props) => {

    const { setBudget,incProgress} = props;
    const [value, setValue] = useState(null);
    const [buttonDisable, setbuttonDisable] = useState(true);
    const [count, setCount] = useState(0);


    useEffect(() => {                     // for state management
        setBudget(value)
        if (value != null) {
            setbuttonDisable(false);
        }
    }, [value,setBudget])
    

    const clicked = () => {
        if (count === 0) {
            incProgress();
            setCount(1)
        }
    }
    const pre = () => {
       document.getElementById("sectionD").scrollIntoView();
    }

    return (
        <div className='quection'>
            <h2 id="sectionE" className='mb-5'>Do you have a budget in mind<br /> for your completed home?</h2>
            <p className='mb-7'>Our team of experts has built over 5,000+ homes collectively, over decades of working
                in custom home building. Our experience spans diversified builds from less than
                $500K to over $5M.</p>

            <fieldset className='radio_filed'>
                <RadioButton value={"Under $500K"} sValue={"Under $500K"} name={"sectionE"} setValue={setValue} />
                <RadioButton value={"$500K to $1 Million"} sValue={"$500K-$1M"}  name={"sectionE"} setValue={setValue} />
                <RadioButton value={"$1 Million to $1.5 Million"} sValue={"$1M-$1.5M"}  name={"sectionE"} setValue={setValue} />
                <RadioButton value={"$1.5 Million to $2 Million"} sValue={"$1.5M-$2M"}  name={"sectionE"} setValue={setValue} />
                <RadioButton value={"Over $2 Million"} name={"sectionE"} sValue={"Over $2M"} setValue={setValue} />
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
        setBudget: (value) => dispatch(setBudget(value)),
        incProgress: () => dispatch(incProgress())
    }
}
export default connect(null, mapDispatchToProps)(SectionE)