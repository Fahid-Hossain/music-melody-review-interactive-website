import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';
import "./PartOfCourse.css"

const PartOfCourse = () => {
    // useState for courses
    const [courses, setCourses] = useState([]);
    //useEffect for courses data load 
    useEffect(() => {
        fetch("./courses.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className="courseBg">
                <h1 className="courseHeading"><i>Find Your Best Music Teacher . Stay with Melody .</i></h1>
             <Link to="/contact">
             <button className="btn btn-outline-secondary px-5 fw-bold">
                   Sign In
                </button>
             </Link>
            </div>
                <h1 className="mt-3 fw-bold text-secondary ">Part Of Courses</h1>
            <Row xs={1} md={4} className="g-4 m-3 p-0">
                {
                    courses.slice(0,4).map(course => <SingleCourse course={course} key={course.key}></SingleCourse>)
                }
            </Row >
            <Link to="/courses">
            <button className="btn btn-outline-danger fw-bold px-5 mt-2 mb-4">View All</button>
            </Link>
        </div>
    );
};

export default PartOfCourse;