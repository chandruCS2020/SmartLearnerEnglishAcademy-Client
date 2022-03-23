import React from 'react';
import { useState } from 'react';
import './registration.css';
import axios from 'axios';
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
        setformResaponse({...formResaponse,'Courses':e.target.value})
    }
    const handleQualification = (e)=>{
        setotherqualification(e.target.value);
        setformResaponse({...formResaponse,'Qualification':e.target.value})
    }
    const handleState = (e)=>{
        setotherstate(e.target.value)
        setformResaponse({...formResaponse,'State':e.target.value})
    }
    console.log(formResaponse);
    const [apiResponse, setapiResponse] = useState('');
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post('https://testapic.herokuapp.com/registerCourse',formResaponse);
            if(res.status===200){
                setapiResponse(res.data);
                document.getElementById('forms').reset();
            }
        }catch(err){
            console.log(err.message);
        }
    }
    return(
        <div className='registration'>
            <div className="regitration-form">
                <div className="register_header">
                    <h1 className="register_title">Registration Form</h1>
                </div>
                {apiResponse!=='' && <h1 className='success'>{apiResponse}</h1>}
                <div className="register_body">
                    <form id='forms' onSubmit={handleSubmit}>
                        <div className="twoContainer">
                            <div className="input_container">
                                <label>salutation <span>*</span></label>
                                <select name="salutation"  onChange={handleChange}>
                                    <option></option>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Master">Master</option>
                                    <option value="Ms">Ms</option>
                                    <option value="Miss">Miss</option>
                                </select>
                            </div>
                            <div className="input_container">
                                <label htmlFor="">Name <span>*</span></label>
                                <input type="text" name="Name" placeholder='Enter name' onChange={handleChange} required/>
                            </div>
                        </div>
                        <div className="input_container">
                            <label>Email <span>*</span></label>
                            <input type="email" name="Email" placeholder='Enter email' onChange={handleChange} required/>
                        </div>
                        <div className="input_container">
                            <label>Phone Number <span>*</span></label>
                            <input type="tel" name="MobileNumber" placeholder='Enter phone number'  onChange={handleChange} required/>
                        </div>
                        <div className="input_container">
                            <label>Whatsapp Number <span>*</span></label>
                            <input type="tel" name="WhatsappNumber" placeholder='Enter whatsapp number'  onChange={handleChange} required/>
                        </div>
                        <div className="input_container">
                            <label>Class/Year/Years of experience  <span>*</span></label>
                            <input type="text" name="Experience" placeholder='Enter Class/Year/Years of experience'  onChange={handleChange} required/>
                        </div>
                        <div className="input_container">
                            <label>Institution Name  <span>*</span></label>
                            <input type="text" name="InstitutionName" placeholder='Enter Institute name '  onChange={handleChange} required/>
                        </div>
                        <div className="input_container">
                            <label>Courses <span>*</span></label>
                            <select name="Courses" onChange={handleCourses} required>
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
                                    <select name="PhonicsCourses"  required onChange={handleChange}>
                                        <option></option>
                                        <option value="Silver">Silver</option>
                                        <option value="Gold">Gold</option>
                                        <option value="Diamond">Diamond</option>
                                        <option value="Phonics training">Phonics Training</option>
                                    </select>
                                </div>
                                <div className="input_container">
                                    <label>Why do you want to learn phonics?  <span>*</span></label>
                                    <input type="text" name="PhonicsAbout" placeholder=''  onChange={handleChange} required/>
                                </div>
                            </>
                        
                        }
                        <div className="input_container">
                            <label>Qualification <span>*</span></label>
                            <select name="Qualification" required onChange={(e)=>{setqualification(e.target.value);handleQualification(e)}}>
                                <option></option>
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
                                <input type="text" name="Qualification" onChange={handleQualification} required/>
                            </div>
                        }
                        <div className="input_container">
                            <label>State <span>*</span></label>
                            <select name="State" required onChange={(e)=>{setstate(e.target.value);handleState(e)}}>
                                <option></option>
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
                                <input type="text" name="State"   onChange={handleState} required/>
                            </div>
                        }
                        <div className="input_container">
                            <label>Have you learnt with SEA? <span>*</span></label>
                            <select name="learntSea"  required  onChange={handleChange}>
                                <option></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className="input_container">
                            <label>How do you know about this course? <span>*</span></label>
                            <select name="ReferralType"  required  onChange={handleChange}>
                                <option></option>
                                <option value="Referral">Referral</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Instagram">Instagram</option>
                            </select>
                        </div>
                        <div className="input_container">
                            <label>Payment Method <span>*</span></label>
                            <select name="paymentMethod"  required onChange={handleChange}>
                                <option></option>
                                <option value="Google Pay">Google Pay</option >
                                <option value="Online Transaction">Online Transaction</option>
                                <option value="Cash">Cash</option>
                            </select>
                        </div>
                        <div className="input_container">
                            <label>Have you paid?  <span>*</span></label>
                            <select name="Paid"   onChange={handleChange} required>
                                <option></option>
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
                            <textarea placeholder='Enter Feedback' name='feedback'  onChange={handleChange} required rows={10}></textarea>
                        </div>
                        <button className='btn' >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    ); 
}
