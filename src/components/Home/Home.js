import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Home.css';
import Feedback from '../Feedback/Feedback'
import Courses from '../Courses/Course/Courses';
import WhyDifferent from '../About/WhyDifferent'
import Test from '../Feedback/Test';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home() {
    return (
        <>
        <section className="Section section-1">
            <div className="home-quotes">
                <h1 className="company__name">Smartlearn english academy</h1>
                <p className="company-slogan-1">
                    <span className="f-letter1">S</span>PEAK |  
                    <span className="f-letter1"> E</span>XCEL |  
                    <span className="f-letter1"> A</span>CHIEVE 
                </p>
                <h1 className="Quotes">
                    IMMERSE IN OUR SEA AND COME OUT AS A PRO
                </h1>
                <div className="home-buttons">
                    <Link to="LearnMore"  spy={true} smooth={true} className="Learn-more">Learn More</Link>
                    <NavLink to="/Courses" className="See-Cources">See Courses</NavLink>
                </div>
            </div>
        </section>
        <section className="Section section-2" id='LearnMore'>
            <Courses />
        </section>
        <section className="Section section-3" >
            <WhyDifferent />
        </section>
        <section className="Section section-4">
            <Test />
            
        </section>
        <section className="Section section-5">
            <div className="feedback">
            <div className="feedback-left">
                <div className="feedback-box">
                    <h1 className='feedback-h1'>Need Help ?</h1>
                    <h3 className='feedback-contact'>Contact us</h3>
                    <div className="feedback-btn">
                    <NavLink to='/Contact'>
                        <ArrowForwardIcon  />
                    </NavLink>
                    </div>
                </div>
            </div>
            <div className="feedback-right">
                <Feedback />
            </div>
            </div>
        </section>
            
        </>
    )
}

export default Home
