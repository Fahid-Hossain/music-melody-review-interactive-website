import React from 'react';
import { useEffect } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import PartOfCourse from '../PartOfCourse/PartOfCourse';

const Home = () => {
    //title set
    useEffect(()=>{
        document.title = "Music & melody_home"
    },[])
    return (
        <div>
            <PartOfCourse></PartOfCourse>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;