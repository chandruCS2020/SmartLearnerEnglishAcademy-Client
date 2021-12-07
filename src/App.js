import './App.css';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollButton from './components/ScrollButton/ScrollButton';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact component={Home} />
          <Route path='/Register' exact component={Register} />
          <Route path='/Signin' exact component={SignIn} />
        </Switch>
        <Footer />
        <ScrollButton />
    </Router>
    </>
  );
}

export default App;
