import './App.css';
import Register from './Register/Register';
import SignIn from './SignIn/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/Register' exact component={Register} />
          <Route path='/Signin' exact component={SignIn} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
