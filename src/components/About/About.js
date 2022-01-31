import React from 'react'
import { Aboutlist } from '../helper/AboutList';
import './style.css';
import cdimg from '../images/english.jpg';
import admin  from '../images/founder.jpg'
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
                <div className="company-details about_section">
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
                <div className="company-goal about_section">
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
                <div class="about-founder about_section">
                    <div className="left_col">
                        <img src={admin} alt="founder" />
                    </div>
                    <div className="right_col">
                        <div className="founder_Name">
                            <h1 className="firstName">Vigneshwari</h1>
                            <h1 className="lastName">Rajendran</h1>
                        </div>
                        <div className="founder_details_box">
                            <div className="left_details">
                                <span className="about_back">ABOUT</span>
                            </div>
                            <div className="right_details">
                                <p className="founder_details">
                                    Vigneshwari is an Electronics and Communications Engineering graduate.
                                    As  her passion is to become a world class  Communicative English Trainer, 
                                    She decided to pursue her heart' s desire rather than to join a mundane job. 
                                    Even though she has got a lucrative offer in a leading IT company , 
                                    she rejected it and joined a communicative english traning institute as trainer and worked in various schools across the South India.
                                    (Kerala, Karnataka and Tamilnadu).
                                    With more than 5 years experience, she has implemented many creative and fun filled learning processes and improvised pedagogy.  
                                    She is a certified phonics trainer and continuosly strives to be innovative in her expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
