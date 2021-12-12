import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Feedback from '../Feedback/Feedback'
import Courses from '../Courses/Course/Courses';
import Testimonials from '../Feedback/Testimonials';

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
        <section className="Section section-2" id='learnMore'>
            <Courses />
        </section>
        <section className="Section section-3">
            <Testimonials />
            
        </section>
        <section className="Section section-4">
        <Feedback />
        </section>
            
        </>
    )
}

export default Home
