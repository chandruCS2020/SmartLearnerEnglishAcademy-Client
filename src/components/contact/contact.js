import React,{useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';
import './style.css';


const theme = createTheme();

export default function Contact() {
    const { register , reset , handleSubmit } = useForm();
    const [response, setresponse] = useState("");
    const [error, seterror] = useState(false)
    const [success, setsuccess] = useState(false)
const onSubmit = (data) => {

        fetch("https://temptemp132323232.herokuapp.com/Contact",{
        credentials: 'include', // It can be include, same-origin, omit
        method: 'POST', // or 'PUT'
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
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
        setresponse(data)
        reset();
    })
    .catch((err)=>{
        console.log(err);
    })
    console.log(data);
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


return (
    
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" >
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
                <h1 className="Section_head">Contact <span className="secondary-name">Form</span></h1>
                {/* <p className="Section_info">Life should serve up its feast of experience in a series of courses</p> */}
        </div>
            <Stack sx={{ width: '100%',mt:3 }} spacing={2}>
                {errorDiv}
            </Stack>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    {...register('name')}
                    autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    fullWidth
                    id="MobileNumber"
                    label="Mobile Number"
                    name="MobileNumber"
                    autoComplete="family-name"
                    {...register('mobile')}
                    type="tel"
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
                    {...register('email')}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="subject"
                    label="Subject"
                    id="Subject"
                    autoComplete="Subject"
                    {...register('subject')}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="contact-msg"
                        label="Message"
                        name="contact-msg"
                        rows={7}
                        variant="outlined"
                        {...register('message')}
                        multiline
                    />
                    </Grid>
                
                </Grid>
                
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 5 }}
                >
                Contact
                </Button>
            </Box>
            </Box>
        </Container>
    </ThemeProvider>
);
}