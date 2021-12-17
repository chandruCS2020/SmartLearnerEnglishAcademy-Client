import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Alert } from '@mui/material';
import Stack from '@mui/material/Stack';



const labels = {
    1: 'Very Poor',
    2: 'Poor',
    3: 'Average',
    4: 'Good',
    5: 'Excellent',
  };

const theme = createTheme();
function reset(){
    const
    firstName=document.getElementById("firstName").value="",
    mobileNumbers=document.getElementById("mobileNumber").value="",
    email=document.getElementById('email').value="",
    feed=document.getElementById('feedback').value="",
    hover=document.getElementById('hover-feed').value="";
}
export default function SignUp() {
    
const [response, setresponse] = useState("");
const [error, seterror] = useState(false)
const [success, setsuccess] = useState(false)
const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const 
    fName= data.get('firstName'),
    mobileNumber=data.get('mobileNumber'),
    emails= data.get('email'),
    feedback= data.get('feedback'),
    rating = data.get('hover-feedback');

   

    const data1 = {
        name : fName,
        mobile : mobileNumber,
        email : emails,
        feedback : feedback,
        rating : rating
    };
    fetch("http://localhost:3000/Feedback",{
        credentials: 'include', // It can be include, same-origin, omit
        method: 'POST', // or 'PUT'
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data1)
    })
    .then((data1)=>{
        if(data1.status===400){
            seterror(true);
        }
        else{
            setsuccess(true);
        }
        return data1.text()
    })
    .then((data)=>{
        setresponse(data);
        reset();    
    })
    .catch((err)=>{
        console.log(err);
        reset();
    })
    
};
var errorDiv;
    if(error){
        errorDiv= <Alert variant="outlined" className="Message" severity="error">
                    {response}
                </Alert>
    }else if(success){
        errorDiv= <Alert variant="outlined" className="Message" severity="success">
        {response}
    </Alert>
    }
const [value, setValue] = React.useState(1);
const [hover, setHover] = React.useState(-1);
return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
        <div className="Section_title">
                <h1 className="Section_head">Feedback <span className="secondary-name">Form</span></h1>
                {/* <p className="Section_info">Life should serve up its feast of experience in a series of courses</p> */}
        </div>
        <Stack sx={{ width: '100%',mt:3 }} spacing={2}>
            {errorDiv}
        </Stack>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    fullWidth
                    id="mobileNumber"
                    label="Mobile Number"
                    name="mobileNumber"
                    autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                <TextField
                required
                fullWidth
                id="feedback"
                label="Feedback"
                name="feedback"
                rows={7}
                variant="outlined"
                multiline
                />
                </Grid>
                <Grid item xs={12}>
                    <Rating
                    name="hover-feedback"
                    id='hover-feed'
                    defaultValue={0} 
                    size="large"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                    setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    {value !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                </Grid>
            
            </Grid>
            
            <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
            Feedback
            </Button>
        </Box>
        </Box>
    </Container>
    </ThemeProvider>
);
}