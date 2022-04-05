import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div><h2 className='text'>Drones</h2></div>
            <div>
                <a href="/">Home</a>
                <a href="/reviews">Reviews</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/blogs">Blogs</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;