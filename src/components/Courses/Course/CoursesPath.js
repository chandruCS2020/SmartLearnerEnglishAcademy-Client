import React from 'react'
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';

import { data } from '../../helper/courseslist'
import { objective } from '../../helper/courseslist'
import { Link } from 'react-router-dom';
import Icon from "@material-ui/core/Icon";


function CoursesPath() {
    return (
        <>
            <section className='section_img courses_img'>
                <div className="header_i">
                    <h1 className="name_i">Courses</h1>
                </div>
            </section>
            <div className="courses-i-main">
                <div className="courses-objective">
                    <h3 className="courses-objective-head">
                        Courses Objective
                    </h3>
                    <ul className="courses-objective-ul">
                    {objective.map(elem => (
                        <li className="courses-objective-li" key={elem.id}>
                            {elem.List}
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="courses-i-body">
                    
                    {data.map(elem => (
                    <div className={elem.className}>
                        <div className="courses-i-ls-title-bar">
                            <h1 className="courses-i-ls-title">{elem.Title}</h1>
                            <p className="course-i-ls-description">{elem.Description}</p>
                            <p className="duration-days ">
                                    <Icon style={{fontSize: 15}} className='Duration-month'>Duration : <CalendarTodayTwoToneIcon className='icon'/> 6 Months</Icon>
                            </p>
                        </div>
                        <div className="courses-i-buttons"> 
                        <Link to={elem.Links} className='courses-i-link duration-btn'>Learn More</Link>
                        </div>
                    </div>
                    
                ))}
                </div>
            </div>
        </>
    )
}

export default CoursesPath
