import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div className="card mb-0 about-page my-5">
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                    <img src="https://cdn.pixabay.com/photo/2014/09/03/22/11/professor-435106_1280.jpg" className="img-fluid rounded-start about-img" alt="..."/>
                </div>
                <div className="col">
                    <div className="card-body about-info text-white fs-5">
                        <h2 className="card-title text-warning fw-bold">Our Classes</h2>
                        <h1 className="text-white fw-bold">About School</h1>
                        <p className="card-text text-warning">We are working with music more than 30 years. we are all love it . Our passionate work is music.. All of our music Instructor here are world class position ..  </p>
                        <span>To create a heaven melody with us Enroll and Stay with us.</span>
                        <p className="text-warning">Thank You.</p>
                        <p className="card-text"><small className="text-muted">Music is mysterious . Find it in yourself.</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;