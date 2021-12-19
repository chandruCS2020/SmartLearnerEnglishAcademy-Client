import React from 'react'
import styled from 'styled-components';
import Contact from './contact';
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa';
import './style.css'

const ContactContainer = styled.div`
    padding:0 10%;
`
const ContactBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 5%; 
    @media screen and (max-width:960px){
        padding:5% 0;
        flex-direction:column;
        row-gap:10px;
    }
`
const ContactLeft = styled.div`
letter-spacing:3px;
`
const ContactLeftTitle = styled.h1`
font-size:2rem;
color:#006FBF;

`
const ContactLeftSlogan = styled.p`


`
const ContactRight = styled.div`

`
function ContactHome() {
    let url="#"
    return (
        <>
            <section className='section_img contact_img'>
                <div className="header_i">
                    <h1 className="name_i">Contact <span className="secondary-name">Us</span></h1>
                </div>
            </section>
            <ContactContainer>
                <ContactBox>
                    <ContactLeft>
                        <ContactLeftTitle>SmartLearn English Academy</ContactLeftTitle>
                        <ContactLeftSlogan>Speak | Excel | Achieve</ContactLeftSlogan>
                        <div className="social-links">
                            <a href="https://www.instagram.com/smartlearnenglishacademy_sea/" className="instagram social" rel="noreferrer" target="_blank"><FaInstagram /></a>
                            <a href="https://www.facebook.com/Smartlearn-English-Academy-SEA-129448475281427/" className="facebook social" rel="noreferrer" target="_blank"><FaFacebook /></a>
                            <a href={url} className="twitter social" rel="noreferrer" target="_blank"><FaTwitter /></a>
                            <a href={url} className="linkedin social" rel="noreferrer" target="_blank"><FaLinkedin /></a>
                        </div>
                    </ContactLeft>
                    <ContactRight>
                        <Contact />
                    </ContactRight>
                </ContactBox>
            </ContactContainer>
            
        </>
    )
}

export default ContactHome
