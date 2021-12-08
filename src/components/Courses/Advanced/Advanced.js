import React from 'react';
import { Advanceddata } from '../../helper/separatecourses';
import { data } from '../../helper/courseslist'
import '../style/style.css';
function Advanced() {
    return (
        <>
            <section className="Courses-head-card">
                <div className="Courses-i">
                    <h1 className="Courses-head">{data[2].Title}</h1>
                    <p className="courses-info">{data[2].Description}</p>
                </div>
                <div className="Courses-list">
                {Advanceddata.map(elem => (
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

export default Advanced
