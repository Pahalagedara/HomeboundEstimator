import React from 'react'
import { Button } from 'react-bootstrap'

const QuectionB = () => {
    return (
        <div className='quection'>
            <h2>We'd love to learn more</h2>
            <h2>about your project</h2>
            <br /><br /><br />
            <p>Let's get started and see if Homebound is right for you.</p>
            
            <Button variant="dark" size="md" className="rounded-pill ">
                    Next
            </Button>
            <label style={{margin:'0 10px'}} className="mt-5">Previous</label>
        </div>
    )
}

export default QuectionB
