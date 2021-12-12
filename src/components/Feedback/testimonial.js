import React from 'react'
import { feedbackList } from './Feedbacklist';
import { Avatar, Card, Grid } from '@mui/material';
import { Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
                
                <Grid  spacing={2} 
                container
                direction="row"
                justifyContent="space-evenly">
                {feedbackList.map(elem =>(
                    <Grid item xs={12} sm={3} key={elem.id} >
                        <Card sx={{height:'100%'}}>
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
                                <Rating className="Testimonial-rating" name="read-only" value={elem.star} readOnly />
                                <Typography variant="body2" color="text.secondary">
                                {elem.feedback}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                </Grid>

            </div>
            
        </>
    )
}

export default testimonial
