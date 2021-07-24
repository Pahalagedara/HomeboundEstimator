import React from 'react'
import { Button } from 'react-bootstrap'

const QuectionG = () => {
    return (
         <div className='quection'>
            <h2>About you</h2>
                <br />
            <p>We will only use your information
                to respond to your request.
            </p>
            <form>
                <label for='fname'>First Name</label>
                <input type='text' id='fname' />
                
                <label for='lname'>Last Name</label>
                <input type='text' id='lname' /><br />
                
                <label for='phone'>Phone</label>
                <input type='text' id='phone' />

                <label for='email'>Email</label>
                <input type='email' id='email' /><br />

                <label for='msg'>Something else we should know?</label>
                <input type='text' id='msg'/>
            </form>

                 <Button variant="dark" size="md" className="rounded-pill ">
                    Next
                </Button>
                <label style={{margin:'0 10px'}} className="mt-5">Previous</label>
        </div>
    )
}

export default QuectionG
