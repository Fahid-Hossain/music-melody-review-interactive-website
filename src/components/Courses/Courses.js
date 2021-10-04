import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./Courses.css"

const Courses = () => {
    //useState for courses
    const [courses, setCourses] = useState([]);
    //useEffect for courses data load
    useEffect(() => {
        fetch("./courses.json")
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [])
    return (
        <div>
            <h1 className="AllCoursesHeading"><i>Course Curriculum and classes.</i></h1>

            <Row xs={1} md={3} className="g-4 m-4 p-3">
                {
                    courses.map(course => <Col key={course.key}>
                        <Card className="card">
                            <Card.Img variant="top" src={course.imgUrl} style={{width:"320px",margin:"auto"}}/>
                            <Card.Body>
                                <Card.Title>
                                    <h2 className="text-dark fw-bold">{course.instrument} <span className="text-danger">Classes</span></h2>
                                </Card.Title>
                                <Card.Text>
                                    {course.courseInfo}
                                </Card.Text>
                                <h5>Duration: {course.courseDuration}</h5>
                                <h5>CourseFee: {course.courseFee}</h5>
                            </Card.Body>
                            <button className="btn btn-secondary w-50 mx-auto">Admit Now</button>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default Courses;