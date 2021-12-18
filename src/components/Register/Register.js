import React, { useState , useContext } from 'react';
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
import { Alert } from '@mui/material';
import Stack from '@mui/material/Stack';
import logo from '../images/logo1.png';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../App';

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


function SignUp() {
    const [response, setresponse] = useState("");
    const [error, seterror] = useState(false)
    const [success, setsuccess] = useState(false)
    const { dispatch } = useContext(UserContext);
    // const history = useHistory();
    
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
    fetch("https://temptemp132323232.herokuapp.com/signup-email",{
        method: 'POST', // or 'PUT'
        headers: {
            "Content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(data1),
        credentials:"include"
    })
    .then((data1)=>{
        // console.log(data1);
        if(data1.status===400){
            seterror(true);
        }else if(data1.status===200){
            dispatch({type:"USER",payload:true})
            setsuccess(true);
        }
        return data1.text()
    })
    
    .then((data)=>{
        // response=data;
        setresponse(data);
    
    })
    .catch((err)=>{
        console.log(err.message)
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
    return (<Redirect to = "/" />);
    }
return (
    <>
    
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
                id="lastName"
                label="Last Name"
                name="lastName"
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
            Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
            <Grid item>
                <Link href="/Signin" variant="body2">
                Already have an account? Sign in
                </Link>
            </Grid>
            </Grid>
        </Box>
        </Box>
        <Copyright sx={{ mt: 5 ,mb: 5}} />
    </Container>
    </ThemeProvider>
    </>
)
}

export default SignUp