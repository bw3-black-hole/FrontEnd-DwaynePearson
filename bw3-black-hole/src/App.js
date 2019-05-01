import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Notfound from './components/notfound';
import Vents from './components/Vents';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <>
          <li>
            <NavLink exact activeClassName="active" to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/sign-up">Sign Up</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/vents">The Vortex</NavLink>
          </li>
        </>
        <hr />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <PrivateRoute exact path="/vents" component={Vents} /> 
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
