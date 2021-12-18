
    import React,{ useContext } from 'react';
    import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
    import CssBaseline from '@mui/material/CssBaseline';
    import Box from '@mui/material/Box';
    import MuiAppBar from '@mui/material/AppBar';
    import Toolbar from '@mui/material/Toolbar';
    import Typography from '@mui/material/Typography';
    import Container from '@mui/material/Container';
    import Grid from '@mui/material/Grid';
    import Paper from '@mui/material/Paper';
    import Link from '@mui/material/Link';
    import RegisterTable from '../DashboardComponents/RegisterTable';
    import Countdetails from '../DashboardComponents/countDash';
    import FeedbackTable from '../DashboardComponents/feedbackTable';
    import ContactTable from '../DashboardComponents/contactTable';
    import { useHistory } from 'react-router-dom';

import { UserContext } from '../../../App'
import axios from 'axios';

    function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
            SmartLearnEnglishAcademy
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
    }

    const drawerWidth = 240;

    const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `100%`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    }));


    const mdTheme = createTheme();

    function DashboardContent() {
        const history = useHistory();
        const { dispatch} = useContext(UserContext);

    return (
        <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute">
            <Toolbar
                sx={{
                pr: '24px', // keep right padding when drawer closed
                }}
            >
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    Dashboard
                </Typography>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{cursor:'pointer'}}
                    onClick={(e)=>{
                        e.preventDefault();
                        axios
                        .get("https://temptemp132323232.herokuapp.com/logout",{ withCredentials: true })
                        .then(response => {
                            if(response.status===200){
                                dispatch({type:"USER",payload:false});
                                history.push("/");
                            }else{
                                dispatch({type:"USER",payload:true});
                            }
                        })
                        .catch(error => {
                        console.log("check login error",error);
                        });
                        
                    }}
                >
                    Logout
                </Typography>
            </Toolbar>
            </AppBar>

            <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
            >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                <Grid item xs={12} md={5} lg={4}>
                    <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                    >
                        <Typography 
                        component="h1"  
                        variant="h6" 
                        sx={{mb:1.5}}>
                            Stats
                        </Typography>
                        <Countdetails />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={7} lg={8}>
                    
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' ,height: 307}}>
                    <Typography 
                    component="h1"  
                    variant="h6" 
                    sx={{mb:3}}>
                        Register
                    </Typography>
                        <RegisterTable />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 500,
                    }}
                    >
                        <Typography 
                        component="h1"  
                        variant="h6" 
                        sx={{mb:3}}>
                            Feedback
                        </Typography>
                        <FeedbackTable />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 500,
                    }}
                    >
                        <Typography 
                        component="h1"  
                        variant="h6" 
                        sx={{mb:3}}>
                            Contact
                        </Typography>
                        <ContactTable />
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                
                </Grid>
                <Copyright sx={{ pt: 4 }} />
            </Container>
            </Box>
        </Box>
        </ThemeProvider>
    );
    }

    export default function Dashboard() {
    return <DashboardContent />;
    }
