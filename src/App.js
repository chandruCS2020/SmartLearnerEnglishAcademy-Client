import './App.css';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollButton from './components/ScrollButton/ScrollButton';
import emailVerify from './components/Register/emailVerify'
import Dashboard from './components/Dashboard/DashboardHeader/DashBaordHeader';
import Rookie from './components/Courses/Rookie/Rookie';
import Advanced from './components/Courses/Advanced/Advanced';
import Phonix from './components/Courses/Phonix/Phonix';
function App() {
  return (
    <>
      <Router>
        
        <Switch>
          <Route path='/Dashboard' exact component={Dashboard} />
          <Route path='/Register-email-verify' exact component={emailVerify} />
          <Route path='/Signin' exact component={SignIn} />
          <Route path='/Register' exact component={Register} />
          <div>
            <Navbar />
            <Route path='/' exact component={Home} />
            <Route path='/Courses/Phonix' exact component={Phonix} />
            <Route path='/Courses/Advanced' exact component={Advanced} />
            <Route path='/Courses/Rookie' exact component={Rookie} />
            <Footer />
          </div>
        </Switch>
        
        <ScrollButton />
    </Router>
    </>
  );
}

export default App;
