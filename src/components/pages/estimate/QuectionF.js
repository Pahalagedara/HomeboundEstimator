import React from 'react'
import { Button } from 'react-bootstrap'

const QuectionF = () => {
    return (
        <div className='quection'>
            <h2>Do you have a budget in mind</h2>
            <h2>for your completed home?</h2>
                <br /><br />
            <p>Our team of experts has built over 5,000+ homes collectively, over decades of working
                in custom home building. Our experience spans diversified builds from less than
                $500K to over $5M.
            </p>

            <fieldset className='radio_filed'>
                <input type="radio" id='Under $500K' value="Under $500K" name="groupF"/>
                <label for='Under $500K' className='group'>Under $500K</label><br />

                <input type="radio" id='$500K to $1 Million' value="$500K to $1 Million" name="groupF"/>
                <label for='$500K to $1 Million' className='group'>$500K to $1 Million</label><br />

                <input type="radio" id='$1 Million to $1.5 Million' value="$1 Million to $1.5 Million" name="groupF"/>
                <label for='$1 Million to $1.5 Million' className='group'>$1 Million to $1.5 Million</label><br />

                <input type="radio" id='$1.5 Million to $2 Million' value="$1.5 Million to $2 Million" name="groupF"/>
                <label for='$1.5 Million to $2 Million' className='group'>$1.5 Million to $2 Million</label><br />
           
                                
                <input type="radio" id='Over $2 Million' value="Over $2 Million" name="groupF"/>
                <label for='Over $2 Million' className='group'>Over $2 Million</label><br />
            </fieldset>

                 <Button variant="dark" size="md" className="rounded-pill ">
                    Next
                </Button>
                <label style={{margin:'0 10px'}} className="mt-5">Previous</label>
        </div>
    )
}

export default QuectionF