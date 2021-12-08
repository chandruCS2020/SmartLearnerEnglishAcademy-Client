import React from 'react';
import { Phonixdata } from '../../helper/separatecourses';
import { data } from '../../helper/courseslist'
import '../style/style.css';
function Phonix() {
    return (
        <>
            <section className="Courses-head-card">
                <div className="Courses-i">
                    <h1 className="Courses-head">{data[0].Title}</h1>
                    <p className="courses-info">{data[0].Description}</p>
                </div>
                <div className="Courses-list">
                {Phonixdata.map(elem => (
                        <div className="courses-card">
                            <h1 className="courses-title">{elem.Title}</h1>
                            <p className="course-description">{elem.Description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Phonix
