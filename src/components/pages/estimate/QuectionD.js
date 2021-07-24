import React from 'react'
import { Button } from 'react-bootstrap'

const QuectionD = () => {
    return (
        <div className='quection'>
            <h2>Do you already have</h2>
            <h2>land to build on?</h2>
            <br /><br />
            <p>We can help you find a lot if you don't already have one.</p>

             <fieldset className='radio_filed'>
                <input type="radio" id='I need to buy land' value="I need to buy land." name="groupD"/>
                <label for='I need to buy land.' className='group'>I need to buy land.</label><br />

                <input type="radio" id='I already have existing land to build on' value="I already have existing land to build on" name="groupD"/>
                <label for='I already have existing land to build on' className='group'>I already have existing land to build on</label><br />
            </fieldset>

              <Button variant="dark" size="md" className="rounded-pill ">
                    Next
            </Button>
            <label style={{margin:'0 10px'}} className="mt-5">Previous</label>
       
        </div>
    )
}

export default QuectionD
