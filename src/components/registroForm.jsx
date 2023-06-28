import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';


const FormRegister = () => {
    
    return (
        <div>
            <Form>
                <Form.Group as={Col} xs={5}>
                    <Row >
                        <Form.Group Col xs="auto" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' placeholder='Bev' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type='text' placeholder='Poni' />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Col xs="auto">
                            <Form.Check
                                type="checkbox"
                                id="autoSizingCheck"
                                className="mb-2"
                                label="Remember me"
                            />
                        </Col>
                    </Row>

                    <div className="mt-3 w-75 mx-auto mb-2">
                            <ProgressBar variant="success" 
                                now={completedPercentage}
                                label={`${completedPercentage}%`}
                                visuallyHidden style={{transition:"width 0.5s ease-in-out"}}
                            />
                        </div>                                       

                    <Row>
                        <Col xs="auto">
                            <Button type="submit" className="mb-2">
                                Sing in
                            </Button>
                        </Col>
                    </Row>

                </Form.Group>
            </Form>
        </div >
    )
}

export default FormRegister;