import {React,useState} from 'react'
import { Button,Form,Row,Col } from 'react-bootstrap'
import { incProgress } from '../../../store/actions/estimateAction'
import { connect } from 'react-redux'

const SectionG = (props) => {
    const { incProgress } = props;
    const [count, setCount] = useState(0);


    const clicked = () => {
        if (count === 0) {
            incProgress();
            setCount(1)
        }
    }
    return (
         <div className='quection'>
            <h2>About you</h2>
                <br />
            <p>We will only use your information
                to respond to your request.
            </p>

                <Form>
                    <Row className="mb-2">
                        <Form.Group as={Col} controlId="formGridFName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text"/>
                        </Form.Group>
                    </Row>
                       <Row className="mb-2">
                            <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridMassage">
                            <Form.Label>Something else we should know?</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                </Form>

                <Button
                    variant="dark"
                    size="md"
                    className="rounded-pill button"
                    onClick={clicked}>
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
        incProgress: () => dispatch(incProgress()),
    }
}
export default connect(null,mapDispatchToProps)(SectionG)
