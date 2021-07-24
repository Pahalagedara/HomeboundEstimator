import React from 'react'
import { Button,ButtonGroup } from 'react-bootstrap'

 const QuectionA = () => {
    return (
        <div className='quection'>
            <h2>What brings you</h2>
            <h2>to our site</h2>
            <br /><br /><br />
            <p>Are you looking at building your own home, or helping us build for others?</p>
            <br />
            <ButtonGroup vertical className="gap-2 rounded-pill">

                <Button variant="dark" size="md" className="rounded-pill">
                    I'm exploring building a home
                </Button>
                
                <Button variant="dark" size="md"className="rounded-pill">
                    I'd like to partner with homebound
                </Button>

            </ButtonGroup>
        </div>
    )
 }
 export default QuectionA;
