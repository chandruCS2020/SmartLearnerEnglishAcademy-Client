import * as React from 'react';
import { TextareaAutosize } from '@mui/base';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

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
    fetch("http://localhost:3000/signup-email",{
        credentials: 'include', // It can be include, same-origin, omit
        method: 'POST', // or 'PUT'
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data1)
    })
    .then((data1)=>{
        console.log(data1)
    })
    .catch((err)=>{
        console.log(err);
    })
};
const [value, setValue] = React.useState(2);
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
        <Typography component="h1" variant="h2">
            Feedback
        </Typography>
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
                    <TextareaAutosize
                    required
                    fullWidth
                    maxRows={10}
                    aria-label="maximum height"
                    placeholder="Enter Feedback"
                    name="feedback"
                    style={{ width:410,resize:'vertical',padding:'10px' }}
                    className="text-area-resize"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Rating
                    name="hover-feedback"
                    defaultValue={0} 
                    size="large"
                    value={value}
                    precision={0.5}
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