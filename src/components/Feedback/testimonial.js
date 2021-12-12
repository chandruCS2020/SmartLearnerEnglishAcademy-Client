import React from 'react'
import { feedbackList } from './Feedbacklist';

import Rating from '@mui/material/Rating';
import './testimonial.css';

function testimonial() {
    return (
        <>
            <div className="Testimonials">
                <div className="Testimonial-heads">
                    <h1 className="Testimonial-title">
                        Testimonials
                    </h1>
                </div>
                <div className="Testimonial-body">
                {feedbackList.map(elem => (
                    <div className="Testimonial-card" key={elem.id}>
                        <div className="Testimonial-card-head">
                        <h1 className="Testimonial-name">{elem.name}</h1>
                        <Rating className="Testimonial-rating" name="read-only" value={elem.star} readOnly />
                        </div>
                        <p className="Testimonial-description">{elem.feedback}</p>
                    </div>
                ))}

                </div>
            </div>
            
        </>
    )
}

export default testimonial
