import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars,FaTimes } from 'react-icons/fa'
import './Navbar.css'
import logo from '../images/logo1.png'
function Navbar() {
    const [click, setclick] = useState(false);
    const handleClick = ()=> setclick(!click);
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <div className="logo">
                        <NavLink to='/' className="navbar-logo">
                        <img src={logo} alt="logo" width="89"/>
                        </NavLink>
                    </div>
                </div>
                
                <div className="menu-icons" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <div className={click ? 'nav-lists active' : 'nav-lists'}>
                    <ul className="nav-menu">
                        <li className="nav-items">  
                            <NavLink to='/'  exact activeClassName="navbar__link--active" className="nav-links">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-items">  
                            <NavLink to='/About'  activeClassName="navbar__link--active" className="nav-links">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-items submenu">  
                            <NavLink to='/Courses' activeClassName="navbar__link--active" className="nav-links">
                                Courses
                            </NavLink>
                            <ul className="dropdown">
                                <li>
                                <NavLink to='/Courses/Phonix' activeClassName="navbar__link--active" className="nav-links">
                                    Phonix
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to='/Courses/Beginner'  activeClassName="navbar__link--active" className="nav-links">
                                    Beginner
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to='/Courses/Advanced' activeClassName="navbar__link--active" className="nav-links">
                                    Advanced
                                </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-items">  
                            <NavLink to='/Contact' activeClassName="navbar__link--active" className="nav-links">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}

export default Navbar
