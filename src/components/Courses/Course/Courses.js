import React from 'react'
import { data } from '../../helper/courseslist'
import { Link } from 'react-router-dom';
function Courses() {
    return (
        <>
            <div className="Courses">
                <h1 className="Courses-head">Awesome Courses</h1>
                <p className="Courses-info">Life should serve up its feast of experience in a series of courses</p>
            </div>
            <div className="Courses-list">
            {data.map(elem => (
                    <div className="courses-card" key={elem.id}>
                        <h1 className="course-title">{elem.Title}</h1>
                        <p className="course-description">{elem.Description}</p>
                        <Link to={elem.Links} className='course-link'>Learn More</Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Courses
