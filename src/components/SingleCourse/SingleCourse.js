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
                                <h6><i className="far fa-calendar-alt"></i>  {courseDuration}</h6>
                                <h6><i className="fas fa-money-check-alt"></i> {courseFee}</h6>
                            </Card.Body>
                            <button className="btn-style w-50 mx-auto">Enroll Now</button>
                        </Card>
                    </Col>
           
        </div>
    );
};

export default SingleCourse;