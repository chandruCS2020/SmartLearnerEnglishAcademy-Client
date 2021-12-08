import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { data } from '../helper/courseslist'

function Home() {
    return (
        <>
        <section className="Section section-1">
            <div className="home-quotes">
                <p className="company-slogan-1">
                    <span className="f-letter1">S</span>PEAK |  
                    <span className="f-letter1"> E</span>XCEL |  
                    <span className="f-letter1"> A</span>CHIEVE 
                </p>
                <h1 className="Quotes">
                    IMMERSE IN OUR SEA AND COME OUT AS A PRO
                </h1>
                <div className="home-buttons">
                    <Link to="/"  className="Learn-more">Learn More</Link>
                    <Link to="/Courses" className="See-Cources">See Courses</Link>
                </div>
            </div>
        </section>
        <section className="Section section-2">
            <div className="Courses">
                <h1 className="Courses-head">Awesome Courses</h1>
                <p className="Courses-info">Life should serve up its feast of experience in a series of courses</p>
            </div>
            <div className="Courses-list">
            {data.map(elem => (
                    <div className="courses-card">
                        <h1 className="course-title">{elem.Title}</h1>
                        <p className="course-description">{elem.Description}</p>
                        <Link to={elem.Links} className='course-link'>Learn More</Link>
                    </div>
                ))}
            </div>
        </section>
            
        </>
    )
}

export default Home
