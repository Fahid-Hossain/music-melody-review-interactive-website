import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./Courses.css"

const Courses = () => {
    //title set
    useEffect(()=>{
        document.title = "Courses"
    },[])
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
            <Row xs={1} md={3} className="g-4 mx-5 px-4">
                {
                    courses.map(course => <Col key={course.key}>
                        <Card className="card p-2">
                            <Card.Img variant="top" src={course.imgUrl} style={{width:"300px",margin:"auto"}}/>
                            <Card.Body>
                                <Card.Title>
                                    <h2 className="text-dark fw-bold">{course.instrument} <span className="text-danger">Classes</span></h2>
                                </Card.Title>
                                <Card.Text>
                                    {course.courseInfo}
                                </Card.Text>
                                <h6><i className="far fa-calendar-alt"></i>  {course.courseDuration}</h6>
                                <h6><i className="fas fa-money-check-alt"></i> {course.courseFee}</h6>
                            </Card.Body>
                            <button className="btn-style px-4 mx-auto">Enroll Now</button>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default Courses;