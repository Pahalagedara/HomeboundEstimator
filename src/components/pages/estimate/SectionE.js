import { Button } from 'react-bootstrap'
import {React,useState,useEffect} from 'react'
import { setBudget, setProgress } from '../../../store/actions/estimateAction'
import { connect } from 'react-redux'
import RadioButton from '../../RadioButton'

const SectionE = (props) => {

    const {setBudget,setProgress} = props;
    const [value, setValue] = useState(null);
    const [buttonDisable, setbuttonDisable] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setBudget(value)
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
            <h2 className='mb-5'>Do you have a budget in mind<br /> for your completed home?</h2>
            <p className='mb-7'>Our team of experts has built over 5,000+ homes collectively, over decades of working
                in custom home building. Our experience spans diversified builds from less than
                $500K to over $5M.</p>

            <fieldset className='radio_filed'>
                <RadioButton value={"Under $500K"} name={"sectionE"} setValue={setValue} />
                <RadioButton value={"$500K to $1 Million"} name={"sectionE"} setValue={setValue} />
                <RadioButton value={"$1 Million to $1.5 Million"} name={"sectionE"} setValue={setValue} />
                <RadioButton value={"$1.5 Million to $2 Million"} name={"sectionE"} setValue={setValue} />
                <RadioButton value={"Over $2 Million"} name={"sectionE"} setValue={setValue} />
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
        setBudget: (value) => dispatch(setBudget(value)),
        setProgress: () => dispatch(setProgress())
    }
}
export default connect(null, mapDispatchToProps)(SectionE)