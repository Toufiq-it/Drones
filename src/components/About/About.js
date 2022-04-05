import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <h2>Toufiq Islam</h2>
            <Link to="https://www.facebook.com/toufikit/" rel="">This is the contract id</Link>
        </div>
    );
};

export default About;