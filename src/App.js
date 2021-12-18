import './App.css';
import React,{ createContext , Fragment, useReducer } from 'react';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import emailVerify from './components/Register/emailVerify'
import Dashboard from './components/Dashboard/DashboardHeader/DashBaordHeader';
import Rookie from './components/Courses/Rookie/Rookie';
import Advanced from './components/Courses/Advanced/Advanced';
import Phonix from './components/Courses/Phonix/Phonix';
import Feedback from './components/Feedback/Feedback';
import ScrollToTops from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./components/images/arrow.svg";
import ScrollToTop from './components/ScrollButton/ScrollToTop';
import CoursesPath from './components/Courses/Course/CoursesPath';
import { initialState , reducer } from './components/reducer/UserReducer';
import IsloggedIn from './components/loggedIn/IsloggedIn';
import googleSignup from './components/Register/google-signup';
import About from './components/About/About';
import Whatsapp from './components/Chatbot/whatsapp/whatsapp';
import ContactHome from './components/contact/ContactHome';

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <>
      <UserContext.Provider value={{state,dispatch}}>
      <Router>
      <IsloggedIn />
        <ScrollToTop>
        <Switch>
          <Route path='/Dashboard/Admin' exact component={Dashboard} />
          <Route path='/signup-email' exact component={emailVerify} />
          <Route path='/Signin' exact component={SignIn} />
          <Route path='/Register' exact component={Register} />
          <Route path='/Feedback' exact component={Feedback} />
          <Route path='/Google-oauth-signup' exact component={googleSignup} />
          
          <React.Fragment>
          <div>
            <Navbar />
            <Route path='/' exact component={Home} />
            <Route path='/Courses/Phonix' exact component={Phonix} />
            <Route path='/Courses/Advanced' exact component={Advanced} />
            <Route path='/Courses/Rookie' exact component={Rookie} />
            <Route path='/Courses' exact component={CoursesPath} />
            <Route path='/Contact' exact component={ContactHome} />
            <Route path='/About' exact component={About} />
            <Whatsapp />
            <Footer />
          </div>
          </React.Fragment>
        </Switch>
        
        <ScrollToTops smooth style={{backgroundColor:'#002347',padding:'3px'}} component={<MySVG />} />
        
        </ScrollToTop>
        
    </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
