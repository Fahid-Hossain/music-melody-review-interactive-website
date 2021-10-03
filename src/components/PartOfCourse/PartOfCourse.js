import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
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
            </div>
                <h1 className="mt-3 fw-bold text-secondary ">Part Of Courses</h1>
            <Row xs={1} md={4} className="g-4 m-3 p-0">
                {
                    courses.slice(0,4).map(course => <SingleCourse course={course} key={course.key}></SingleCourse>)
                }
            </Row >
            <button className="btn btn-outline-success px-5 mt-2 mb-4">View All</button>
        </div>
    );
};

export default PartOfCourse;