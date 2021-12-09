import './App.css';
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
import Courses from './components/Courses/index';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
        <Switch>
          <Route path='/Dashboard' exact component={Dashboard} />
          <Route path='/signup-email' exact component={emailVerify} />
          <Route path='/Signin' exact component={SignIn} />
          <Route path='/Register' exact component={Register} />
          <Route path='/Feedback' exact component={Feedback} />
          <div>
            <Navbar />
            <Route path='/' exact component={Home} />
            <Route path='/Courses/Phonix' exact component={Phonix} />
            <Route path='/Courses/Advanced' exact component={Advanced} />
            <Route path='/Courses/Rookie' exact component={Rookie} />
            <Route path='/Courses' exact component={Courses} />
            <Footer />
          </div>
        </Switch>
        
        <ScrollToTops smooth color="#87ceeb" component={<MySVG />} />
        </ScrollToTop>
    </Router>
    </>
  );
}

export default App;
