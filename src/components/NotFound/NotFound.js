import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="error">
            <h1>Oopps!</h1>
            <h1 className="error-heading">404-Page Not Found</h1>
            <p>The page you are looking for might have been removed or its temporary unavaiavail</p>
            <Link to="/home"><button className="btn btn-success">Go to HomePage</button></Link>
        </div>
    );
};

export default NotFound;