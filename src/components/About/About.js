import React from 'react'
import { Aboutlist } from '../helper/AboutList';
import './style.css';
import cdimg from '../images/english.jpeg'
import { Link } from 'react-router-dom';
function About() {
    return (
        <>
            <section className='section_img About_img'>
                <div className="header_i">
                    <h1 className="name_i"><span className="secondary-name">About Us</span></h1>
                </div>
            </section>
            <div className="about">
                <div className="company-details">
                    <div className="comapany__details__img">
                        <img src={cdimg} alt="comapny img" />
                    </div>
                    <div className="company__details__description company_details_i">
                        <p>
                            <Link to='/' style={{fontSize:20}} className='Link'>SMARTLEARN ENGLISH ACADEMY</Link> is a Professional, Friendly, Independent and Exciting place to learn. Our pedagogy provides the vital knowledge and skills to individuals ranging from pre-primary to house wives and also for the private and government organizations/professionals to improve their complete command over the English Language and Personality development. We strive continuously to give the best in terms of quality, service and satisfaction. 
                            We endeavor continually to propagate an environment that would help and encourage our learners to master the communication skills within a prescribed time frame. 
                        </p>
                        <div className="serNever" style={{textAlign:'center',marginTop:10}}><Link to='/' className='Link' style={{fontSize:20}}>SEA NEVER SETTLES</Link></div>
                    </div>
                </div>
                <div className="company-goal">
                    {Aboutlist.map(elem =>(
                        <div className={elem.className} key={elem.id}>
                            <div className="company__logo">
                                <div className="company__inner__logo" id={elem.name}>
                                    <h3>{elem.name}</h3>
                                </div>
                            </div>
                            <div className="company__decription__goal">
                                <p>{elem.description}</p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </>
    )
}

export default About
