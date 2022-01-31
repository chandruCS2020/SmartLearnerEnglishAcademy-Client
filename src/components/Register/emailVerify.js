import React , { useState }from 'react';
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
import logo from '../images/logo1.png';
import axios from 'axios';
import { Alert } from '@mui/material';
import Stack from '@mui/material/Stack';

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
    
    const [success, setsuccess] = useState(false);
    const [emailValue, setemailValue] = useState("");
    const [response, setresponse] = useState('');
    const [error, seterror] = useState(false);
const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue))
    {
        const 
        emails= data.get('email');
        fetch("https://testapic.herokuapp.com/signup-email?email="+emails,{
            method:"GET",
            mode:"no-cors"
        })
        .then((data1)=>{
            setsuccess(true);
            console.log(data1);
        })
        .catch((err)=>{
            setsuccess(false);
        })
        setresponse("Verification Link has sent to Mail");
    }else if(emailValue===''){
        seterror(true);
        setresponse("You can't leave empty");
    }
    else{
        seterror(true)
        setresponse("Enter Valid Email Address")
    }
    
};
var errorDiv;
    if(success){
        errorDiv= <Alert variant="outlined" className="Message" severity="success">
                    {response}
                </Alert>
    }else if(error){
        errorDiv= <Alert variant="outlined" className="Message" severity="error">
                    {response}
                </Alert>
    }

return (
    
    <ThemeProvider theme={theme} >
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
                    <Stack sx={{ mt:0 ,mb:2}} spacing={2}>
                        {errorDiv}
                    </Stack>
                </Grid>
            <Grid item xs={12}>
                <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>{setemailValue(e.target.value)}}
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
                axios
                .get("https://testapic.herokuapp.com/google-auth-signup")
                .then(response =>{
                    console.log(response.data)
                    window.location.href=response.data;
                })
                }} 
                fullWidth variant="outlined" sx={{mt: 1,mb:1}}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' ,width: 30 ,height: 30 }}>
                    <GoogleIcon />
                </Avatar>
                Sign in with Google
            </Button>
            <Grid container justifyContent="space-between">
            <Grid item>
                    <Link href="/" variant="body2">
                        Back to Home
                    </Link>
                </Grid>
            <Grid item>
                <Link href="/Signin" variant="body2">
                Already have an account
                </Link>
            </Grid>
            </Grid>
        </Box>
        </Box>
        <Copyright sx={{ mt: 5 ,mb: 5}} />
    </Container>
    </ThemeProvider>
);
}