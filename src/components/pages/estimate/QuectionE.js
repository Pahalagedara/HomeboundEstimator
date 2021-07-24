import React from 'react'
import { Button } from 'react-bootstrap'

const QuectionE = () => {
    return (
        <div className='quection'>
            <h2>Were you affected by</h2>
            <h2>a natural disaster?</h2>
            <br /><br />
            <p>Homebound's rebuild specialists have helped many homeowners navigate the challenges of rebuilding.</p>

             <fieldset className='radio_filed'>
                <input type="radio" id='I was affected by a disaster' value="I was affected by a disaster" name="groupE"/>
                <label for='I was affected by a disaster' className='group'>I was affected by a disaster.</label><br />

                <input type="radio" id='I was not affected by any disaster' value="I was not affected by any disaster" name="groupE"/>
                <label for='I was not affected by any disaster' className='group'>I was not affected by any disaster.</label><br />
            </fieldset>

                <Button variant="dark" size="md" className="rounded-pill ">
                    Next
                </Button>
                <label style={{margin:'0 10px'}} className="mt-5">Previous</label>
       
        </div>
    )
}

export default QuectionE