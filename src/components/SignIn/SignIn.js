import React , { useContext, useState } from 'react';
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
import { Redirect, useHistory } from 'react-router-dom';
import { Alert } from '@mui/material';
import Stack from '@mui/material/Stack';
import { UserContext } from '../../App';
import axios from'axios';

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
    const { dispatch } = useContext(UserContext);
    const [response, setresponse] = useState("");
    const [error, seterror] = useState(false);
    const history = useHistory();
const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const 
    emails= data.get('email'),
    passwords= data.get('password');

    const data1 = {
        email : emails,
        password : passwords
    };
    axios("https://testapic.herokuapp.com/login-email",{
        method:"POST",
        data:JSON.stringify(data1),
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials:true,
    })
    .then((data1)=>{
        console.log(data1);
        if(data1.status=== 200){
            dispatch({type:"USER",payload:true});
            window.location.href="https://testapic.herokuapp.com/setCookie/"+data1.data;
            if(data1.data==='admin'){
                history.push("/Dashboard/Admin")
            }
            setresponse(data);
        }
    })
    .catch((err)=>{
        seterror(true);
        setresponse("Invalid Credentials");
    })
};
var errorDiv;
    if(error){
        errorDiv= <Alert variant="outlined" className="Message" severity="error">
                    {response}
                </Alert>
    }
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
            Sign In
        </Typography>
        <Stack sx={{ width: '100%',mt:3 }} spacing={2}>
            {errorDiv}
        </Stack>
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
            <Grid item xs={12}>
                <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                />
            </Grid>
            
            </Grid>
            
            <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
            Sign in 
            </Button>
            <Button type="button" onClick={(e) => {
                e.preventDefault();
                axios
                .get("https://testapic.herokuapp.com/google-auth-login", {
                    crossDomain: true
                })
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
            <Grid container justifyContent="flex-end">
            <Grid item>
                <Link href="/signup-email" variant="body2">
                    Create New Account
                </Link>
            </Grid>
            </Grid>
        </Box>
        </Box>
        <Copyright sx={{ mt: 5 , mb:5}} />
    </Container>
    </ThemeProvider>
);
}