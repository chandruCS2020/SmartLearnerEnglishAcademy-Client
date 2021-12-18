import React from 'react';
import { PhonicsLevel } from '../../helper/separatecourses'
import { data } from '../../helper/courseslist'
import '../style/style.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Phonix() {
    return (
        <>
            <section className="Courses-head-card">
                <div className="Courses-i">
                    <h1 className="Courses-head">{data[0].Title}</h1>
                    <p className="courses-info">{data[0].Description}</p>
                </div>
                {
                    PhonicsLevel.map((item) =>
                        <div>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography sx={{fontSize:35,color:'#006FBF'}}>{item.name}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="courses_level">
                                        <div className="courses__info" style={{marginBottom:'20px'}}>{item.description}</div>
                                    </div>
                                    <div className="Courses-list" >
                                        {item.courses.map((sub)=>
                                            <div className="courses-card" key={sub.id} id={item.level}>
                                                <h1 className="courses-title__i">{sub.list}</h1>
                                            </div> 
                                        )}
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            
                        </div>

                    )
                }
                
                {/* <div className="Courses-list">
                {PhonicsSilver.map(elem => (
                        <div className="courses-card" key={elem.id}>
                            <h1 className="courses-title">{elem.list}</h1>
                        </div>
                    ))}
                </div> */}
            </section>
        </>
    )
}

export default Phonix
