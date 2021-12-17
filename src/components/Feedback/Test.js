import React, { useState , useEffect } from 'react'
import Rating from '@mui/material/Rating';
import axios from 'axios';
import './testimonial.css';

import { Avatar, Card, Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
function Test() {
    const [testimonials, settestimonials] = useState([]);
    const [Index, setIndex] = useState(0);
    const NextArrow = ({ onClick }) => {
        return (
        <div className="arrow next"  style={{borderRadius:'50%',padding:'10px'}} onClick={onClick}>
            <FaArrowRight style={{display:'flex',alignItems:'center'}} />
        </div>
        );
    };
    
    const PrevArrow = ({ onClick }) => {
        return (
        <div className="arrow prev" style={{borderRadius:'50%',padding:'10px'}} onClick={onClick}>
            <FaArrowLeft style={{display:'flex',alignItems:'center'}}/>
        </div>
        );
    };
    
    const settings = {
        infinite: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 1000*5,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setIndex(next),
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
            }
        ]
    };
    useEffect(()=>{
        axios
        .get("http://localhost:3000/testimonials",{withCredentials:true})
        .then(response => {
            if(response.status===200){
                settestimonials(response.data)
                
            }else{
                settestimonials([])
            }
        })
        .catch(error => {
            console.log("Register details");
        });
    },[]);
    return (
        <>
            <div className="Testimonials">
                <div className="Testimonial-heads">
                    <h1 className="Testimonial-title">
                        Our <span className="secondary-name">Testimonials</span>
                    </h1>
                </div>
                <Grid  spacing={2} 
                sx={{padding:'30px'}}
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center">
                    <Slider {...settings}>
                {testimonials.map((elem,idx) => (
                    <Grid className={idx === Index ? "slide activeSlide" : "slide"} item key={elem._id} >
                    <Card sx={{height:'100%',width:'100%' ,transition:'all 0.5s ease',margin:'0 10px',
                                '&:hover': {boxShadow:' -1px 9px 32px -7px rgba(0,0,0,0.7)'}}}>
                    <Grid 
                    sx={{
                        height: 150,
                        backgroundColor: 'primary.dark',
                        '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                        justifyContent:'center',
                        alignItems:'center'
                        },
                    }}
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    >
                        <Avatar  sx={{width: 100 ,height: 100 ,fontSize:60,textTransform:'uppercase'}}>{elem.name[0]}</Avatar>
                    </Grid>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div" sx={{textTransform:'capitalize'}}>
                            {elem.name}
                            </Typography>
                            <Rating className="Testimonial-rating" name="read-only" value={elem.rating} readOnly />
                            <p variant="body2" color="text.secondary"  className='testmonials-content' style={{height:150, overflowY: "auto" ,overflowX:'hidden',opacity:0.8,fontWeight:300}}>
                            {elem.feedback}
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
                </Slider>
                </Grid>
                </div>
        </>
    )
}

export default Test
