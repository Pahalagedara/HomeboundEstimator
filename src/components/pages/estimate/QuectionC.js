import React from 'react'
import { Button } from 'react-bootstrap'

const QuectionC = () => {
    return (
        <div className='quection'>
            <h2>Where would you</h2>
            <h2>like to build?</h2>
            <br /><br />
            <p>Let's see if you're in our operating markets.</p>

            <fieldset className='radio_filed'>
                <input type="radio" id='North Bay Area' value="North Bay Area" name="groupC"/>
                <label for='North Bay Area' className='group'>North Bay Area</label><br />

                <input type="radio" id='South Bay Area' value="South Bay Area" name="groupC"/>
                <label for='North Bay Area' className='group'>South Bay Area</label><br />

                <input type="radio" id='East Bay' value="East Bay" name="groupC"/>
                <label for='North Bay Area' className='group'>East Bay</label><br />

                <input type="radio" id='Los Angeles Metro Area' value="Los Angeles Metro Area" name="groupC"/>
                <label for='North Bay Area' className='group'>Los Angeles Metro Area</label><br />

                <input type="radio" id='Bahamas' value="Bahamas" name="groupC" />
                <label for='North Bay Area' className='group'>Bahamas</label><br />

                <input type="radio" id='Austin Metro Area' value="Austin Metro Area" name="groupC"/>
                <label for='North Bay Area' className='group'>Austin Metro Area</label><br />

                <input type="radio" id='Other' value="Other" name="groupC"/>
                <label for='North Bay Area' className='group'>Other</label><br />
            </fieldset>

            <Button variant="dark" size="md" className="rounded-pill ">
                    Next
            </Button>
            <label style={{margin:'0 10px'}} className="mt-5">Previous</label>
        
        </div>
    )
}

export default QuectionC
