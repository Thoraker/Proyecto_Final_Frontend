import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const FormRegister = () => {
    // const [name, setName] = useState('')
    // const [lastName, ]
    // const [Email, setEmail] = useState('')


        return (
            <div>
                <Form>
                    <Form.Group as={Col} xs={5}>
                        <Row >
                            <Form.Group Col xs="auto" controlId="validationCustom01">
                                <Form.Label>Name</Form.Label>
                                <Form.Control required type='text' placeholder='Bev' />
                                {/* <Form.Control.Feedback> Listo!  </Form.Control.Feedback>
                            </Form.Group> */}

                            <Form.Group controlId="validationCustom02"/>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control required type='text' placeholder='Poni' />
                                {/* <Form.Control.Feedback> Listo!  </Form.Control.Feedback> */}
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type="email" placeholder="Enter email" />
                                {/* <Form.Control.Feedback type="invalid">
                                    Please write your Email.
                                </Form.Control.Feedback> */}
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