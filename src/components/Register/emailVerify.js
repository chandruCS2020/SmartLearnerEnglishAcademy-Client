import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import logo from '../images/logo1.png'

function Copyright(props) {
return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="/" style={{textDecoration: 'none'}}>
        SmartLearnEnglishAcademy
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
    </Typography>
);
}

const theme = createTheme();

export default function SignUp() {
const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const 
    fName= data.get('firstName'),
    lName=data.get('lastName'),
    emails= data.get('email'),
    passwords= data.get('password');

    const data1 = {
        firstName : fName,
        lastName : lName,
        email : emails,
        password : passwords
    };
    fetch("http://localhost:3000/signup",{
        method:"POST",
        mode:"no-cors",
        body:JSON.stringify(data1),
        headers: {
            'Content-Type': 'application/json',
        },    'Accept':'*/*'
    })
    .then((data1)=>{
        console.log(data1)
    })
    .catch((err)=>{
        console.log(err);
    })
};

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
        <Avatar sx={{ m: 1, width: 100 ,height: 100 }} src={logo} />
        <Typography component="h1" variant="h5">
            Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
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
            
            
            </Grid>
            
            <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
            Sign Up
            </Button>
            <Button type="button" onClick={(e) => {
                e.preventDefault();
                window.location.href='http://google.com';
                }} 
                fullWidth variant="outlined" sx={{mt: 1,mb:1}}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' ,width: 30 ,height: 30 }}>
                    <GoogleIcon />
                </Avatar>
                Sign in with Google
            </Button>
        </Box>
        </Box>
        <Copyright sx={{ mt: 5 ,mb: 5}} />
    </Container>
    </ThemeProvider>
);
}