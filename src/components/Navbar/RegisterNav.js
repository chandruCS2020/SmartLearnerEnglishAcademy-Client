import './RegisterNav.css';
import React from 'react';
import { Link } from 'react-router-dom';

function RegisterNav() {
    return (
        <>
            <div  className="Register-nav">
                <Link to='/Contact' className="Contact-navlink">Contact Us</Link>
                <Link to='/Register' className="Register-navlink">Register</Link>
            </div>
        </>
    )
}

export default RegisterNav
