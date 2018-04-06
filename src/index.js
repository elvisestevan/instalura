import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from "./components/Login";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";
import "./css/login.css";
import "./css/reset.css";
import "./css/timeline.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

ReactDOM.render(  
(
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/logout" component = {Logout} />
      <PrivateRoute path="/timeline" component={App} />      

      <Route path="/:login" component={App} />
    </Switch>
  </Router>    
), document.getElementById('root'));

