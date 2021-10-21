import React from 'react';
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import "./About.css"

const About = () => {
    //title set
    useEffect(()=>{
        document.title = "About us"
    },[])
    return (
        <div className="about-full-page">
            {/* // carousol add start */}
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 carousol-img"
                        src="https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_960_720.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>PERFORMENCE FROM OUR STAFF, CALIFORNIA</h3>
                        <p>Latest stage show from our staff was last 3-july in california.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 carousol-img"
                        src="https://cdn.pixabay.com/photo/2017/03/27/15/13/man-2179313_960_720.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>PERFORMENCE FROM OUR STAFF, DHAKA</h3>
                        <p>Concert hold on last month in Dhaka army stadium.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousol-img"
                        src="https://cdn.pixabay.com/photo/2017/08/06/09/11/people-2590551_960_720.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>PERFORMENCE FROM OUR STAFF, PARIS</h3>
                        <p>Got invitation from paris, one of our member on perfomance.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* // carousol add end */}

            <div className="card mb-0 about-page">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <img src="https://cdn.pixabay.com/photo/2014/09/03/22/11/professor-435106_1280.jpg" className="img-fluid rounded-start about-img" alt="..." />
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
        </div>

    );
};

export default About;