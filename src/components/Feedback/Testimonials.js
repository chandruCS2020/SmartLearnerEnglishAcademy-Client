import React, { Component } from 'react';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import './testimonial.css';
import { Avatar, Card,  Grid } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
export default class Testimonials extends Component {
    constructor(props){
        super(props)
        this.state = {
            testimonials:[],
            
        }
    }
    async componentDidMount(){
        axios
        .get("https://testapic.herokuapp.com/testimonials",{withCredentials:true})
        .then(response => {
            if(response.status===200){
                this.setState({
                    testimonials:response.data
                })
                
            }else{
                this.setState({
                    testimonials:[]
                })
            }
        })
        .catch(error => {
            console.log("Register details");
        });
    }
    

    render() {
        const { expanded,testimonials } =this.state;
        return (
            <>
                <div className="Testimonials">
                <div className="Testimonial-heads">
                    <h1 className="Testimonial-title">
                        Our <span className="secondary-name">Testimonials</span>
                    </h1>
                </div>
                <Grid  spacing={2} 
                container
                direction="row"
                justifyContent="space-evenly">
                {testimonials.map(elem => (
                    <Grid item xs={12} xl={4} md={5} sm={6} key={elem._id} >
                    <Card sx={{height:'100%' ,transition:'all 0.5s ease',margin:'0 10px',
                                '&:hover': {boxShadow:' -1px 9px 32px -7px rgba(0,0,0,0.7)'
                                            ,transform:'scale(1.03)'}}}>
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
                            <p variant="body2" color="text.secondary"  className='testmonials-content' style={{height: expanded ? 'auto' : 150, overflowY: "auto" ,overflowX:'hidden',opacity:0.8,fontWeight:300}}>
                            {elem.feedback}
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
                </Grid>
                </div>
            
            </>
        )
    }
}
