import React from 'react';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import DummyPage from './components/DummyPage';
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
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/vents">The Vortex</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/protected">Protected Page</NavLink>
          </li>
        </>
        <hr />
        <Switch>
          {/* <Route exact path="/" component={Landing Page} /> */}
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={DummyPage} /> 
          <Route path="/vents" component={Vents} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
