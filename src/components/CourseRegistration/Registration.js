import React from 'react';
import { useState } from 'react';
import './registration.css';
export default function Registration() {
    const [courses, setcourses] = useState('');
    const [qualification, setqualification] = useState('');
    const [otherqualification, setotherqualification] = useState('');
    const [state, setstate] = useState('');
    const [otherstate, setotherstate] = useState('');
    console.log(courses);
    console.log(otherqualification);
    console.log(otherstate);
    const [formResaponse, setformResaponse] = useState([]);
    const handleChange = (e)=>{
        setformResaponse({...formResaponse,[e.target.name]:e.target.value})
    }
    const handleCourses = (e)=>{
        setcourses(e.target.value);
        setformResaponse({...formResaponse,'course':e.target.value})
    }
    const handleQualification = (e)=>{
        setotherqualification(e.target.value);
        setformResaponse({...formResaponse,'qualification':e.target.value})
    }
    const handleState = (e)=>{
        setotherstate(e.target.value)
        setformResaponse({...formResaponse,'state':e.target.value})
    }
    console.log(formResaponse);
    return(
        <div className='registration'>
            <div className="regitration-form">
                <div className="register_header">
                    <h1 className="register_title">Registration Form</h1>
                </div>
                <div className="register_body">
                    <form>
                        <div className="twoContainer">
                            <div className="input_container">
                                <label>salutation <span>*</span></label>
                                <select name="salutation" defaultValue='Mr' onChange={handleChange}>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Master">Master</option>
                                    <option value="Ms">Ms</option>
                                    <option value="Miss">Miss</option>
                                </select>
                            </div>
                            <div className="input_container">
                                <label htmlFor="">Name <span>*</span></label>
                                <input type="text" name="name" placeholder='Enter name' onChange={handleChange} required/>
                            </div>
                        </div>
                        <div className="input_container">
                            <label>Email <span>*</span></label>
                            <input type="text" name="email" placeholder='Enter email' onChange={handleChange} required/>
                        </div>
                        <div className="input_container">
                            <label>Phone Number <span>*</span></label>
                            <input type="tel" name="mobilenumber" placeholder='Enter phone number'  onChange={handleChange} required/>
                        </div>
                        <div className="input_container">
                            <label>Whatsapp Number <span>*</span></label>
                            <input type="tel" name="whatsappnumber" placeholder='Enter whatsapp number'  onChange={handleChange} required/>
                        </div>
                        <div className="input_container">
                            <label>Class/Year/Years of experience  <span>*</span></label>
                            <input type="text" name="standard" placeholder='Enter Class/Year/Years of experience'  onChange={handleChange} required/>
                        </div>
                        <div className="input_container">
                            <label>Institution Name  <span>*</span></label>
                            <input type="text" name="institue" placeholder='Enter Institute name '  onChange={handleChange} required/>
                        </div>
                        <div className="input_container">
                            <label>Courses <span>*</span></label>
                            <select name="referral" onChange={handleCourses} required>
                                <option></option>
                                <option value="Phonics">Phonics</option>
                                <option value="Rookie">Rookie</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>
                        {courses==='Phonics' && 
                            <>
                                <div className="input_container">
                                    <label>Phonics Courses<span>*</span></label>
                                    <select name="learnt" defaultValue='42 SOUNDS AND BLENDING' required onChange={handleChange}>
                                        <option value="42 SOUNDS AND BLENDING">42 SOUNDS AND BLENDING</option>
                                        <option value="SPELLING RULES">SPELLING RULES</option>
                                    </select>
                                </div>
                                <div className="input_container">
                                    <label>Why do you want to learn phonics?  <span>*</span></label>
                                    <input type="text" name="aboutPhonics" placeholder=''  onChange={handleChange} required/>
                                </div>
                            </>
                        
                        }
                        <div className="input_container">
                            <label>Qualification <span>*</span></label>
                            <select name="Qualification" required defaultValue='PRE-PRIMARY (KG)' onChange={(e)=>{setqualification(e.target.value);handleQualification(e)}}>
                                <option value="PRE-PRIMARY (KG)">PRE-PRIMARY (KG)</option>
                                <option value="PRIMARY (1-3)">PRIMARY (1-3)</option>
                                <option value="MIDDLE SCHOOL (4-8)">MIDDLE SCHOOL (4-8)</option>
                                <option value="HIGH SCHOOL (9-12)">HIGH SCHOOL (9-12)</option>
                                <option value="COLLEGE">COLLEGE</option>
                                <option value="WORKING">WORKING</option>
                                <option value="HOUSE WIFE">HOUSE WIFE</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        {qualification==='Others' && 
                            <div className="input_container">
                                <label>Other Qualification <span>*</span></label>
                                <input type="text" name="others" onChange={handleQualification} required/>
                            </div>
                        }
                        <div className="input_container">
                            <label>State <span>*</span></label>
                            <select name="State" defaultValue='TAMILNADU' required onChange={(e)=>{setstate(e.target.value);handleState(e)}}>
                                <option value="TAMILNADU">TAMILNADU</option>
                                <option value="ANDHRA PRADESH">ANDHRA PRADESH</option>
                                <option value="KERALA">KERALA</option>
                                <option value="KARNATAKA">KARNATAKA</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        {state==='Others' && 
                            <div className="input_container">
                                <label>Other State <span>*</span></label>
                                <input type="text" name="otherstate"   onChange={handleState} required/>
                            </div>
                        }
                        <div className="input_container">
                            <label>Have you learnt with SEA? <span>*</span></label>
                            <select name="learnt" defaultValue='Yes' required  onChange={handleChange}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="input_container">
                            <label>How do you know about this course? <span>*</span></label>
                            <select name="referral" defaultValue='Referral' required  onChange={handleChange}>
                                <option value="Referral">Referral</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Instagram">Instagram</option>
                            </select>
                        </div>
                        <div className="input_container">
                            <label>Payment Method <span>*</span></label>
                            <select name="paymentMethod" defaultValue='Google Pay' required onChange={handleChange}>
                                <option value="Google Pay">Google Pay</option >
                                <option value="Online Transaction">Online Transaction</option>
                                <option value="Cash">Cash</option>
                            </select>
                        </div>
                        <div className="input_container">
                            <label>Have you paid?  <span>*</span></label>
                            <select name="payment" defaultValue='Yes'  onChange={handleChange} required>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="input_container">
                            <label>Address  <span>*</span></label>
                            <textarea placeholder='Enter address' name='address'  onChange={handleChange} required rows={10}></textarea>
                        </div>
                        <div className="input_container">
                            <label>Feedback  <span>*</span></label>
                            <textarea placeholder='Enter Feedback' name='address'  onChange={handleChange} required rows={10}></textarea>
                        </div>
                        <button className='btn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    ); 
}
