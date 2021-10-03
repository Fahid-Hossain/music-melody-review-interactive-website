import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./SingleCourse.css"

const SingleCourse = (props) => {
    const { instrument, courseInfo, courseDuration, courseFee,imgUrl } = props.course;
    return (
        <div>
                    <Col>
                        <Card className="card">
                            <Card.Img variant="top" src={imgUrl} />
                            <Card.Body>
                                <Card.Title>
                                    <h2 className="text-dark fw-bold">{instrument} <span className="text-danger">Classes</span></h2>
                                </Card.Title>
                                <Card.Text>
                                   {courseInfo}
                                </Card.Text>
                                <h5>Duration: {courseDuration}</h5>
                                <h5>CourseFee: {courseFee}</h5>
                            </Card.Body>
                            <button className="btn btn-secondary w-50 mx-auto">Admit Now</button>
                        </Card>
                    </Col>
           
        </div>
    );
};

export default SingleCourse;