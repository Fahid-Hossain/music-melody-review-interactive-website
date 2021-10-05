import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="row contact-us pt-4">
            <h1 className="text-white fw-bold">Contact Us</h1>
            <div className="col-md-6">
                <h2 className="text-warning fw-bold">Sign In to Enroll</h2>
                <Form className="w-75 mx-auto border border-white p-4 my-2 rounded text-white">
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

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="" className="btn btn-primary w-25" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="col-md-6 text-white">
                <h2 className="text-warning fw-bold">Get in Touch</h2>
                <hr />
                <div className="row">
                    <div className="col-md-5">
                        <ul className="ul-list">
                            <li>
                                <h5 className="fw-bold"> <i className="fas fa-map-marker-alt"></i> Adress:</h5>
                                <p>Link Road 5/A , Dhaka</p>
                            </li>
                            <li>
                                <h5 className="fw-bold"> <i className="fas fa-phone"></i> Phone:</h5>
                                <p>555-00-778</p>
                            </li>
                            <li>
                                <h5 className="fw-bold"> <i className="fas fa-envelope-square"></i> Email:</h5>
                                <p className="text-primary fw-bold">music&melody@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 mt-3">
                        <Form className="border border-white p-2 rounded">
                            <fieldset>
                                <Form.Group className="mb-3 mt-4">
                                    <h5 className="fw-bold">Sent Your Message</h5>
                                    <Form.Control id="disabledTextInput" placeholder="Enter Your Name" />
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Form.Control id="disabledTextInput" placeholder="Enter Your email" />
                                </Form.Group>
                                <div className="form-floating text-success">
                                    <textarea className="form-control text-primary" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                                    <label>Your Message</label>
                                </div>

                                <Button className=" btn btn-primary mt-3" type="submit">Submit</Button>
                            </fieldset>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;